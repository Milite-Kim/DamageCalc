//DamageCalc\js\data\operators\flourite.js

const FlouriteData = {
    "id": "flourite",
    "name": "플루라이트",
    "element": "nature",
    "weaponType": "handcannon",
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
            "operatorAtk": 88,
            "strength": 30,
            "agility": 47,
            "intellect": 34,
            "will": 27
        },
        "40": {
            "operatorAtk": 150,
            "strength": 47,
            "agility": 81,
            "intellect": 57,
            "will": 45
        },
        "60": {
            "operatorAtk": 211,
            "strength": 64,
            "agility": 116,
            "intellect": 80,
            "will": 64
        },
        "80": {
            "operatorAtk": 272,
            "strength": 81,
            "agility": 150,
            "intellect": 103,
            "will": 82
        },
        "90": {
            "operatorAtk": 303,
            "strength": 90,
            "agility": 168,
            "intellect": 114,
            "will": 91
        }
    },

    "skills": {
        "basicAttack": {
            "name": "독자적인 사격술",
            "type": "basicAttack",
            "element": "nature",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 25,
                        "2": 28,
                        "3": 30,
                        "4": 33,
                        "5": 35,
                        "6": 38,
                        "7": 40,
                        "8": 43,
                        "9": 45,
                        "M1": 48,
                        "M2": 52,
                        "M3": 56
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 33,
                        "2": 36,
                        "3": 39,
                        "4": 42,
                        "5": 46,
                        "6": 49,
                        "7": 52,
                        "8": 55,
                        "9": 59,
                        "M1": 63,
                        "M2": 67,
                        "M3": 73
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 26,
                        "2": 28,
                        "3": 31,
                        "4": 33,
                        "5": 36,
                        "6": 38,
                        "7": 41,
                        "8": 43,
                        "9": 46,
                        "M1": 49,
                        "M2": 53,
                        "M3": 57
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 60,
                        "2": 66,
                        "3": 72,
                        "4": 78,
                        "5": 84,
                        "6": 90,
                        "7": 96,
                        "8": 102,
                        "9": 108,
                        "M1": 116,
                        "M2": 125,
                        "M3": 135
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
            "name": "서프라이즈?",
            "type": "battleSkill",
            "element": "nature",
            "description": "적에게 '수제 폭탄'을 던져 자연 피해를 주고, 자연 부착을 부여한다",
            "phases": {
                "1st": {
                    "name": "자연 피해",
                    "multipliers": {
                        "1": 187,
                        "2": 206,
                        "3": 224,
                        "4": 243,
                        "5": 262,
                        "6": 280,
                        "7": 299,
                        "8": 318,
                        "9": 336,
                        "M1": 360,
                        "M2": 388,
                        "M3": 420
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "특별 보너스",
            "type": "linkedSkill",
            "element": "nature",
            "description": "적에게 자연 피해를 주고, 적에게 냉기 혹은 자연 부착이 있는 경우, 해당 아츠 부착을 한 번 더 부여한다",
            "phases": {
                "1st": {
                    "name": "자연 피해",
                    "multipliers": {
                        "1": 169,
                        "2": 186,
                        "3": 203,
                        "4": 220,
                        "5": 237,
                        "6": 254,
                        "7": 270,
                        "8": 287,
                        "9": 304,
                        "M1": 325,
                        "M2": 351,
                        "M3": 380
                    }
                }
            },
            "reapplyArtsAttachment": ["cryo", "nature"]
        },

        "ultimate": {
            "name": "난장판으로 만들어주지",
            "type": "ultimate",
            "element": "nature",
            "description": "적에게 4번에 걸쳐 자연피해를 줍니다. 만일 '수제 폭탄'이 붙은 적에게는 피해가 30% 증가합니다",
            "phases": {
                "1st": {
                    "name": "1차 피해",
                    "hitCount": 4,
                    "multipliers": {
                        "1": 111,
                        "2": 122,
                        "3": 133,
                        "4": 144,
                        "5": 156,
                        "6": 167,
                        "7": 178,
                        "8": 189,
                        "9": 200,
                        "M1": 214,
                        "M2": 231,
                        "M3": 250
                    }
                }
            },
            "appliedEffects": [
                {
                    "stat": "skillMultiplier",
                    "target": "self",
                    "value": 1.3,
                    "conditions": {
                        "skill": "ultimate",
                        "phases": "1st"
                    },
                    "checkboxLabel": "수제 폭탄 적용 (피해 30% 증가)"
                }
            ]
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
            "id": "loveTheStabAndTwist",
            "name": "몰락의 조력자",
            "description": "플루라이트가 조건 만족 시, 적에게 주는 피해 20% 증가",
            "toggleable": true,
            "checkboxLabel": "몰락의 조력자 : 주는 피해 증가 20% 적용",
            "effects": [
                {
                    "stat": "allDamageIncrease",
                    "target": "self",
                    "value": 20
                }
            ]
        },
        {
            "id": "unpredictable",
            "name": "종잡을 수 없는 자",
            "description": "특정 조건 하에 자기 공격력 20% 증가",
            "toggleable": true,
            "checkboxLabel": "종잡을 수 없는 자 : 공격력 20% 증가 적용",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "value": 20
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "양손의 달인",
            "description": "민첩 +10, 지능 +10",
            "effects": [
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 10
                },
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 10
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
            "effects": []
        },
        {
            "level": 5,
            "effects": []
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FlouriteData;
}
if (typeof window !== 'undefined') {
    window.FlouriteData = FlouriteData;
}
