//DamageCalc\js\data\operators\gilberta.js

const GilbertaData = {
    "id": "gilberta",
    "name": "질베르타",
    "element": "nature",
    "weaponType": "artsUnit",
    "majorStat": "will",
    "minorStat": "intellect",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 9,
            "agility": 9,
            "intellect": 16,
            "will": 20
        },
        "20": {
            "operatorAtk": 94,
            "strength": 26,
            "agility": 27,
            "intellect": 39,
            "will": 52
        },
        "40": {
            "operatorAtk": 161,
            "strength": 44,
            "agility": 45,
            "intellect": 64,
            "will": 86
        },
        "60": {
            "operatorAtk": 228,
            "strength": 62,
            "agility": 64,
            "intellect": 89,
            "will": 120
        },
        "80": {
            "operatorAtk": 296,
            "strength": 80,
            "agility": 83,
            "intellect": 114,
            "will": 154
        },
        "90": {
            "operatorAtk": 329,
            "strength": 89,
            "agility": 92,
            "intellect": 127,
            "will": 171
        }
    },

    "skills": {
        "basicAttack": {
            "name": "비전 지팡이 · 에너지 제어 기술",
            "type": "basicAttack",
            "element": "nature",
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
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 41,
                        "2": 45,
                        "3": 49,
                        "4": 53,
                        "5": 57,
                        "6": 61,
                        "7": 65,
                        "8": 69,
                        "9": 73,
                        "M1": 78,
                        "M2": 84,
                        "M3": 91
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
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
                        "M3": 112
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
            "name": "비전 지팡이 · 중력 모드",
            "type": "battleSkill",
            "element": "nature",
            "description": "적에게 자연 피해를 주며 끌어들이고, 폭발시켜 자연피해를 주며 자연 부착 상태를 부여합니다",
            "phases": {
                "1st": {
                    "name": "인력 피해",
                    "multipliers": {
                        "1": 97,
                        "2": 107,
                        "3": 117,
                        "4": 126,
                        "5": 136,
                        "6": 146,
                        "7": 156,
                        "8": 165,
                        "9": 175,
                        "M1": 187,
                        "M2": 202,
                        "M3": 219
                    }
                },
                "2nd": {
                    "name": "폭발 피해",
                    "multipliers": {
                        "1": 58,
                        "2": 63,
                        "3": 69,
                        "4": 75,
                        "5": 81,
                        "6": 86,
                        "7": 92,
                        "8": 98,
                        "9": 104,
                        "M1": 111,
                        "M2": 120,
                        "M3": 130
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "비전 지팡이 · 매트릭스 이동",
            "type": "linkedSkill",
            "element": "nature",
            "description": "적에게 자연 피해를 주고, 띄우기 상태를 부여합니다",
            "phases": {
                "1st": {
                    "name": "자연 피해",
                    "multipliers": {
                        "1": 140,
                        "2": 154,
                        "3": 168,
                        "4": 182,
                        "5": 196,
                        "6": 210,
                        "7": 224,
                        "8": 238,
                        "9": 252,
                        "M1": 270,
                        "M2": 291,
                        "M3": 315
                    }
                },
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
            "name": "비전 지팡이 · 중력장",
            "type": "ultimate",
            "element": "nature",
            "description": "적에게 자연 피해를 주고, 아츠 취약을 부여합니다. 목표가 방어 불능 상태일 경우, 아츠 취약 효과는 방어 불능 스택에 따라 추가됩니다",
            "phases": {
                "1st": {
                    "name": "자연 피해",
                    "multipliers": {
                        "1": 333,
                        "2": 367,
                        "3": 400,
                        "4": 433,
                        "5": 467,
                        "6": 500,
                        "7": 534,
                        "8": 567,
                        "9": 600,
                        "M1": 642,
                        "M2": 692,
                        "M3": 750
                    }
                }
            },
            "appliedEffects": [
                {
                    "stat": "artsVulnerability",
                    "target": "enemy",
                    "values": {
                        "1": 18,
                        "2": 18,
                        "3": 18,
                        "4": 22,
                        "5": 22,
                        "6": 22,
                        "7": 26,
                        "8": 26,
                        "9": 26,
                        "M1": 30,
                        "M2": 30,
                        "M3": 30
                    },
                    "defenselessStackBonus": {
                        // 스킬레벨별 방어불능 스택당 아츠 취약 증가량 (나중에 입력)
                    },
                    "checkboxLabel": "아츠 취약 적용"
                }
            ]
        }
    },

    "talents": [
        {
            "id": "stalwart",
            "name": "맹세",
            "description": "의지 +60",
            "effects": [
                {
                    "stat": "will",
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
            "name": "바람의 여행자",
            "description": "궁극기 시전 시, 방어 불능 1스택마다 아츠 취약의 증폭 효과가 2배로 증가합니다. 또한 판정 시 목표가 추가로 방어 불능 1스택을 가진 것으로 간주합니다.(최대 4스택을 초과할 수 없습니다)",
            "effects": [
                {
                    "stat": "defenselessStackModifier",
                    "bonusMultiplier": 2,
                    "extraStacks": 1,
                    "maxStacks": 4
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
            "name": "특별한 편지",
            "description": "연계 스킬의 피해 배율이 1.3배로 증가한다",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "value": 1.3,
                    "conditions": {
                        "skill": "linkedSkill"
                    }
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GilbertaData;
}
if (typeof window !== 'undefined') {
    window.GilbertaData = GilbertaData;
}
