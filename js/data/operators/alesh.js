//DamageCalc\js\data\operators\alesh.js

const AleshData = {
    "id": "alesh",
    "name": "알레쉬",
    "element": "cryo",
    "weaponType": "sword",
    "majorStat": "strength",
    "minorStat": "intellect",
    "image": "",

    "stats": {
        "1": {
            "operatorAtk": 30,
            "strength": 20,
            "agility": 9,
            "intellect": 13,
            "will": 10
        },
        "20": {
            "operatorAtk": 90,
            "strength": 49,
            "agility": 27,
            "intellect": 37,
            "will": 27
        },
        "40": {
            "operatorAtk": 152,
            "strength": 80,
            "agility": 47,
            "intellect": 62,
            "will": 45
        },
        "60": {
            "operatorAtk": 215,
            "strength": 111,
            "agility": 66,
            "intellect": 87,
            "will": 63
        },
        "80": {
            "operatorAtk": 277,
            "strength": 142,
            "agility": 86,
            "intellect": 113,
            "will": 81
        },
        "90": {
            "operatorAtk": 309,
            "strength": 158,
            "agility": 95,
            "intellect": 125,
            "will": 89
        }
    },

    "skills": {
        "basicAttack": {
            "name": "캐스팅의 기본",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 18, "2": 19, "3": 21, "4": 23, "5": 25,
                        "6": 26, "7": 28, "8": 30, "9": 32,
                        "M1": 34, "M2": 36, "M3": 39
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 10, "2": 11, "3": 12, "4": 13, "5": 14,
                        "6": 15, "7": 16, "8": 17, "9": 18,
                        "M1": 19, "M2": 21, "M3": 23
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 28, "2": 30, "3": 33, "4": 36, "5": 39,
                        "6": 41, "7": 44, "8": 47, "9": 50,
                        "M1": 53, "M2": 57, "M3": 62
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 28, "2": 30, "3": 33, "4": 36, "5": 39,
                        "6": 41, "7": 44, "8": 47, "9": 50,
                        "M1": 53, "M2": 57, "M3": 62
                    }
                },
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 55, "2": 61, "3": 66, "4": 72, "5": 77,
                        "6": 83, "7": 88, "8": 94, "9": 99,
                        "M1": 106, "M2": 114, "M3": 124
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
            "name": "비정규 루어",
            "type": "battleSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 가합니다",
            "phases": {
                "1st": {
                    "name": "적 내려치기",
                    "multipliers": {
                        "1": 200, "2": 220, "3": 240, "4": 260, "5": 280,
                        "6": 300, "7": 320, "8": 340, "9": 360,
                        "M1": 385, "M2": 415, "M3": 450
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "얼음 낚시 기술",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 줍니다. 10% 확률로 더 강한 피해를 줍니다",
            "phases": {
                "normal": {
                    "name": "일반 피해",
                    "multipliers": {
                        "1": 133, "2": 147, "3": 160, "4": 173, "5": 187,
                        "6": 200, "7": 213, "8": 227, "9": 240,
                        "M1": 257, "M2": 277, "M3": 300
                    }
                },
                "enhance": {
                    "name": "강화 피해 (10% 확률)",
                    "multipliers": {
                        "1": 213, "2": 235, "3": 256, "4": 277, "5": 299,
                        "6": 320, "7": 341, "8": 363, "9": 384,
                        "M1": 411, "M2": 443, "M3": 480
                    }
                }
            }
        },

        "ultimate": {
            "name": "월척이다!",
            "type": "ultimate",
            "element": "cryo",
            "description": "전방을 향해 크게 내려쳐 냉기 피해를 준다",
            "phases": {
                "1st": {
                    "name": "내려치기",
                    "multipliers": {
                        "1": 436, "2": 479, "3": 523, "4": 566, "5": 610,
                        "6": 653, "7": 697, "8": 741, "9": 784,
                        "M1": 839, "M2": 904, "M3": 980
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
            "effects": [
                {
                    "stat": "strength",
                    "target": "self",
                    "value": 60
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
            "name": "마음의 평온",
            "description": "힘 +15, 지능 +15",
            "effects": [
                {
                    "stat": "strength",
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
            "name": "미끼 없는 낚시",
            "description": "연계 스킬이 강화된 경우, 팀 전체 공격력 15% 증가",
            "toggleable": true,
            "checkboxLabel": "미끼 없는 낚시 활성화 (팀 공격력 15% 증가)",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "team",
                    "value": 15
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


if (typeof module !== 'undefined' && module.exports) {
    module.exports = AleshData;
}
if (typeof window !== 'undefined') {
    window.AleshData = AleshData;
}
