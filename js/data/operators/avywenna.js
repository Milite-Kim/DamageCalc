//DamageCalc\js\data\operators\avywenna.js

const AvywennaData = {
    "id": "avywenna",
    "name": "아비웨나",
    "element": "electric",
    "weaponType": "polearm",
    "majorStat": "will",
    "minorStat": "agility",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 12,
            "agility": 10,
            "intellect": 14,
            "will": 15
        },
        "20": {
            "operatorAtk": 90,
            "strength": 33,
            "agility": 31,
            "intellect": 34,
            "will": 43
        },
        "40": {
            "operatorAtk": 153,
            "strength": 54,
            "agility": 52,
            "intellect": 56,
            "will": 73
        },
        "60": {
            "operatorAtk": 217,
            "strength": 75,
            "agility": 74,
            "intellect": 78,
            "will": 103
        },
        "80": {
            "operatorAtk": 280,
            "strength": 96,
            "agility": 95,
            "intellect": 99,
            "will": 133
        },
        "90": {
            "operatorAtk": 312,
            "strength": 107,
            "agility": 106,
            "intellect": 110,
            "will": 148
        }
    },

    "skills": {
        "basicAttack": {
            "name": "썬더랜스 · 신속 공격",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 17,
                        "2": 18,
                        "3": 20,
                        "4": 21,
                        "5": 23,
                        "6": 25,
                        "7": 26,
                        "8": 28,
                        "9": 30,
                        "M1": 32,
                        "M2": 34,
                        "M3": 37
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 22,
                        "2": 24,
                        "3": 26,
                        "4": 28,
                        "5": 30,
                        "6": 32,
                        "7": 34,
                        "8": 37,
                        "9": 39,
                        "M1": 41,
                        "M2": 45,
                        "M3": 48
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 21,
                        "2": 23,
                        "3": 25,
                        "4": 27,
                        "5": 29,
                        "6": 31,
                        "7": 33,
                        "8": 35,
                        "9": 37,
                        "M1": 39,
                        "M2": 43,
                        "M3": 46
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
                        "1": 50,
                        "2": 55,
                        "3": 60,
                        "4": 65,
                        "5": 70,
                        "6": 75,
                        "7": 80,
                        "8": 85,
                        "9": 90,
                        "M1": 96,
                        "M2": 104,
                        "M3": 113
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
            "name": "썬더랜스 · 가로채기",
            "type": "battleSkill",
            "element": "electric",
            "description": "적에게 전기 피해를 주고, 모든 썬더랜스를 회수합니다. 썬더랜스가 회수될 때, 적에게 전기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "전기 피해",
                    "multipliers": {
                        "1": 67,
                        "2": 73,
                        "3": 80,
                        "4": 87,
                        "5": 93,
                        "6": 100,
                        "7": 107,
                        "8": 113,
                        "9": 120,
                        "M1": 128,
                        "M2": 138,
                        "M3": 150
                    }
                },
                "normalLance": {
                    "name": "일반 썬더랜스 회수",
                    "multipliers": {
                        "1": 75,
                        "2": 82,
                        "3": 90,
                        "4": 97,
                        "5": 104,
                        "6": 112,
                        "7": 119,
                        "8": 127,
                        "9": 134,
                        "M1": 144,
                        "M2": 155,
                        "M3": 168
                    }
                },
                "enhanceLance": {
                    "name": "강력한 썬더랜스 회수",
                    "multipliers": {
                        "1": 192,
                        "2": 211,
                        "3": 230,
                        "4": 250,
                        "5": 269,
                        "6": 288,
                        "7": 307,
                        "8": 326,
                        "9": 346,
                        "M1": 370,
                        "M2": 398,
                        "M3": 432
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "썬더랜스 · 번개 타격",
            "type": "linkedSkill",
            "element": "electric",
            "description": "적에게 전기 피해를 줍니다", //비고) 이 스킬을 시전 시, 지면에 썬더랜스 3개를 남겨둠(배틀 스킬은 이걸 회수하는 과정에서 추가 딜이 발생)
            "phases": {
                "1st": {
                    "name": "전기 피해",
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
            }
        },

        "ultimate": {
            "name": "썬더랜스 · 결전의 떨림",
            "type": "ultimate",
            "element": "electric",
            "description": "적에게 전기 피해를 줍니다", //비고) 이 스킬을 시전 시, 지면에 강력한 썬더랜스를 남겨둠(배틀 스킬은 이걸 회수하는 과정에서 추가 딜이 발생)
            "phases": {
                "1st": {
                    "name": "전기 피해",
                    "multipliers": {
                        "1": 422,
                        "2": 464,
                        "3": 507,
                        "4": 549,
                        "5": 591,
                        "6": 633,
                        "7": 675,
                        "8": 718,
                        "9": 760,
                        "M1": 813,
                        "M2": 876,
                        "M3": 950
                    }
                }
            }
        }
    },

    "talents": [
        {
            "id": "stalwart",
            "name": "맹세",
            "description": "의지 60 증가",
            "requireActive": false,
            "effects": [
                {
                    "stat": "will",
                    "target": "self",
                    "value": 60,
                    "description": "의지 +60"
                }
            ]
        },
        {
            "id": "tactfulApproach",
            "name": "완곡한 수단",
            "description": "궁극기 적중 시, 적에게 전기 취약 부여",
            "requireActive": false,
            "effects": [
                {
                    "stat": "electricVulnerability",
                    "target": "enemy",
                    "value": 10,
                    "description": "10% 전기 취약 부여"
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
            "name": "끝없는 저항",
            "decription": "의지 15 증가, 주는 전기 피해 8% 증가",
            "effects": [
                {
                    "stat": "will",
                    "target": "self",
                    "value": 15
                },
                {
                    "stat": "electricDamageIncrease",
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
            "name": "회유와 위압",
            "description": "썬더랜스와 강력한 전기랜스가 회수될 때, 전기 취약인 적 상대로는 계수가 1.15배로 증가", //어떻게 해야할지 모르겠어서 남겨둠. 그냥 잠재 수치를 5잠재로 했을 때, 이걸 적용할지 말지 선택하는 체크박스를 나타나게 하는게 좋을 것 같긴함
            "effects": []
        }
    ]
};