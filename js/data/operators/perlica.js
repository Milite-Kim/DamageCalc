//DamageCalc\js\data\operators\perlica.js

const PerlicaData = {
    "id": "perlica",
    "name": "펠리카",
    "element": "electric",
    "weaponType": "artsUnit",
    "majorStat": "intellect",
    "minorStat": "will",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 9,
            "agility": 9,
            "intellect": 21,
            "will": 13
        },
        "20": {
            "operatorAtk": 88,
            "strength": 26,
            "agility": 27,
            "intellect": 51,
            "will": 34
        },
        "40": {
            "operatorAtk": 150,
            "strength": 45,
            "agility": 46,
            "intellect": 83,
            "will": 57
        },
        "60": {
            "operatorAtk": 211,
            "strength": 64,
            "agility": 65,
            "intellect": 114,
            "will": 79
        },
        "80": {
            "operatorAtk": 272,
            "strength": 82,
            "agility": 84,
            "intellect": 145,
            "will": 102
        },
        "90": {
            "operatorAtk": 303,
            "strength": 91,
            "agility": 93,
            "intellect": 161,
            "will": 113
        }
    },

    "skills": {
        "basicAttack": {
            "name": "프로토콜α · 돌파",
            "type": "basicAttack",
            "element": "electric",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 25,
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
                "2nd": {
                    "name": "일반 공격 2단계",
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
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 37,
                        "2": 41,
                        "3": 45,
                        "4": 48,
                        "5": 52,
                        "6": 56,
                        "7": 59,
                        "8": 63,
                        "9": 67,
                        "M1": 71,
                        "M2": 77,
                        "M3": 84
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 57,
                        "2": 62,
                        "3": 68,
                        "4": 73,
                        "5": 79,
                        "6": 85,
                        "7": 90,
                        "8": 96,
                        "9": 102,
                        "M1": 109,
                        "M2": 117,
                        "M3": 127
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
            "name": "프로토콜ω · 뇌격",
            "type": "battleSkill",
            "element": "electric",
            "description": "적에게 전기 피해를 주고, 전기 부착 상태를 부여합니다",
            "phases": {
                "1st": {
                    "name": "전기 피해",
                    "multipliers": {
                        "1": 178,
                        "2": 196,
                        "3": 213,
                        "4": 231,
                        "5": 249,
                        "6": 267,
                        "7": 285,
                        "8": 302,
                        "9": 320,
                        "M1": 342,
                        "M2": 369,
                        "M3": 400
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "electrocution",
                    "target": "enemy",
                    "value": true
                }
            ]
        },

        "linkedSkill": {
            "name": "실시간 프로토콜 · 연쇄 섬광",
            "type": "linkedSkill",
            "element": "electric",
            "description": "적에게 전기 피해를 주고, 강제로 감전 상태를 부여합니다",
            "phases": {
                "1st": {
                    "name": "전기 피해",
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
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "electrocution",
                    "target": "enemy",
                    "value": true,
                    "forced": true,
                    "checkboxLabel": "감전 강제 부여 (등급 1 고정)"
                }
            ]
        },

        "ultimate": {
            "name": "프로토콜ε · 70.41κ",
            "type": "ultimate",
            "element": "electric",
            "description": "적에게 전기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "전기 피해",
                    "multipliers": {
                        "1": 445,
                        "2": 489,
                        "3": 534,
                        "4": 578,
                        "5": 622,
                        "6": 667,
                        "7": 711,
                        "8": 756,
                        "9": 800,
                        "M1": 856,
                        "M2": 923,
                        "M3": 1000
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
            "id": "obliterationProtocol",
            "name": "오블리터레이션 프로토콜",
            "description": "불균형 상태인 적에게 주는 피해 30% 증가",
            "effects": [
                {
                    "stat": "allDamageIncrease",
                    "target": "self",
                    "value": 30,
                    "condition": {
                        "적의 상태": "불균형" //현 시점 불균형 상태가 미구현. 추후에 적을 불균형 상태로 취급할지 말지에 대한 체크박스를 만들 예정
                    }
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
            "effects": []
        },
        {
            "level": 3,
            "name": "감독관의 책임",
            "description": "적에게 감전을 부여할 시, 짧은 시간동안 공격력 20% 증가, 최대 2스택",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "value": 20,
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "감독관의 책임 1스택 : 공증 20% 적용"
                },
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "value": 40,
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "감독관의 책임 2스택 : 공증 40% 적용"
                }
            ]
        },
        {
            "level": 4,
            "name": "계속되는 가르침",
            "description": "연계 스킬이 부여하는 감전의 적이 받는 아츠 피해 증가 효과가 기존의 1.33배로 증가",
            "effects": [
                {
                    "stat": "debuffEffectMultiplier", //우리 이거 다른 스탯명으로 하기로 했었는지 기억이 안남
                    "value": 1.33,
                    "conditions": {
                        "skill": "linkedSkill",
                        "debuffType": "electrocute"
                    }
                }
            ]
        },
        {
            "level": 5,
            "name": "재집인 통제 시스템",
            "description": "궁극기의 치명타 확률이 30% 증가",
            "effects": [
                {
                    "stat": "criticalRate",
                    "value": 30,
                    "conditions": {
                        "skill": "ultimate"
                    }
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerlicaData;
}
if (typeof window !== 'undefined') {
    window.PerlicaData = PerlicaData;
}
