# 근거 목록

지도(`map.md`)의 「국내 근거」·「글로벌 비교」 id가 가리키는 공식 출처다. 항목마다 정식 명칭, 실제로 읽은 공식 URL, 조회일, 그때 확인한 조문·수치가 있다. 이 목록은 어디를 열지 알려 주는 지도다. 튜터는 조문 번호·수치를 학습자에게 말하기 전에 **항상** 그 출처를 세션 중에 다시 연다([tutor/law-and-sources.md](../tutor/law-and-sources.md)). 「변동」 줄은 특히 자주 바뀌는 값이다.

## 허용 도메인

출처 줄의 URL은 아래 도메인(과 그 하위 도메인)만 쓴다. 이 목록 밖의 페이지는 공식 주소를 찾는 실마리로만 쓴다.

- 국내 법령·감독·발행 기관: `law.go.kr` `fsc.go.kr` `fss.or.kr` `nts.go.kr` `bok.or.kr` `moef.go.kr` `krx.co.kr` `ftc.go.kr` `kdi.re.kr`
- 미국: `sec.gov` `ecfr.gov` `uscode.house.gov` `govinfo.gov` `irs.gov` `federalreserve.gov` `treasury.gov` `delaware.gov`
- EU·영국·일본: `europa.eu` `legislation.gov.uk` `gov.uk` `e-gov.go.jp`
- 국제기구: `bis.org` `oecd.org`
- 기준 제정 단체(그 단체가 만든 기준·서식에만): `ifrs.org` `coso.org` `iso.org` `cfainstitute.org` `treasurers.org` `ycombinator.com`

## 세션 중 확인하는 법

2026-11-14 `claude -p` WebFetch로 실측한 방법이다. 브라우저 자동화는 쓰지 않는다.

**국내 법령(law.go.kr)**
1. 항목의 URL(`https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=…&efYd=…`)을 WebFetch로 연다. 이 형식만 조문 본문이 읽힌다. `/법령/<법령명>`이나 `lsInfoP.do`는 겉틀만 오고 본문이 비어 있다.
2. 큰 법(자본시장법·법인세법 등)은 한 번에 앞 10만 자만 읽힌다. 찾는 조문이 없으면 `offset`을 10만 자씩 늘려 다시 읽는다.
3. 현행인지 확인한다: `https://www.law.go.kr/법령/<법령명 띄어쓰기 없이>`를 WebFetch로 열면 본문은 없지만 머리에 현행 「시행 YYYY. M. D.」와 「법률 제N호」가 보인다. 항목 「명칭」 줄의 번호와 같으면 1의 본문이 현행이다.
4. 번호가 다르면 개정된 것이다. 1의 본문은 개정 전 본문이므로 그 수치를 현행으로 말하지 않는다. 「조회일 이후 개정됐어요. 국가법령정보센터에서 현행 조문을 직접 확인해 주세요」라고 말하고, 학습자가 붙여 넣은 현행 조문으로 이어 간다.

**국내 기관 자료**: 항목 URL을 그대로 연다. 한국거래소 데이터처럼 로그인이 필요한 곳은 학습자가 직접 열어 숫자를 붙여 넣는다.

**글로벌**: 항목 URL을 그대로 연다(조회일에 실제로 읽힌 주소다). 열리지 않으면 같은 기관의 대체 경로를 쓴다.
- 미국 연방규정: `https://www.ecfr.gov/current/title-<n>/section-<n>`
- 미국 법률: `https://uscode.house.gov/` 또는 `https://www.govinfo.gov/`
- EU 법령: EUR-Lex가 막히면 `https://publications.europa.eu/resource/cellar/…` 원문
- OECD·BIS: 보고서 PDF 원문

## 국내 근거

