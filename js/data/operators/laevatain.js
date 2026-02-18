//DamageCalc\js\data\operators\laevatain.js

const LaevatainData = {
    "id": "laevatain",
    "name": "레바테인",
    "element": "heat",
    "weaponType": "sword",
    "majorStat": "intellect",
    "minorStat": "strength",
    "image": "",

    "stats": {
        "1": {
            "operatorAtk": 30,
            "strength": 13,
            "agility": 9,
            "intellect": 22,
            "will": 9
        },
        "20": {
            "operatorAtk": 91,
            "strength": 36,
            "agility": 28,
            "intellect": 55,
            "will": 26
        },
        "40": {
            "operatorAtk": 156,
            "strength": 60,
            "agility": 49,
            "intellect": 90,
            "will": 44
        },
        "60": {
            "operatorAtk": 221,
            "strength": 85,
            "agility": 69,
            "intellect": 125,
            "will": 62
        },
        "80": {
            "operatorAtk": 285,
            "strength": 109,
            "agility": 89,
            "intellect": 160,
            "will": 80
        },
        "90": {
            "operatorAtk": 318,
            "strength": 121,
            "agility": 99,
            "intellect": 177,
            "will": 89
        }
    },

    "skills": {
        "basicAttack": {
            "name": "재",
            "type": "basicAttack",
            "element": "heat",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 16, "2": 18, "3": 19, "4": 21, "5": 22,
                        "6": 24, "7": 26, "8": 27, "9": 29,
                        "M1": 31, "M2": 33, "M3": 36
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 24, "2": 26, "3": 29, "4": 31, "5": 34,
                        "6": 36, "7": 38, "8": 41, "9": 43,
                        "M1": 46, "M2": 50, "M3": 54
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 25, "2": 28, "3": 30, "4": 33, "5": 35,
                        "6": 38, "7": 40, "8": 43, "9": 45,
                        "M1": 48, "M2": 52, "M3": 56
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 39, "2": 43, "3": 47, "4": 51, "5": 55,
                        "6": 59, "7": 62, "8": 66, "9": 70,
                        "M1": 75, "M2": 81, "M3": 88
                    }
                },
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 53, "2": 58, "3": 64, "4": 69, "5": 74,
                        "6": 80, "7": 85, "8": 90, "9": 95,
                        "M1": 102, "M2": 110, "M3": 119
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
            "name": "불타오르는 화염",
            "type": "battleSkill",
            "element": "heat",
            "description": "몰튼 코어 조각을 소환해 지속적으로 전방의 적을 공격하여 열기 피해를 줍니다. 이후 레바테인이 검을 휘둘러 열기 피해를 가하고 강제로 '연소' 상태를 부여합니다. 궁극기 중에는 스킬이 강화됩니다.",
            "phases": {
                "1st": {
                    "name": "몰튼 코어 소환 피해",
                    "multipliers": {
                        "1": 62, "2": 68, "3": 75, "4": 81, "5": 87,
                        "6": 93, "7": 99, "8": 106, "9": 112,
                        "M1": 120, "M2": 129, "M3": 140
                    }
                },
                "2nd": {
                    "name": "몰튼 코어 지속 피해",
                    "description": "지속 시간 동안의 총 피해량",
                    "multipliers": {
                        "1": 62, "2": 68, "3": 75, "4": 81, "5": 87,
                        "6": 93, "7": 99, "8": 106, "9": 112,
                        "M1": 120, "M2": 129, "M3": 140
                    }
                },
                "last": {
                    "name": "추가 베기",
                    "description": "레바테인 베기 공격",
                    "multipliers": {
                        "1": 342, "2": 376, "3": 410, "4": 445, "5": 479,
                        "6": 513, "7": 547, "8": 581, "9": 616,
                        "M1": 658, "M2": 710, "M3": 770
                    }
                },
                "enhance1st": {
                    "name": "궁극기 중 1차 베기",
                    "description": "궁극기 동안의 강화 스킬 1차",
                    "multipliers": {
                        "1": 147, "2": 161, "3": 176, "4": 191, "5": 205,
                        "6": 220, "7": 235, "8": 249, "9": 264,
                        "M1": 282, "M2": 304, "M3": 330
                    }
                },
                "enhance2nd": {
                    "name": "궁극기 중 2차 베기",
                    "description": "궁극기 동안의 강화 스킬 2차",
                    "multipliers": {
                        "1": 164, "2": 181, "3": 197, "4": 214, "5": 230,
                        "6": 247, "7": 263, "8": 279, "9": 296,
                        "M1": 316, "M2": 341, "M3": 370
                    }
                },
                "enhanceLast": {
                    "name": "궁극기 중 3차 베기",
                    "description": "궁극기 동안의 강화 스킬 3차",
                    "multipliers": {
                        "1": 400, "2": 440, "3": 480, "4": 520, "5": 560,
                        "6": 600, "7": 640, "8": 680, "9": 720,
                        "M1": 770, "M2": 830, "M3": 900
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "burn",
                    "target": "enemy",
                    "value": true,
                    "forced": true,
                    "checkboxLabel": "연소 강제 부여 (등급 1 고정)"
                }
            ]
        },

        "linkedSkill": {
            "name": "열화",
            "type": "linkedSkill",
            "element": "heat",
            "description": "적에게 열기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "열기 피해",
                    "multipliers": {
                        "1": 240, "2": 264, "3": 288, "4": 312, "5": 336,
                        "6": 360, "7": 384, "8": 408, "9": 432,
                        "M1": 462, "M2": 498, "M3": 540
                    }
                }
            }
        },

        "ultimate": {
            "name": "황혼",
            "type": "ultimate",
            "element": "heat",
            "description": "기본 공격이 강화됩니다",
            "phases": {
                "enhance1st": {
                    "name": "궁극기 기본 공격 1타",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 65, "2": 71, "3": 78, "4": 84, "5": 91,
                        "6": 97, "7": 104, "8": 110, "9": 117,
                        "M1": 125, "M2": 134, "M3": 146
                    }
                },
                "enhance2nd": {
                    "name": "궁극기 기본 공격 2타",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 81, "2": 89, "3": 97, "4": 105, "5": 113,
                        "6": 122, "7": 130, "8": 138, "9": 146,
                        "M1": 156, "M2": 168, "M3": 182
                    }
                },
                "enhance3rd": {
                    "name": "궁극기 기본 공격 3타",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 115, "2": 127, "3": 139, "4": 150, "5": 162,
                        "6": 173, "7": 185, "8": 196, "9": 208,
                        "M1": 222, "M2": 240, "M3": 260
                    }
                },
                "enhance4th": {
                    "name": "궁극기 기본 공격 4타",
                    "type": "heavyStrike",
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 203, "2": 223, "3": 243, "4": 263, "5": 284,
                        "6": 304, "7": 324, "8": 344, "9": 365,
                        "M1": 390, "M2": 420, "M3": 456
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
        },
        {
            "id": "heartOfFlame",
            "name": "불꽃의 심장",
            "description": "적의 열기 저항 20 무시",
            "effects": [
                {
                    "stat": "heatResistanceIgnore",
                    "target": "enemy",
                    "value": 20
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "녹아내린 마음",
            "description": "배틀 스킬의 추가 공격 배율 1.2배",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.2,
                    "conditions": {
                        "skill": "battleSkill",
                        "phases": ["last", "enhanceLast"]
                    }
                }
            ]
        },
        {
            "level": 2,
            "name": "기억을 찾는 여정",
            "description": "지능 20, 일반 공격 피해 15% 증가",
            "effects": [
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 20
                },
                {
                    "stat": "basicAttackDamageIncrease",
                    "target": "self",
                    "value": 15
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
            "name": "존재의 증명",
            "description": "궁극기 중 기본 공격 계수 1.2배",
            "effects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.2,
                    "conditions": {
                        "skill": "ultimate",
                        "phaseTypes": ["basicAttack", "heavyStrike"]
                    }
                }
            ]
        }
    ]
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = LaevatainData;
}
if (typeof window !== 'undefined') {
    window.LaevatainData = LaevatainData;
}
