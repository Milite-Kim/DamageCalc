//DamageCalc\js\data\operators\rossi.js

const RossiData = {
    "id": "rossi",
    "name": "로시",
    "element": "physical",
    "weaponType": "sword",      // TODO: 실제 무기 타입 확인 필요 (단검류)
    "majorStat": "agility",
    "minorStat": "intellect",
    "image": "",

    "stats": {
        "1":  { "operatorAtk": 30,  "strength": 10,  "agility": 23,  "intellect": 14,  "will": 9  },
        "20": { "operatorAtk": 93,  "strength": 29,  "agility": 56,  "intellect": 36,  "will": 26 },
        "40": { "operatorAtk": 159, "strength": 48,  "agility": 90,  "intellect": 60,  "will": 44 },
        "60": { "operatorAtk": 225, "strength": 68,  "agility": 125, "intellect": 83,  "will": 63 },
        "80": { "operatorAtk": 291, "strength": 88,  "agility": 159, "intellect": 106, "will": 81 },
        "90": { "operatorAtk": 323, "strength": 98,  "agility": 177, "intellect": 118, "will": 90 }
    },

    "skills": {
        "basicAttack": {
            "name": "끓어오르는 늑대혈",
            "type": "basicAttack",
            "element": "physical",
            "description": "적에게 최대 5단 물리 피해를 줍니다. 낙하 공격 및 처형 공격 포함.",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 27, "2": 30, "3": 33, "4": 35, "5": 38,
                        "6": 41, "7": 44, "8": 46, "9": 49,
                        "M1": 52, "M2": 56, "M3": 61
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 32, "2": 35, "3": 38, "4": 41, "5": 44,
                        "6": 47, "7": 51, "8": 54, "9": 57,
                        "M1": 61, "M2": 65, "M3": 71
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 34, "2": 37, "3": 41, "4": 44, "5": 47,
                        "6": 51, "7": 54, "8": 57, "9": 61,
                        "M1": 65, "M2": 71, "M3": 77
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 41, "2": 45, "3": 49, "4": 53, "5": 57,
                        "6": 61, "7": 65, "8": 69, "9": 73,
                        "M1": 78, "M2": 84, "M3": 91
                    }
                },
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 50, "2": 55, "3": 60, "4": 65, "5": 70,
                        "6": 75, "7": 80, "8": 85, "9": 90,
                        "M1": 96, "M2": 104, "M3": 113
                    }
                },
                "execute": {
                    "name": "처형",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 400, "2": 440, "3": 480, "4": 520, "5": 560,
                        "6": 600, "7": 640, "8": 680, "9": 720,
                        "M1": 770, "M2": 830, "M3": 900
                    }
                },
                "plunging": {
                    "name": "낙하 공격",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 80, "2": 88, "3": 96, "4": 104, "5": 112,
                        "6": 120, "7": 128, "8": 136, "9": 144,
                        "M1": 154, "M2": 166, "M3": 180
                    }
                }
            }
        },

        "battleSkill": {
            "name": "혈홍지영",
            "type": "battleSkill",
            "element": "physical",
            // NOTE: 2단 (狼之珀)은 열기 피해 - 현재 구조상 페이즈별 원소 설정 불가.
            // 2단에 열기 피해 증가 적용이 필요하다면 별도 처리 필요.
            "description": "목표에 돌진하여 물리 피해를 주고 띄우기를 부여합니다. " +
                "목표가 파방 상태라면, 狼之珀가 추가 발동하여 열기 피해를 줍니다. " +
                "狼之珀 피해 후 목표에 爪印斫痕 상태를 부여합니다.",
            "condition": {
                "id": "wolfAmber",
                "checkboxLabel": "狼之珀 추가 발동 (파방 상태 적)",
                "defaultPhases": ["1st"],
                "activePhases": ["1st", "2nd"]
            },
            "phases": {
                "1st": {
                    "name": "돌진 물리 피해",
                    "multipliers": {
                        "1": 85,  "2": 94,  "3": 102, "4": 111, "5": 120,
                        "6": 128, "7": 137, "8": 145, "9": 154,
                        "M1": 164, "M2": 177, "M3": 192
                    }
                },
                "2nd": {
                    "name": "狼之珀 열기 피해",
                    // NOTE: 열기 피해이나 스킬 원소는 physical로 설정됨
                    "multipliers": {
                        "1": 128, "2": 141, "3": 154, "4": 166, "5": 179,
                        "6": 192, "7": 205, "8": 218, "9": 230,
                        "M1": 246, "M2": 265, "M3": 288
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "launch",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "띄우기 부여"
                },
                {
                    "type": "debuff",
                    "stat": "zhaMark",
                    "target": "enemy",
                    "value": true,
                    "requireCondition": "wolfAmber",
                    "checkboxLabel": "爪印斫痕 부여 (狼之珀 발동 시)"
                }
            ]
        },

        "ultimate": {
            "name": "'이조' 기습",
            "type": "ultimate",
            "element": "heat",
            "description": "망토를 휘두르며 다단 열기 피해를 주고, 이후 단검으로 2단 베기를 가하며 대량의 열기 피해와 열기 부착을 부여합니다. 치명타 시 치명타 피해가 추가로 증가합니다.",
            // NOTE: 치명타 피해 고정 보너스 +60% 내장 - 재능 '궁극기 치명타 피해 보너스'로 토글 처리
            "phases": {
                "stab": {
                    "name": "재빠른 찌르기 (다단 열기 피해 합계)",
                    // NOTE: 실제 타격 횟수 불명. 합계 배율로 hitCount: 1 처리.
                    "multipliers": {
                        "1": 275, "2": 300, "3": 325, "4": 350, "5": 375,
                        "6": 400, "7": 425, "8": 450, "9": 475,
                        "M1": 525, "M2": 550, "M3": 600
                    }
                },
                "slash1": {
                    "name": "1차 베기 열기 피해",
                    "multipliers": {
                        "1": 111, "2": 122, "3": 133, "4": 145, "5": 156,
                        "6": 167, "7": 178, "8": 189, "9": 200,
                        "M1": 214, "M2": 231, "M3": 250
                    }
                },
                "slash2": {
                    "name": "2차 베기 열기 피해",
                    "multipliers": {
                        "1": 333, "2": 367, "3": 400, "4": 433, "5": 467,
                        "6": 500, "7": 534, "8": 567, "9": 600,
                        "M1": 642, "M2": 692, "M3": 750
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "burn",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "열기 부착 부여"
                }
            ]
        },

        "linkedSkill": {
            "name": "요영시각",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적이 동시에 파방 상태와 법술 부착 상태일 때 발동 가능. " +
                "1차 발동: 물리 피해. " +
                "2차 발동: 물리 피해 + 법술 부착 스택 전부 소비하여 스택당 추가 물리 피해 + 띄우기. " +
                "2차 발동 후 치명타율과 치명타 피해가 15초간 증가.",
            "condition": {
                "id": "secondActivation",
                "checkboxLabel": "2차 발동 포함",
                "defaultPhases": ["1st"],
                "activePhases": ["1st", "2nd", "3rd"]
            },
            "phases": {
                "1st": {
                    "name": "1차 연계기 물리 피해",
                    "multipliers": {
                        "1": 67,  "2": 74,  "3": 80,  "4": 87,  "5": 93,
                        "6": 100, "7": 107, "8": 113, "9": 120,
                        "M1": 128, "M2": 138, "M3": 150
                    }
                },
                "2nd": {
                    "name": "2차 연계기 물리 피해",
                    "multipliers": {
                        "1": 133, "2": 147, "3": 160, "4": 173, "5": 187,
                        "6": 200, "7": 213, "8": 227, "9": 240,
                        "M1": 257, "M2": 277, "M3": 300
                    }
                },
                "3rd": {
                    "name": "소비된 아츠 부착 스택당 추가 물리 피해",
                    "dynamicHitCount": ["cryoStacks", "heatStacks", "electricStacks", "natureStacks"],
                    "multipliers": {
                        "1": 80,  "2": 88,  "3": 96,  "4": 104, "5": 112,
                        "6": 120, "7": 128, "8": 136, "9": 144,
                        "M1": 154, "M2": 166, "M3": 180
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "launch",
                    "target": "enemy",
                    "requireCondition": "secondActivation",
                    "checkboxLabel": "띄우기 부여 (2차 연계기)"
                }
            ]
        }
    },

    "talents": [
        {
            "id": "nimble",
            "name": "민첩",
            "description": "민첩 +60",
            "effects": [
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 60
                }
            ]
        },
        {
            "id": "zhaMark",
            "name": "작흔 (爪印斫痕)",
            "description": "狼之珀 피해 후 목표에 爪印斫痕 부여 (25초). " +
                "지속 중 목표는 매초 공격력 30%의 물리 피해를 받으며(DoT - 미구현), " +
                "받는 물리 피해와 열기 피해 +12%.",
            "toggleable": true,
            "checkboxLabel": "爪印斫痕 활성화: 받는 피해 증가 적용",
            "effects": [
                // NOTE: 정확히는 물리/열기 받는 피해 증가. 현재 applyEffect 한계로
                // takenDamageIncrease (범용)으로 처리. 나중에 정밀 구현 필요.
                {
                    "stat": "takenDamageIncrease",
                    "target": "enemy",
                    "value": 12
                }
                // TODO: 爪印斫痕 DoT: 공격력 30%/초 물리 피해 (별도 구현 필요)
            ]
        },
        {
            "id": "boilingBlood",
            "name": "비혈 (沸血)",
            "description": "爪印斫痕 상태의 적에게 스킬 치명타 시, 공격력 24%의 열기 피해 추가 발동. " +
                "동시에 지능×0.08 생명력 회복. 목표가 연소 상태라면 피해/회복 1.5배.",
            // TODO: additionalDamage 메커니즘 필요 (onDebuff: 'zhaMark').
            // zhaMark가 ABNORMAL_DAMAGE_TYPES에 없어 현재 미작동.
            // main.js에서 zhaMark 이상 처리 또는 별도 로직 추가 필요.
            "effects": []
        },
        {
            "id": "ultimateCritBonus",
            "name": "궁극기 치명타 피해 보너스",
            "description": "궁극기 '이조' 기습 시전 시 치명타 피해 +60% (내장 보너스)",
            "toggleable": true,
            "checkboxLabel": "궁극기 추가 치명타 피해 +60% 적용",
            "effects": [
                {
                    "stat": "critDamage",
                    "target": "self",
                    "value": 60
                }
            ]
        },
        {
            "id": "linkedSkillCritBuff",
            "name": "요영시각 치명타 버프",
            "description": "연계기 2차 발동 후 15초간: 치명타율 +25%, 치명타 피해 +50% (M3 기준)",
            "toggleable": true,
            "checkboxLabel": "요영시각 치명타 버프 활성 (치명타율 +25%, 치명타 피해 +50%)",
            "effects": [
                {
                    "stat": "critRate",
                    "target": "self",
                    "value": 25
                },
                {
                    "stat": "critDamage",
                    "target": "self",
                    "value": 50
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "憧憬의 시작점",
            "description": "전기 혈홍지영과 연계기 요영시각의 피해 배율 1.15배. 狼之珀 명중 후 기력 10 회복 (기력 회복은 미구현)",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.15,
                    "conditions": {
                        "skill": ["battleSkill", "linkedSkill"]
                    }
                }
            ]
        },
        {
            "level": 2,
            "name": "이상적인 거리",
            "description": "민첩 +20, 치명타율 +7%",
            "effects": [
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 20
                },
                {
                    "stat": "critRate",
                    "target": "self",
                    "value": 7
                }
            ]
        },
        {
            "level": 3,
            "name": "유형의 책임",
            "description": "재능 비혈 강화: 기본 피해 배율 +8%, 회복 기본 생명력 +지능×0.04 (비혈 구현 후 적용 예정)",
            "effects": [
                {
                    "stat": "talentEnhancement",
                    "target": "self",
                    "value": 8,
                    "conditions": {
                        "talentId": "boilingBlood"
                    }
                }
            ]
        },
        {
            "level": 4,
            "name": "순수한 소원",
            "description": "궁극기 기력 소모 -15% (미구현)",
            "effects": []
        },
        {
            "level": 5,
            "name": "전설의 종착점",
            "description": "궁극기 피해 배율 1.1배, 궁극기 치명타 피해 추가 +30%",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.1,
                    "conditions": {
                        "skill": "ultimate"
                    }
                },
                // NOTE: critDamage 스킬 조건 필터링 미지원. 궁극기 계산 시 수동으로
                // 치명타 피해 +30% 토글 활성화 필요하거나, 별도 처리 필요.
                {
                    "stat": "critDamage",
                    "target": "self",
                    "value": 30,
                    "conditions": {
                        "userToggleable": true
                    },
                    "checkboxLabel": "잠재 5단계: 궁극기 치명타 피해 +30%"
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RossiData;
}
if (typeof window !== 'undefined') {
    window.RossiData = RossiData;
}
