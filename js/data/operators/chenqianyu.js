//DamageCalc\js\data\operators\chenqianyu.js

const ChenQianyuData = {
    "id": "chenqianyu",
    "name": "진천우",
    "element": "physical",
    "weaponType": "sword",
    "majorStat": "agility",
    "minorStat": "strength",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 10,
            "agility": 20,
            "intellect": 8,
            "will": 9
        },
        "20": {
            "operatorAtk": 87,
            "strength": 31,
            "agility": 52,
            "intellect": 25,
            "will": 27
        },
        "40": {
            "operatorAtk": 147,
            "strength": 52,
            "agility": 86,
            "intellect": 42,
            "will": 46
        },
        "60": {
            "operatorAtk": 207,
            "strength": 74,
            "agility": 120,
            "intellect": 59,
            "will": 65
        },
        "80": {
            "operatorAtk": 267,
            "strength": 95,
            "agility": 154,
            "intellect": 77,
            "will": 84
        },
        "90": {
            "operatorAtk": 297,
            "strength": 106,
            "agility": 171,
            "intellect": 85,
            "will": 93
        }
    },

    "skills": {
        "basicAttack": {
            "name": "파비하",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 20,
                        "2": 22,
                        "3": 24,
                        "4": 26,
                        "5": 28,
                        "6": 30,
                        "7": 32,
                        "8": 34,
                        "9": 36,
                        "M1": 39,
                        "M2": 42,
                        "M3": 45
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 24,
                        "2": 26,
                        "3": 29,
                        "4": 31,
                        "5": 34,
                        "6": 36,
                        "7": 38,
                        "8": 41,
                        "9": 43,
                        "M1": 46,
                        "M2": 50,
                        "M3": 54
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 27,
                        "2": 29,
                        "3": 32,
                        "4": 35,
                        "5": 38,
                        "6": 40,
                        "7": 43,
                        "8": 46,
                        "9": 48,
                        "M1": 52,
                        "M2": 56,
                        "M3": 60
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
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
                        "M2": 62,
                        "M3": 68
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
            "name": "귀궁우",
            "type": "battleSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 주고 띄우기 상태를 부여한다",
            "phases": {
                "1st": {
                    "name": "물리 피해",
                    "multipliers": {
                        "1": 169,
                        "2": 186,
                        "3": 203,
                        "4": 219,
                        "5": 236,
                        "6": 253,
                        "7": 270,
                        "8": 287,
                        "9": 304,
                        "M1": 325,
                        "M2": 350,
                        "M3": 380
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "launch",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "띄우기 적용"
                }
            ]
        },

        "linkedSkill": {
            "name": "견천하",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 주고 띄우기 상태를 부여한다",
            "phases": {
                "1st": {
                    "name": "물리 피해",
                    "multipliers": {
                        "1": 120,
                        "2": 132,
                        "3": 144,
                        "4": 156,
                        "5": 168,
                        "6": 180,
                        "7": 192,
                        "8": 204,
                        "9": 216,
                        "M1": 231,
                        "M2": 249,
                        "M3": 270
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "launch",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "띄우기 적용"
                }
            ]
        },

        "ultimate": {
            "name": "예풍상",
            "type": "ultimate",
            "element": "physical",
            "description": "적을 빠르게 6번 벤 뒤, 강하게 벤다",
            "phases": {
                "1st": {
                    "name": "빠르게 베기",
                    "hitCount": 6,
                    "multipliers": {
                        "1": 36,
                        "2": 40,
                        "3": 43,
                        "4": 47,
                        "5": 50,
                        "6": 54,
                        "7": 58,
                        "8": 61,
                        "9": 65,
                        "M1": 69,
                        "M2": 75,
                        "M3": 81
                    }
                },
                "2nd": {
                    "name": "마무리 베기",
                    "multipliers": {
                        "1": 455,
                        "2": 500,
                        "3": 545,
                        "4": 591,
                        "5": 636,
                        "6": 682,
                        "7": 727,
                        "8": 773,
                        "9": 818,
                        "M1": 875,
                        "M2": 943,
                        "M3": 1023
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
            "effects": [
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 60
                }
            ]
        },
        {
            "id": "slashingEdge",
            "name": "칼날 베기",
            "description": "공격력 +40%",
            "checkboxLabel": "칼날 베가 공격력 40% 증가 적용",
            "effects": [
                {
                    "stat": "aktIncrease",
                    "target": "self",
                    "value": 40
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "절영",
            "description": "체력이 50% 이하인 적에게, 피해 20% 증가",
            "checkboxLabel": "1잠재 효과 적용",
            "effects": [
                {
                    "stat": "allDamageIncrease",
                    "target": "self",
                    "value": 20
                }
            ]
        },
        {
            "level": 2,
            "name": "가문의 무술",
            "description": "민첩 15 증가, 주는 물리 피해 8% 증가",
            "effects": [
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 15
                },
                {
                    "stat": "physicalDamageIncrease",
                    "target": "self",
                    "value": 8
                }
            ]
        },
        {
            "level": 3,
            "name": "쌍검의 협객",
            "description": "배틀 스킬, 연계 스킬, 궁극기의 피해 비율이 1.1배로 증가한다",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.1,
                    "conditions": {
                        "skill": ["battleSkill", "linkedSkill", "ultimate"]
                    }
                }
            ]
        },
        {
            "level": 4,
            "effects": []
        },
        {
            "level": 5,
            "effects": []
        }
    ]
};