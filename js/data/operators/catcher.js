//DamageCalc\js\data\operators\catcher.js

const CatcherData = {
    "id": "catcher",
    "name": "카치르",
    "element": "physical",
    "weaponType": "greatsword",
    "majorStat": "strength",
    "minorStat": "will",
    "image": "",

    "stats": {
        "1": {
            "operatorAtk": 30,
            "strength": 21,
            "agility": 9,
            "intellect": 8,
            "will": 11
        },
        "20": {
            "operatorAtk": 88,
            "strength": 54,
            "agility": 28,
            "intellect": 25,
            "will": 31
        },
        "40": {
            "operatorAtk": 148,
            "strength": 89,
            "agility": 47,
            "intellect": 42,
            "will": 53
        },
        "60": {
            "operatorAtk": 209,
            "strength": 124,
            "agility": 67,
            "intellect": 60,
            "will": 74
        },
        "80": {
            "operatorAtk": 270,
            "strength": 159,
            "agility": 87,
            "intellect": 77,
            "will": 96
        },
        "90": {
            "operatorAtk": 300,
            "strength": 176,
            "agility": 96,
            "intellect": 86,
            "will": 106
        }
    },

    "skills": {
        "basicAttack": {
            "name": "기초 전술",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 35, "2": 39, "3": 42, "4": 46, "5": 49,
                        "6": 53, "7": 56, "8": 60, "9": 63,
                        "M1": 67, "M2": 73, "M3": 79
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 39, "2": 42, "3": 46, "4": 50, "5": 54,
                        "6": 58, "7": 62, "8": 65, "9": 69,
                        "M1": 74, "M2": 80, "M3": 87
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 54, "2": 59, "3": 65, "4": 70, "5": 76,
                        "6": 81, "7": 86, "8": 92, "9": 97,
                        "M1": 104, "M2": 112, "M3": 122
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계 (강력한 일격)",
                    "type": "heavyStrike",
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 71, "2": 78, "3": 85, "4": 92, "5": 99,
                        "6": 107, "7": 114, "8": 121, "9": 128,
                        "M1": 137, "M2": 147, "M3": 160
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
            "name": "강력한 저지",
            "type": "battleSkill",
            "element": "physical",
            "description": "적의 공격을 반격하여, 물리 피해를 주고 방어 불능 1스택을 부여한다",
            "phases": {
                "1st": {
                    "name": "반격 피해",
                    "multipliers": {
                        "1": 178, "2": 196, "3": 213, "4": 231, "5": 249,
                        "6": 267, "7": 285, "8": 302, "9": 320,
                        "M1": 342, "M2": 369, "M3": 400
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "defenseless",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "방어 불능 적용"
                }
            ]
        },

        "linkedSkill": {
            "name": "실시간 억제",
            "type": "linkedSkill",
            "element": "physical",
            "description": "아군을 감싸며, 적에게 물리 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "1차 피해",
                    "multipliers": {
                        "1": 25, "2": 27, "3": 30, "4": 32, "5": 34,
                        "6": 37, "7": 39, "8": 42, "9": 44,
                        "M1": 47, "M2": 51, "M3": 55
                    }
                },
                "2nd": {
                    "name": "2차 피해",
                    "multipliers": {
                        "1": 100, "2": 110, "3": 120, "4": 130, "5": 140,
                        "6": 150, "7": 160, "8": 170, "9": 180,
                        "M1": 193, "M2": 208, "M3": 225
                    }
                }
            }
        },

        "ultimate": {
            "name": "교과서적인 맹공",
            "type": "ultimate",
            "element": "physical",
            "description": "적을 2회 베고, 마지막으로 내려찍어 물리피해를 가하며 넘어뜨리기 상태를 부여합니다. 마지막 공격에 3회 충격파 추가 (재능: 통찰)",
            "phases": {
                "1st": {
                    "name": "1차 베기",
                    "multipliers": {
                        "1": 89, "2": 98, "3": 107, "4": 116, "5": 125,
                        "6": 134, "7": 143, "8": 151, "9": 160,
                        "M1": 172, "M2": 185, "M3": 200
                    }
                },
                "2nd": {
                    "name": "2차 베기",
                    "multipliers": {
                        "1": 120, "2": 132, "3": 144, "4": 156, "5": 168,
                        "6": 180, "7": 192, "8": 204, "9": 216,
                        "M1": 231, "M2": 249, "M3": 270
                    }
                },
                "3rd": {
                    "name": "마무리 내려찍기",
                    "multipliers": {
                        "1": 178, "2": 196, "3": 213, "4": 231, "5": 249,
                        "6": 267, "7": 284, "8": 302, "9": 320,
                        "M1": 342, "M2": 369, "M3": 400
                    }
                },
                "shockwave": {
                    "name": "충격파 (통찰)",
                    "hitCount": 3,
                    "multipliers": {
                        "1": 45, "2": 45, "3": 45, "4": 45, "5": 45,
                        "6": 45, "7": 45, "8": 45, "9": 45,
                        "M1": 45, "M2": 45, "M3": 45
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "knockdown",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "넘어뜨리기 적용"
                }
            ]
        }
    },

    "talents": [
        {
            "id": "forged",
            "name": "단련",
            "description": "힘 60 증가",
            "effects": [
                {
                    "stat": "strength",
                    "target": "self",
                    "value": 60
                }
            ]
        },
        {
            "id": "comprehensiveMindset",
            "name": "전장을 꿰뚫는 통찰",
            "description": "궁극기 마지막 공격에 3회의 충격파가 추가되어 매 회 공격력 45%의 피해를 입힌다",
            "effects": []
        }
    ],

    "potentials": [
        {
            "level": 1,
            "effects": []
        },
        {
            "level": 2,
            "name": "추가 특훈",
            "description": "의지 10 증가",
            "effects": [
                {
                    "stat": "will",
                    "target": "self",
                    "value": 10
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
            "effects": []
        }
    ]
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = CatcherData;
}
if (typeof window !== 'undefined') {
    window.CatcherData = CatcherData;
}
