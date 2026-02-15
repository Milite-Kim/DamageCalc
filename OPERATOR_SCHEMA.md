# 오퍼레이터 데이터 통일 스키마

## 설계 원칙
1. **모든 효과는 `effects` 배열로 통일** - 재능, 잠재, 스킬 부가효과 모두 동일한 구조
2. **체크박스 조건은 `toggleable` + `checkboxLabel`로 통일** - UI에서 체크박스로 on/off 가능한 효과
3. **스킬 부가효과는 `appliedEffects` 배열로 통일** - 디버프, 버프 모두 배열로 처리 (중복 키 문제 해결)
4. **조건은 `conditions` (복수형)으로 통일**
5. **궁극기 강화 스킬은 `enhance` 접두사 유지** - 레바테인 방식 유지

---

## 기본 구조

```js
const OperatorData = {
    "id": "operatorId",
    "name": "오퍼레이터 이름",
    "element": "heat|electric|cryo|nature|physical",
    "weaponType": "sword|greatsword|handcannon|artsUnit|polearm",
    "majorStat": "strength|agility|intellect",
    "minorStat": "strength|agility|intellect",
    "image": "",

    "stats": { /* 레벨별 스탯 - 기존과 동일 */ },
    "skills": { /* 스킬 데이터 */ },
    "talents": [ /* 재능 배열 */ ],
    "potentials": [ /* 잠재 배열 */ ]
};
```

---

## skills 구조

### 기본 공격 (basicAttack)
```js
"basicAttack": {
    "name": "스킬 이름",
    "type": "basicAttack",
    "element": "physical|heat|...",
    "phases": {
        "1st": {
            "name": "일반 공격 1단계",
            "type": "basicAttack",
            "multipliers": { "1": 23, ..., "M3": 51 }
        },
        // 강력한 일격인 마지막 타
        "5th": {
            "name": "일반 공격 5단계 (강력한 일격)",
            "type": "heavyStrike",
            "isBasicAttack": true,
            "multipliers": { ... }
        },
        "execute": { ... },
        "plunging": { ... }
    }
}
```

### 배틀 스킬 (battleSkill)
```js
"battleSkill": {
    "name": "스킬 이름",
    "type": "battleSkill",
    "element": "physical|heat|...",
    "description": "스킬 설명",
    "phases": {
        "1st": {
            "name": "피해 이름",
            "multipliers": { ... }
        }
    },
    // ★ 통일: 스킬이 부여하는 버프/디버프는 appliedEffects 배열
    "appliedEffects": [
        {
            "type": "debuff",
            "stat": "physicalVulnerability",   // constants.js의 COMBAT_EFFECTS 참조
            "target": "enemy",
            "values": {
                "1": 5, "2": 5, ..., "M3": 12
            },
            "checkboxLabel": "배틀 스킬 물리 취약 적용"
        },
        {
            "type": "debuff",
            "stat": "heatVulnerability",
            "target": "enemy",
            "values": {
                "1": 5, "2": 5, ..., "M3": 10
            },
            "checkboxLabel": "배틀 스킬 열기 취약 적용"
        }
    ]
}
```

### 연계 스킬 (linkedSkill)
```js
"linkedSkill": {
    "name": "스킬 이름",
    "type": "linkedSkill",
    "element": "physical|heat|...",
    "description": "스킬 설명",
    "phases": {
        "1st": {
            "name": "피해 이름",
            "multipliers": { ... }
        }
    },
    // ★ 버프도 동일한 appliedEffects 배열
    "appliedEffects": [
        {
            "type": "buff",
            "stat": "linkBuff",
            "target": "self",
            "value": true,
            "checkboxLabel": "연타 버프 적용"
        }
    ]
}
```

### 궁극기 (ultimate) - 피해가 있는 경우
```js
"ultimate": {
    "name": "스킬 이름",
    "type": "ultimate",
    "element": "physical|heat|...",
    "description": "스킬 설명",
    "phases": {
        "1st": {
            "name": "피해 이름",
            "multipliers": { ... }
        }
    }
}
```

### 궁극기 - 틱 데미지 (아델리아)
```js
"ultimate": {
    "name": "복슬복슬 파티",
    "type": "ultimate",
    "element": "nature",
    "description": "적에게 0.3초 간격으로 3초 간 피해를 준다 (총 10회)",
    "phases": {
        "1st": {
            "name": "틱당 피해",
            "hitCount": 10,        // ★ 총 타격 횟수
            "multipliers": {
                "1": 73, ..., "M3": 165
            }
        }
    }
}
```

계산 로직에서 `hitCount`가 있으면 최종 데미지에 `hitCount`를 곱합니다.
잠재 등으로 지속시간이 늘어나면 `hitCountBonus`로 추가 타수를 처리합니다.

