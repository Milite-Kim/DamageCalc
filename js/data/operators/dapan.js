//DamageCalc\js\data\operators\dapan.js

const DapanData = {
    "id": "dapan",
    "name": "판",
    "element": "physical",
    "weaponType": "greatsword",
    "majorStat": "strength",
    "minorStat": "will",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 24,
            "agility": 9,
            "intellect": 10,
            "will": 10
        },
        "20": {
            "operatorAtk": 88,
            "strength": 56,
            "agility": 28,
            "intellect": 28,
            "will": 30
        },
        "40": {
            "operatorAtk": 150,
            "strength": 90,
            "agility": 47,
            "intellect": 47,
            "will": 50
        },
        "60": {
            "operatorAtk": 211,
            "strength": 124,
            "agility": 67,
            "intellect": 66,
            "will": 71
        },
        "80": {
            "operatorAtk": 272,
            "strength": 158,
            "agility": 87,
            "intellect": 85,
            "will": 91
        },
        "90": {
            "operatorAtk": 303,
            "strength": 175,
            "agility": 96,
            "intellect": 94,
            "will": 102
        }
    },

    "skills": {
        "basicAttack": {
            "name": "돌려가며 썰기!",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 28,
                        "2": 31,
                        "3": 34,
                        "4": 37,
                        "5": 39,
                        "6": 42,
                        "7": 45,
                        "8": 48,
                        "9": 51,
                        "M1": 54,
                        "M2": 58,
                        "M3": 63
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 34,
                        "2": 37,
                        "3": 40,
                        "4": 44,
                        "5": 47,
                        "6": 50,
                        "7": 54,
                        "8": 57,
                        "9": 60,
                        "M1": 64,
                        "M2": 70,
                        "M3": 75
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 50,
                        "2": 55,
                        "3": 60,
                        "4": 65,
                        "5": 70,
                        "6": 75,
                        "7": 80,
                        "8": 85,
                        "9": 90,
                        "M1": 97,
                        "M2": 104,
                        "M3": 113
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 60,
                        "2": 67,
                        "3": 72,
                        "4": 78,
                        "5": 84,
                        "6": 90,
                        "7": 96,
                        "8": 103,
                        "9": 109,
                        "M1": 116,
                        "M2": 125,
                        "M3": 136
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
            "name": "뒤집어 주지!",
            "type": "battleSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 주고, 띄우기 상태를 부여합니다",
            "phases": {
                "1st": {
                    "name": "물리 피해",
                    "multipliers": {
                        "1": 133,
                        "2": 147,
                        "3": 160,
                        "4": 173,
                        "5": 186,
                        "6": 200,
                        "7": 213,
                        "8": 226,
                        "9": 240,
                        "M1": 256,
                        "M2": 276,
                        "M3": 300
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
            "name": "조미료 뿌리기",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 주고, '강타'합니다. 이 스킬로 주는 '강타'는 피해가 증가합니다",
            "phases": {
                "1st": {
                    "name": "물리 피해",
                    "multipliers": {
                        "1": 289,
                        "2": 318,
                        "3": 347,
                        "4": 375,
                        "5": 404,
                        "6": 433,
                        "7": 462,
                        "8": 491,
                        "9": 520,
                        "M1": 556,
                        "M2": 599,
                        "M3": 650
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "heavyAttack",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "강타 적용",
                    "appliedAddDamageIncrease": {
                        "1": 10,
                        "2": 10,
                        "3": 10,
                        "4": 10,
                        "5": 10,
                        "6": 10,
                        "7": 10,
                        "8": 10,
                        "9": 15,
                        "M1": 15,
                        "M2": 15,
                        "M3": 20
                    }
                }
            ]
        },

        "ultimate": {
            "name": "채 썰어 웍에 넣기!",
            "type": "ultimate",
            "element": "physical",
            "description": "적을 띄우기 상태로 만든 뒤, 연속 6단 베기를 시전하며 물리 피해를 가합니다. 그 후 적을 넘어뜨리기 상태를 부여하며, 물리 피해를 가합니다",
            "phases": {
                "1st": {
                    "name": "연속 베기",
                    "hitCount": 6,
                    "multipliers": {
                        "1": 22,
                        "2": 24,
                        "3": 26,
                        "4": 29,
                        "5": 31,
                        "6": 33,
                        "7": 35,
                        "8": 37,
                        "9": 40,
                        "M1": 42,
                        "M2": 46,
                        "M3": 50
                    }
                },
                "2nd": {
                    "name": "마무리 피해",
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
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "launch",
                    "target": "enemy",
                    "value": true
                },
                {
                    "type": "debuff",
                    "stat": "knockdown",
                    "target": "enemy",
                    "value": true
                }
            ]
        }
    },

    "talents": [
        {
            "id": "forged",
            "name": "단련",
            "description": "힘 60 증가",
            "requireActive": false,
            "effects": [
                {
                    "stat": "strength",
                    "target": "self",
                    "value": 60
                }
            ]
        },
        {
            "id": "",
            "name": "전분 풀기",
            "description": "물리 피해 24% 증가",
            "requireActive": false,
            "effects": [
                {
                    "stat": "physicalDamageIncrease",
                    "target": "self",
                    "value": 24,
                    "checkboxLabel": "전분 풀기 : 물리 피해 증가 적용"
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
            "effects": []
        },
        {
            "level": 3,
            "name": "모범 직원",
            "description": "힘 15 증가, 주는 물리 피해 8% 증가",
            "effects": [
                {
                    "stat": "strength",
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
            "level": 4,
            "effects": []
        },
        {
            "level": 5,
            "effects": []
        }
    ]
};