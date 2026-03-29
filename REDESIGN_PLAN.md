# DamageCalc 전면 재설계 계획

## 목표

- 사이클 시뮬레이터: 스킬 순서 입력 → 총 피해 + 세부 내역 출력
- SP / 궁극기 에너지 자동 추적
- 아츠 부착 / 방어불능 스택 자연스러운 누적·소모
- 무기·장비 옵션 자동 적용
- 모든 기능을 함수화·모듈화 (타 프로젝트 재사용 가능)

---

## trigger / require 태그 시스템

### 개념

| 키워드 | 역할 | 예시 |
|--------|------|------|
| `trigger` | 이 스킬/효과가 제공하는 것 | `["damageIncrease", "heat"]` |
| `require` | 이 효과가 발동되려면 필요한 조건 | `[{ tag: "ultimate" }]` |

### 효과 예시

```js
// 궁극기 피해 증가 30%
{ value: 30, trigger: ["damageIncrease"], require: [{ tag: "ultimate" }] }

// 모든 피해 증가 15%
{ value: 15, trigger: ["damageIncrease"] }

// 열기 부착 부여
{ trigger: ["applyHeatAttachment"] }

// 방어불능 1스택 이상일 때만 발동
{ value: 128, trigger: ["heat"], require: [{ tag: "defenseless", minStacks: 1 }] }
```

### 계산 엔진 사용법

```js
// 궁극기 피해 계산 맥락
const context = { skillType: "ultimate", element: "heat", ... };

// "damageIncrease" 태그를 가진 효과 중 context에 require 충족하는 것만 합산
const totalDmgIncrease = effectResolver.sum("damageIncrease", context);
```

### require 조건 종류

```js
// 스킬 종류
require: [{ tag: "ultimate" }]
require: [{ tag: "battleSkill" }]

// 적 상태
require: [{ tag: "defenseless", minStacks: 1 }]
require: [{ tag: "burn" }]

// 자신 상태 / 조건
require: [{ tag: "selfCondition", id: "zhaMark" }]
```

---

## SP 시스템

- **공유 자원** (파티 전체)
- 시작: 200 / 최대: 300
- 자연 회복: 100 / 12초 (~8.33/초)
- 스킬 소모: 100 고정

### 반환(return) vs 회복(recovery) 구분

| 구분 | 설명 | 궁극기 충전 영향 |
|------|------|----------------|
| 반환 | 스킬/재능이 소모 후 돌려주는 SP | 반환된 만큼 충전량 감소 |
| 회복 | 독립적으로 추가되는 SP (뱅가드, 자연 회복) | 영향 없음 |

### 내부 추적 모델

```
총 SP = 순수SP + 반환SP  (내부적으로 분리 추적)

스킬 사용 시:
  fromReturned = min(반환SP, 100)
  fromFresh    = 100 - fromReturned
  반환SP      -= fromReturned
  순수SP      -= fromFresh
```

---

## 궁극기 에너지 시스템

```
배틀스킬 사용 시: (fromFresh / 100) × 6.5  충전
연계기 사용 시:   고정 10                    충전
```

- 팀원 배틀스킬도 내 궁극기 충전에 기여
- 팀원의 SP 반환량도 추적 필요

---

## 제안 아키텍처

```
/engine/
  core/
    tags.js              - 태그 레지스트리 + 의미 정의
    effectResolver.js    - 맥락에 따른 효과 필터링
    damageFormula.js     - 순수 계산 함수
  simulation/
    spSystem.js          - SP 풀 (순수/반환 분리 추적)
    ultimateSystem.js    - 궁극기 에너지
    statusTracker.js     - 적/자신 상태 (스택, 이상 등)
    cycleSimulator.js    - 액션 시퀀스 실행기
  data/
    tagDefinitions.js    - 태그별 동작 정의
    statusDefinitions.js - 이상 상태 피해 공식

/data/
  operators/             - 새 포맷
  weapons/
  equipment/
  statusEffects/

/ui/
  main.js
  components/
```

---

## 확인 필요 사항 (재설계 시작 전)

- [ ] 강력한 일격 SP 회복량 (고정값인지, 오퍼레이터별 차이 있는지)
- [ ] 팀원 배틀스킬의 "반환되지 않은 SP" 추적 방식 확인
- [ ] 스킬 시전 시간 데이터 출처
- [ ] 기존 데이터(오퍼레이터 23개+) 마이그레이션 방식 결정
- [ ] UI 방향 (기존 HTML/CSS 유지 or 프레임워크 도입)
