# 근거 목록

지도(`map.md`)의 「국내 근거」·「글로벌 비교」 id가 가리키는 공식 출처다. 항목마다 정식 명칭, 실제로 읽은 공식 URL, 조회일, 그때 확인한 조문·수치가 있다. 이 목록은 어디를 열지 알려 주는 지도다. 튜터는 조문 번호·수치를 학습자에게 말하기 전에 **항상** 그 출처를 세션 중에 다시 연다([tutor/law-and-sources.md](../tutor/law-and-sources.md)). 「변동」 줄은 특히 자주 바뀌는 값이다. 확인 시점은 모든 항목이 2026-11-14다.

## 허용 도메인

출처 줄의 URL은 아래 도메인(과 그 하위 도메인)만 쓴다. 이 목록 밖의 페이지는 공식 주소를 찾는 실마리로만 쓴다.

- 국내 법령·감독·공공 기관: `law.go.kr` `scourt.go.kr` `fsc.go.kr` `fss.or.kr` `bok.or.kr` `moef.go.kr` `ftc.go.kr` `nts.go.kr` `kdic.or.kr` `ksure.or.kr` `kodit.or.kr` `kibo.or.kr` `kasb.or.kr`
- 국내 지급결제 기관(금융결제원과 그 운영 사이트) : `kftc.or.kr` `unote.kr` `cmsedi.or.kr`
- 국내 업권 단체(그 단체가 공시·제정한 것에만 — 은행연합회 COFIX·대출금리 공시): `kfb.or.kr`
- 미국: `federalreserve.gov` `newyorkfed.org` `ecfr.gov` `uscode.house.gov` `govinfo.gov` `treasury.gov` `cftc.gov` `sec.gov` `fdic.gov`
- EU·영국·일본: `europa.eu` `legislation.gov.uk` `gov.uk` `fca.org.uk` `e-gov.go.jp`
- 국제기구: `bis.org` `oecd.org`
- 기준 제정 단체(그 단체가 만든 기준·서식에만): `ifrs.org` `coso.org` `iso.org` `treasurers.org` `isda.org` `lma.eu.com` `iccwbo.org`

## 세션 중 확인하는 법

2026-11-14 실측한 방법이다. 브라우저 자동화는 쓰지 않는다.

**국내 법령(law.go.kr 법률·시행령)**
1. 항목의 URL(`https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=…&efYd=…`)을 WebFetch로 연다. 이 형식만 조문 본문이 읽힌다. `/법령/<법령명>`이나 `lsInfoP.do`는 겉틀만 오고 본문이 비어 있다.
2. 큰 법(자본시장법·채무자회생법 등)은 한 번에 앞부분만 읽힌다. 찾는 조문이 없으면 뒷부분을 다시 읽는다.
3. 현행인지 확인한다: `https://www.law.go.kr/법령/<법령명 띄어쓰기 없이>`를 WebFetch로 열면 본문은 없지만 머리에 현행 「시행 YYYY. M. D.」와 「법률 제N호」가 보인다. 항목 「명칭」 줄의 번호와 같으면 1의 본문이 현행이다.
4. 번호가 다르면 개정된 것이다. 1의 본문은 개정 전 본문이므로 그 수치를 현행으로 말하지 않는다. 「조회일 이후 개정됐어요. 국가법령정보센터에서 현행 조문을 직접 확인해 주세요」라고 말하고, 학습자가 붙여 넣은 현행 조문으로 이어 간다.

**국내 행정규칙(외국환거래규정 같은 고시)**
1. 항목의 URL(`https://www.law.go.kr/LSW/admRulInfoR.do?admRulSeq=…`)을 연다. 본문 머리에 「[시행 YYYY. M. D.] [○○고시 제N호 …]」가 있다. 외국환거래규정은 WebFetch로 약 25만 자다(2026-11-14 실측). `offset` 0에 제1장~제6장 앞부분(제4장 지급절차·제5장 지급방법 포함), `offset` 100000에 제6-3조~제10장(제7장 자본거래·제9장 해외직접투자 포함)이 읽힌다.
2. 현행 확인: `https://www.law.go.kr/행정규칙/<규칙명>`의 `admRulSeq` 값이 항목 URL과 같으면 현행이다. 다르면 새 고시가 나온 것이므로 법령의 4번처럼 말한다.
3. 고시를 낸 부처 이름이 바뀌었다(2025-10-01 정부조직 개편 이후 기획재정부 → 재정경제부). 조문 안의 옛 부처 이름은 개정 이력이다.

**판례**: law.go.kr 판례 본문(`LSW/precInfoR.do?precSeq=…`)을 연다. 사건번호는 원문 머리에서만 옮긴다.

**시장 수치(KR-ECOS)**: 한국은행 경제통계시스템 화면은 자바스크립트 전용이라 WebFetch로 읽히지 않는다. 공개 Open API의 시험용 키로 읽는다: `https://ecos.bok.or.kr/api/StatisticSearch/sample/json/kr/1/5/731Y001/D/<시작일 YYYYMMDD>/<끝일>/0000001`(원/미국달러 매매기준율), 시장금리는 통계표 `817Y002`. 시험용 키는 행 수가 적으므로 기간을 짧게 잡는다(2026-11-14 WebFetch로 일별 값이 읽힘을 실측). 읽히지 않으면 시장 수치를 가정으로 쓴다.

**국내 기관 자료**: 항목 URL을 그대로 연다. 금융결제원 대표 사이트(kftc.or.kr)는 자바스크립트 전용이라 운영 사이트(unote.kr 전자어음, cmsedi.or.kr CMS)를 연다. 로그인이 필요한 곳은 학습자가 직접 열어 숫자를 붙여 넣는다.

**글로벌**: 항목 URL을 그대로 연다(조회일에 실제로 읽힌 주소다). 열리지 않으면 같은 기관의 대체 경로를 쓴다.
- EU 법령: EUR-Lex가 막히면 `http://publications.europa.eu/resource/celex/<CELEX 번호>` 원문
- 미국 법률: uscode.house.gov가 안 되면 `https://www.govinfo.gov/` 의 같은 조문
- iso.org는 403이 나는 일이 많다. ISO 표준은 공개 범위(명칭·적용 범위)만 근거로 쓴다
- ISDA·LMA·ICC 표준 본문은 유료·회원 전용이다. 공개 소개 범위만 말하고 「본문은 확인하지 않았다」고 밝힌다

## 국내 근거

