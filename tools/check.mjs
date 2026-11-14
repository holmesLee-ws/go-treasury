#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계, 근거 id(R10·R11), 졸업 산출물 구성(R12), 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교"];
// 공식 출처 도메인 허용 목록(정본, sources.md 머리에도 같은 목록). 하위 도메인 포함.
// 국내: 법령·감독·발행 기관. 글로벌: 입법·감독기관, 국제기구, 그 기준을 만든 기준 제정 기관(IFRS·COSO·ISO·CFA·ACT·SAFE를 만든 YC).
const DOMAINS = [
  "law.go.kr", "fsc.go.kr", "fss.or.kr", "nts.go.kr", "bok.or.kr", "moef.go.kr", "krx.co.kr", "ftc.go.kr", "kdi.re.kr",
  "sec.gov", "ecfr.gov", "uscode.house.gov", "govinfo.gov", "irs.gov", "federalreserve.gov", "treasury.gov", "delaware.gov",
  "europa.eu", "legislation.gov.uk", "gov.uk", "e-gov.go.jp",
  "bis.org", "oecd.org",
  "ifrs.org", "coso.org", "iso.org", "cfainstitute.org", "treasurers.org", "ycombinator.com",
];

function parseCurriculum(text) {
  const modules = new Map();
  const problems = [];
  const refs = [];
  const xblocks = [];
  const blocks = text.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(/^([BWKRFX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
    refs.push(...[fields["국내 근거"], fields["글로벌 비교"]].filter(Boolean).flatMap((v) => v.match(/\b(?:KR|GL)-[A-Z0-9-]+/g) || []).map((r) => [id, r]));
    if (id.startsWith("X")) xblocks.push(block);
    else if (fields["국내 근거"] && !/KR-/.test(fields["국내 근거"])) problems.push(`${id}: 국내 근거에 KR- id 없음`);
    if (!id.startsWith("X") && fields["글로벌 비교"] && !/GL-/.test(fields["글로벌 비교"])) problems.push(`${id}: 글로벌 비교에 GL- id 없음`);
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, problems, refs, xblocks };
}

function checkSources(text, refs) {
  const problems = [];
  const entries = new Map();
  for (const block of text.split(/^### /m).slice(1)) {
    const id = block.split("\n")[0].trim().split(/\s/)[0];
    entries.set(id, block);
    const urls = [...block.matchAll(/https?:\/\/([^\/\s)>]+)/g)].map((m) => m[1].toLowerCase());
    if (!urls.length) problems.push(`sources ${id}: URL 없음`);
    for (const h of urls) if (!DOMAINS.some((d) => h === d || h.endsWith("." + d))) problems.push(`sources ${id}: 허용 목록 밖 도메인 ${h}`);
    if (!/조회 \d{4}-\d{2}-\d{2}/.test(block)) problems.push(`sources ${id}: 「조회 YYYY-MM-DD」 없음`);
    if (!/^- 확인: /m.test(block)) problems.push(`sources ${id}: 「확인:」 줄 없음`);
  }
  for (const [mod, r] of refs) if (!entries.has(r)) problems.push(`${mod}: sources.md에 없는 근거 ${r}`);
  return problems;
}

function checkCapstone(xblocks) {
  const problems = [];
  if (!xblocks.length) problems.push("졸업 프로젝트 없음");
  for (const b of xblocks) {
    const items = [...b.matchAll(/^  - (.+)$/gm)].map((m) => m[1]);
    if (!items.length) problems.push("졸업 프로젝트: 산출물 목록 없음");
    for (const it of items) if (!/필수 구성: /.test(it) || !/판정 질문: .+\?/.test(it)) problems.push(`졸업 산출물에 필수 구성·판정 질문 없음: ${it.slice(0, 20)}`);
  }
  return problems;
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svg|png|jpe?g|gif|webp|avif)$/i.test(f) || (/\.m?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  return hits;
}

function main() {
  const { modules, problems, refs, xblocks } = parseCurriculum(read("curriculum/map.md"));
  errors.push(...problems);
  errors.push(...checkSources(read("curriculum/sources.md"), refs));
  errors.push(...checkCapstone(xblocks));
  const asm = read("tutor/assessment.md");
  for (const v of ["`experience`", "`framework`", "`both`", "\"basis\""]) if (!asm.includes(v)) errors.push(`tutor/assessment.md에 basis ${v} 정의·예시 없음`);
  const src = read("curriculum/sources.md");
  const how = (src.split("## 세션 중 확인하는 법")[1] || "").split("\n## ")[0];
  if (!how.trim() || /작성\)|\(확인 중\)|TODO/.test(how)) errors.push("sources.md 「세션 중 확인하는 법」이 비었거나 자리표시");
  const head = (src.split("## 허용 도메인")[1] || "").split("\n## ")[0];
  const listed = new Set([...head.matchAll(/`([a-z0-9.-]+\.[a-z]{2,})`/g)].map((m) => m[1]));
  for (const d of DOMAINS) if (!listed.has(d)) errors.push(`sources.md 「허용 도메인」에 ${d} 없음`);
  for (const d of listed) if (!DOMAINS.includes(d)) errors.push(`sources.md 「허용 도메인」의 ${d}가 check.mjs 목록에 없음`);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 파일 ${files.length}개 검사`);
}

main();
