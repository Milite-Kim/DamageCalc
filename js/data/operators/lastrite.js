//DamageCalc\js\data\operators\lastrite.js

const LastRiteData = {
    "id": "lastrite",
    "name": "라스트 라이트",
    "element": "cryo",
    "weaponType": "greatsword",
    "majorStat": "strength",
    "minorStat": "will",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 21,
            "agility": 8,
            "intellect": 9,
            "will": 15
        },
        "20": {
            "operatorAtk": 95,
            "strength": 50,
            "agility": 29,
            "intellect": 27,
            "will": 35
        },
        "40": {
            "operatorAtk": 162,
            "strength": 80,
            "agility": 50,
            "intellect": 46,
            "will": 56
        },
        "60": {
            "operatorAtk": 230,
            "strength": 110,
            "agility": 72,
            "intellect": 65,
            "will": 77
        },
        "80": {
            "operatorAtk": 298,
            "strength": 140,
            "agility": 93,
            "intellect": 84,
            "will": 98
        },
        "90": {
            "operatorAtk": 332,
            "strength": 155,
            "agility": 104,
            "intellect": 93,
            "will": 109
        }
    },

    "skills": {
        "basicAttack": {
            "name": "혹한의 춤",
            "type": "basicAttack",
            "element": "cryo",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
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
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 55,
                        "2": 61,
                        "3": 66,
                        "4": 72,
                        "5": 77,
                        "6": 83,
                        "7": 88,
                        "8": 94,
                        "9": 99,
                        "M1": 106,
                        "M2": 114,
                        "M3": 124
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 68,
                        "2": 75,
                        "3": 82,
                        "4": 88,
                        "5": 95,
                        "6": 102,
                        "7": 109,
                        "8": 116,
                        "9": 122,
                        "M1": 131,
                        "M2": 141,
                        "M3": 153
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 90,
                        "2": 99,
                        "3": 108,
                        "4": 117,
                        "5": 126,
                        "6": 135,
                        "7": 144,
                        "8": 153,
                        "9": 162,
                        "M1": 173,
                        "M2": 187,
                        "M3": 203
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
            "name": "세쉬카의 비전",
            "type": "battleSkill",
            "element": "cryo",
            "description": "적에게 냉기 피해를 주고, 냉기 부착을 부여한다",
            "phases": {
                "1st": {
                    "name": "냉기 피해",
                    "multipliers": {
                        "1": 142,
                        "2": 156,
                        "3": 171,
                        "4": 185,
                        "5": 199,
                        "6": 213,
                        "7": 228,
                        "8": 242,
                        "9": 256,
                        "M1": 274,
                        "M2": 295,
                        "M3": 320
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "겨울 포식자",
            "type": "linkedSkill",
            "element": "cryo",
            "description": "적에게 2회에 걸쳐 냉기 피해를 줍니다. 적에게 쌓인 냉기 부착 스택에 따라 추가 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "1차 냉기 피해",
                    "multipliers": {
                        "1": 71,
                        "2": 78,
                        "3": 85,
                        "4": 92,
                        "5": 99,
                        "6": 107,
                        "7": 114,
                        "8": 121,
                        "9": 128,
                        "M1": 137,
                        "M2": 147,
                        "M3": 160
                    }
                },
                "2nd": {
                    "name": "2차 냉기 피해",
                    "multipliers": {
                        "1": 71,
                        "2": 78,
                        "3": 85,
                        "4": 92,
                        "5": 99,
                        "6": 107,
                        "7": 114,
                        "8": 121,
                        "9": 128,
                        "M1": 137,
                        "M2": 147,
                        "M3": 160
                    }
                },
                "3rd": {
                    "name": "냉기 스택 비례 피해",
                    "dynamicHitCount": "cryoStacks",
                    "multipliers": {
                        "1": 107,
                        "2": 117,
                        "3": 128,
                        "4": 139,
                        "5": 150,
                        "6": 160,
                        "7": 171,
                        "8": 182,
                        "9": 192,
                        "M1": 206,
                        "M2": 222,
                        "M3": 240
                    }
                }
            }
        },

        "ultimate": {
            "name": "마지막 인사",
            "type": "ultimate",
            "element": "cryo",
            "description": "적에게 3회에 걸쳐 냉기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "1차 베기",
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
                },
                "2nd": {
                    "name": "2차 베기",
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
                },
                "3rd": {
                    "name": "3차 베기",
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
                }
            }
        }
    },

    "talents": [
        {
            "id": "forged",
            "name": "단련",
            "description": "힘 +60",
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
            "name": "저체온증",
            "description": "임의의 아츠 부착을 소모할 때, 소모한 아츠 부착의 스택 수치 × 4% 만큼의 냉기 취약을 부여한다",
            "effects": [
                {
                    "stat": "cryoVulnerability",
                    "target": "enemy",
                    "value": 12,
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "냉기 취약 12% 적용 (3스택 소모)"
                },
                {
                    "stat": "cryoVulnerability",
                    "target": "enemy",
                    "value": 16,
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "냉기 취약 16% 적용 (4스택 소모)"
                }
            ]
        },
        {
            "id": "",
            "name": "저온 취성",
            "description": "궁극기가 피해를 줄 때, 적이 냉기 취약 상태라면, 냉기 취약의 효과를 기존의 1.5배로 간주한다",
            "effects": [
                {
                    "stat": "vulnerabilityMultiplier",
                    "target": "self",
                    "value": 1.5,
                    "conditions": {
                        "skill": "ultimate",
                        "vulnerabilityStat": "cryoVulnerability"
                    }
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "묘지기의 선물",
            "description": "배틀 스킬의 피해가 20% 증가",
            "effects": [
                {
                    "stat": "battleSkillDamageIncrease",
                    "target": "self",
                    "value": 20
                }
            ]
        },
        {
            "level": 2,
            "name": "영점 무장",
            "description": "힘 +20, 냉기 피해 +10%",
            "effects": [
                {
                    "stat": "strength",
                    "target": "self",
                    "value": 20
                },
                {
                    "stat": "cryoDamageIncrease",
                    "target": "self",
                    "value": 10
                }
            ]
        },
        {
            "level": 3,
            "name": "혹한의 지배자",
            "description": "연계 스킬과 궁극기의 피해 배율이 기존의 1.15배로 증가한다",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.15,
                    "conditions": {
                        "skill": ["linkedSkill", "ultimate"]
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
            "name": "다시 밀려오는 한기",
            "description": "배틀 스킬의 피해 배율이 기존의 1.2배로 증가한다",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.2,
                    "conditions": {
                        "skill": "battleSkill"
                    }
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LastRiteData;
}
if (typeof window !== 'undefined') {
    window.LastRiteData = LastRiteData;
}