### KR-BOKACT
- 명칭: 한국은행법(법률 제21065호, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=276153&efYd=20260102 (조회 2026-11-14)
- 확인: 제28조(통화신용정책에 관한 의결) 「금융통화위원회는 통화신용정책에 관한 다음 각 호의 사항을 심의ㆍ의결한다」, 제3호 「한국은행의 금융기관에 대한 재할인 또는 그 밖의 여신업무(與信業務)의 기준 및 이자율」. 법률 본문에 「기준금리」라는 낱말은 없다. 기준금리 결정은 제28조의 통화신용정책 의결 사항으로 읽힌다.

### KR-FETA
- 명칭: 외국환거래법(법률 제21065호, 2025. 10. 1. 타법개정, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=276137&efYd=20260102 (조회 2026-11-14)
- 확인: 제3조(정의) ① 3호 "지급수단"(가. 정부지폐ㆍ은행권ㆍ주화ㆍ수표ㆍ우편환ㆍ신용장, 나. 대통령령으로 정하는 환어음ㆍ약속어음ㆍ그 밖의 지급지시, 다. 전자적 방법으로 재산적 가치가 입력된 것), 14호 "거주자"란 「대한민국에 주소 또는 거소를 둔 개인과 대한민국에 주된 사무소를 둔 법인」, 15호 "비거주자"란 「거주자 외의 개인 및 법인」(비거주자의 국내 지점ㆍ출장소 등은 거주자로 본다), 19호 "자본거래"(가. 예금ㆍ신탁ㆍ금전대차ㆍ채무보증ㆍ대외지급수단ㆍ채권 등 매매계약에 따른 채권의 발생ㆍ변경ㆍ소멸, 나. 증권 발행ㆍ취득, 다. 파생상품거래, 라. 해외/국내 부동산 취득, 마. 사무소 설치ㆍ운영 관련 자금 수수, 바. 유사 거래). 제15조(지급절차 등) ① 재정경제부장관은 환전절차ㆍ송금절차ㆍ재산반출절차 등을 정할 수 있음, ② 조약 이행ㆍ국제평화 기여 시 지급ㆍ수령 허가제. 제16조(지급 또는 수령의 방법의 신고) 1. 상계, 2. 재정경제부장관이 정하는 기간을 넘겨 결제, 3. 제3자 지급ㆍ수령, 4. 외국환업무취급기관등을 통하지 않은 지급ㆍ수령이면 「그 지급 또는 수령의 방법을 재정경제부장관에게 미리 신고」, 단서로 대통령령 거래는 사후보고ㆍ신고 면제 가능. 제18조(자본거래의 신고 등) ① 「자본거래를 하려는 자는 대통령령으로 정하는 바에 따라 재정경제부장관에게 신고」, 단서 사후보고ㆍ면제, ② 신고ㆍ신고수리는 제15조①의 절차 이전에 완료, ③ 해외직접투자ㆍ해외부동산은 신고수리 심사. 제32조(과태료) ① 「1억원 이하의 과태료」 — 1. 외국환업무 변경신고 위반, 2. 외국환중개업무 변경신고 위반, 3. 제16조 신고 없이(거짓 신고로) 지급ㆍ수령, 4. 제18조① 신고 없이(거짓 신고로) 자본거래, 5. 신고수리 거부에도 거래, 6. 변경 권고와 달리 거래. 참고로 ② 5천만원 이하(제15조① 지급절차 위반 등), ③ 3천만원 이하(신고를 갈음하는 사후 보고 미이행 등), ④ 1천만원 이하.
- 참고: 「경상거래」는 법 제3조에 "경상거래" 정의가 없고 법률 본문 전체에서도 이 낱말이 나오지 않는다. 시행령 제30조②제4호에 「건당 미화 1만달러 이하의 경상거래에 따른 대가」로만 나온다.
- 변동: 과태료 상한(제32조 ①1억원ㆍ②5천만원ㆍ③3천만원ㆍ④1천만원), 소관 부처명(2025. 10. 1. 개정으로 「재정경제부장관」)

### KR-FETA-ENF
- 명칭: 외국환거래법 시행령(대통령령 제36280호, 2026. 4. 28. 일부개정, 시행 2026-04-28)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285607&efYd=20260428 (조회 2026-11-14)
- 확인: 제8조(해외직접투자) ① 1. 외국법인 경영참가 목적 주식ㆍ출자지분의 투자비율이 「100분의 10 이상인 투자」, 2. 100분의 10 미만이면서 임원 파견, 「계약기간이 1년 이상인 원자재 또는 제품의 매매계약」, 기술 제공ㆍ도입ㆍ공동연구개발계약, 해외건설ㆍ산업설비공사 수주계약 중 하나의 관계를 수립, 3. 이미 투자한 외국법인 주식ㆍ지분 추가 취득, 4. 제1~3호로 투자한 거주자가 그 외국법인에 「상환기간을 1년 이상으로 하여 금전을 대여하는 것」. 제41조(과태료의 부과기준) 「법 제32조에 따른 과태료의 부과기준은 별표 4와 같다.」 별표 4(<개정 2025. 12. 30.>, PDF https://www.law.go.kr/LSW/flDownload.do?gubun=&flSeq=163849833&bylClsCd=110201) 구조: 일반기준은 2년 이내 재위반 시 「100분의 40 범위에서 가중」(법정 최고액 한도), 감경은 「100분의 50 범위」(합산해도 「100분의 75를 넘을 수 없다」; 자진신고, 중소기업, 잘못된 기관에 절차 이행, 자본거래 신고 위반이지만 지급ㆍ수령 없음 등). 개별기준: 제16조 신고 위반(자목)ㆍ제18조① 신고 위반(타목)은 외국환업무취급기관의 장에 대한 신고사항 위반이면 「100만원과 위반금액의 100분의 2 중 큰 금액」, 재정경제부장관ㆍ(금융위원회ㆍ금융감독원장)ㆍ한국은행총재에 대한 신고사항 위반이면 「200만원과 위반금액의 100분의 4 중 큰 금액」. 사후 보고 미이행(차목) 「100만원과 위반금액의 100분의 2 중 큰 금액」. 제15조① 지급절차 위반(사목) 100만원/2%, 거짓 증명서류(아목) 200만원/4%. 지급수단 수출입 미신고(카목) 「위반금액의 100분의 5」. 비고 2: 위반금액 산정이 어려우면 각각 200만원. 비고 3: 여러 동일 위반이 한꺼번에 적발되면 위반금액의 2%/4%로 하되 합계 위반금액이 「5천만원 미만」이면 100만원/200만원.
- 변동: 별표 4 과태료 금액ㆍ비율(최근 개정 2025. 12. 30.)

### KR-FETR
- 명칭: 외국환거래규정(재정경제부고시 제2026-110호, 2026. 10. 30. 일부개정, 시행 2026-11-02)
- URL: https://www.law.go.kr/LSW/admRulInfoR.do?admRulSeq=2100000287720 (조회 2026-11-14)
- 확인: 본문 머리 「[시행 2026. 11. 2.] [재정경제부고시 제2026-110호, 2026. 10. 30., 일부개정]」. 제4-2조(지급등의 절차) ① 지급등을 하려는 자는 외국환은행의 장에게 「지급등의 사유와 금액을 입증하는 서류」(지급등의 증빙서류)를 제출, ② 신고등 대상이면 신고등을 먼저, ③ 위반 시 제재기관의 장에게 보고하고 사후 완료 후 지급. 제4-3조(거주자의 지급등 절차 예외) ① 증빙서류 없이 가능한 경우 — 1. 신고가 필요 없는 거래로서 「연간 누계금액이 미화 10만불 … 이내인 지급」(외국환업무취급기관등을 통해 지급한 금액 합산), 2. 연간 누계 초과 시 「건당 미화 5천불 이내」 또는 은행이 서류로 확인 가능한 신고 불요 거래, 3. 「건당 미화 5천불 이내의 수령」 또는 신고 불요 수령(「동일자ㆍ동일인 기준 미화 10만불을 초과」하면 서면 확인), 6. 「전년도 수출실적이 미화 3천만불 이상인 기업」의 송금방식 수출대금 수령ㆍ수입실적 3천만불 이상 기업의 송금방식 수입대금 지급(증빙 5년 보관) 등. 제5-10조(신고 등, 제3자 지급) ① 신고 불요 — 1. 「미화 5천불 이하」 제3자 지급등(분할 시 합산), 19. 거주자간 거래 결제를 위한 거주자 제3자 지급등, 22. 에스크로 계좌, 25. 다국적기업 상계센터 상계잔액 지급 등 32개 호. ② 「미화 5천불을 초과하고 미화 1만불 이내」는 외국환은행의 장에게 신고, ③ 그 밖에는 한국은행총재에게 신고, ④ 다국적회사 자금관리전문회사 지급은 1개월 이내 사후 보고 가능. 상계(제5장 제2절 「상계등 계정의 대기 또는 차기에 의한 지급등의 방법」) 제5-4조 ① 신고 불요 — 1. 「일방의 금액 … 이 미화 5천불 이하인 채권 또는 채무를 상계」, 2. 상호계산계정, 5. 파생상품 반대거래 상계, 11. 「거주자간에 외화표시 채권 또는 채무를 상계」 등. ② 그 밖의 비거주자와의 상계는 「외국환은행의 장에게 신고하거나, 상계처리 후 1개월 이내에 외국환은행의 장에게 사후 보고」, ③ 「다국적 기업의 상계센터」 또는 다수 당사자 상계는 한국은행총재 신고, ⑤ 증빙 5년 보관. 제7-13조(신고의 예외거래) 금전대차 신고 불요 — 1. 거주자간 외화 금전대차, 2. 외국인투자촉진법 차관, 4. 국민인거주자-국민인비거주자 국내 원화 대차, 10. 외국인투자기업이 해외본사 세금 대납용 「상환기간이 1년 이하인 대출」 등. 제7-14조(거주자의 외화자금차입) ① 지자체ㆍ공공기관ㆍ공공목적 법인ㆍ영리법인 등이 비거주자로부터 외화자금 차입 시 지정거래외국환은행의 장에게 「자금을 수령한 날로부터 1개월 이내에 거래사실을 보고」, 다만 「미화 5천만불(차입신고시점으로부터 과거 1년간의 누적차입금액을 포함 …)을 초과하여 차입하고자 하는 경우에는 지정거래외국환은행을 경유하여 재정경제부장관에게 신고」. ⑤ 개인ㆍ비영리법인은 한국은행총재 신고. 제7-16조(거주자의 비거주자에 대한 대출) ① 영 제8조①1~3호로 투자한 거주자가 그 외국법인에 「상환기간을 1년 미만으로 하여 금전을 대여하는 경우」 지정거래외국환은행의 장에게 지급일부터 1개월 이내 보고, ② 그 밖의 대출은 한국은행총재에게 신고, 다만 다른 거주자의 보증ㆍ담보를 받는 대출과 「10억원을 초과하는 원화자금을 대출하고자 하는 경우에는 대출을 받고자 하는 비거주자가 신고」. 제7-40조(거래절차) ① 「외국환업무취급기관이 외국환업무로서 행하는 거래는 신고를 요하지 아니한다」, ② 그 밖의 거래와 「액면금액의 100분의 20이상을 옵션프레미엄 등 선급수수료로 지급하는 거래」, 손실 이연 반영 거래, 신고 회피 목적 거래 등은 한국은행총재 신고. 제9-5조(해외직접투자의 신고 등) ① 첫 문장 「거주자가 해외직접투자(증액투자 포함)를 하고자 하는 경우 다음 각호의 1에서 정하는 외국환은행의 장에게 신고하여야 한다」(1. 주채무계열은 주채권은행, 2. 그 밖에는 여신최다은행, 3. 거주자가 지정하는 은행), ② 지분 양수ㆍ이익유보금 증액투자는 3개월 이내 사후보고.
- 변동: 증빙 면제 한도(연간 미화 10만불ㆍ건당 5천불), 제3자 지급 구간(5천불/1만불), 상계 신고 기준(5천불), 외화차입 신고 기준(미화 5천만불), 원화대출 비거주자 신고 기준(10억원), 고시 번호

### KR-SUBCON-PAY
- 명칭: 하도급거래 공정화에 관한 법률(법률 제21857호, 2026. 8. 4. 타법개정, 시행 2026-10-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=288625&efYd=20261002 (조회 2026-11-14)
- 확인: 제13조(하도급대금의 지급 등) ① 목적물등의 수령일 「부터 60일 이내의 가능한 짧은 기한으로 정한 지급기일까지 하도급대금을 지급하여야 한다」(단서: 대등한 지위에서 정한 경우, 업종 특수성상 정당한 경우), ② 지급기일이 없거나 60일 넘게 정하면 수령일ㆍ60일이 되는 날을 지급기일로 봄, ③ 발주자로부터 준공금ㆍ기성금을 받으면 「15일」 이내 지급, ⑥ 어음 지급 시 금융기관 할인 가능해야 하고, 수령일부터 60일이 지난 날 이후 만기일까지의 할인료를 지급, ⑦ 어음대체결제수단 지급 시 60일이 지난 날 이후 상환기일까지의 수수료(대출이자 포함)를 지급, ⑧ 60일 지난 후 지급 시 「연 100분의 40 이내에서 「은행법」에 따른 은행이 적용하는 연체금리 등 경제사정을 고려하여 공정거래위원회가 정하여 고시하는 이율」에 따른 이자, ⑨ 어음 할인율도 연 100분의 40 이내에서 공정위 고시, ⑩ 어음대체결제수단 수수료율은 원사업자와 금융기관의 약정 수수료율. 지연이율 고시: 「선급금 등 지연지급 시의 지연이율 고시」([시행 2018. 12. 6.] [공정거래위원회고시 제2018-21호, 2018. 12. 6., 타법개정], https://www.law.go.kr/LSW/admRulInfoR.do?admRulSeq=2100000171352) — 법 제6조②ㆍ제11조④ㆍ제13조⑧ㆍ제15조③의 지연지급에 적용하는 「지연이율을 연리 15.5%로 한다」.
- 변동: 지연이율(연 15.5%, 공정위 고시), 어음 할인율(공정위 고시 — 이번에 확인하지 않음)

### KR-EBILL
- 명칭: 전자어음의 발행 및 유통에 관한 법률(법률 제17354호, 2020. 6. 9. 타법개정, 시행 2020-12-10)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=218913&efYd=20201210 (조회 2026-11-14)
- 확인: 제2조(정의) 2. "전자어음"이란 「전자문서로 작성되고 제5조제1항에 따라 전자어음관리기관에 등록된 약속어음」, 4. 전자어음관리기관(법무부장관 지정), 6. 금융기관, 7. 이용자. 제5조(전자어음의 등록 등) ① 발행하려는 자는 전자어음관리기관에 등록, ② 관리기관은 등록 거부ㆍ연간 총발행금액 제한 가능. 제6조(전자어음의 발행) ⑤ 「전자어음의 만기는 발행일부터 3개월을 초과할 수 없다.」(<개정 2016. 5. 29.>), ⑥ 백지어음은 전자어음으로 발행 불가. 제6조의2(전자어음의 이용) 「「주식회사 등의 외부감사에 관한 법률」 제4조에 따른 외부감사대상 주식회사 및 직전 사업연도 말의 자산총액 등이 대통령령으로 정하는 기준에 해당하는 법인사업자는 약속어음을 발행할 경우 전자어음으로 발행하여야 한다」. 시행령(대통령령 제32393호, 시행 2022-05-09, https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=240183&efYd=20220509) 제8조의2(전자어음의 발행의무 대상 법인사업자) 「직전 사업연도 말의 자산총액이 5억원 이상인 법인사업자」. 위반 시 법 제23조② 「500만원 이하의 과태료」.
- 참고: 만기 제한은 제6조⑤ 「발행일부터 3개월을 초과할 수 없다」. 제5조 제목은 「전자어음의 등록 등」, 제6조의2 제목은 「전자어음의 이용」(「이용 의무」는 제23조②제1호에 「전자어음 이용의무」로 나옴).
- 변동: 만기 상한(3개월), 발행의무 대상 자산총액 기준(5억원, 시행령)

### KR-DRBA
- 명칭: 채무자 회생 및 파산에 관한 법률(법률 제21490호, 2026. 3. 24. 타법개정, 시행 2026-10-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290631&efYd=20261002 (조회 2026-11-14)
- 확인: 제34조(회생절차개시의 신청) ① 채무자 신청 원인 — 1. 「사업의 계속에 현저한 지장을 초래하지 아니하고는 변제기에 있는 채무를 변제할 수 없는 경우」, 2. 「채무자에게 파산의 원인인 사실이 생길 염려가 있는 경우」. ② 제2호의 경우 주식회사ㆍ유한회사는 「자본의 10분의 1이상에 해당하는 채권을 가진 채권자」ㆍ주주ㆍ지분권자도 신청 가능(그 밖의 채무자는 「5천만원 이상」 채권자 등). 제305조(보통파산원인) ① 「채무자가 지급을 할 수 없는 때에는 법원은 신청에 의하여 결정으로 파산을 선고한다」, ② 지급정지 시 지급불능 추정. 제306조(법인의 파산원인) ① 법인은 「부채의 총액이 자산의 총액을 초과하는 때에도」 파산선고 가능.
- 참고: 제305조 제목은 「보통파산원인」이다.

### KR-CRPA
- 명칭: 기업구조조정 촉진법(법률 제21065호, 2025. 10. 1. 타법개정, 시행 2025-10-01. 현행 본법은 법률 제19852호, 2023. 12. 26. 제정)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=277255&efYd=20251001 (조회 2026-11-14)
- 확인: 부칙 <법률 제19852호, 2023. 12. 26.> 제1조(시행일) 「이 법은 공포한 날부터 시행한다.」, 제2조(유효기간) ① 「이 법은 이 법 시행일부터 3년이 되는 날까지 효력을 가진다.」, ② 유효기간 중 주채권은행이 협의회 소집을 통보한 건은 관리절차가 끝나거나 중단될 때까지 이 법을 적용. 이후 부칙은 <법률 제21065호, 2025. 10. 1.>(정부조직법) 하나뿐이고 유효기간을 바꾸는 조항은 없다. 따라서 조회일(2026-11-14) 현재 유효하다. 2023. 12. 26. 시행 기준으로 「3년이 되는 날」은 2026-12-26이다(계산값). 제2조 7. "부실징후기업"이란 「주채권은행이 신용위험평가를 통하여 통상적인 자금차입 외에 외부로부터의 추가적인 자금유입 없이는 금융채권자에 대한 차입금 상환 등 정상적인 채무이행이 어려운 상태 … 에 있다고 인정한 기업」.
- 참고: 조회일 현재 유효하고, 유효기간은 「시행일부터 3년이 되는 날까지」다(2026년 12월 말). 끝나는 날짜는 기간 계산에 따라 하루 차이가 날 수 있으므로 날짜로 단정하지 말고, 세션에서 말하기 전에 연장·재입법 여부를 확인한다.
- 변동: 법의 유효기간(일몰)과 연장 여부

### KR-BANKACT
- 명칭: 은행법(법률 제21296호, 2025. 12. 30. 일부개정, 시행 2026-07-01)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=282001&efYd=20260701 (조회 2026-11-14)
- 확인: 제2조(정의) ① 1. "은행업"이란 「예금을 받거나 유가증권 또는 그 밖의 채무증서를 발행하여 불특정 다수인으로부터 채무를 부담함으로써 조달한 자금을 대출하는 것을 업(業)으로 하는 것」. 제52조의2는 현재 제목이 「금융거래상 중요 정보 제공」이고, ①ㆍ④항은 「삭제 <2020. 3. 24.>」, 남은 ②항은 은행이용자에게 중요 정보를 제공하는 등 적절한 조치를 마련할 의무다([제목개정 2020. 3. 24.]). 부칙 <법률 제17112호, 2020. 3. 24.>(금융소비자 보호에 관한 법률 제정)이 「제52조의2의 제목 "(불공정영업행위의 금지 등)"을 "(금융거래상 중요 정보 제공)"으로 하고, 같은 조 제1항을 삭제」했다. 시행령(대통령령 제36417호, 시행 2026-07-01, https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=287003&efYd=20260701)도 같은 부칙으로 제24조의5 제목을 같게 바꾸고 제1항을 삭제했다. 대출 시 끼워팔기(구속성) 금지는 현재 금융소비자보호법 제20조①제1호와 같은 법 시행령 제15조④제1호에 있다(KR-FCPA 참조).
- 참고: 대출 끼워팔기 금지는 은행법이 아니라 금융소비자보호법 제20조①제1호에 있다(KR-FCPA). 은행법 제52조의2의 해당 조항은 2020. 3. 24. 삭제됐다.
- 변동: 해당 없음

### KR-FCPA
- 명칭: 금융소비자 보호에 관한 법률(법률 제21065호, 2025. 10. 1. 타법개정, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=277247&efYd=20260102 (조회 2026-11-14)
- 확인: 제17조(적합성원칙) ① 일반/전문금융소비자 확인, ② 일반금융소비자에게 권유 시 면담ㆍ질문으로 정보를 파악하고 서명ㆍ기명날인ㆍ녹취 등으로 확인. 제18조(적정성원칙) ① 권유 없이 판매하려는 경우에도 보장성ㆍ투자성ㆍ대출성 상품은 정보를 파악, ② 부적정하면 알리고 확인을 받음. 제19조(설명의무) ① 일반금융소비자에게 권유하거나 일반금융소비자가 요청하면 중요한 사항을 「일반금융소비자가 이해할 수 있도록 설명」. 제20조(불공정영업행위의 금지) ① 1. 「대출성 상품 … 계약체결과 관련하여 금융소비자의 의사에 반하여 다른 금융상품의 계약체결을 강요하는 행위」, 2. 부당한 담보ㆍ보증 요구, 4. 대출성 상품 — 가. 특정 상환방식 강요, 나. 중도상환수수료 부과 금지와 예외 「1) 대출계약이 성립한 날부터 3년 이내에 상환하는 경우 2) 다른 법령에 따라 중도상환수수료 부과가 허용되는 경우 3) … 대통령령으로 정하는 경우」, 다. 제3자 연대보증 요구. 시행령(대통령령 제36287호, 시행 2026-04-28, https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285715&efYd=20260428) 제15조 ① 나목3)은 여신전문금융업법상 시설대여ㆍ연불판매ㆍ할부금융 해지(재화 미인도ㆍ하자 제외), ②제2호 법인 대출의 제3자 연대보증은 대표이사ㆍ무한책임사원, 최대지분 보유자, 의결권 주식 「100분의 30」 초과 보유자 등만 허용, ④제1호 끼워팔기 유형(자기 상품, 제3자 명의, 다른 판매업자 경유, 중소기업 대표자ㆍ관계인에게 강요 등). 제46조(청약의 철회) ① 3. 대출성 상품은 계약서류를 받은 날(또는 계약체결일, 금전 지급이 늦으면 그 지급일)부터 「14일」. 법인 적용: 제17ㆍ18ㆍ19ㆍ46조는 「일반금융소비자」 대상이다. 시행령 제2조⑩제2호나목에 따라 대출성 상품에서는 「상시근로자가 5인 이상인 법인ㆍ조합ㆍ단체」가 전문금융소비자다. 그런 법인도 같은 조 ⑦제1호에 따라 일반금융소비자 대우를 서면으로 요청할 수 있다(법 제2조제9호 단서).
- 참고: 상시근로자 5인 이상 법인은 대출성 상품에서 기본이 전문금융소비자라서 적합성ㆍ적정성ㆍ설명의무ㆍ청약철회가 그대로 적용되지 않는다.
- 변동: 중도상환수수료 허용 기간(3년), 청약철회 기간(대출성 14일), 법인 전문금융소비자 기준(상시근로자 5인)

### KR-DIPA
- 명칭: 예금자보호법(법률 제21065호, 2025. 10. 1. 타법개정, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=277269&efYd=20260102 (조회 2026-11-14)
- 확인: 제32조(보험금의 계산 등) ① 보험금은 예금등 채권 합계에서 해당 부보금융회사에 대한 채무(보증채무 제외)를 뺀 금액, ② 「1인당 국내총생산액, 보호되는 예금등의 규모 등을 고려하여 1억원 이상의 범위에서 대통령령으로 정하는 금액을 한도로 한다」(<개정 2025. 1. 21.>). 시행령(대통령령 제35687호, 시행 2025-09-01, https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=273001&efYd=20250901) 제18조⑦ 「법 제32조제2항에 따른 보험금의 지급한도는 1억원 … 으로 한다」(<개정 … 2025. 7. 29.>). 퇴직연금ㆍ개인종합자산관리계좌 등은 각각 따로 한도를 적용. 법인: 법 제2조3호 "예금자등"은 「부보금융회사에 대하여 예금등 채권을 가진 자」로 법인을 빼지 않는다. 시행령 제3조(예금등의 범위)에서 법인 관련으로 보이는 제외는 ④제1호 「보험계약자 및 보험료납부자가 법인인 보험계약에 의하여 수입한 수입보험료」(보험회사)뿐이다. 은행 예금에서 법인 예금을 일반적으로 빼는 조문은 찾지 못했다.
- 변동: 보험금 지급한도(1억원, 시행령)

### KR-CMA-DEF
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 2026. 5. 12. 일부개정, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 제4조⑩ "기초자산" — 1. 금융투자상품, 2. 「통화(외국의 통화를 포함한다)」, 3. 「일반상품(농산물ㆍ축산물ㆍ수산물ㆍ임산물ㆍ광산물ㆍ에너지에 속하는 물품 및 이 물품을 원료로 하여 제조하거나 가공한 물품, 그 밖에 이와 유사한 것을 말한다)」, 4. 신용위험, 5. 그 밖에 산출ㆍ평가가 가능한 자연적ㆍ환경적ㆍ경제적 위험. 제5조(파생상품) ① 1. 금전등을 「장래의 특정 시점에 인도할 것을 약정하는 계약」, 2. 「당사자 어느 한쪽의 의사표시에 의하여 … 거래를 성립시킬 수 있는 권리를 부여하는 것을 약정하는 계약」, 3. 「장래의 일정기간 동안 미리 정한 가격으로 … 교환할 것을 약정하는 계약」, 4. 유사 계약(대통령령). ②장내파생상품, ③ 「장외파생상품」이란 장내파생상품이 아닌 것.
- 참고: 법문에는 「선도ㆍ옵션ㆍ스왑」이라는 명칭이 없고 제1ㆍ2ㆍ3호의 서술로만 정한다.

### KR-CMA-OTC
- 명칭: 자본시장과 금융투자업에 관한 법률(법률 제21647호, 시행 2026-11-13) 및 같은 법 시행령(대통령령 제36823호, 2026. 11. 10. 일부개정, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113 (조회 2026-11-14)
- 확인: 법 제166조의2(장외파생상품의 매매 등) ① 1. 「장외파생상품의 매매 및 그 중개ㆍ주선 또는 대리의 상대방이 일반투자자인 경우에는 그 일반투자자가 대통령령으로 정하는 위험회피 목적의 거래를 하는 경우에 한할 것」, 이 경우 회피하려는 위험의 종류와 금액을 확인하고 자료 보관. 시행령 제186조의2(위험회피목적 거래)(https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=291669&efYd=20261113) 보유하거나 보유하려는 자산ㆍ부채ㆍ계약 등(위험회피대상)의 경제적 손실을 줄이기 위한 거래로서 계약체결 당시 「1. 위험회피대상을 보유하고 있거나 보유할 예정일 것 2. 장외파생거래 계약기간 중 장외파생거래에서 발생할 수 있는 손익이 위험회피대상에서 발생할 수 있는 손익의 범위를 초과하지 아니할 것」.
- 참고: 투자자 구분 — 제9조⑤제4호 「주권상장법인. 다만, 금융투자업자와 장외파생상품 거래를 하는 경우에는 전문투자자와 같은 대우를 받겠다는 의사를 금융투자업자에게 서면으로 통지하는 경우에 한한다」(같은 URL, 조회 2026-11-14). 원문이 정하는 것은 「통지하지 않은 주권상장법인은 장외파생상품 거래에서 전문투자자 대우를 받지 않는다」는 데까지다. 비상장 법인이 어느 쪽인지는 제9조⑤의 다른 호와 시행령이 정하므로, 그 조문을 세션에서 열어 확인하기 전에는 단정하지 않는다. 일반투자자이면 제166조의2①제1호(위험회피 목적 한정)가 걸린다.

### KR-CMA-MMF
- 명칭: 자본시장과 금융투자업에 관한 법률 시행령(대통령령 제36823호, 2026. 11. 10. 일부개정, 시행 2026-11-13)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=291669&efYd=20261113 (조회 2026-11-14)
- 확인: 시행령 제241조가 근거다. 위임한 법 조항은 자본시장법(https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113) 제229조 5. 「단기금융집합투자기구 : 집합투자재산 전부를 대통령령으로 정하는 단기금융상품에 투자하는 집합투자기구로서 대통령령으로 정하는 방법으로 운용되는 집합투자기구」. 시행령 제241조(단기금융집합투자기구)(https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=291669&efYd=20261113) ① 원화 단기금융상품 — 남은 만기 「6개월 이내」 CD, 남은 만기 「5년 이내」 국채, 「1년 이내」 지방채ㆍ특수채ㆍ사채(주권관련ㆍ사모 제외)ㆍ기업어음, 단기대출, 만기 6개월 이내 예치, 다른 MMF, 단기사채등. 외화(일정 국가 통화) 상품도 포함(<개정 … 2026. 3. 10.>). ② 운용 방법 — 증권 대여ㆍ차입 금지, 남은 만기 1년 이상 국채는 「100분의 5 이내」, 환매조건부매도ㆍ가중평균 잔존만기는 금융위 고시 범위, 규모 기준 미달 시 신규 설정 제한(개인 전용 원화 「3천억원」/외화 「1천5백억원」, 법인 전용 원화 「5천억원」/외화 「2천5백억원」), 원화 또는 한 통화 외화 상품 중 하나에만 투자, 신용등급ㆍ투자한도는 금융위 고시(금융투자업규정 — 이번에 확인하지 않음).
- 변동: 잔존만기 기준, 규모 기준(3천억/1천5백억/5천억/2천5백억원), 금융투자업규정 세부 한도

### KR-COMM-CREDIT
- 명칭: 상법(법률 제21044호, 2025. 9. 9. 일부개정, 시행 2026-09-10)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=273629&efYd=20260910 (조회 2026-11-14)
- 확인: 제542조의9(주요주주 등 이해관계자와의 거래) ① 「상장회사는 다음 각 호의 어느 하나에 해당하는 자를 상대방으로 하거나 그를 위하여 신용공여(금전 등 경제적 가치가 있는 재산의 대여, 채무이행의 보증, 자금 지원적 성격의 증권 매입, 그 밖에 거래상의 신용위험이 따르는 직접적ㆍ간접적 거래로서 대통령령으로 정하는 거래 …)를 하여서는 아니 된다」 — 1. 주요주주 및 그의 특수관계인, 2. 이사(업무집행지시자 등 포함)ㆍ집행임원, 3. 감사. ② 예외: 복리후생 금전대여 등(대통령령), 다른 법령에서 허용, 경영건전성을 해칠 우려가 없는 금전대여 등(대통령령).

### KR-FTA-SUPPORT
- 명칭: 독점규제 및 공정거래에 관한 법률(법률 제22043호, 2026. 9. 29. 일부개정, 시행 2026-10-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290153&efYd=20261002 (조회 2026-11-14)
- 확인: 제45조(불공정거래행위의 금지) ① 9. 「부당하게 다음 각 목의 어느 하나에 해당하는 행위를 통하여 특수관계인 또는 다른 회사를 지원하는 행위 가. 특수관계인 또는 다른 회사에 가지급금ㆍ대여금ㆍ인력ㆍ부동산ㆍ유가증권ㆍ상품ㆍ용역ㆍ무체재산권 등을 제공하거나 상당히 유리한 조건으로 거래하는 행위 나. 다른 사업자와 직접 상품ㆍ용역을 거래하면 상당히 유리함에도 불구하고 거래상 실질적인 역할이 없는 특수관계인이나 다른 회사를 매개로 거래하는 행위」. ② 지원을 받는 쪽도 금지.

### KR-EFTA
- 명칭: 전자금융거래법(법률 제22048호, 2026. 9. 29. 일부개정, 시행 2026-10-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290247&efYd=20261002 (조회 2026-11-14)
- 확인: 제2조(정의) 1. "전자금융거래"란 「금융회사 또는 전자금융업자가 전자적 장치를 통하여 금융상품 및 서비스를 제공 … 하고, 이용자가 금융회사 또는 전자금융업자의 종사자와 직접 대면하거나 의사소통을 하지 아니하고 자동화된 방식으로 이를 이용하는 거래」, 10. "접근매체" — 전자식 카드ㆍ전자적 정보, 전자서명생성정보ㆍ인증서, 이용자번호, 생체정보, 비밀번호. 제9조(금융회사 또는 전자금융업자의 책임) ① 접근매체 위조ㆍ변조, 전자적 전송ㆍ처리 과정, 정보통신망 침입으로 부정 획득한 접근매체 이용 사고는 배상 책임. ② 이용자에게 부담시킬 수 있는 경우 — 1. 「이용자의 고의나 중대한 과실이 있는 경우로서 그 책임의 전부 또는 일부를 이용자의 부담으로 할 수 있다는 취지의 약정을 미리 이용자와 체결한 경우」, 2. 「법인(「중소기업기본법」제2조제2항에 의한 소기업을 제외한다)인 이용자에게 손해가 발생한 경우로 금융회사 또는 전자금융업자가 사고를 방지하기 위하여 보안절차를 수립하고 이를 철저히 준수하는 등 합리적으로 요구되는 충분한 주의의무를 다한 경우」. ③ 고의ㆍ중과실은 대통령령 범위 안에서 약관에 기재된 것에 한함.
- 참고: 법인 이용자 관련은 제9조②제2호다.

### KR-KSURE
- 명칭: 무역보험법(법률 제21065호, 2025. 10. 1. 타법개정, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=276501&efYd=20260102 (조회 2026-11-14)
- 확인: 제1조(목적) 「무역이나 그 밖의 대외거래와 관련하여 발생하는 위험을 담보하기 위한 무역보험제도」. 제2조(정의)는 1. "무역"(대외무역법상 수출과 수입, 수입은 중요 자원ㆍ물품만), 2. "그 밖의 대외거래"(해외 투자, 해외자원 확보, 공사가 인정한 무역증진 거래)만 정의한다. 제3조(무역보험의 종류) 「무역보험의 종류는 공사가 산업통상부장관의 승인을 받아 정한다.」 환변동 근거: 제53조(업무) ① 1. 「무역보험(환율 변동과 이자율 변동의 위험을 담보하는 보험을 포함한다)」, 제8조(계약체결 한도) ② 「환율변동의 위험을 담보하는 보험으로서 수출 실적 등을 기준으로 운영하는 선물환(先物換) 방식의 보험은 무역보험계약 체결 한도를 정하지 아니할 수 있다」.
- 참고: 무역보험의 종류는 법에 나열하지 않고 공사가 장관 승인으로 정한다(제3조). 환변동보험의 근거는 제53조①제1호와 제8조②다.

### KR-KIBO
- 명칭: 기술보증기금법(법률 제21540호, 시행 2026-10-08)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285277&efYd=20261008 (조회 2026-11-14)
- 확인: 제1조(목적) 「기술보증기금을 설립하여 기술보증제도를 정착ㆍ발전시킴으로써 신기술사업에 대한 자금의 공급을 원활하게 하고 …」. 제2조 「“기술보증”이란 신기술사업자가 부담하는 다음 각 목의 금전채무를 보증하는 것을 말한다」. 제28조(기금의 업무) ① 「2. 기술보증」, 「3. 신용보증」.

### KR-KODIT
- 명칭: 신용보증기금법(법률 제21065호, 2025. 10. 1. 타법개정, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=277263&efYd=20260102 (조회 2026-11-14)
- 확인: 제1조(목적) 「신용보증기금을 설립하여 담보능력이 미약한 기업의 채무보증과 회사채등 유동화를 수행하게 하여 기업의 자금융통을 원활히 하고 …」. 제23조(업무) ① 1. 기본재산 관리, 2. 「신용보증」, 2의2. 보증연계투자, 2의4. 제23조의5 「중소ㆍ중견기업팩토링」 운용, 3. 경영지도, 4. 신용조사ㆍ신용정보 관리, 5. 구상권 행사, 7. 유동화보증, 8. 회사채등 유동화신탁 등. ② 재보증. 매출채권보험 근거는 이 법에 없다. 근거는 「중소기업진흥에 관한 법률」(법률 제21447호, 시행 2026-07-01, https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=284099&efYd=20260701) 제61조의2(중소기업매출채권보험계정의 설치)에 있다 — 정부는 중소기업자의 약속어음ㆍ환어음 부도와 매출채권 채무불이행으로 인한 연쇄도산을 막기 위해 「「신용보증기금법」에 따른 신용보증기금 … 내에 중소기업매출채권보험계정을 설치할 수 있다」. 보험 총액 한도는 제61조의9에 따라 출연금과 적립금 합계액의 「17배 이내」.
- 참고: 매출채권보험의 근거는 중소기업진흥에 관한 법률 제61조의2~제61조의9이고, 운영은 신용보증기금이 한다(KR-KODIT-AR).
- 변동: 매출채권보험 총액 한도 배수(17배)

### KR-VAT-DUE
- 명칭: 부가가치세법(법률 제21065호, 2025. 10. 1. 타법개정, 시행 2026-01-02)
- URL: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=276117&efYd=20260102 (조회 2026-11-14)
- 확인: 제48조(예정신고와 납부) ① 예정신고기간(제1기 1월 1일~3월 31일, 제2기 7월 1일~9월 30일 — 표 이미지의 대체 텍스트)이 「끝난 후 25일 이내」 신고, ② 예정신고 때 납부, ③ 개인사업자와 대통령령으로 정하는 법인사업자는 직전 과세기간 납부세액의 「50퍼센트」를 고지ㆍ징수(「50만원 미만」이면 징수하지 않음 등). 제49조(확정신고와 납부) ① 「그 과세기간이 끝난 후 25일(폐업하는 경우 … 폐업일이 속한 달의 다음 달 25일) 이내」 신고, ② 확정신고 때 납부.
- 변동: 예정고지 대상 법인 기준(시행령 — 이번에 확인하지 않음)

### KR-BOK-FXGUIDE
- 명칭: 한국은행 「외환거래심사업무 안내」·「외환거래별 신고」(지급 및 지급등의 방법 / 자본거래) 페이지 (한국은행 홈페이지 대국민 서비스 > 외환거래 심사, 게시일 표기 없음)
- URL: https://www.bok.or.kr/portal/main/contents.do?menuNo=200398 (조회 2026-11-14)
- 확인: 「한국은행은 외국환거래법령에 따라 위탁받은 외국환거래 허가 · 신고수리 · 신고 등의 업무를 수행」. 한국은행이 받는 신고는 ① 「대외지급수단매매신고, 지급확인 및 지급방법 신고」(상계에 의한 지급등의 방법, 제3자 지급등의 방법, 일정기간을 초과하는 지급등의 방법, 외국환은행을 통하지 않은 지급등의 방법) ② 「자본거래 신고 — 자금통합관리 등 12종」. 「한국은행 신고사항 이외의 거래는 재정경제부, 관세청, 외국환은행이 각각 신고 등을 담당」. 하위 페이지: 지급 및 지급등의 방법 https://www.bok.or.kr/portal/main/contents.do?menuNo=200404 — 상계는 「일부 신고예외사항을 제외하고 외국환은행에 보고 또는 한국은행에 신고」, 신고예외 「일방의 금액이 미화 5천불 이하인 채권 또는 채무를 상계」, 외국환은행 보고사항 「양자간 상계 일체(다국적기업의 상계센터를 통한 상계 및 다자간 상계만 한국은행 신고)」. 자본거래 https://www.bok.or.kr/portal/main/contents.do?menuNo=200405 — 「자금통합관리는 잔액기준으로 미화 5천만달러 이내」(지정거래외국환은행 경유 한국은행 신고, 매분기 보고), 외화자금차입은 「개인 및 비영리법인은 한국은행에 신고」, 「영리법인 등은 연간 차입누적금액 기준으로 미화 3천만달러 이하는 외국환은행 신고, 미화 3천만달러 초과는 기획재정부에 신고」, 거주자의 비거주자 대출은 「한국은행 신고사항」, 「해외직접투자한 거주자가 해당 현지법인에 대하여 상환기간을 1년 미만으로 금전을 대여하는 경우: 지정거래외국환은행 신고사항」, 「10억원을 초과하여 원화자금을 대출하는 경우에는 대출받는 비거주자가 신고」.
- 주의: 이 안내 페이지의 자본거래 설명은 외화차입 기준을 「미화 3천만달러」, 신고처를 「기획재정부」로 적어 현행 외국환거래규정(KR-FETR 제7-14조 「미화 5천만불」, 재정경제부)과 다르다. 개정 전 내용으로 보이므로 수치는 KR-FETR 원문으로만 말한다.
- 변동: 상계 신고예외 금액, 자금통합관리 한도, 외화차입 신고 기준 금액·신고처, 대출 신고 기준 금액

### KR-ECOS
- 명칭: 한국은행 경제통계시스템(ECOS) Open API — 통계표 목록(StatisticTableList)·통계 조회(StatisticSearch)
- URL: https://ecos.bok.or.kr/api/StatisticTableList/sample/json/kr/1/10/731Y001 (조회 2026-11-14)
- 확인: 통계표 코드·이름(API 응답 원문): `731Y001` 「3.1.1.1. 주요국 통화의 대원화환율」(CYCLE D, ORG_NAME 서울외국환중개), `731Y003` 「3.1.1.3. 원화의 대미달러, 원화의 대위안/대엔 환율」(D, 한국은행), `817Y002` 「1.3.2.1. 시장금리(일별)」(D, 한국은행), `721Y001` 「1.3.2.2. 시장금리(월,분기,년)」(M, 한국은행). 실제 데이터 조회 확인: https://ecos.bok.or.kr/api/StatisticSearch/sample/json/kr/1/2/731Y001/D/20261110/20261113/0000001 → 항목 `0000001` 「원/미국달러(매매기준율)」, 단위 원, 20261110 값 1355.7. `817Y002` 항목 예: `010101000` 「콜금리(1일, 전체거래)」, `010200001` 「국고채(5년)」(https://ecos.bok.or.kr/api/StatisticItemList/sample/json/kr/1/10/817Y002). API 키 `sample`은 시험용(행 수 제한)이며 운영에는 개인 인증키 필요.
- 변동: 통계표 코드 체계 개편 시 코드·항목 코드

### KR-COFIX
- 명칭: 전국은행연합회 소비자포털 「COFIX 개요」·「COFIX 공시」, 근거 문서 「COFIX(자금조달비용지수) 운용 모범규준」(최종 부칙 '19. 7. 5., 2019년 7월 8일 시행)
- URL: https://portal.kfb.or.kr/fingoods/cofix_overview.php (조회 2026-11-14)
- 확인: 정의 「COFIX(Cost of Funds Index)는 정보제공은행들의 자금조달금리를 가중평균하여 산출한 "자금조달비용지수"」, 「신규취급액기준 COFIX, 잔액기준 COFIX, 신 잔액기준 COFIX, 단기 COFIX로 구분하여 공시」, 정보제공은행 「총 8개 은행」. 신규취급액기준 = 「대상월 한 달 동안 신규로 취급한 수신상품 금액(신규취급액)의 가중평균금리」, 단기 = 「주간 신규로 취급한 만기 3개월의 수신상품 금액(주간 신규취급액)의 가중평균금리」. 공시 주기: 모범규준 제7조④(https://portal.kfb.or.kr/compare/cofix_standard.pdf) 「1. 신규취급액기준 COFIX, 잔액기준 COFIX 및 신 잔액기준 COFIX : 해당 월의 익월 15일(15일이 공휴일인 경우 익영업일) 15시」, 「2. 단기 COFIX : 해당 주의 다음 주 제3영업일 15시」. 공시 페이지(https://portal.kfb.or.kr/fingoods/cofix.php) 「모든 COFIX는 공시일 오후 3시에 공시됩니다」 — 신규취급액기준 공시일 2026. 10. 15. 3.43%, 다음 공시일 2026. 11. 16.; 단기 공시일 2026. 11. 11. 3.50%, 다음 2026. 11. 18. 도메인: portal.kfb.or.kr는 전국은행연합회 소비자포털(푸터 「Korea Federation of Banks」, 대표사이트 www.kfb.or.kr — www.kfb.or.kr/main/main.php 응답 확인). 페이지 인코딩 EUC-KR.
- 변동: COFIX 값, 정보제공은행 수, 공시일

### KR-LOANTERMS
- 명칭: 은행여신거래기본약관(기업용)(공정거래위원회 표준약관 제10005호, 2024. 9. 27. 개정)
- URL: https://www.ftc.go.kr/www/downloadBbsFile.do?atchmnflNo=14864 (조회 2026-11-14; 목록 https://www.ftc.go.kr/www/selectBbsNttList.do?bordCd=201&key=202 「[제10005호] 은행여신거래기본약관(기업용) ('24.9.27. 개정)」, 첨부 hwpx)
- 확인: 제7조(기한전의 채무변제의무) ① 압류명령·체납처분 압류통지 도달, 「파산ㆍ화의개시ㆍ회사정리절차개시의 신청이 있거나, 채무불이행자명부 등재 결정이 있는 때」, 「어음교환소의 거래정지처분이 있는 때」, 「폐업, 도피 기타의 사유로 지급을 정지한 것으로 인정된 때」 등 → 서면 통지 도달 시 「모든 채무」에 대해 사유 발생시부터 기한의 이익 상실. ② 「(삭 제)」. ③ 「이자 등을 지급하여야 할 때부터 계속하여 14일간 지체한 때」, 「분할상환금 또는 분할상환 원리금의 지급을 2회 이상 연속하여 지체한 때」 → 「해당 채무」, 「기한의 이익상실일 3영업일전까지」 서면 통지. ④ 채권보전에 현저한 위험이 예상될 경우 독촉 후 「독촉의 도달일부터 10일 이상으로 은행이 정한 기간이 경과하면」 모든 채무 상실(제1호 「은행에 대한 수 개의 채무 중 하나라도 기한에 변제하지 아니하거나 …」 등). ⑤ 해당 채무, 같은 10일 이상 독촉 절차.
- 변동: 연체 일수(14일), 통지 기한(3영업일·10일), 개정일

### KR-KSURE-FX
- 명칭: 한국무역보험공사 환변동보험 「개요(선물환 방식)」 — 일반형 환변동보험 (게시일 표기 없음)
- URL: https://www.ksure.or.kr/rh-kr/cntnts/i-256/web.do (조회 2026-11-14)
- 확인: 「보험가입시 환율보다 환율 상승시에는 이익금 납부, 환율 하락시에는 보험금을 지급하는 선물환 상품(수출거래 기준)」. 특징: 「청약시점부터 일반수출거래는 1년 6개월까지, 중장기 수출계약건은 3년 6개월까지 헤지 가능」, 「계약이행관련 증거금 또는 담보 제공 없이 저렴한 보험료만으로 이용가능」, 「6개월 동안 U$1백만 헤지 시 보험요율은 0.02% ~ 0.03%(U$200~350)」, 「만기일 이전 조기결제 가능」, 「실제 외화자금의 매매는 시중 금융기관과 이루어지며 K-SURE와는 보장환율과 결제환율 차이에 따라 발생하는 원화차액만 정산」, 「수입환변동보험의 경우에는 대상거래 품목에 제한」. 수출환변동 「환율하락에 따른 손실방지」, 수입환변동 「환율상승에 따른 손실방지」.
- 변동: 최대 헤지 기간, 보험요율, 수입 대상 품목

### KR-KODIT-AR
- 명칭: 신용보증기금 「주요업무 > 신용보험 > 매출채권보험 > 기본개념」
- URL: https://www.kodit.or.kr/kodit/cm/cntnts/cntntsView.do?mi=2553&cntntsId=11087 (조회 2026-11-14)
- 확인: 「판매기업(보험계약자)이 보험기간 동안 구매기업에게 물품 또는 용역을 공급하여 취득한 매출채권(외상매출금 + 받을어음)에 대해 향후 구매기업의 지급불능 또는 채무불이행으로 인하여 예측하지 못한 손실이 발생할 경우 보험자(신용보증기금)로부터 보험금을 지급받는 제도」. 구조: 판매기업-신보 보험계약 → 물품·용역 공급 → 구매기업 채무불이행 → 신보 보험금 지급. (가입대상·보험상품 세부 페이지 mi=2554·2555는 주소만 확인, 본문 미확인.)
- 변동: 보상률·보험료율·가입대상 기준(세부 페이지에서 확인 필요)

### KR-KIKO
- 명칭: 대법원 2013. 9. 26. 선고 키코(통화옵션계약) 전원합의체 판결 4건
- URL: https://www.law.go.kr/LSW/precInfoR.do?precSeq=192236 (조회 2026-11-14; 검색 https://www.law.go.kr/LSW/precSc.do?menuId=7&subMenuId=47&tabMenuId=213&query=키코)
- 확인: 사건번호(원문 머리 그대로) 「대법원 2013. 9. 26. 선고 2011다53683, 53690 전원합의체 판결」(precSeq=192236, 부당이득금반환등·해지결제금), 「2012다1146, 1153 전원합의체 판결」(precSeq=192254), 「2012다13637 전원합의체 판결」(precSeq=192259), 「2013다26746 전원합의체 판결」(precSeq=171531). 판결요지[7] 적합성: 은행은 환 헤지 목적 기업과 통화옵션계약 체결 시 「예상 외화유입액, 자산 및 매출 규모를 포함한 재산상태, 환 헤지의 필요 여부, 거래 목적, 거래 경험, 당해 계약에 대한 지식 또는 이해 정도, 다른 환 헤지 계약 체결 여부 등의 경영상황을 미리 파악한 다음, 그에 비추어 해당 기업에 적합하지 아니한 통화옵션계약의 체결을 권유하여서는 아니 된다」, 위반해 과대한 위험 계약을 적극 권유하면 「적합성의 원칙을 위반하여 고객에 대한 보호의무를 저버리는 위법한 것으로서 불법행위를 구성」, 은행은 「다른 금융기관에 비하여 더 무거운 고객 보호의무」. 판결요지[8] 설명의무: 장외파생상품 거래 시 「거래에 내재된 위험요소 및 잠재적 손실에 영향을 미치는 중요인자 등 거래상 주요 정보를 적합한 방법으로 명확하게 설명하여야 할 신의칙상 의무」, 다만 「상세한 금융공학적 구조」나 다른 상품과의 손익 비교까지는 아니고, 제로 코스트 구조에서 수수료는 「시장의 관행에 비하여 현저하게 높지 아니한 이상」 설명 대상 아님. 결론: 2011다53683 「상고를 모두 기각」(적합성·설명의무 위반 불인정); 2012다13637 「2007. 12. 20.자 통화옵션계약에 관한 부분을 파기하고 … 서울고등법원에 환송」.
- 변동: 해당 없음

### KR-KFTC
- 명칭: 금융결제원 전자어음 서비스(U-note, 「전자어음관리기관, 금융결제원」) 및 금융결제원 CMS 서비스
- URL: https://www.unote.kr/eds/main/main.jsp (조회 2026-11-14)
- 확인: U-note 메인 「신뢰받는 전자어음관리기관, 금융결제원」, 전자어음 서비스는 「전자어음의 발행등록, 배서, 부도 등에 관한 정보를 조회」, 메뉴에 발행·배서·만기전지급제시·발행후보증·발행어음조회, 자료실 「전자어음 이용안내서(2025.12월)」(2025-12-02), 「전자어음 발행의무 대상 확대 관련 보도자료(2022....」. 메타 정보 owner `u-note@kftc.or.kr`, 금융결제원 커뮤니티 전체서비스(https://community.kftc.or.kr/commcnb/commcnb1.html)에서 「전자어음」→www.u-note.kr, 「CMS·지로EDI」→www.cmsedi.or.kr로 연결. CMS: https://www.cmsedi.or.kr/cms 「금융결제원 CMS 서비스」, 「30년간의 운영으로 쌓아온 안정적인 자금관리 솔루션」, 「(SINCE 1995)」, 「거래 건수 / 금액(연간) 10억건+ 110조원+」, 입·출금이체 신청 메뉴(성격상 대량 자동이체·수납 서비스).
- 변동: CMS 실적 수치, 전자어음 이용안내서 판

### KR-KIFRS1007
- 명칭: 기업회계기준서 제1007호 「현금흐름표」(한국회계기준원 회계기준위원회, 의결 2024. 11. 22.; 목록 파일명 「시행중_K-IFRS_제1007호_현금흐름표(2024_개정_…)」)
- URL: https://www.kasb.or.kr/commonFile/fileDownload.do (POST fileNo=-49992451, fileSeq=1 — PDF; 목록 https://www.kasb.or.kr/front/board/ingAccountingList.do) (조회 2026-11-14)
- 확인: 문단 6 정의 「영업활동: 기업의 주요 수익창출활동, 그리고 투자활동이나 재무활동이 아닌 기타의 활동」, 「투자활동: 장기성 자산 및 현금성자산에 속하지 않는 기타 투자자산의 취득과 처분」, 「재무활동: 기업의 납입자본과 차입금의 크기 및 구성내용에 변동을 가져오는 활동」, 「현금: 보유 현금과 요구불예금」. 문단 10 「현금흐름표는 회계기간 동안 발생한 현금흐름을 영업활동, 투자활동 및 재무활동으로 분류하여 보고한다」. 문단 18 영업활동 현금흐름은 「⑴ 총현금유입과 총현금유출을 주요 항목별로 구분하여 표시하는 방법(이하 '직접법')」 또는 「⑵ 당기순손익에 현금을 수반하지 않는 거래 … 의 영향을 조정하여 표시하는 방법(이하 '간접법')」 중 하나로 보고(간접법 허용). 문단 19 「직접법을 사용할 것을 권장한다」. 열람 서비스 db.kasb.or.kr는 JS 전용 화면이라 본문을 curl로 읽지 못함.
- 변동: 개정판(IFRS 18 도입에 따른 후속 개정 여부는 미확인)

### KR-DART
- 명칭: 금융감독원 전자공시시스템(DART)
- URL: https://dart.fss.or.kr/introduction/content1.do (조회 2026-11-14)
- 확인: 「전자공시시스템(DART : Data Analysis, Retrieval and Transfer System)은 상장법인 등이 공시서류를 인터넷으로 제출하고, 투자자 등 이용자는 제출 즉시 인터넷을 통해 조회할 수 있도록 하는 종합적 기업공시 시스템」, 연혁 「2020 04 Open DART 서비스 개시」. 공시 검색: https://dart.fss.or.kr/dsab007/main.do(공시통합검색, 정기공시 「사업보고서」 유형). 실제 확인 — 상장사 사업보고서 1건 검색(POST https://dart.fss.or.kr/dsab007/detailSearch.ax, 사업보고서 (2025.12) 접수 2026.03.10) 후 뷰어 https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20260310002820 목차에 「2-5. 연결 현금흐름표」, 「4-5. 현금흐름표」, 주석 「27. 현금흐름표」 확인 → 사업보고서 재무제표 항목에서 현금흐름표 열람 가능.
- 변동: 해당 없음

## 글로벌 비교

### GL-BASEL
- 명칭: Basel Committee on Banking Supervision, The Basel Framework
- URL: https://www.bis.org/basel_framework/ (조회 2026-11-14)
- 확인: 「a consolidated version of the full set of standards of the Basel Committee on Banking Supervision (BCBS), which is the primary global standard setter for the prudential regulation of banks」. 은행 건전성 규제(자본·신용위험·유동성)의 국제 기준 통합본으로, 은행의 규제가 기업 대출의 심사·가격·조건에 닿는 경로를 비교할 때 쓴다.
- 변동: 장별 개정·시행일

### GL-IAS7
- 명칭: IAS 7 Statement of Cash Flows (IFRS Foundation / IASB 기준서 소개 페이지)
- URL: https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/ (조회 2026-11-14)
- 확인: 현금흐름을 셋으로 나눈다. 원문은 "classifies cash flows during a period into cash flows from operating, investing and financing activities"다.
  - 영업: "the principal revenue-producing activities of the entity and other activities that are not investing or financing activities". 직접법과 간접법 중 하나로 보고한다.
  - 투자: "the acquisition and disposal of long-term assets and other investments not included in cash equivalents".
  - 재무: "activities that result in changes in the size and composition of the contributed equity and borrowings of the entity".
  - 개정 이력(같은 페이지): 2016년 1월 Disclosure Initiative, 2023년 5월 Supplier Finance Arrangements. 2024년 4월 IFRS 18 도입으로 간접법 출발점이 "operating profit or loss subtotal"로 바뀌고, 이자·배당 현금흐름 분류에 새 요건이 생긴다.
  - 한계: 기준서 전문(eIFRS)은 열지 않았다. 확인한 것은 공개 요약 페이지다.
- 변동: IFRS 18 시행에 따른 IAS 7 개정(이자·배당 분류, 간접법 출발점)

### GL-SOFR
- 명칭: Secured Overnight Financing Rate (SOFR) (Federal Reserve Bank of New York, Reference Rates 페이지)
- URL: https://www.newyorkfed.org/markets/reference-rates/sofr (조회 2026-11-14)
- 확인: 정의 원문은 "a broad measure of the cost of borrowing cash overnight collateralized by Treasury securities"다.
  - 범위: Broad General Collateral Rate 전체 거래에, FICC DVP로 청산되는 양자 국채 repo를 더한다. 이 중 "specials" 일부는 걸러낸다.
  - 산출: "a volume-weighted median of transaction-level tri-party repo data …"이다.
  - 공시: "Each business day … at approximately 8:00 a.m. ET".
- 변동: 일별 금리 값(매 영업일 공시)

### GL-LIBOR-END
- 명칭: LIBOR transition (Financial Conduct Authority, Markets 페이지)
- URL: https://www.fca.org.uk/markets/libor-transition (조회 2026-11-14. 요청한 /markets/transition-libor가 이 주소로 넘어간다)
- 확인: LIBOR는 영구 종료됐다.
  - 현황: "The interest rate benchmark LIBOR has permanently ceased.", "all 35 LIBOR settings have now permanently ceased."
  - 종료 순서: 파운드화는 "Following the final publication of the 3-month synthetic sterling LIBOR setting on 28 March 2024"에 끝났다. 미 달러 overnight·12개월물은 "permanently ceased at the end of June 2023"이다.
  - 마지막 세팅: "The 1-month, 3-month and 6-month synthetic US dollar LIBOR settings … were published for the final time on 30 September 2024. This marked the end of LIBOR overall."

### GL-BIS-FX
- 명칭: Triennial Central Bank Survey of foreign exchange and OTC derivatives markets 2025 (BIS, 14th survey). 보도자료 「Global FX trading hits $9.6 trillion per day in April 2025 …」(2025-09-30)
- URL: https://www.bis.org/media-releases/20250930-global-fx-trading-hits-96-trillion-day-april-2025-and-otc-interest-rate-derivatives-surge-79 (조회 2026-11-14)
- 확인: 최신 판은 2025년 4월 조사다(서베이 페이지: "The 14th Triennial Survey … was conducted in April 2025").
  - 외환 일평균 거래액: "trading in FX markets reached $9.6 trillion per day in April 2025, up 28% from 2022".
  - 상품별: FX swaps "$4 trillion in April 2025 – up 5% from April 2022". spot은 +42%, outright forwards는 +60%다.
  - OTC 금리파생: "$7.9 trillion per day"(+59%).
  - 서베이 페이지: https://www.bis.org/publications/triennial-central-bank-survey-foreign-exchange-and-over-the-counter-otc-derivatives-markets-2025
- 변동: 3년 주기 수치(다음 조사 2028년)

### GL-LATEPAY
- 명칭: Directive 2011/7/EU of the European Parliament and of the Council of 16 February 2011 on combating late payment in commercial transactions (recast)
- URL: http://publications.europa.eu/resource/cellar/07b9575f-efc1-492a-b529-a51dd5652762.0016.03/DOC_1 (조회 2026-11-14. EU Publications Office Cellar에 CELEX 32011L0007을 html로 요청해 받았다. eur-lex.europa.eu는 JS 챌린지로 본문이 열리지 않았다.)
- 확인: 제3조(Transactions between undertakings) ⑤는 "Member States shall ensure that the period for payment fixed in the contract does not exceed 60 calendar days, unless otherwise expressly agreed in the contract and provided it is not grossly unfair to the creditor within the meaning of Article 7."다.
  - 계약에 기한이 없을 때(③(b)): 법정 기한은 "30 calendar days following the date of receipt by the debtor of the invoice …"다.
  - 검수 절차(④): "does not exceed 30 calendar days". 공공기관이 채무자면 제4조⑥에 따라 "in any event does not exceed 60 calendar days".
- 확인(개정 진행): 대체 규정안이 계류 중이다. 원문 출처는 아래와 같다.
  - 규정안 원문(Cellar): COM(2023) 533 final, "Proposal for a Regulation … on combating late payment in commercial transactions". 원문 http://publications.europa.eu/resource/cellar/899cd32f-520e-11ee-9220-01aa75ed71a1.0002.03/DOC_1
  - 진행 현황(유럽의회 Legislative Observatory): https://oeil.europarl.europa.eu/oeil/en/procedure-file?reference=2023/0323(COD)
  - 규정안 내용: "the payment period shall not exceed 30 calendar days"로 B2B·G2B 모두 30일 상한을 둔다. 제19조로 현 지침을 폐지한다(Repeal).
  - 절차(2023/0323(COD)): 2023-09-12 발의, 2024-04-23 의회 1독회 결정(T9-0299/2024), 2024-11-13 새 회기에서 심의 재개. 현 단계는 "Awaiting Council's 1st reading position"이다. 아직 채택되지 않았다.
- 변동: B2B 지급 기한(현행 60일 → 규정안 30일. 채택 여부 추적)

### GL-ACT-CASH
- 명칭: The ACT Competency Framework (The Association of Corporate Treasurers)
- URL: https://www.treasurers.org/cpd-and-training/competency-framework/ (조회 2026-11-14)
- 확인: 자금 예측(cash forecasting)만 따로 다룬 공개 기준은 없어, 역량 프레임워크의 해당 영역으로 대신한다.
  - 유동성 관리: "Liquidity management focuses on the organisation's short-term need to meet payments as they fall due. This can be achieved through the development of accurate cashflow forecasting solutions, the effective management of working capital and access to external sources of funds."
  - 현금 관리: "the process of managing the flow of cash around the organisation" (pooling, sweeping, netting 예시).
  - 재무 관리: "Cashflow forecasting … are all core aspects."
  - 잉여 현금 운용: "An investment strategy based on security, liquidity and yield".

### GL-CH11
- 명칭: 11 U.S.C. § 362 — Automatic stay (United States Code, Title 11 Bankruptcy, Chapter 3 Subchapter IV. govinfo 「United States Code, 2023 Edition」)
- URL: https://www.govinfo.gov/content/pkg/USCODE-2023-title11/html/USCODE-2023-title11-chap3-subchapIV-sec362.htm (조회 2026-11-14. uscode.house.gov의 §362 주소는 404였다. 사이트에 「temporary format」 안내가 떠 있다.)
- 확인: §362(a) 원문은 "a petition filed under section 301, 302, or 303 of this title … operates as a stay, applicable to all entities, of—"다. 정지 대상(각 호 요지)은 다음과 같다.
  - (1) 채무자에 대한 소송·절차의 개시·속행
  - (2) 판결 집행
  - (3) 재단 재산의 점유·지배 행위
  - (4)·(5) 담보권 설정·완성·실행
  - (6) 신청 전 채권의 추심
  - (7) "the setoff of any debt owing to the debtor that arose before the commencement of the case"
  - 예외: (b)에 정지되지 않는 경우를 열거한다(형사절차 등).
  - 한계: §1101 이하 Chapter 11 본문은 열지 않았다. 2023 Edition 이후 개정 여부는 이 페이지로 확인할 수 없다.

### GL-BASEL-LCR
- 명칭: Basel III: The Liquidity Coverage Ratio and liquidity risk monitoring tools (BCBS, 2013-01-07. 지금은 consolidated Basel Framework에 통합)
- URL: https://www.bis.org/publications/201301-standards-basel-iii-liquidity-coverage-ratio-and-liquidity-risk-monitoring-tools (조회 2026-11-14. /publ/bcbs238.htm과 bcbs238.pdf 둘 다 이 페이지로 넘어갔다.)
- 확인: LCR 정의는 은행이 "an adequate stock of unencumbered high-quality liquid assets (HQLA) that can be converted into cash easily and immediately … to meet its liquidity needs for a 30 calendar day liquidity stress scenario"를 갖추게 하는 것이다.
  - 100% 기준: "banks should treat a 100% LCR as a minimum requirement in normal times". 스트레스 때는 일시적으로 밑돌 수 있다.
  - 적용 시점: "The 100% minimum LCR requirement applies from 1 January 2019".
  - 한계: 기준서 본문 문단(HQLA ÷ 30일 순현금유출 ≥ 100% 수식)은 PDF 링크가 이 페이지로 넘어가서 열지 못했다. 확인한 것은 BIS 공식 요약문이다.

### GL-LMA
- 명칭: Loan Market Association (LMA) — About Us / Documents 페이지
- URL: https://www.lma.eu.com/documents-guidelines/documents (조회 2026-11-14)
- 확인: 표준 대출 문서를 내는 단체다. 문서 페이지에 "Recommended Form Documents" 목록이 있다(예: "Facility Agreements (33)").
  - 회원 전용: FAQ 원문은 "Select LMA documents are available to academic organisations or to students and lecturers … Otherwise LMA documents are available to members only."이다. 과거 문서는 회원에게만 "at a cost of £250 per document".
  - 단체 개요(https://www.lma.eu.com/about-us): "The LMA is the authoritative voice of the loan market in EMEA", "with over 900 members across 68 jurisdictions".
  - 한계: 문서 원문(Facility Agreement 조항 등)은 회원 전용이라 확인할 수 없다.

### GL-SEC-2A7
- 명칭: 17 CFR 270.2a-7 Money market funds (eCFR, current. 이력 "[79 FR 47958, Aug. 14, 2014, as amended at 80 FR 58153, Sept. 25, 2015; 88 FR 51521, Aug. 3, 2023]")
- URL: https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-17?chapter=II&part=270&section=270.2a-7 (조회 2026-11-14. eCFR 공식 렌더러가 내는 현행 본문이다.)
- 확인: 유동성 요건은 아래와 같다. 정의 조항은 (a)(8) "Daily liquid assets means"와 (a)(28) "Weekly liquid assets means"다.
  - 일일 최소: "(ii) Minimum daily liquidity requirement. The money market fund may not acquire any security other than a daily liquid asset if, immediately after the acquisition, the fund would have invested less than twenty-five percent of its total assets in daily liquid assets. This provision does not apply to tax exempt funds."
  - 주간 최소: "(iii) Minimum weekly liquidity requirement. … less than fifty percent of its total assets in weekly liquid assets."
  - 이사회 통지 기준: 일일 "less than twelve and a half percent", 주간 "less than twenty-five percent".
- 변동: daily 25% / weekly 50% (2023 개정 반영값)

### GL-FDIC
- 명칭: Understanding Deposit Insurance (Federal Deposit Insurance Corporation)
- URL: https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance (조회 2026-11-14)
- 확인: 보호 한도 원문은 "FDIC deposit insurance covers $250,000 per depositor, per FDIC-insured bank, for each account ownership category."다. 같은 은행·같은 소유 범주의 예금은 합산한다. 소유 범주가 다르면 범주마다 따로 보호한다.
- 변동: 보호 한도 금액

### GL-OECD-TP
- 명칭: OECD Transfer Pricing Guidelines for Multinational Enterprises and Tax Administrations 2022, Chapter X "Transfer pricing aspects of financial transactions" (OECD, 2022-01)
- URL: https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/01/oecd-transfer-pricing-guidelines-for-multinational-enterprises-and-tax-administrations-2022_57104b3a/0e655865-en.pdf (조회 2026-11-14. 발간물 소개 페이지는 Cloudflare 403이었고 같은 도메인의 PDF는 열렸다.)
- 확인: 장 구성은 10.2항 원문대로다. "Section C provides guidance on determining the arm's length conditions for treasury activities including intra-group loans, cash pooling and hedging. Section D examines financial guarantees, and Section E outlines the analysis of captive insurance companies."
  - 도입: 머리말에 "in 2020 a new Chapter X was added"라고 적혀 있다.
  - 캐시풀링 정의(10.110): "cash pooling is the pooling of cash balances as part of a short-term liquidity management arrangement".
  - 유형(10.111): "two basic types of cash pooling arrangements – physical and notional".
  - 풀 리더 보상(10.130): "a cash pool leader performs no more than a co-ordination or agency function … the cash pool leader's remuneration as a service provider will generally be similarly limited."

### GL-COSOERM
- 명칭: Enterprise Risk Management—Integrating with Strategy and Performance (COSO)
- URL: https://www.coso.org/enterprise-risk-management (조회 2026-11-14)
- 확인: 2004년 판을 갱신한 문서다. 원문은 "This update to the 2004 publication addresses the evolution of enterprise risk management …"다.
  - 핵심: "highlights the importance of considering risk in both the strategy-setting process and in driving performance". 적용 사례집 "Compendium of Examples"도 있다.
  - 한계: 이 페이지에는 발행 연도 「2017」이 적혀 있지 않다. 연도는 이 페이지로 확인하지 못했다. 프레임워크 본문은 유료 구매 대상이라 열지 않았다.

### GL-ISO31000
- 명칭: ISO 31000:2018 Risk management — Guidelines (ISO/TC 262, 2판, 발행 2018-02-14, 16쪽)
- URL: https://www.iso.org/standard/65694.html (조회 2026-11-14. 이 페이지는 curl·WebFetch 모두 403이라, 명칭·scope는 ISO Open Data 공식 배포 메타데이터의 id 65694 행에서 읽었다)
- 확인: 공식 scope 원문은 "ISO 31000:2018 provides guidelines on managing risk faced by organizations. The application of these guidelines can be customized to any organization and its context." 그리고 "provides a common approach to managing any type of risk and is not industry or sector specific"이다.
  - 성격: 인증 요건이 아니라 지침(Guidelines)이다.
  - 개정 진행: 현 단계 코드는 9092(검토 후 개정 결정)다. 후속판 "ISO/DIS 31000"(3판, id 88574)이 단계 4000(DIS)에 있다.
  - 한계: 표준 본문은 유료라 열지 못했다. iso.org 페이지 자체도 이번 조회에서 열리지 않았다.
- 변동: 판(2018 → 3판 개정 진행 중)

### GL-DODDFRANK7
- 명칭: Dodd-Frank Wall Street Reform and Consumer Protection Act, Public Law 111-203 (2010-07-21), Title VII — Wall Street Transparency and Accountability
- URL: https://www.govinfo.gov/content/pkg/PLAW-111publ203/html/PLAW-111publ203.htm (조회 2026-11-14)
- 확인: Title VII의 제목은 "TITLE VII--WALL STREET TRANSPARENCY AND ACCOUNTABILITY"이고, Subtitle A는 "Regulation of Over-the-Counter Swaps Markets"다. 약칭은 "the Wall Street Transparency and Accountability Act of 2010"이다.
  - 근거 조문: Sec. 723(Clearing)이 CEA §2(h)(7)에 청산 의무 예외를 넣었다.
  - 예외 요건(원문): "(i) is not a financial entity; (ii) is using swaps to hedge or mitigate commercial risk; and (iii) notifies the Commission … how it generally meets its financial obligations associated with entering into non-cleared swaps."
  - 선택권: "(B) Option to clear"에 따라 예외 적용은 해당 거래상대방의 재량이다.

### GL-CFTC-ENDUSER
- 명칭: 17 CFR 50.50 Non-financial end-user exception to the clearing requirement (eCFR, current. "[77 FR 74337, Dec. 13, 2012, as amended at 85 FR 76448, Nov. 30, 2020]")
- URL: https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-17?chapter=I&part=50&subpart=C&section=50.50 (조회 2026-11-14)
- 확인: (a)(1)의 요건은 셋이다.
  - (i) "Is not a 'financial entity' as defined in section 2(h)(7)(C)(i) of the Act"
  - (ii) "Is using the swap to hedge or mitigate commercial risk"
  - (iii) (b)항 정보를 SDR(없으면 CFTC)에 제공
  - 보고((b)): 정보는 연 1회로 갈음할 수 있다("for 365 days"). SEC 등록 발행인이면 이사회 위원회 승인 여부도 보고한다.
  - 상업위험 회피((c)): (1)은 상업 활동 위험 감소에 "economically appropriate"하거나, bona fide hedging이거나, ASC 815·GASB 53 회계상 위험회피일 것이다. 금리·통화·환율 변동도 포함한다. (2)는 "Not used for a purpose that is in the nature of speculation, investing, or trading"이다.

### GL-EMIR
- 명칭: Regulation (EU) No 648/2012 (EMIR) 제10조 Non-financial counterparties. 개정 Regulation (EU) 2024/2987 (EMIR 3, 2024-11-27 채택, OJ 2024-12-04). 기준값은 Commission Delegated Regulation (EU) No 149/2013 제11조.
- URL: http://publications.europa.eu/resource/cellar/8b00f163-b1e0-11ef-acb1-01aa75ed71a1.0006.03/DOC_1 (조회 2026-11-14. EU Publications Office Cellar CELEX 32024R2987)
- 확인: 아래 셋으로 나눠 적는다.
  - 원 EMIR 제10조(Cellar CELEX 32012R0648, 2012 공포문. http://publications.europa.eu/resource/cellar/665d41b1-2085-4584-af8a-45c605d62b94.0021.03/DOC_1): 비금융회사 포지션이 청산 기준을 넘으면 통지하고 청산 의무를 진다. 기준 산정에서는 "objectively measurable as reducing risks directly relating to the commercial activity or treasury financing activity" 거래, 곧 헤지를 뺀다. 이 Cellar 본은 2012 공포문이다. 2019 Refit 등 중간 개정은 반영돼 있지 않다.
  - 기준값(Cellar CELEX 32013R0149 제11조, 원 공포문. http://publications.europa.eu/resource/cellar/1993e51c-7f20-11e2-9294-01aa75ed71a1.0006.04/DOC_1): 신용·주식 "EUR 1 billion in gross notional value", 금리·외환 "EUR 3 billion in gross notional value"다. 이후 개정 여부는 확인하지 못했다.
  - EMIR 3 개정: 제10조①을 "Every 12 months, a non-financial counterparty … may calculate its uncleared positions"로 바꿨다. 계산하지 않거나 "uncleared positions" 기준을 넘으면 의무를 진다. 기준값은 ESMA RTS가 "the values of the clearing thresholds for uncleared positions"로 새로 정한다. 적용은 "from 24 December 2024 with the exception of … Article 10(1), (2) and (3) …, which shall not apply until the date of entry into force of the regulatory technical standards referred to in Article 10(4)"이다.
  - 한계: EMIR 3에 따른 새 RTS가 시행됐는지와 그 기준값은 확인하지 못했다.
- 변동: 청산 기준값(새 RTS 시행 시 변경)

### GL-ISDA
- 명칭: 2002 ISDA Master Agreement (International Swaps and Derivatives Association, 서점 페이지)
- URL: https://www.isda.org/book/2002-isda-master-agreement-mylibrary/ (조회 2026-11-14. 처음 시도한 /book/2002-isda-master-agreement-english/ 는 404였다.)
- 확인: 공개 소개문 원문은 "This Agreement updates the 1992 ISDA Master Agreements and is used to document transactions between parties in different jurisdictions and/or transactions involving different currencies."다.
  - 새 조항: "Close-out Amount, which replaces Market Quotation and Loss", "a set-off provision in Section 6(f)", "Force Majeure Termination Event in Section 5(b)(ii)". 일부 Events of Default(Section 5(a))의 유예기간을 줄였다.
  - 가격: MyLibrary 1년 구독 Member $150.00 / Non-member $300.00.
  - 한계: 계약서 원문은 유료 구독 대상이라 열지 못했다.

### GL-FEFTA
- 명칭: 外国為替及び外国貿易法(昭和二十四年法律第二百二十八号. 法令ID 324AC0000000228)
- URL: https://laws.e-gov.go.jp/api/1/lawdata/324AC0000000228 (조회 2026-11-14. e-Gov 법령 API v1이 돌려준 현행 전문 XML)
- 확인: 원칙은 자유이고 최소 관리다. 사후 보고는 아래 두 조문에 있다.
  - 제1조(目的): "対外取引が自由に行われることを基本とし、対外取引に対し必要最小限の管理又は調整を行う".
  - 제55조(支払等の報告): 거주자·비거주자가 지급 또는 수령을 "したときは、政令で定める場合を除き … 主務大臣に報告しなければならない"이다. 행위 후 보고다. 은행 등의 환거래로 한 지급은 그 은행 등을 거쳐 보고한다.
  - 제55조の3(資本取引の報告): "資本取引の当事者となつたときは、政令で定める場合を除き … その都度 … 財務大臣に報告しなければならない". 다만 제23조①의 사전 신고 대상(対外直接投資 중 해당분)은 예외다.
  - 사전 허가(제21조): 조약 이행, 국제수지, 환율 급변 등의 사태가 있을 때만 재무대신이 "許可を受ける義務を課することができる". 예외적 장치다.
  - 한계: 보고 면제 기준 금액(정령·성령)은 열지 않았다.
- 변동: 보고 면제 금액 기준(외환령·보고성령)

### GL-OFAC
- 명칭: OFAC FAQs — Entities Owned by Blocked Persons (50% Rule) (U.S. Department of the Treasury, Office of Foreign Assets Control)
- URL: https://ofac.treasury.gov/faqs/topic/1521 (조회 2026-11-14)
- 확인: 50% 규칙과 SDN 목록을 확인했다.
  - 합산(FAQ 399): "OFAC's 50 Percent Rule applies to entities owned 50 percent or more in the aggregate by one or more blocked persons". 예: 각 25%씩 가진 두 피제재자 → 차단 대상(2014-08-13 개정 지침).
  - 지배(FAQ 398): "OFAC's 50 Percent Rule speaks only to ownership and not to control". 50% 미만 보유나 지배만 있는 경우는 자동 차단이 아니다. 다만 주의가 필요하고 향후 지정될 수 있다.
  - SDN 목록(https://ofac.treasury.gov/sanctions-list-service): "the SDN list contains the names of individuals, entities and groups designated by OFAC as well as the listing of maritime vessels and aircraft that are blocked by OFAC". Sanctions List Service에서 받거나 검색(fuzzy logic)할 수 있다.