### 궁극기 - 버프만 부여하는 경우 (안탈)
```js
"ultimate": {
    "name": "오버클럭 타임",
    "type": "ultimate",
    "description": "팀 전체에게 전기 증폭과 열기 증폭을 부여한다",
    // phases 없음 (피해 없음)
    "appliedEffects": [
        {
            "type": "buff",
            "stat": "heatAmplify",
            "target": "team",
            "values": {
                "1": 8, ..., "M3": 20
            },
            "checkboxLabel": "궁극기 열기 증폭 적용"
        },
        {
            "type": "buff",
            "stat": "electricAmplify",
            "target": "team",
            "values": {
                "1": 8, ..., "M3": 20
            },
            "checkboxLabel": "궁극기 전기 증폭 적용"
        }
    ]
}
```

### 궁극기 - 피해 없이 자원 회복만 (아케쿠리)
```js
"ultimate": {
    "name": "소대, 집합!",
    "type": "ultimate",
    "description": "스킬 게이지를 회복한다"
    // phases 없음, appliedEffects 없음
}
```

### 궁극기 강화 스킬 (레바테인)
```js
// 배틀 스킬 내 enhance 접두사로 궁극기 중 강화 스킬 구분
"battleSkill": {
    "phases": {
        "1st": { ... },          // 일반 모드
        "last": { ... },         // 일반 모드 마지막
        "enhance1st": { ... },   // 궁극기 중 강화
        "enhance2nd": { ... },   // 궁극기 중 강화
        "enhanceLast": { ... }   // 궁극기 중 강화 마지막
    }
}

// 궁극기 내 강화 기본 공격도 동일
"ultimate": {
    "phases": {
        "enhance1st": { ... },   // 궁극기 강화 기본 공격 1타
        "enhance2nd": { ... },
        "enhance3rd": { ... },
        "enhance4th": { "type": "heavyStrike", ... }
    }
}
```

---

## talents 구조

```js
"talents": [
    // 패시브 스탯 증가
    {
        "id": "talentId",
        "name": "재능 이름",
        "description": "설명",
        "effects": [
            {
                "stat": "intellect",           // 증가시킬 스탯
                "target": "self",
                "value": 60
            }
        ]
    },

    // 저항 무시 등 전투 효과
    {
        "id": "heartOfFlame",
        "name": "불꽃의 심장",
        "description": "적의 열기 저항 20 무시",
        "effects": [
            {
                "stat": "heatResistanceIgnore",
                "target": "enemy",
                "value": 20
            }
        ]
    },

    // 조건부 동적 효과 (여풍의 돈오)
    {
        "id": "illumination",
        "name": "돈오",
        "description": "지능 및 의지 스탯 1당, 공격력 0.15% 증가",
        "effects": [
            {
                "stat": "atkIncrease",
                "target": "self",
                "dynamicValue": {
                    "basedOn": ["intellect", "will"],
                    "perPoint": 0.15
                }
            }
        ]
    },

    // 체크박스가 필요한 조건부 효과 (관리자의 본질 붕괴)
    {
        "id": "essenceCollapse",
        "name": "본질 붕괴",
        "description": "오리지늄 결정 소모 시 공격력 30% 증가 (15초)",
        "toggleable": true,                         // ★ 체크박스 표시
        "checkboxLabel": "본질 붕괴 활성화",          // ★ 체크박스 라벨
        "effects": [
            {
                "stat": "atkIncrease",
                "target": "self",
                "value": 30
            }
        ]
    },

    // 팀 버프 (아케쿠리의 연타)
    {
        "id": "stayingInTheZone",
        "name": "몰입의 시간",
        "description": "팀원에게 '연타' 버프를 적용",
        "toggleable": true,
        "checkboxLabel": "연타 버프 적용",
        "effects": [
            {
                "stat": "linkBuff",
                "target": "team",
                "value": true
            }
        ]
    },

    // 스탯 비례 팀 버프 (아크라이트의 황무지의 방랑자)
    {
        "id": "wildlandTrekker",
        "name": "황무지의 방랑자",
        "description": "팀의 전기 피해가 (자신의 지능 * 0.08)% 증가한다",
        "toggleable": true,
        "checkboxLabel": "황무지의 방랑자 활성화",
        "effects": [
            {
                "stat": "electricDamageIncrease",
                "target": "team",
                "dynamicValue": {
                    "basedOn": ["intellect"],
                    "perPoint": 0.08
                }
            }
        ]
    },

    // 추가 피해 재능 (여풍의 복마)
    {
        "id": "subduerOfEvil",
        "name": "복마",
        "description": "넘어뜨리기 시 공격력의 100% 물리 피해 추가",
        "effects": [
            {
                "stat": "additionalDamage",
                "target": "self",
                "value": 100,
                "conditions": {
                    "onDebuff": "knockdown"
                }
            }
        ]
    }
]
```

---

## potentials 구조

