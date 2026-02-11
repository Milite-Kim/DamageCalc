//DamageCalc\js\data\operators\antal.js

const AntalData = {
    "id": "antal",
    "name": "안탈",
    "element": "electric",
    "weaponType": "artsUnit",
    "majorStat": "intellect",
    "minorStat": "strength",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 15,
            "agility": 9,
            "intellect": 15,
            "will": 9
        },
        "20": {
            "operatorAtk": 87,
            "strength": 40,
            "agility": 25,
            "intellect": 47,
            "will": 25
        },
        "40": {
            "operatorAtk": 147,
            "strength": 65,
            "agility": 43,
            "intellect": 81,
            "will": 41
        },
        "60": {
            "operatorAtk": 207,
            "strength": 91,
            "agility": 60,
            "intellect": 114,
            "will": 58
        },
        "80": {
            "operatorAtk": 267,
            "strength": 116,
            "agility": 78,
            "intellect": 148,
            "will": 74
        },
        "90": {
            "operatorAtk": 297,
            "strength": 129,
            "agility": 86,
            "intellect": 165,
            "will": 82
        }
    },

    "skills": {
        "basicAttack": {
            "name": "교환 전류",
            "type": "basicAttack",
            "element": "electric",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 23,
                        "2": 25,
                        "3": 28,
                        "4": 30,
                        "5": 32,
                        "6": 35,
                        "7": 37,
                        "8": 39,
                        "9": 41,
                        "M1": 44,
                        "M2": 48,
                        "M3": 52
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 28,
                        "2": 31,
                        "3": 34,
                        "4": 36,
                        "5": 39,
                        "6": 42,
                        "7": 45,
                        "8": 48,
                        "9": 50,
                        "M1": 54,
                        "M2": 58,
                        "M3": 63
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 34,
                        "2": 37,
                        "3": 41,
                        "4": 44,
                        "5": 48,
                        "6": 51,
                        "7": 54,
                        "8": 58,
                        "9": 61,
                        "M1": 65,
                        "M2": 71,
                        "M3": 77
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계 (강력한 일격)",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,        // 일반 공격 피해 증가 적용됨
                    "multipliers": {
                        "1": 51,
                        "2": 56,
                        "3": 61,
                        "4": 66,
                        "5": 71,
                        "6": 77,
                        "7": 82,
                        "8": 87,
                        "9": 92,
                        "M1": 98,
                        "M2": 106,
                        "M3": 115
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
            "name": "지정 연구 대상",
            "type": "battleSkill",
            "element": "electric",
            "description": "적에게 전기 피해를 주고, 전기 취약과 열기 취약을 부여한다",
            "phases": {
                "1st": {
                    "name": "전기 피해",
                    "multipliers": {
                        "1": 89,
                        "2": 98,
                        "3": 107,
                        "4": 116,
                        "5": 124,
                        "6": 133,
                        "7": 142,
                        "8": 151,
                        "9": 160,
                        "M1": 171,
                        "M2": 185,
                        "M3": 200
                    }
                }
            },
            "appliesDebuff": {
                "type": "heatVulnerability",
                "values": {
                    "1": 5, "2": 5, "3": 6, "4": 6, "5": 7,
                    "6": 7, "7": 8, "8": 8, "9": 8,
                    "M1": 9, "M2": 9, "M3": 10
                }
            },
            "appliesDebuff": {
                "type": "electricVulnerability",
                "values": {
                    "1": 5, "2": 5, "3": 6, "4": 6, "5": 7,
                    "6": 7, "7": 8, "8": 8, "9": 8,
                    "M1": 9, "M2": 9, "M3": 10
                }
            }
        },

        "linkedSkill": {
            "name": "자기 폭풍 실험장",
            "type": "linkedSkill",
            "element": "electric",
            "description": "적에게 전기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "전기 피해",
                    "multipliers": {
                        "1": 151,
                        "2": 166,
                        "3": 181,
                        "4": 196,
                        "5": 211,
                        "6": 227,
                        "7": 242,
                        "8": 257,
                        "9": 272,
                        "M1": 291,
                        "M2": 313,
                        "M3": 340
                    }
                }
            }
        },

        "ultimate": {
            "name": "오버클럭 타임",
            "type": "ultimate",
            "description": "팀 전체에게 전기 증폭과 열기 증폭을 부여한다",
            "effects": {
                "heatAmplify": {
                    "stat": "heatAmplify",
                    "target": "team",
                    "values": {
                        "1": 8, "2": 9, "3": 10, "4": 11, "5": 12,
                        "6": 13, "7": 14, "8": 15, "9": 16,
                        "M1": 17, "M2": 18, "M3": 20
                    }
                },
                "electricAmplify": {
                    "stat": "electricAmplify",
                    "target": "team",
                    "values": {
                        "1": 8, "2": 9, "3": 10, "4": 11, "5": 12,
                        "6": 13, "7": 14, "8": 15, "9": 16,
                        "M1": 17, "M2": 18, "M3": 20
                    }
                }
            }

        }
    },

    "talents": [
        {
            "id": "intelligence",
            "name": "총명",
            "description": "지능 60 증가",
            "requireActive": false,
            "effects": [
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 60,
                    "description": "지능 +60"
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "아츠 적성",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "description": "궁극기로 제공하는 전기 증폭과 열기 증폭의 효과가 기존의 1.1배로 상승",
                    "value": 1.1,
                    "conditions": {
                        "skill": "ultimate",
                        "effects": ["heatAmplify", "electricAmplify"]
                    }
                }
            ]
        },
        {
            "level": 2,
            "effects": []
        },
        {
            "level": 3,
            "effects": []
        },
        {
            "level": 4,
            "name": "할머니의 말씀",
            "description": "지능 10 증가",
            "effects": [
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 10,
                    "description": "지능 +10"
                }
            ]
        },
        {
            "level": 5,
            "name": "고사양 기술 테스트",
            "description": "배틀 스킬의 취약 효과가 4% 증가",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 4,
                    "condition": {
                        "skill": "battleSkill",
                        "type": ["heatVulnerability", "electricVulnerability"]
                    }
                }
            ]
        }
    ]
};

// 브라우저용 추가
if (typeof window !== 'undefined') {
    window.AntalData = AntalData;
}