//DamageCalc\js\data\operators\arclight.js

const ArclightData = {
    "id": "arclight",
    "name": "아크라이트",
    "element": "electric",
    "weaponType": "sword",
    "majorStat": "agility",
    "minorStat": "intellect",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 14,
            "agility": 14,
            "intellect": 12,
            "will": 10
        },
        "20": {
            "operatorAtk": 89,
            "strength": 33,
            "agility": 42,
            "intellect": 36,
            "will": 29
        },
        "40": {
            "operatorAtk": 151,
            "strength": 54,
            "agility": 71,
            "intellect": 61,
            "will": 49
        },
        "60": {
            "operatorAtk": 213,
            "strength": 75,
            "agility": 101,
            "intellect": 86,
            "will": 69
        },
        "80": {
            "operatorAtk": 275,
            "strength": 96,
            "agility": 130,
            "intellect": 111,
            "will": 89
        },
        "90": {
            "operatorAtk": 306,
            "strength": 107,
            "agility": 145,
            "intellect": 123,
            "will": 100
        }
    },

    "skills": {
        "basicAttack": {
            "name": "추적 사냥",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 10,
                        "2": 11,
                        "3": 12,
                        "4": 13,
                        "5": 14,
                        "6": 15,
                        "7": 16,
                        "8": 17,
                        "9": 18,
                        "M1": 19,
                        "M2": 21,
                        "M3": 23
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 13,
                        "2": 14,
                        "3": 15,
                        "4": 16,
                        "5": 18,
                        "6": 19,
                        "7": 20,
                        "8": 21,
                        "9": 23,
                        "M1": 24,
                        "M2": 26,
                        "M3": 28
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 26,
                        "2": 29,
                        "3": 31,
                        "4": 34,
                        "5": 36,
                        "6": 39,
                        "7": 42,
                        "8": 44,
                        "9": 47,
                        "M1": 50,
                        "M2": 54,
                        "M3": 59
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
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
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,        // 일반 공격 피해 증가 적용됨
                    "multipliers": {
                        "1": 48,
                        "2": 52,
                        "3": 57,
                        "4": 62,
                        "5": 67,
                        "6": 71,
                        "7": 76,
                        "8": 81,
                        "9": 86,
                        "M1": 91,
                        "M2": 99,
                        "M3": 107
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
            "name": "질풍 섬광",
            "type": "battleSkill",
            "description": "적에게 2회 물리 피해를 준다. 감전 상태인 적일 경우 전기 피해를 1회 추가로 준다",
            "phases": {
                "1st": {
                    "name": "첫 베기",
                    "element": "physical",
                    "multipliers": {
                        "1": 45,
                        "2": 50,
                        "3": 54,
                        "4": 59,
                        "5": 63,
                        "6": 68,
                        "7": 72,
                        "8": 77,
                        "9": 81,
                        "M1": 87,
                        "M2": 93,
                        "M3": 101
                    }
                },
                "2nd": {
                    "name": "두 번 째 베기",
                    "element": "physical",
                    "multipliers": {
                        "1": 45,
                        "2": 50,
                        "3": 54,
                        "4": 59,
                        "5": 63,
                        "6": 68,
                        "7": 72,
                        "8": 77,
                        "9": 81,
                        "M1": 87,
                        "M2": 93,
                        "M3": 101
                    }
                },
                "extra": {
                    "name": "추가 베기",
                    "element": "electric",
                    "multipliers": {
                        "1": 180,
                        "2": 198,
                        "3": 216,
                        "4": 234,
                        "5": 252,
                        "6": 270,
                        "7": 288,
                        "8": 306,
                        "9": 324,
                        "M1": 347,
                        "M2": 374,
                        "M3": 405
                    },
                    "checkboxLabel": "감전 상대 추가타 적용"
                }
            }
        },

        "linkedSkill": {
            "name": "천둥의 울림",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "물리 피해",
                    "multipliers": {
                        "1": 155,
                        "2": 171,
                        "3": 186,
                        "4": 202,
                        "5": 218,
                        "6": 233,
                        "7": 249,
                        "8": 264,
                        "9": 280,
                        "M1": 299,
                        "M2": 322,
                        "M3": 350
                    }
                }
            }
        },

        "ultimate": {
            "name": "질풍 섬광",
            "type": "ultimate",
            "element": "electric",
            "description": "적에게 2회에 걸쳐 전기 피해를 준다",
            "phases": {
                "1st": {
                    "name": "첫 번 째 피해",
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
                "2nd": {
                    "name": "두 번 째 피해",
                    "multipliers": {
                        "1": 244,
                        "2": 269,
                        "3": 293,
                        "4": 318,
                        "5": 342,
                        "6": 367,
                        "7": 391,
                        "8": 415,
                        "9": 440,
                        "M1": 470,
                        "M2": 507,
                        "M3": 550
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
            "id": "wildlandTrekker",
            "name": "황무지의 방랑자",
            "description": "팀의 전기 피해가 (자신의 지능 * 0.08)% 증가한다.",
            "toggleable": true,
            "effects": [
                {
                    "stat": "electricDamageIncrease",
                    "target": "team",
                    "value": "" //지능 비례 수치를 어떻게 표기해야할지 모르겠음. 0.08로 놔두고 나중에 계산하는 것도 방법이라고 봄
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
            "name": "속전속결",
            "description": "민첩, 지능 15 증가",
            "effects": [
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 15
                },
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 15
                }
            ]
        },
        {
            "level": 3,
            "name": "노래",
            "description": "재능 '황무지의 방랑자'의 효과가 1.3배로 적용된다",
            "effects": [
                {
                    "stat": "talentEffectMultiplier",
                    "target": self,
                    "value": 1.3,
                    "conditions": {
                        "id": "wildlandTrekker",
                        "effectStats": "electricDamageIncrease"
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

// 브라우저용 추가
if (typeof window !== 'undefined') {
    window.ArclightData = ArclightData;
}