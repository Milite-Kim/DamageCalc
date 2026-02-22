//DamageCalc\js\data\operators\xaihi.js

const XaihiData = {
    "id": "xaihi",
    "name": "자이히",
    "element": "cryo",
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
            "intellect": 15,
            "will": 15
        },
        "20": {
            "operatorAtk": 86,
            "strength": 26,
            "agility": 26,
            "intellect": 39,
            "will": 43
        },
        "40": {
            "operatorAtk": 144,
            "strength": 44,
            "agility": 45,
            "intellect": 64,
            "will": 74
        },
        "60": {
            "operatorAtk": 203,
            "strength": 62,
            "agility": 64,
            "intellect": 89,
            "will": 104
        },
        "80": {
            "operatorAtk": 262,
            "strength": 80,
            "agility": 80,
            "intellect": 114,
            "will": 134
        },
        "90": {
            "operatorAtk": 291,
            "strength": 89,
            "agility": 91,
            "intellect": 127,
            "will": 150
        }
    },

    "skills": {
        "basicAttack": {
            "name": "쿨타임",
            "type": "basicAttack",
            "element": "cryo",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 15,
                        "2": 17,
                        "3": 18,
                        "4": 20,
                        "5": 21,
                        "6": 23,
                        "7": 24,
                        "8": 26,
                        "9": 27,
                        "M1": 29,
                        "M2": 31,
                        "M3": 34
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 16,
                        "2": 18,
                        "3": 19,
                        "4": 21,
                        "5": 22,
                        "6": 24,
                        "7": 26,
                        "8": 27,
                        "9": 29,
                        "M1": 31,
                        "M2": 33,
                        "M3": 36
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 21,
                        "2": 23,
                        "3": 25,
                        "4": 27,
                        "5": 29,
                        "6": 32,
                        "7": 34,
                        "8": 36,
                        "9": 38,
                        "M1": 40,
                        "M2": 44,
                        "M3": 47
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
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
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,        // 일반 공격 피해 증가 적용됨
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
            "name": "디도스",
            "type": "battleSkill",
            "description": "특정 조건 만족 시, 메인 오퍼레이터에게 아츠 증폭을 부여합니다.", //어차피 우리는 메인 오퍼레이터의 딜만 계산하기 때문에 팀 버프로 생각해도 됨
            "appliedEffects": [
                {
                    "stat": "artsAmplify",
                    "target": "team", //증폭이 적에게 걸리게 되어있던데, 증폭은 아군 버프임. 그거 확인 부탁해
                    "values": {
                        "1": 9, "2": 9, "3": 9,
                        "4": 9, "5": 9, "6": 11,
                        "7": 11, "8": 11, "9": 13,
                        "M1": 13, "M2": 13, "M3": 15
                    },
                    "checkboxLabel": "아츠 증폭 적용"
                }
            ]
        },

        "linkedSkill": {
            "name": "스트레스 테스트",
            "type": "linkedSkill",
            "element": "cryo",
            "description": "적에게 냉기 피해를 주고, 냉기 부착을 부여합니다",
            "phases": {
                "1st": {
                    "name": "냉기 피해",
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
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "freeze",
                    "target": "enemy",
                    "value": true
                }
            ]
        },

        "ultimate": {
            "name": "스택 오버플로",
            "type": "ultimate",
            "description": "팀 전체에게 냉기 증폭과 자연 증폭을 부여합니다. 해당 효과는 지능에 비례하여 추가로 강화됩니다",
            "appliedEffects": [
                {
                    "stat": "cryoAmplify",
                    "target": "team",
                    "values": {
                        "1": 11, "2": 12, "3": 13,
                        "4": 14, "5": 15, "6": 16,
                        "7": 17, "8": 18, "9": 19,
                        "M1": 21, "M2": 22, "M3": 24
                    },
                    "checkboxLabel": "냉기 증폭 적용"
                },
                {
                    "stat": "natureAmplify",
                    "target": "team",
                    "values": {
                        "1": 11, "2": 12, "3": 13,
                        "4": 14, "5": 15, "6": 16,
                        "7": 17, "8": 18, "9": 19,
                        "M1": 21, "M2": 22, "M3": 24
                    },
                    "checkboxLabel": "자연 증폭 적용"
                },
                {
                    "stat": "appliedEffectEnhancement",
                    "target": "self",//self 맞나?
                    "dynamicValue": {
                        "basedOn": "intellect",
                        "perPoint": {
                            "1": 0.014,
                            "2": 0.015,
                            "3": 0.016,
                            "4": 0.018,
                            "5": 0.019,
                            "6": 0.02,
                            "7": 0.022,
                            "8": 0.023,
                            "9": 0.024,
                            "M1": 0.026,
                            "M2": 0.028,
                            "M3": 0.03
                        },
                        "maxPoint": {
                            "1": 30,
                            "2": 30,
                            "3": 30,
                            "4": 30,
                            "5": 30,
                            "6": 30,
                            "7": 30,
                            "8": 30,
                            "9": 30,
                            "M1": 30,
                            "M2": 30,
                            "M3": 36
                        }
                    }
                }
            ]
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
            "id": "executeProcess",
            "name": "가동 프로세스",
            "description": "적이 받는 냉기 피해 +10% 증가",
            "effects": [
                {
                    "stat": "cryoDamageTakenIncrease",//constants에 없는 것 같던데, 추가해야함
                    "target": "enemy",
                    "value": 10,
                    "userToggleable": true,
                    "checkboxLabel": "가동 프로세스 : 받는 냉기 피해 10% 증가 적용"
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "애자일 엑스큐션",
            "description": "배틀 스킬이 제공하는 아츠 증폭이 추가로 5% 증가",
            "effects": [
                {
                    "stat": "appliedEffectEnhancement",
                    "target": "self",
                    "value": 5,
                    "conditions": {
                        "skills": "battleSkill"
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
            "name": "그레이스케일 릴리스",
            "description": "지능 +15, 치유 효율 +10%", // 치유 효율은 계산할 필요가 없어서 미구현
            "effects": [
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 15
                }
            ]
        },
        {
            "level": 5,
            "name": "리커전 컨트롤",
            "description": "궁극기가 제공하는 증폭 효과가 기존의 1.1배로 증가",
            "effects": [
                {
                    "stat": "appliedEffectMultiplier",
                    "target": "self",
                    "value": 1.1,
                    "conditions": {
                        "skills": "ultimate"
                    }
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = XaihiData;
}
if (typeof window !== 'undefined') {
    window.XaihiData = XaihiData;
}