### KR-BOKACT
- 명칭: 한국은행법(법률 제21065호, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=276153&efYd=20260102 (조회 2026-11-14)
- 확인: 제28조(통화신용정책에 관한 의결) — 「금융통화위원회는 통화신용정책에 관한 다음 각 호의 사항을 심의ㆍ의결한다」(제1호~제20호; 예: 제3호 「한국은행의 금융기관에 대한 재할인 또는 그 밖의 여신업무(與信業務)의 기준 및 이자율」, 제6호 공개시장 국채 등 매매·대차). 설치 근거는 제12조(설치) 「한국은행에 정책결정기구로서 금융통화위원회를 둔다」. 법률 본문에 「기준금리」라는 낱말은 없다. 기준금리 결정은 제28조의 통화신용정책 의결 사항으로만 읽힌다.

### KR-CMA-PERIODIC
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제159조(사업보고서 등의 제출) — 사업보고서 제출대상법인은 「각 사업연도 경과 후 90일 이내에 금융위원회와 거래소에 제출」. 제160조(반기ㆍ분기보고서의 제출) — 반기(6개월간)·분기(3개월간·9개월간) 보고서를 「그 기간 경과 후 45일 이내에」 제출(연결 기준 최초 사업연도 등은 60일 이내 특례). 관련: 제163조(사업보고서등의 공시), 제165조(사업보고서등의 제출에 관한 특례).
- 변동: 제출기한(90일·45일)

### KR-CMA-DEF
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제3조(금융투자상품), 제4조(증권), 제5조(파생상품), 제6조(금융투자업). 제3조① 「“금융투자상품”이란 이익을 얻거나 손실을 회피할 목적으로 … 금전등을 지급하기로 약정함으로써 취득하는 권리로서」 투자성(원본손실 가능성)이 있는 것. 그 밖의 용어는 제9조(그 밖의 용어의 정의).

### KR-CMA-REG
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제119조(모집 또는 매출의 신고) — 모집·매출(총액이 「대통령령으로 정하는 금액 이상인 경우에 한한다」)은 신고서를 금융위원회에 제출해 수리되지 않으면 할 수 없다. 제123조(투자설명서의 작성ㆍ공시), 제124조(정당한 투자설명서의 사용). 신고서 미제출 모집·매출의 공시는 제130조(신고서를 제출하지 아니하는 모집ㆍ매출). 「50인」은 법 제9조⑦(모집)·⑨(매출) 「대통령령으로 정하는 방법에 따라 산출한 50인 이상의 투자자」.
  시행령: 자본시장과 금융투자업에 관한 법률 시행령(대통령령 제36823호, 시행 2026-11-13), https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=291669&efYd=20261113 — 제11조(증권의 모집ㆍ매출)① 50인 산출 시 「청약의 권유를 하는 날 이전 6개월 이내에」 같은 종류 증권의 사모 권유 대상자를 합산. 제120조(모집 또는 매출의 신고대상)①제1호 — 모집·매출가액과 「과거 1년 동안 이루어진 증권의 모집 또는 매출로서 그 신고서를 제출하지 않은 모집가액 또는 매출가액 … 각각의 합계액이 30억원 이상인 경우」 신고서 제출(제2호 제11조 합산 시도 「30억원 이상」; 제3호 투자계약증권 등은 금액 무관). 제120조는 2026. 7. 28. 개정 이력이 있다. 소액공모 조치는 시행령 제137조(신고서를 제출하지 아니하는 모집ㆍ매출).
  오해 주의: 소액공모 기준을 「10억원」으로 알고 있는 경우가 많지만 현행 기준은 「30억원」(이상이면 신고)이다. 「50인」을 셀 때의 합산 기간은 6개월이다.
- 변동: 신고 면제 기준 금액(30억원), 50인·6개월 합산

### KR-CMA-TREASURY
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제165조의3(자기주식 취득 및 처분의 특례) — 주권상장법인은 「상법」 제341조제1항 방법 또는 신탁계약 해지·종료 시 반환받는 방법으로 취득 가능, ② 취득가액 총액은 「「상법」 제462조제1항에 따른 이익배당을 할 수 있는 한도 이내」, ③ 이사회 결의로 취득 가능, ④ 요건·방법은 대통령령.
- 변동: 취득 한도·요건(시행령)

### KR-CMA-OTC
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제166조의2(장외파생상품의 매매 등)①제1호 — 상대방이 일반투자자이면 「그 일반투자자가 대통령령으로 정하는 위험회피 목적의 거래를 하는 경우에 한할 것」(시행령 제186조의2(위험회피목적 거래), 같은 시행령 URL https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=291669&efYd=20261113). 그 밖에 위험액 한도(제2호), 「100분의 150」 미달 시 신규매매 중지(제3호), 월별 거래내역 「다음 달 10일까지」 보고(제5호), 신규 상품 협회 사전심의(제6호).
  주권상장법인 관련 규정은 제166조의2가 아니라 법 제9조⑤제4호 「주권상장법인. 다만, 금융투자업자와 장외파생상품 거래를 하는 경우에는 전문투자자와 같은 대우를 받겠다는 의사를 금융투자업자에게 서면으로 통지하는 경우에 한한다」에 있다. 즉 통지하지 않은 주권상장법인은 장외파생상품 거래에서 일반투자자로 다뤄져 제166조의2①제1호가 적용된다.

### KR-CMA-INSIDER
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제174조(미공개중요정보 이용행위 금지) — 내부자 등(해당하지 않게 된 날부터 「1년이 경과하지 아니한 자를 포함」)의 상장법인(「6개월 이내에 상장하는 법인」 등 포함) 미공개중요정보 이용 금지. 배상책임은 제175조(미공개중요정보 이용행위의 배상책임).

### KR-FSCACT
- 명칭: 금융위원회의 설치 등에 관한 법률(법률 제22045호, 시행 2026-10-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290241&efYd=20261002 (조회 2026-11-14)
- 확인: 제17조(금융위원회의 소관 사무) — 「금융위원회의 소관 사무는 다음 각 호와 같다」. 제24조(금융감독원의 설립)① 「금융위원회나 증권선물위원회의 지도ㆍ감독을 받아 금융기관에 대한 검사ㆍ감독 업무 등을 수행하기 위하여 금융감독원을 설립한다」.

### KR-BANKACT
- 명칭: 은행법(법률 제21296호, 시행 2026-07-01)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=282001&efYd=20260701 (조회 2026-11-14)
- 확인: 제2조(정의)①제1호 — 「“은행업”이란 예금을 받거나 유가증권 또는 그 밖의 채무증서를 발행하여 불특정 다수인으로부터 채무를 부담함으로써 조달한 자금을 대출하는 것을 업(業)으로 하는 것을 말한다」.

### KR-VIA
- 명칭: 벤처투자 촉진에 관한 법률(법률 제21287호, 시행 2026-07-01)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=281983&efYd=20260701 (조회 2026-11-14)
- 확인: 제2조(정의)제1호라목 — 「“투자”란」의 한 형태로 「투자금액의 상환만기일이 없고 이자가 발생하지 아니하는 계약으로서 중소벤처기업부령으로 정하는 요건을 충족하는 조건부지분인수계약의 체결」. 본문에서 「조건부지분인수」는 이 1곳뿐이고, 용어 자체를 따로 정의하는 호는 없다. 세부 요건은 중소벤처기업부령(시행규칙, 이번에 열지 않음). 같은 호 마목에 「조건부지분전환계약」도 있다.

### KR-FCPA
- 명칭: 금융소비자 보호에 관한 법률(법률 제21065호, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=277247&efYd=20260102 (조회 2026-11-14)
- 확인: 제17조(적합성원칙)① 금융상품판매업자등은 상대방이 「일반금융소비자인지 전문금융소비자인지를 확인하여야 한다」. 제18조(적정성원칙)① 「대통령령으로 각각 정하는 보장성 상품, 투자성 상품 및 대출성 상품에 대하여 일반금융소비자에게 계약 체결을 권유하지 아니하고」 판매 계약을 체결하려면 미리 면담·질문 등으로 정보를 파악해야 한다.

### KR-CIT-DEPR
- 명칭: 법인세법(법률 제21217호, 시행 2026-07-01)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=280349&efYd=20260701 (조회 2026-11-14)
- 확인: 제23조(감가상각비의 손금불산입) — 감가상각비를 손비로 계상한 경우 「상각범위액」의 범위에서 손금에 산입하고, 「상각범위액을 초과하는 금액은 손금에 산입하지 아니한다」.

### KR-CIT-RATE
- 명칭: 법인세법(법률 제21217호, 시행 2026-07-01)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=280349&efYd=20260701 (조회 2026-11-14)
- 확인: 제55조(세율) 제1항제1호 — 「2억원 이하 과세표준의 100분의 10」, 「2억원 초과 200억원 이하 2천만원 + (2억원을 초과하는 금액의 100분의 20)」, 「200억원 초과 3천억원 이하 39억8천만원 + (… 100분의 22)」, 「3천억원 초과 655억8천만원 + (… 100분의 25)」. 제1항제2호(제60조의2제1항제1호 해당 내국법인)는 200억원 이하 100분의 20부터 시작. 제55조 <개정 2024. 12. 31., 2025. 12. 23.>, 부칙<법률 제21217호> 제1조 「2026년 1월 1일부터 시행」, 제5조 「이 법 시행 이후 개시하는 사업연도의 소득」부터 적용 — 즉 2026-01-01 이후 개시 사업연도부터 10·20·22·25%.
- 변동: 법인세율(2025-12-23 개정으로 구간별 1%p 인상, 2026 사업연도부터)

### KR-CIT-NOL
- 명칭: 법인세법(법률 제21217호, 시행 2026-07-01)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=280349&efYd=20260701 (조회 2026-11-14)
- 확인: 제13조(과세표준) 제1항 — 이월결손금은 「각 사업연도의 개시일 전 15년 이내에 개시한 사업연도에서 발생한 결손금」, 공제 한도는 「각 사업연도 소득의 100분의 80[「조세특례제한법」 제6조제1항에 따른 중소기업 … 회생계획을 이행 중인 기업 등 대통령령으로 정하는 법인의 경우는 100분의 100]」(<개정 2020. 12. 22., 2022. 12. 31.>).
- 변동: 이월공제 기간 15년, 일반법인 한도 80%

### KR-STTA-INVEST
- 명칭: 조세특례제한법(법률 제21467호, 시행 2026-09-18)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=284389&efYd=20260918 (조회 2026-11-14)
- 확인: 제24조(통합투자세액공제) — 기본공제율(제1항제2호가목): 일반 자산 「중소기업 100분의 10」·중견기업 「100분의 5」·그 밖 「100분의 1」; 신성장사업화시설 등 중소 12%·중견 6%·그 밖 3%; 국가전략기술(「2029년 12월 31일까지 투자」) 중소 25%·그 밖 15%; 반도체 국가전략기술 중소 30%·그 밖 20%. 추가공제: 직전 3년 연평균 초과분의 「100분의 10」(한도 기본공제의 2배). 제24조 <개정 … 2024. 12. 31., 2025. 3. 14.>.
- 변동: 공제율·국가전략기술 투자기한(2029-12-31)

### KR-LCITA-THINCAP
- 명칭: 국제조세조정에 관한 법률(법률 제21215호, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=280389&efYd=20260102 (조회 2026-11-14)
- 확인: 제22조(출자금액 대비 과다차입금 지급이자의 손금불산입) 제2항 — 국외지배주주 관련 차입금이 「해당 국외지배주주가 출자한 출자금액의 2배를 초과하는 경우에는 그 초과분에 대한 지급이자 및 할인료」는 손금불산입, 제3항 업종별 배수는 대통령령. 시행령(대통령령 제36128호, 시행 2026-02-27, https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=283629&efYd=20260227) 제50조(업종별 배수) ① 「금융업에 적용하는 … 차입금의 배수는 6배로 한다」. 관련: 제24조(소득 대비 과다 지급이자의 손금불산입), 제26조(적용 순서).
- 변동: 배수 2배(금융업 6배)

### KR-LCITA-GMT
- 명칭: 국제조세조정에 관한 법률(법률 제21215호, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=280389&efYd=20260102 (조회 2026-11-14)
- 확인: 제5장 글로벌최저한세의 과세(제60조~제86조, <신설 2022. 12. 31.>) — 제72조(소득산입규칙의 적용), 제73조(소득산입보완규칙의 적용), 제73조의2~제73조의7(내국추가세액 계산·과세, 제73조의6(내국추가세액 계산)). 시행 시기: 부칙<법률 제19191호, 2022. 12. 31.> 제1조제1호 제5장(제73조 등 제외) 「2024년 1월 1일」, 제2호 제73조(소득산입보완규칙) 등 「2025년 1월 1일」, 제6조 시행일 「이후 개시하는 사업연도분」부터 적용. 부칙<법률 제21215호, 2025. 12. 23.> 제1조 「2026년 1월 1일부터 시행」, 제3조 제73조의2~제73조의7(내국추가세액) 등은 「이 법 시행 이후 개시하는 사업연도분」부터 적용.
- 변동: IIR 2024·UTPR 2025·내국추가세액(QDMTT) 2026 개시 사업연도부터

### KR-NFA-PREFEAS
- 명칭: 국가재정법(법률 제21419호, 시행 2026-09-11)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=283845&efYd=20260911 (조회 2026-11-14)
- 확인: 제38조(예비타당성조사) 제1항 — 「기획예산처장관은 총사업비가 500억원 이상이고 국가의 재정지원 규모가 300억원 이상인 신규 사업」으로서 건설공사 포함 사업, 지능정보화 사업, 사회복지 등 분야 사업(제4호는 중기사업계획서상 재정지출 500억원 이상)에 대해 예비타당성조사 실시(<개정 … 2025. 10. 1., 2026. 2. 10.>). 제1항제3호(종전 국가연구개발사업)는 「삭제 <2026. 2. 10.>」. 주관 장관이 「기획예산처장관」으로 바뀌어 있다.
- 변동: 대상 규모(총사업비 500억원·국고 300억원 그대로), 국가연구개발사업 제외(2026-02-10)

### KR-COMM-NEWSHARE
- 명칭: 상법(법률 제21044호, 시행 2026-09-10)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=273629&efYd=20260910 (조회 2026-11-14)
- 확인: 제416조(발행사항의 결정) — 회사 성립 후 주식 발행 시 정관에 규정이 없는 사항은 「이사회가 결정한다」(정관으로 주주총회 결정 가능).

### KR-COMM-BOND
- 명칭: 상법(법률 제21044호, 시행 2026-09-10)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=273629&efYd=20260910 (조회 2026-11-14)
- 확인: 제469조(사채의 발행) ① 「회사는 이사회의 결의에 의하여 사채(社債)를 발행할 수 있다.」

### KR-COMM-DIV
- 명칭: 상법(법률 제21044호, 시행 2026-09-10)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=273629&efYd=20260910 (조회 2026-11-14)
- 확인: 제462조(이익의 배당) ① 「회사는 대차대조표의 순자산액으로부터 다음의 금액을 공제한 액을 한도로 하여 이익배당을 할 수 있다.」

### KR-COMM-TREASURY
- 명칭: 상법(법률 제21044호, 시행 2026-09-10)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=273629&efYd=20260910 (조회 2026-11-14)
- 확인: 제341조(자기주식의 취득) — 취득가액 총액은 「직전 결산기의 대차대조표상의 순자산액에서 제462조제1항 각 호의 금액을 뺀 금액을 초과하지 못한다」. 소각 의무화 개정 있음: 제341조의4(자기주식의 소각의무 등) ① 「회사가 자기주식을 취득한 때에는 그 취득한 날부터 1년 이내에 소각하여야 한다」, ② 임직원 보상·우리사주 등 5개 사유로 「자기주식보유처분계획」을 주주총회 승인받으면 보유·처분 가능, ③ 매년 승인 [본조신설 2026. 3. 6.]; 제343조① 단서 자기주식은 「이사회의 결의로 소각할 수 있다」 <개정 2026. 3. 6.>. 개정법은 법률 제21448호(2026-03-06 공포) — 제개정문(https://www.law.go.kr/LSW/lsRvsDocListP.do?lsId=001702) 부칙 제1조 「공포한 날부터 시행한다」(즉 2026-03-06 시행; 다만 제542조의16(신탁계약에 의한 자기주식 취득 등) 등은 「2027년 1월 1일부터 시행」), 부칙 제2조 기존 직접취득 자기주식은 「이 법 시행일부터 6개월이 경과한 날」부터 1년 이내 소각, 제3조 상장회사 위반 과태료(제635조제3항제9호·제10호). 본문 머리에는 법률 제21044호로 표시되지만 이 URL 본문에 제341조의4가 들어 있다.
- 변동: 자기주식 소각 의무(2026-03-06 시행, 기존 보유분 경과조치), 신탁 취득 특례 2027-01-01

### KR-COMM-CLASS
- 명칭: 상법(법률 제21044호, 시행 2026-09-10)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=273629&efYd=20260910 (조회 2026-11-14)
- 확인: 제344조(종류주식) — 「이익의 배당, 잔여재산의 분배, 주주총회에서의 의결권의 행사, 상환 및 전환 등에 관하여 내용이 다른 종류의 주식」. 제345조(주식의 상환에 관한 종류주식) — 「회사의 이익으로써 소각할 수 있는 종류주식」. 제346조(주식의 전환에 관한 종류주식). 관련 제344조의2(이익배당, 잔여재산분배에 관한 종류주식), 제344조의3(의결권의 배제ㆍ제한에 관한 종류주식).

### KR-ECOS
- 명칭: 한국은행 경제통계시스템(ECOS)
- URL: https://ecos.bok.or.kr/ (조회 2026-11-14)
- 확인: 통계표 817Y002 「시장금리(일별)」에 국고채(1·3·5년 등) 수익률이 있다(단위 연%). 공개 API로도 받을 수 있다.

### KR-KRX
- 명칭: 한국거래소 KRX Data Marketplace(옛 정보데이터시스템)
- URL: https://data.krx.co.kr/contents/MDC/MAIN/main/index.cmd (조회 2026-11-14)
- 확인: 주가지수(KOSPI 등) 시세·구성종목·PER·PBR·배당수익률 메뉴가 있다. 2026년 회원제로 바뀌어 대부분 메뉴에 로그인이 필요하다. 학습자가 직접 내려받게 하고, 튜터가 대신 조회하지 않는다.
- 변동: 접근 방식(회원제)

### KR-DART
- 명칭: 금융감독원 전자공시시스템(DART)
- URL: https://dart.fss.or.kr/ (조회 2026-11-14)
- 확인: 상장회사 등의 사업보고서·감사보고서·주요사항보고서·증권신고서를 공개하는 금융감독원의 공시 시스템.

### KR-PIMAC
- 명칭: 기획재정부 「예비타당성조사 수행 총괄지침」(기획재정부훈령), KDI 공공투자관리센터 게시
- URL: https://pimac.kdi.re.kr/guide/nlaw_list.jsp (조회 2026-11-14)
- 확인: 게시본(2022-12-20 시행, 기획재정부훈령 제621호) 제50조(사회적 할인율) — 사회적 할인율 4.5%, 분석기간 30년 이상 철도·수자원 사업은 운영 30년 뒤 3.5%, 3년마다 조정 검토. 제55조 실질 재무적 할인율 4.5%. 지침이 2026-05-29 개정됐다는 공지는 있으나 개정본 원문은 아직 게시되지 않아 읽지 못했다.
- 변동: 사회적 할인율, 지침 개정
- 세션 중: 지침 본문이 첨부 파일이라 WebFetch로 열 수 없다. 학습자가 직접 내려받아 해당 조항을 붙여 넣게 하고, 튜터는 수치를 말하지 않는다.

### KR-KRXDISC
- 명칭: 한국거래소 「유가증권시장 공시규정」
- URL: https://rule.krx.co.kr/out/index.do (조회 2026-11-14)
- 확인: KRX 법무포털 > 업무규정 > 유가증권시장규정에 있다. 현행본 시행 2026-08-03. 제3절 공정공시 — 제15조(공정공시대상정보 등)~제20조(세부사항). 본문은 고정 링크가 없어 포털 URL과 규정명으로 인용한다.
- 변동: 규정 개정

### KR-CMA-MAJOR
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제161조(주요사항보고서의 제출) ① 사업보고서 제출대상법인은 각 호의 사실이 발생하면 「그 사실이 발생한 날의 다음 날까지」(제6호는 3일까지, 제9호는 다음 날과 납입기일 1주 전 중 먼저 오는 날까지) 주요사항보고서를 금융위원회에 제출한다. 제5호 「대통령령으로 정하는 경우에 해당하는 자본 또는 부채의 변동에 관한 이사회 등의 결정이 있은 때」, 제8호 「자기주식을 취득 … 또는 처분 … 할 것을 결의한 때」, 제9호 전환사채·교환사채·신주인수권부사채 발행 결정. ⑤ 금융위원회는 제출된 보고서를 거래소에 지체 없이 송부한다.
- 변동: 제출 기한

### KR-CMA-CROWD
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제117조의10(증권 모집의 특례) ① 「온라인소액투자중개의 방법으로 대통령령으로 정하는 금액 이하의 증권을 모집하는 경우에는 제119조 및 제130조를 적용하지 아니한다」. 시행령(https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=291669&efYd=20261113) 제118조의15(온라인소액투자중개를 통한 모집 시 증권의 발행한도) ① 모집가액과 「과거 1년 동안 이루어진 증권의 모집가액 … 각각의 합계액이 30억원 이하인 경우」, 「채무증권의 합계액은 15억원을 그 한도로 한다」.
- 변동: 모집 한도(시행령)

## 글로벌 비교 근거

### GL-H15
- 명칭: Board of Governors of the Federal Reserve System, Statistical Release H.15 Selected Interest Rates
- URL: https://www.federalreserve.gov/releases/h15/ (조회 2026-11-14)
- 확인: 미 국채 만기별 수익률(Treasury constant maturities, 명목 1개월~30년·물가연동 5~30년)을 매 영업일 공표한다.

### GL-IAS7
- 명칭: IFRS Foundation, IAS 7 Statement of Cash Flows
- URL: https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/ (조회 2026-11-14)
- 확인: 현금흐름을 영업활동(주요 수익 창출 활동)·투자활동(장기자산 취득·처분)·재무활동(자본·차입 규모와 구성 변동)으로 나눈다. IFRS 18에 따른 개정으로 간접법의 출발점과 이자·배당 현금흐름 분류가 바뀐다(적용 시기는 이 페이지에 없음).
- 변동: IFRS 18 시행에 따른 분류 변경

### GL-10K
- 명칭: U.S. Securities and Exchange Commission, Form 10-K (Annual Report pursuant to Section 13 or 15(d) of the Securities Exchange Act of 1934)
- URL: https://www.sec.gov/files/form10-k.pdf (조회 2026-11-14)
- 확인: 제출 기한은 사업연도 말 뒤 대형 가속 제출자 60일, 가속 제출자 75일, 그 밖 90일(일반 지침 A(2)).
- 변동: 제출 기한

### GL-SA33
- 명칭: Securities Act of 1933 §5 (15 U.S.C. §77e), Securities Exchange Act of 1934 §13 (15 U.S.C. §78m)
- URL: https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap2A-subchapI-sec77e.htm (조회 2026-11-14)
- URL: https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap2B-sec78m.htm (조회 2026-11-14)
- 확인: §5 — 증권에 대한 등록신고서가 효력을 갖지 않으면 그 증권을 주간 통상·우편으로 팔 수 없다. §13 — 등록 증권의 발행인은 정기보고서를 SEC에 제출한다. 미국 법전 2023년판 기준.

### GL-FSMA
- 명칭: UK Financial Services and Markets Act 2000, section 19 (The general prohibition)
- URL: https://www.legislation.gov.uk/ukpga/2000/8/section/19 (조회 2026-11-14)
- 확인: 인가받거나 면제된 사람이 아니면 영국에서 규제 대상 활동을 할 수 없다(「general prohibition」).

### GL-OECDTAX
- 명칭: OECD, Corporate Tax Statistics 2026 (8th edition)
- URL: https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/07/corporate-tax-statistics-2026_b8101038/73af6222-en.pdf (조회 2026-11-14)
- 확인: 각국 법인세율·세수·실효세율·R&D 지원 등을 매년 비교하는 OECD 통계, 2026년판이 8번째.
- 변동: 매년 개정

### GL-GREENBOOK
- 명칭: HM Treasury, The Green Book (2026) — 중앙정부 사업 평가 지침
- URL: https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government (조회 2026-11-14)
- URL: https://www.gov.uk/government/publications/green-book-discount-rate-review-2026/green-book-discount-rate-review-hm-treasury-response (조회 2026-11-14)
- 확인: 사회적 시간선호율(할인율)을 2026년 10월 개정으로 1~30년 3.50%→3.00%, 31~75년 3.00%→2.50%, 76~125년 2.50%→2.25%(실질)로 낮췄다. 순수 시간선호 0.5%는 유지. 예전 자료의 3.5%는 낡은 값이다.
- 변동: 할인율

### GL-OFWAT
- 명칭: Ofwat, PR24 final determinations: Aligning risk and return (2024-12); Competition and Markets Authority, Water PR24 References Final Determinations (2026-03-10)
- URL: https://www.ofwat.gov.uk/wp-content/uploads/2024/12/PR24-final-determinations-Aligning-risk-and-return-1.pdf (조회 2026-11-14)
- URL: https://assets.publishing.service.gov.uk/media/69c5136793cc6e8b87a6f71c/Final_decision_summary_and_volume_1.pdf (조회 2026-11-14)
- 확인: 영국 수도 규제기관이 정한 허용 수익률(규제 WACC)은 4.03%(실질, CPIH 기준). 이의를 제기한 5개사에는 CMA가 2026-03-10 4.20%로 다시 정했다(자기자본비용 5.10→5.70%, 실질 부채비용 3.15→2.97%). 규제기관이 자본비용을 「정하는」 사례.
- 변동: 규제 기간마다 재산정

### GL-BASEL
- 명칭: Basel Committee on Banking Supervision, The Basel Framework
- URL: https://www.bis.org/basel_framework/ (조회 2026-11-14)
- 확인: 은행 건전성 규제의 국제 기준 통합본. 장마다 시행일이 있고 2027-01-01·2028-01-01 시행 개정판이 예정돼 있다. 은행의 자본 규제가 기업 대출의 가격·조건에 닿는 경로를 비교할 때 쓴다.
- 변동: 장별 개정

### GL-EUPR
- 명칭: Regulation (EU) 2017/1129 (Prospectus Regulation), Regulation (EU) 2024/2809 (Listing Act)로 개정
- URL: http://publications.europa.eu/resource/celex/32017R1129.ENG (조회 2026-11-14)
- URL: http://publications.europa.eu/resource/celex/32024R2809 (조회 2026-11-14)
- 확인: 2026-06-05부터 EU 안 12개월 합산 모집액이 발행인당 1,200만 유로 미만이면 투자설명서 의무가 면제된다(회원국은 500만 유로를 택할 수 있음). 전에는 회원국이 800만 유로 이하에서 정하는 선택적 면제였다.
- 변동: 면제 기준 금액

### GL-REGD
- 명칭: SEC Regulation D Rule 506 (17 CFR 230.506), Regulation Crowdfunding (17 CFR 227.100)
- URL: https://www.ecfr.gov/current/title-17/chapter-II/part-230/section-230.506 (조회 2026-11-14)
- URL: https://www.sec.gov/resources-small-businesses/exempt-offerings/regulation-crowdfunding (조회 2026-11-14)
- 확인: Rule 506은 금액 제한 없는 사모 면제다. 506(b)는 권유 방식 제한이 있고 SEC 안내상 90일 동안 비적격 투자자 35명 이하, 506(c)는 일반 권유를 허용하는 대신 매수인 전원이 적격 투자자여야 한다. 크라우드펀딩은 12개월 합산 500만 달러 이하.
- 변동: 크라우드펀딩 한도

### GL-BEPS4
- 명칭: OECD/G20 BEPS Action 4, Limiting Base Erosion Involving Interest Deductions and Other Financial Payments — 2016 Update
- URL: https://www.oecd.org/content/dam/oecd/en/publications/reports/2016/12/limiting-base-erosion-involving-interest-deductions-and-other-financial-payments-action-4-2016-update_g1g745d0/9789264268333-en.pdf (조회 2026-11-14)
- 확인: 순이자비용을 EBITDA의 10~30% 범위에서 정한 고정비율로 제한하는 방식을 권고한다(선택적 그룹비율 규칙 포함).

### GL-163J
- 명칭: U.S. Internal Revenue Code §163(j) (26 U.S.C. §163(j)) — 사업 이자비용 공제 한도
- URL: https://www.govinfo.gov/content/pkg/USCODE-2024-title26/html/USCODE-2024-title26-subtitleA-chap1-subchapB-partVI-sec163.htm (조회 2026-11-14)
- URL: https://www.irs.gov/newsroom/questions-and-answers-about-the-limitation-on-the-deduction-for-business-interest-expense (조회 2026-11-14)
- 확인: 사업 이자비용 공제는 사업 이자수익 + 조정과세소득의 30% + 재고금융 이자까지. IRS 안내에 따르면 P.L. 119-21(One, Big, Beautiful Bill)로 2024-12-31 뒤 시작하는 과세연도부터 조정과세소득 계산에 감가상각 등을 다시 더한다(개정 법문은 직접 읽지 못함).
- 변동: 조정과세소득 정의

### GL-10B18
- 명칭: SEC Rule 10b-18 (17 CFR 240.10b-18) Purchases of certain equity securities by the issuer and others
- URL: https://www.ecfr.gov/current/title-17/section-240.10b-18 (조회 2026-11-14)
- 확인: 발행인의 자사주 매입에 시세조종 책임을 면하는 안전항을 준다. 조건 다섯 — 하루 한 중개인, 개장 첫 체결 매수 금지, 장 마감 직전 매수 금지(일평균 거래대금 100만 달러 이상이면서 유통시가 1억5천만 달러 이상인 증권은 마감 전 10분, 그 밖은 30분), 최고 독립 호가·직전 독립 체결가 이하, 일평균 거래량의 25% 이하.

### GL-DGCL170
- 명칭: Delaware General Corporation Law §170 (8 Del. C. §170) Dividends; payment; wasting asset corporations
- URL: https://delcode.delaware.gov/title8/c001/sc05/index.html (조회 2026-11-14)
- 확인: 이사회는 잉여금(surplus)에서, 잉여금이 없으면 당기·직전 사업연도 순이익에서 배당할 수 있다.

### GL-SAFE
- 명칭: Y Combinator, SAFE (Simple Agreement for Future Equity) financing documents
- URL: https://www.ycombinator.com/documents (조회 2026-11-14)
- 확인: 2018년 post-money SAFE로 표준을 바꿨다. 미국용은 가치 상한만·할인만·MFN 세 가지.

### GL-COSOERM
- 명칭: COSO, Enterprise Risk Management — Integrating with Strategy and Performance (2017)
- URL: https://www.coso.org/enterprise-risk-management (조회 2026-11-14)
- 확인: 2004년 ERM 체계를 2017년에 개정해 위험관리를 전략·성과와 묶었다.

### GL-DODDFRANK7
- 명칭: Dodd-Frank Wall Street Reform and Consumer Protection Act (Pub. L. 111-203), Title VII Wall Street Transparency and Accountability
- URL: https://www.govinfo.gov/content/pkg/PLAW-111publ203/html/PLAW-111publ203.htm (조회 2026-11-14)
- 확인: Title VII(Sec. 701 이하)이 장외 스왑 시장 규제(Subtitle A, Sec. 711 이하)를 둔다.

### GL-EMIR
- 명칭: Regulation (EU) No 648/2012 on OTC derivatives, central counterparties and trade repositories (EMIR)
- URL: http://publications.europa.eu/resource/celex/32012R0648 (조회 2026-11-14)
- 확인: EU의 장외파생상품·중앙청산소·거래정보저장소 규제, 시행 중(Publications Office 메타데이터 기준). 이후 개정(EMIR 3 등)은 확인하지 않았다.
- 변동: 개정 진행

### GL-10B5
- 명칭: SEC Rule 10b-5 (17 CFR 240.10b-5) Employment of manipulative and deceptive devices
- URL: https://www.ecfr.gov/current/title-17/chapter-II/part-240/subpart-A/section-240.10b-5 (조회 2026-11-14)
- 확인: 증권 매매와 관련한 사기적 수단·허위 진술을 금지하는 일반 조항. 미국 내부자거래 규율의 주된 근거로 쓰인다.

### GL-MAR
- 명칭: Regulation (EU) No 596/2014 on market abuse (Market Abuse Regulation)
- URL: http://publications.europa.eu/resource/celex/32014R0596 (조회 2026-11-14)
- 확인: 2003/6/EC 등 기존 지침을 대체한 EU의 시장남용(내부자거래·시세조종·내부정보 공시) 규정, 시행 중.

### GL-PILLAR2
- 명칭: OECD/G20 Inclusive Framework, Global Anti-Base Erosion Model Rules (Pillar Two)
- URL: https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/global-minimum-tax/pillar-two-model-rules-in-a-nutshell.pdf (조회 2026-11-14)
- URL: https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/global-minimum-tax/side-by-side-package.pdf (조회 2026-11-14)
- 확인: 2021-12-20 공개. 연결 매출 7억 5천만 유로 이상 다국적 그룹에 최저 실효세율 15%를 적용한다. 2026-01-05 승인된 Side-by-Side Package가 2026-01-01 이후 사업연도에 안전항을 더했다.
- 변동: 안전항·이행 지침

## 지도의 틀을 잡은 출처

### GL-CFA
- 명칭: CFA Institute, CFA Program Level I — Corporate Issuers(2026), Corporate Finance(2027 개편)
- URL: https://www.cfainstitute.org/programs/cfa-program/candidate-resources/level-i-exam (조회 2026-11-14)
- 확인: Level I 주제 중 기업재무가 6~9% 비중. 2027년 시험부터 「Corporate Issuers」를 「Corporate Finance」로 바꾼다.

### GL-ACT
- 명칭: Association of Corporate Treasurers, The ACT Competency Framework
- URL: https://www.treasurers.org/cpd-and-training/competency-framework/ (조회 2026-11-14)
- 확인: 자금관리 직무 역량을 business·behavioural·technical 세 영역으로 정리한 자금관리 전문 단체의 기준. 자금관리를 go-treasury로 나눈 근거의 하나.
