//DamageCalc\js\data\operators\ardelia.js

const ArdeliaData = {
    "id": "ardelia",
    "name": "아델리아",
    "element": "nature",
    "weaponType": "artsUnit",
    "majorStat": "intellect",
    "minorStat": "will",
    "image": "",

    "stats": {
        "1": {
            "operatorAtk": 30,
            "strength": 9,
            "agility": 9,
            "intellect": 20,
            "will": 15
        },
        "20": {
            "operatorAtk": 93,
            "strength": 31,
            "agility": 27,
            "intellect": 46,
            "will": 37
        },
        "40": {
            "operatorAtk": 159,
            "strength": 54,
            "agility": 46,
            "intellect": 75,
            "will": 60
        },
        "60": {
            "operatorAtk": 225,
            "strength": 77,
            "agility": 65,
            "intellect": 103,
            "will": 83
        },
        "80": {
            "operatorAtk": 291,
            "strength": 100,
            "agility": 84,
            "intellect": 131,
            "will": 106
        },
        "90": {
            "operatorAtk": 323,
            "strength": 112,
            "agility": 93,
            "intellect": 145,
            "will": 118
        }
    },

    "skills": {
        "basicAttack": {
            "name": "바위의 속삭임",
            "type": "basicAttack",
            "element": "nature",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 30, "2": 33, "3": 36, "4": 39, "5": 42,
                        "6": 45, "7": 48, "8": 51, "9": 54,
                        "M1": 58, "M2": 62, "M3": 68
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 40, "2": 44, "3": 48, "4": 52, "5": 56,
                        "6": 60, "7": 64, "8": 68, "9": 72,
                        "M1": 77, "M2": 83, "M3": 90
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 53, "2": 58, "3": 63, "4": 68, "5": 74,
                        "6": 79, "7": 84, "8": 89, "9": 95,
                        "M1": 101, "M2": 109, "M3": 118
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계 (강력한 일격)",
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
            "name": "질주하는 돌리",
            "type": "battleSkill",
            "element": "nature",
            "description": "자연피해를 주고, 대상에게 물리 취약과 아츠 취약을 부여한다",
            "phases": {
                "1st": {
                    "name": "자연 피해",
                    "multipliers": {
                        "1": 142, "2": 156, "3": 171, "4": 185, "5": 199,
                        "6": 213, "7": 228, "8": 242, "9": 256,
                        "M1": 274, "M2": 295, "M3": 320
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "physicalVulnerability",
                    "target": "enemy",
                    "values": {
                        "1": 12, "2": 12, "3": 12, "4": 13, "5": 13,
                        "6": 13, "7": 14, "8": 14, "9": 16,
                        "M1": 17, "M2": 18, "M3": 20
                    },
                    "checkboxLabel": "물리 취약 적용"
                },
                {
                    "type": "debuff",
                    "stat": "artsVulnerability",
                    "target": "enemy",
                    "values": {
                        "1": 12, "2": 12, "3": 12, "4": 13, "5": 13,
                        "6": 13, "7": 14, "8": 14, "9": 16,
                        "M1": 17, "M2": 18, "M3": 20
                    },
                    "checkboxLabel": "아츠 취약 적용"
                }
            ]
        },

        "linkedSkill": {
            "name": "화산 분화",
            "type": "linkedSkill",
            "element": "nature",
            "description": "적에게 자연 피해를 줍니다. 잠시 후 폭발하며 자연피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "자연 피해",
                    "multipliers": {
                        "1": 45, "2": 49, "3": 54, "4": 58, "5": 62,
                        "6": 67, "7": 71, "8": 76, "9": 80,
                        "M1": 86, "M2": 93, "M3": 100
                    }
                },
                "2nd": {
                    "name": "폭발 자연 피해",
                    "multipliers": {
                        "1": 111, "2": 122, "3": 133, "4": 144, "5": 155,
                        "6": 167, "7": 178, "8": 189, "9": 200,
                        "M1": 214, "M2": 230, "M3": 250
                    }
                }
            }
        },

        "ultimate": {
            "name": "복슬복슬 파티",
            "type": "ultimate",
            "element": "nature",
            "description": "적에게 0.3초 간격으로 3초 간 피해를 준다 (총 10회)",
            "phases": {
                "1st": {
                    "name": "틱당 피해",
                    "hitCount": 10,
                    "multipliers": {
                        "1": 73, "2": 81, "3": 88, "4": 95, "5": 103,
                        "6": 110, "7": 117, "8": 125, "9": 132,
                        "M1": 141, "M2": 152, "M3": 165
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
            "effects": [
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 60
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "양들의 천국",
            "description": "배틀 스킬의 물리 취약, 아츠 취약의 계수가 8% 추가",
            "effects": [
                {
                    "stat": "appliedEffectEnhancement",
                    "target": "self",
                    "value": 8,
                    "conditions": {
                        "skill": "battleSkill",
                        "effectStats": ["physicalVulnerability", "artsVulnerability"]
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
            "name": "격렬한 분출",
            "description": "궁극기 지속시간 +1초 (틱 수 10 → 13)",
            "effects": [
                {
                    "stat": "hitCountBonus",
                    "target": "self",
                    "value": 3,
                    "conditions": {
                        "skill": "ultimate"
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
            "name": "화산 증가",
            "description": "연계 스킬의 피해 계수가 1.2배로 증가",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.2,
                    "conditions": {
                        "skill": "linkedSkill"
                    }
                }
            ]
        }
    ]
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = ArdeliaData;
}
if (typeof window !== 'undefined') {
    window.ArdeliaData = ArdeliaData;
}
