//DamageCalc\js\data\operators\ember.js

const EmberData = {
    "id": "ember",
    "name": "엠버",
    "element": "heat",
    "weaponType": "greatsword",
    "majorStat": "strength",
    "minorStat": "will",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 21,
            "agility": 9,
            "intellect": 8,
            "will": 13
        },
        "20": {
            "operatorAtk": 93,
            "strength": 54,
            "agility": 28,
            "intellect": 25,
            "will": 36
        },
        "40": {
            "operatorAtk": 159,
            "strength": 89,
            "agility": 47,
            "intellect": 42,
            "will": 60
        },
        "60": {
            "operatorAtk": 225,
            "strength": 124,
            "agility": 67,
            "intellect": 60,
            "will": 84
        },
        "80": {
            "operatorAtk": 291,
            "strength": 159,
            "agility": 87,
            "intellect": 77,
            "will": 108
        },
        "90": {
            "operatorAtk": 323,
            "strength": 176,
            "agility": 96,
            "intellect": 86,
            "will": 120
        }
    },

    "skills": {
        "basicAttack": {
            "name": "돌진 검술",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 38,
                        "2": 42,
                        "3": 46,
                        "4": 50,
                        "5": 54,
                        "6": 57,
                        "7": 61,
                        "8": 65,
                        "9": 69,
                        "M1": 74,
                        "M2": 79,
                        "M3": 86
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 54,
                        "2": 59,
                        "3": 64,
                        "4": 70,
                        "5": 75,
                        "6": 80,
                        "7": 86,
                        "8": 91,
                        "9": 96,
                        "M1": 103,
                        "M2": 111,
                        "M3": 120
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 66,
                        "2": 73,
                        "3": 80,
                        "4": 86,
                        "5": 93,
                        "6": 99,
                        "7": 106,
                        "8": 113,
                        "9": 119,
                        "M1": 128,
                        "M2": 138,
                        "M3": 149
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 82,
                        "2": 90,
                        "3": 98,
                        "4": 106,
                        "5": 114,
                        "6": 122,
                        "7": 131,
                        "8": 139,
                        "9": 147,
                        "M1": 157,
                        "M2": 169,
                        "M3": 184
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
            "name": "진군",
            "type": "battleSkill",
            "element": "heat",
            "description": "적에게 열기 피해를 주고, 넘어뜨리기 상태를 부여한다",
            "phases": {
                "1st": {
                    "name": "열기 피해",
                    "multipliers": {
                        "1": 173,
                        "2": 191,
                        "3": 208,
                        "4": 225,
                        "5": 243,
                        "6": 260,
                        "7": 277,
                        "8": 295,
                        "9": 312,
                        "M1": 334,
                        "M2": 360,
                        "M3": 390
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "knockdown",
                    "target": "enemy",
                    "value": true
                }
            ]
        },

        "linkedSkill": {
            "name": "전선에서의 지원",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 주고, 넘어뜨리기 상태를 부여한다",
            "phases": {
                "1st": {
                    "name": "물리 피해",
                    "multipliers": {
                        "1": 102,
                        "2": 112,
                        "3": 122,
                        "4": 133,
                        "5": 143,
                        "6": 153,
                        "7": 163,
                        "8": 173,
                        "9": 184,
                        "M1": 196,
                        "M2": 212,
                        "M3": 230
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "knockdown",
                    "target": "enemy",
                    "value": true
                }
            ]
        },

        "ultimate": {
            "name": "",
            "type": "ultimate",
            "element": "heat",
            "description": "적에게 열기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "열기 피해",
                    "multipliers": {
                        "1": 289,
                        "2": 318,
                        "3": 347,
                        "4": 376,
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
            }
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
            "id": "payTheFerricPrice",
            "name": "강철에는 강철로",
            "description": "공격력 27% 증가",
            "requireActive": false,
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "value": 27,
                    "checkboxLabel": "강철에는 강철로 : 공격력 증가 적용"
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
            "name": "무쇠의 전사",
            "description": "힘 20 증가, 의지 20 증가",
            "effects": [
                {
                    "stat": "strength",
                    "target": "self",
                    "value": 20
                },
                {
                    "stat": "will",
                    "target": "self",
                    "value": 20
                }
            ]
        },
        {
            "level": 3,
            "effects": []
        },
        {
            "level": 4,
            "effects": []
        },
        {
            "level": 5,
            "name": "철의 서약",
            "description": "궁극기 시전 후, 팀 전체의 공격력 10% 증가",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "team",
                    "value": 10,
                    "checkboxLabel": "철의 서약 : 공격력 증가 적용"
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmberData;
}
if (typeof window !== 'undefined') {
    window.EmberData = EmberData;
}
