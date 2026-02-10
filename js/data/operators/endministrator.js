//DamageCalc\js\data\operators\endministrator.js

const EndministratorData = {
    "id": "endministrator",
    "name": "관리자",
    "element": "physical",
    "weaponType": "sword",
    "majorStat": "agility",
    "minorStat": "strength",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 14,
            "agility": 14,
            "intellect": 9,
            "will": 10
        },
        "20": {
            "operatorAtk": 92,
            "strength": 38,
            "agility": 41,
            "intellect": 28,
            "will": 31
        },
        "40": {
            "operatorAtk": 157,
            "strength": 62,
            "agility": 69,
            "intellect": 47,
            "will": 53
        },
        "60": {
            "operatorAtk": 222,
            "strength": 86,
            "agility": 98,
            "intellect": 67,
            "will": 74
        },
        "80": {
            "operatorAtk": 287,
            "strength": 111,
            "agility": 126,
            "intellect": 87,
            "will": 96
        },
        "90": {
            "operatorAtk": 319,
            "strength": 123,
            "agility": 140,
            "intellect": 96,
            "will": 107
        }
    },

    "skills": {
        "basicAttack": {
            "name": "훼손 시퀀스",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 23, "2": 25, "3": 27, "4": 29, "5": 32,
                        "6": 34, "7": 36, "8": 39, "9": 41,
                        "M1": 44, "M2": 47, "M3": 51
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 27,
                        "2": 30,
                        "3": 32,
                        "4": 35,
                        "5": 38,
                        "6": 41,
                        "7": 43,
                        "8": 46,
                        "9": 49,
                        "M1": 52,
                        "M2": 56,
                        "M3": 61
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 30,
                        "2": 33,
                        "3": 36,
                        "4": 39,
                        "5": 42,
                        "6": 45,
                        "7": 48,
                        "8": 51,
                        "9": 54,
                        "M1": 58,
                        "M2": 63,
                        "M3": 68
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 35,
                        "2": 38,
                        "3": 41,
                        "4": 45,
                        "5": 48,
                        "6": 52,
                        "7": 55,
                        "8": 59,
                        "9": 62,
                        "M1": 67,
                        "M2": 72,
                        "M3": 78
                    }
                },
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,        // 일반 공격 피해 증가 적용됨
                    "multipliers": {
                        "1": 40,
                        "2": 44,
                        "3": 48,
                        "4": 52,
                        "5": 56,
                        "6": 60,
                        "7": 64,
                        "8": 68,
                        "9": 72,
                        "M1": 77,
                        "M2": 83,
                        "M3": 90
                    }
                },
                "execute": {
                    "name": "처형",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 400,
                        "2": 440,
                        "3": 480,
                        "4": 520,
                        "5": 560,
                        "6": 600,
                        "7": 640,
                        "8": 680,
                        "9": 720,
                        "M1": 770,
                        "M2": 830,
                        "M3": 900
                    }
                },
                "plunging": {
                    "name": "낙하 공격",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 80,
                        "2": 88,
                        "3": 96,
                        "4": 104,
                        "5": 112,
                        "6": 120,
                        "7": 128,
                        "8": 136,
                        "9": 144,
                        "M1": 154,
                        "M2": 166,
                        "M3": 180
                    }
                }
            }
        },

        "battleSkill": {
            "name": "구성 시퀀스",
            "type": "battleSkill",
            "element": "physical",
            "description": "오리지늄 아츠를 사용해 전방 일정 범위 내의 적을 공격하여 물리 피해를 주고 '강타' 합니다",
            "physicalDebuff": "heavyAttack",
            "phases": {
                "1st": {
                    "name": "기본 피해",
                    "multipliers": {
                        "1": 156,
                        "2": 171,
                        "3": 187,
                        "4": 202,
                        "5": 218,
                        "6": 234,
                        "7": 249,
                        "8": 265,
                        "9": 280,
                        "M1": 300,
                        "M2": 323,
                        "M3": 350
                    }
                },
                "heavyAttack": {
                    "name": "강타 피해",
                    "description": "방어불능 스택 소모 시 추가 피해",
                    "baseMultiplier": 150,
                    "perStackMultiplier": 150,
                    "requireDefenseless": true
                }
            }
        },

        "linkedSkill": {
            "name": "봉인 시퀀스",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 주고 '오리지늄 결정'을 부착합니다",
            "appliesCrystal": true,
            "physicalDebuff": "defenseless",
            "phases": {
                "1st": {
                    "name": "돌진 피해",
                    "multipliers": {
                        "1": 45,
                        "2": 49,
                        "3": 54,
                        "4": 58,
                        "5": 62,
                        "6": 67,
                        "7": 71,
                        "8": 136,
                        "9": 144,
                        "M1": 154,
                        "M2": 166,
                        "M3": 180
                    }
                },
                "crystalDestruction": {
                    "name": "결정 파괴 피해",
                    "description": "물리 이상 또는 방어 불능 부여 시 오리지늄 결정 소모",
                    "requireCrystal": true,
                    "triggerConditions": ["physicalDebuff", "defenseless"],
                    "multipliers": {
                        "1": 178,
                        "2": 196,
                        "3": 213,
                        "4": 231,
                        "5": 249,
                        "6": 267,
                        "7": 284,
                        "8": 302,
                        "9": 320,
                        "M1": 342,
                        "M2": 369,
                        "M3": 400
                    }
                }
            }
        },

        "ultimate": {
            "name": "폭격 시퀀스",
            "type": "ultimate",
            "element": "physical",
            "description": "적에게 물리피해를 줍니다. '오리지늄 결정' 부착 시 추가 피해",
            "phases": {
                "1st": {
                    "name": "1차 피해",
                    "multipliers": {
                        "1": 356,
                        "2": 391,
                        "3": 427,
                        "4": 462,
                        "5": 498,
                        "6": 533,
                        "7": 569,
                        "8": 604,
                        "9": 640,
                        "M1": 684,
                        "M2": 738,
                        "M3": 800
                    }
                },
                "crystalDestruction": {
                    "name": "결정 소모 추가 피해",
                    "requireCrystal": true,
                    "multipliers": {
                        "1": 267,
                        "2": 294,
                        "3": 320,
                        "4": 347,
                        "5": 374,
                        "6": 400,
                        "7": 427,
                        "8": 454,
                        "9": 480,
                        "M1": 514,
                        "M2": 554,
                        "M3": 600
                    }
                }
            }
        }
    },

    "talents": [
        {
            "id": "proficiency",
            "name": "능숙",
            "description": "민첩 60 증가",
            "requireActive": false,
            "effects": [
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 60,
                    "description": "민첩 +60"
                }
            ]
        },
        {
            "id": "essenceCollapse",
            "name": "본질 붕괴",
            "description": "적에게 부착된 '오리지늄 결정'이 소모됐을 때, 자신의 공격력 30% 증가. 15초 지속(중첩 불가)",
            "requireActive": true,
            "trigger": "crystalConsumed",
            "duration": 15,
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "value": 30,
                    "description": "공격력 30% 증가"
                }
            ]
        },
        {
            "id": "realityStop",
            "name": "현실 정지",
            "description": "'오리지늄 결정'이 부착된 적에게 주는 물리 피해 20% 증가",
            "requireActive": true,
            "effects": [
                {
                    "stat": "physicalDamageIncrease",
                    "target": "self",
                    "conditions": {
                        "targetHasCrystal": true,
                        "element": "physical"
                    },
                    "value": 20,
                    "description": "결정 부착 적 대상 물리 피해 20% 증가"
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "effects": []
        },
        {
            "level": 2,
            "name": "본질 붕괴 강화",
            "description": "본질 붕괴 발동 시 팀 전체 공격력 15% 증가",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "allies",
                    "value": 15,
                    "conditions": {
                        "requireTalent": "essenceCollapse"
                    },
                    "description": "본질 붕괴 발동 시 팀 전체 공격력 15% 증가"
                }
            ]
        },
        {
            "level": 3,
            "effects": []  // 3잠재 이상은 게임 내 미구현 상태
        },
        {
            "level": 4,
            "effects": []  // 3잠재 이상은 게임 내 미구현 상태
        },
        {
            "level": 5,
            "effects": []  // 3잠재 이상은 게임 내 미구현 상태
        }
    ]
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = EndministratorData;
}
// 브라우저용 추가
if (typeof window !== 'undefined') {
    window.EndministratorData = EndministratorData;
}