//DamageCalc\js\data\operators\wulfgard.js

const WulfgardData = {
    "id": "wulfgard",
    "name": "울프가드",
    "element": "heat",
    "weaponType": "handcannon",
    "majorStat": "strength",
    "minorStat": "agility",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 18,
            "agility": 9,
            "intellect": 9,
            "will": 13
        },
        "20": {
            "operatorAtk": 86,
            "strength": 49,
            "agility": 27,
            "intellect": 27,
            "will": 34
        },
        "40": {
            "operatorAtk": 146,
            "strength": 81,
            "agility": 47,
            "intellect": 45,
            "will": 56
        },
        "60": {
            "operatorAtk": 205,
            "strength": 113,
            "agility": 66,
            "intellect": 64,
            "will": 78
        },
        "80": {
            "operatorAtk": 264,
            "strength": 145,
            "agility": 85,
            "intellect": 83,
            "will": 100
        },
        "90": {
            "operatorAtk": 294,
            "strength": 161,
            "agility": 95,
            "intellect": 92,
            "will": 111
        }
    },

    "skills": {
        "basicAttack": {
            "name": "다중 연사",
            "type": "basicAttack",
            "element": "heat",
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
                        "1": 35,
                        "2": 39,
                        "3": 42,
                        "4": 46,
                        "5": 49,
                        "6": 53,
                        "7": 56,
                        "8": 60,
                        "9": 63,
                        "M1": 67,
                        "M2": 73,
                        "M3": 79
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 56,
                        "2": 61,
                        "3": 67,
                        "4": 72,
                        "5": 78,
                        "6": 83,
                        "7": 89,
                        "8": 94,
                        "9": 100,
                        "M1": 107,
                        "M2": 115,
                        "M3": 125
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 68,
                        "2": 74,
                        "3": 81,
                        "4": 88,
                        "5": 95,
                        "6": 101,
                        "7": 108,
                        "8": 115,
                        "9": 122,
                        "M1": 130,
                        "M2": 140,
                        "M3": 152
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
            "name": "탄흔의 열기",
            "type": "battleSkill",
            "element": "heat",
            "description": "적에게 사격하여 열기 피해를 주고, 열기 부착을 부여합니다. 목표가 연소 혹은 감전 상태였다면, 열기 부착 상태를 부여하지 않고, 추가로 1회 사격하여 열기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "사격 피해",
                    "multipliers": {
                        "1": 102,
                        "2": 112,
                        "3": 122,
                        "4": 133,
                        "5": 143,
                        "6": 153,
                        "7": 163,
                        "8": 174,
                        "9": 184,
                        "M1": 196,
                        "M2": 212,
                        "M3": 230
                    }
                },
                "2nd": {
                    "name": "조건부 추가 사격",
                    "userToggleable": true,
                    "checkboxLabel": "추가 사격",
                    "multipliers": {
                        "1": 378,
                        "2": 415,
                        "3": 453,
                        "4": 491,
                        "5": 529,
                        "6": 566,
                        "7": 604,
                        "8": 642,
                        "9": 680,
                        "M1": 727,
                        "M2": 784,
                        "M3": 850
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "burn",
                    "target": "enemy",
                    "value": true
                    //혹시 여기에 추가 사격을 가하지 않았을 때만 발동하도록 하는 것이 가능한가?
                }
            ]
        },

        "linkedSkill": {
            "name": "폭렬 수류탄 · β형",
            "type": "linkedSkill",
            "element": "heat",
            "description": "적에게 열기 피해를 주고, 열기 부착 상태를 부여합니다",
            "phases": {
                "1st": {
                    "name": "열기 피해",
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
                }
            }
        },

        "ultimate": {
            "name": "늑대의 분노",
            "type": "ultimate",
            "element": "heat",
            "description": "적에게 5회에 걸쳐 열기 피해를 주고, 강제로 연소 상태를 부여합니다",
            "phases": {
                "enhance1st": {
                    "name": "열기 피해",
                    "hitCount": 5,
                    "multipliers": {
                        "1": 32,
                        "2": 35,
                        "3": 38,
                        "4": 42,
                        "5": 45,
                        "6": 48,
                        "7": 51,
                        "8": 54,
                        "9": 58,
                        "M1": 62,
                        "M2": 66,
                        "M3": 72
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
            "id": "scorchingFangs",
            "name": "불타는 송곳니",
            "description": "적에게 연소 상태 부여 시, 불타는 송곳니 상태 획득. 해당 상태동안 적에게 주는 열기 피해 30% 증가",
            "effects": [
                {
                    "stat": "heatDamageIncrease",
                    "target": "self",
                    "value": 30,
                    "conditions": { "userToggleable": true },
                    "checkboxLabel": "불타는 송곳니 : 열기 피해 증가 30% 적용"
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "떠돌이 늑대",
            "description": "힘 +15, 민첩 +15",
            "effects": [
                {
                    "stat": "strength",
                    "target": "self",
                    "value": 15
                },
                {
                    "stat": "agility",
                    "target": "self",
                    "value": 15
                }
            ]
        },
        {
            "level": 2,
            "effects": []
        },
        {
            "level": 3,
            "name": "사냥 시간",
            "description": "불타는 송곳니가 다른 팀원들에게도 절반의 효과를 부여합니다",
            "effects": [
                {
                    "stat": "heatDamageIncrease",
                    "target": "allies",
                    "value": 15
                    //이거 조건을 울프가드가 불타는 송곳니 체크박스를 체크했을 때 연동되게 가능할까?
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
    module.exports = WulfgardData;
}
if (typeof window !== 'undefined') {
    window.WulfgardData = WulfgardData;
}