```js
"potentials": [
    // 스킬 배율 강화 (잠재 레벨로 on/off 가능 → 체크박스 불필요)
    {
        "level": 1,
        "name": "잠재 이름",
        "description": "설명",
        "effects": [
            {
                "stat": "skillMultiplier",
                "target": "self",
                "value": 1.2,
                "conditions": {
                    "skill": "battleSkill",
                    "phases": ["last", "enhanceLast"]
                }
            }
        ]
    },

    // 스탯 증가
    {
        "level": 2,
        "name": "잠재 이름",
        "description": "민첩 +10, 지능 +10",
        "effects": [
            { "stat": "agility", "target": "self", "value": 10 },
            { "stat": "intellect", "target": "self", "value": 10 }
        ]
    },

    // 팀 버프 (체크박스 필요 - 조건 발동이 필요한 경우)
    {
        "level": 3,
        "name": "혼신의 협력",
        "description": "팀 전체 공격력 10% 증가",
        "toggleable": true,
        "checkboxLabel": "혼신의 협력 활성화",
        "effects": [
            {
                "stat": "atkIncrease",
                "target": "team",
                "value": 10
            }
        ]
    },

    // 재능 강화 잠재 (여풍 3잠)
    {
        "level": 3,
        "name": "양성",
        "description": "돈오 효과 +0.05%",
        "effects": [
            {
                "stat": "talentEnhancement",
                "target": "self",
                "value": 0.05,
                "conditions": {
                    "talentId": "illumination"
                }
            }
        ]
    },

    // 틱 수 증가 잠재 (아델리아 3잠)
    {
        "level": 3,
        "name": "격렬한 분출",
        "description": "궁극기 지속시간 +1초 (틱 수 10 → 13)",
        "effects": [
            {
                "stat": "hitCountBonus",
                "target": "self",
                "value": 3,
                "conditions": {
                    "skill": "ultimate"
                }
            }
        ]
    },

    // 재능 효과 배율 강화 잠재 (아크라이트 3잠)
    {
        "level": 3,
        "name": "노래",
        "description": "재능 '황무지의 방랑자'의 효과가 1.3배로 적용된다",
        "effects": [
            {
                "stat": "talentEnhancement",
                "target": "self",
                "value": 1.3,
                "conditions": {
                    "talentId": "wildlandTrekker",
                    "effectStats": ["electricDamageIncrease"],
                    "mode": "multiply"
                }
            }
        ]
    },

    // 효과 없는 잠재
    {
        "level": 4,
        "effects": []
    },

    // 취약 강화 잠재 (안탈 5잠 - 잠재 레벨로 on/off 가능)
    {
        "level": 5,
        "name": "고사양 기술 테스트",
        "description": "배틀 스킬의 취약 효과 +4%",
        "effects": [
            {
                "stat": "appliedEffectEnhancement",
                "target": "self",
                "value": 4,
                "conditions": {
                    "skill": "battleSkill",
                    "effectStats": ["heatVulnerability", "electricVulnerability"]
                }
            }
        ]
    }
]
```

---

## 체크박스 규칙 정리

| 효과 출처 | 체크박스 필요? | 이유 |
|-----------|--------------|------|
| 스킬의 appliedEffects (디버프/버프) | O | 스킬을 사용했는지 여부를 선택 |
| 재능 (조건부 발동) | O | 조건 충족 여부를 선택 |
| 재능 (패시브 스탯) | X | 항상 적용 |
| 잠재 (스킬 배율 강화) | X | 잠재 레벨로 조절 |
| 잠재 (팀 버프, 조건부) | O | 조건 충족 여부를 선택 |
| 잠재 (스탯 증가) | X | 잠재 레벨로 조절 |

### 체크박스 표시 위치
- `toggleable: true`가 있는 재능/잠재 → 오퍼레이터 선택 시 아래에 체크박스
- 스킬의 `appliedEffects`에 `checkboxLabel`이 있는 것 → 오퍼레이터 선택 시 아래에 체크박스

---

## enhance 접두사 규칙 (레바테인 방식)

궁극기 발동 중 강화되는 스킬의 phase 키에 `enhance` 접두사를 사용:
- `"1st"`, `"2nd"`, `"last"` → 일반 모드
- `"enhance1st"`, `"enhance2nd"`, `"enhanceLast"` → 궁극기 중 강화 모드

이 방식은 유지합니다. UI에서 "일반 모드 / 궁극기 모드"를 구분하여 표시할 수 있습니다.

---

## 기존 대비 변경 요약

| 기존 | 변경 후 |
|------|--------|
| `artsDebuff: "burn"` | `appliedEffects: [{ type: "debuff", stat: "burn", ... }]` |
| `physicalDebuff: "heavyAttack"` | `appliedEffects: [{ type: "debuff", stat: "heavyAttack", ... }]` |
| `appliesDebuff: { type: "...", values: {} }` (단일 객체) | `appliedEffects: [{ ... }, { ... }]` (배열) |
| `appliesCrystal: true` | `appliedEffects: [{ type: "debuff", stat: "crystal", ... }]` |
| `grantsLinkBuff: true` | `appliedEffects: [{ type: "buff", stat: "linkBuff", ... }]` |
| `condition` (단수) | `conditions` (복수) 통일 |
| `requireActive: true/false` | 삭제. `toggleable: true`로 대체 |
| `userToggleable` (여기저기) | 재능/잠재 레벨의 `toggleable` + `checkboxLabel`로 통일 |
