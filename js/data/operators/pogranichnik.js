//DamageCalc\js\data\operators\pogranichnik.js

const PogranichnikData = {
    "id": "pogranichnik",
    "name": "포그라니치니크",
    "element": "physical",
    "weaponType": "sword",
    "majorStat": "will",
    "minorStat": "agility",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 12,
            "agility": 13,
            "intellect": 10,
            "will": 20
        },
        "20": {
            "operatorAtk": 92,
            "strength": 31,
            "agility": 34,
            "intellect": 28,
            "will": 52
        },
        "40": {
            "operatorAtk": 157,
            "strength": 51,
            "agility": 55,
            "intellect": 48,
            "will": 87
        },
        "60": {
            "operatorAtk": 223,
            "strength": 71,
            "agility": 77,
            "intellect": 67,
            "will": 121
        },
        "80": {
            "operatorAtk": 288,
            "strength": 91,
            "agility": 99,
            "intellect": 87,
            "will": 156
        },
        "90": {
            "operatorAtk": 321,
            "strength": 101,
            "agility": 110,
            "intellect": 97,
            "will": 173
        }
    },

    "skills": {
        "basicAttack": {
            "name": "전면 공세",
            "type": "basicAttack",
            "element": "physical",
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
                        "1": 33,
                        "2": 36,
                        "3": 40,
                        "4": 43,
                        "5": 46,
                        "6": 50,
                        "7": 53,
                        "8": 56,
                        "9": 59,
                        "M1": 64,
                        "M2": 68,
                        "M3": 74
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 38,
                        "2": 42,
                        "3": 46,
                        "4": 50,
                        "5": 53,
                        "6": 57,
                        "7": 61,
                        "8": 65,
                        "9": 69,
                        "M1": 73,
                        "M2": 79,
                        "M3": 86
                    }
                },
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,        // 일반 공격 피해 증가 적용됨
                    "multipliers": {
                        "1": 43,
                        "2": 47,
                        "3": 52,
                        "4": 56,
                        "5": 60,
                        "6": 65,
                        "7": 69,
                        "8": 73,
                        "9": 77,
                        "M1": 83,
                        "M2": 89,
                        "M3": 97
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
            "name": "분쇄 전선",
            "type": "battleSkill",
            "element": "physical",
            "description": "적에게 2회에 걸쳐 피해를 주고, 갑옷 파괴 상태를 부여한다",
            "phases": {
                "1st": {
                    "name": "1차 베기",
                    "multipliers": {
                        "1": 86,
                        "2": 94,
                        "3": 103,
                        "4": 111,
                        "5": 120,
                        "6": 128,
                        "7": 137,
                        "8": 145,
                        "9": 154,
                        "M1": 165,
                        "M2": 177,
                        "M3": 192
                    }
                },
                "2nd": {
                    "name": "2차 베기",
                    "multipliers": {
                        "1": 106,
                        "2": 116,
                        "3": 127,
                        "4": 137,
                        "5": 148,
                        "6": 158,
                        "7": 169,
                        "8": 180,
                        "9": 190,
                        "M1": 203,
                        "M2": 219,
                        "M3": 238
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "armorBreak",
                    "target": "enemy",
                    "value": true
                }
            ]
        },

        "linkedSkill": {
            "name": "보름달 참격",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 줍니다. 조건에 따라 최대 3회까지 공격하고, 특정 조건 하에 세 번 째 베기가 강화됩니다",
            "phases": {
                "1st": {
                    "name": "첫 번 째 베기",
                    "multipliers": {
                        "1": 42,
                        "2": 46,
                        "3": 50,
                        "4": 55,
                        "5": 59,
                        "6": 63,
                        "7": 67,
                        "8": 71,
                        "9": 76,
                        "M1": 81,
                        "M2": 87,
                        "M3": 95
                    }
                },
                "2nd": {
                    "name": "두 번 째 베기",
                    "multipliers": {
                        "1": 54,
                        "2": 59,
                        "3": 65,
                        "4": 70,
                        "5": 76,
                        "6": 81,
                        "7": 86,
                        "8": 92,
                        "9": 97,
                        "M1": 104,
                        "M2": 112,
                        "M3": 122
                    }
                },
                "3rd": {
                    "name": "세 번 째 베기",
                    "multipliers": {
                        "1": 66,
                        "2": 73,
                        "3": 79,
                        "4": 86,
                        "5": 92,
                        "6": 99,
                        "7": 106,
                        "8": 112,
                        "9": 119,
                        "M1": 127,
                        "M2": 137,
                        "M3": 149
                    }
                },
                "enhance3rd": {
                    "name": "강화 세 번 째 베기",
                    "multipliers": {
                        "1": 132,
                        "2": 145,
                        "3": 158,
                        "4": 172,
                        "5": 185,
                        "6": 198,
                        "7": 211,
                        "8": 224,
                        "9": 238,
                        "M1": 254,
                        "M2": 274,
                        "M3": 297
                    }
                }
            } // 즉, 공격의 경우가 1타만 / 1타 + 2타 / 1타 + 2타 + 3타 / 1타 + 2타 + 강화 3타 이렇게 나뉘게 됨. 이걸 사용자가 설정 가능하게 해줬으면 좋겠음
        },

        "ultimate": {
            "name": "방패병 부대, 전진",
            "type": "ultimate",
            "element": "physical",
            "description": "방패병을 진군시켜 물리피해를 줍니다. 이후 4회에 걸쳐 적을 교란하여 물리 피해를 주고, 최후에 물리 피해를 한 번 더 줍니다",
            "phases": {
                "1st": {
                    "name": "진군 피해",
                    "multipliers": {
                        "1": 133,
                        "2": 147,
                        "3": 160,
                        "4": 173,
                        "5": 186,
                        "6": 200,
                        "7": 213,
                        "8": 226,
                        "9": 240,
                        "M1": 256,
                        "M2": 276,
                        "M3": 300
                    }
                },
                "2nd": {
                    "name": "교란 피해",
                    "hitCount": 4,
                    "multipliers": {
                        "1": 45,
                        "2": 49,
                        "3": 53,
                        "4": 58,
                        "5": 62,
                        "6": 67,
                        "7": 71,
                        "8": 76,
                        "9": 80,
                        "M1": 86,
                        "M2": 92,
                        "M3": 100
                    }
                },
                "3rd": {
                    "name": "최후의 피해",
                    "multipliers": {
                        "1": 200,
                        "2": 220,
                        "3": 240,
                        "4": 260,
                        "5": 280,
                        "6": 300,
                        "7": 320,
                        "8": 340,
                        "9": 360,
                        "M1": 385,
                        "M2": 415,
                        "M3": 450
                    }
                }
            }
        }
    },

    "talents": [
        {
            "id": "stalwart",
            "name": "맹세",
            "description": "의지 60 증가",
            "effects": [
                {
                    "stat": "will",
                    "target": "self",
                    "value": 60
                }
            ]
        },
        {
            "id": "theLivingBanner",
            "name": "생존의 깃발",
            "description": "사기 격양을 획득합니다. 사기 격양 : 공격력 +8%, 오리지늄 아츠 강도 +8 (최대 3스택)",
            "effects": [
                {
                    "1stack": [
                        {
                            "stat": "atkIncrease",
                            "target": "self",
                            "value": 8
                        },
                        {
                            "stat": "artsEnhance",
                            "target": "self",
                            "value": 8
                        }
                    ],
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "생존의 깃발 1스택 적용"
                },
                {
                    "2stack": [
                        {
                            "stat": "atkIncrease",
                            "target": "self",
                            "value": 16
                        },
                        {
                            "stat": "artsEnhance",
                            "target": "self",
                            "value": 16
                        }
                    ],
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "생존의 깃발 2스택 적용"
                },
                {
                    "3stack": [
                        {
                            "stat": "atkIncrease",
                            "target": "self",
                            "value": 24
                        },
                        {
                            "stat": "artsEnhance",
                            "target": "self",
                            "value": 24
                        }
                    ],
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "생존의 깃발 3스택 적용"
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
            "name": "'행군'",
            "description": "의지 +20, 주는 물리 피해 +10%",
            "effects": [
                {
                    "stat": "will",
                    "target": "self",
                    "value": 20
                },
                {
                    "stat": "physicalDamageIncrease",
                    "target": "self",
                    "value": 10
                }
            ]
        },
        {
            "level": 3,
            "name": "휘날리는 전장의 깃발",
            "description": "사기 격양의 최대 중첩 수가 2 증가한다",
            "effects": [] // 어떻게 구현해야할지 모르겠음. 그냥 사기 격양 효과만 적어두고, 유저가 해당 스택 수치를 입력하도록 바꾸고, 3잠재 기준 5까지 선택 가능하도록 하는게 낫나?
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
    module.exports = PogranichnikData;
}
if (typeof window !== 'undefined') {
    window.PogranichnikData = PogranichnikData;
}
