//DamageCalc\js\data\operators\estella.js

const EstellaData = {
    "id": "estella",
    "name": "에스텔라",
    "element": "cryo",
    "weaponType": "polearm",
    "majorStat": "will",
    "minorStat": "strength",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 13,
            "agility": 8,
            "intellect": 14,
            "will": 15
        },
        "20": {
            "operatorAtk": 90,
            "strength": 32,
            "agility": 27,
            "intellect": 34,
            "will": 44
        },
        "40": {
            "operatorAtk": 153,
            "strength": 53,
            "agility": 47,
            "intellect": 56,
            "will": 74
        },
        "60": {
            "operatorAtk": 217,
            "strength": 73,
            "agility": 67,
            "intellect": 78,
            "will": 105
        },
        "80": {
            "operatorAtk": 280,
            "strength": 94,
            "agility": 87,
            "intellect": 99,
            "will": 136
        },
        "90": {
            "operatorAtk": 312,
            "strength": 104,
            "agility": 97,
            "intellect": 110,
            "will": 151
        }
    },

    "skills": {
        "basicAttack": {
            "name": "노이즈",
            "type": "basicAttack",
            "element": "physical",
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
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 40,
                        "2": 44,
                        "3": 48,
                        "4": 52,
                        "5": 56,
                        "6": 60,
                        "7": 64,
                        "8": 68,
                        "9": 72,
                        "M1": 77,
                        "M2": 83,
                        "M3": 90
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
            "name": "서스테인",
            "type": "battleSkill",
            "element": "cryo",
            "description": "적에게 냉기 피해를 주고, 냉기 부착 상태를 부여합니다",
            "phases": {
                "1st": {
                    "name": "냉기 피해",
                    "multipliers": {
                        "1": 150,
                        "2": 171,
                        "3": 187,
                        "4": 202,
                        "5": 218,
                        "6": 234,
                        "7": 249,
                        "8": 265,
                        "9": 280,
                        "M1": 300,
                        "M2": 323,
                        "M3": 350
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "디스토션",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 주고, 띄우기 상태를 부여합니다. 만약 동결 상태인 적에게 명중 시, 더 강한 피해를 주고 물리 취약을 부여합니다",
            "condition": {
                "id": "frozenEnemy",
                "checkboxLabel": "동결 적 상대 적용",
                "defaultPhases": ["normal"],
                "activePhases": ["enhance"]
            },
            "phases": {
                "normal": {
                    "name": "일반 물리 피해",
                    "multipliers": {
                        "1": 160,
                        "2": 176,
                        "3": 192,
                        "4": 208,
                        "5": 224,
                        "6": 240,
                        "7": 256,
                        "8": 272,
                        "9": 288,
                        "M1": 308,
                        "M2": 332,
                        "M3": 360
                    }
                },
                "enhance": {
                    "name": "동결 적 상대 물리 피해",
                    "multipliers": {
                        "1": 280,
                        "2": 308,
                        "3": 336,
                        "4": 364,
                        "5": 392,
                        "6": 420,
                        "7": 448,
                        "8": 476,
                        "9": 504,
                        "M1": 539,
                        "M2": 581,
                        "M3": 630
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "launch",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "띄우기 적용"
                },
                {
                    "type": "debuff",
                    "stat": "shatter",
                    "target": "enemy",
                    "value": true,
                    "requireCondition": "frozenEnemy",
                    "checkboxLabel": "쇄빙 적용 (동결+띄우기)"
                },
                {
                    "type": "debuff",
                    "stat": "physicalVulnerability",
                    "target": "enemy",
                    "values": {
                        "1": 10,
                        "2": 10,
                        "3": 10,
                        "4": 10,
                        "5": 10,
                        "6": 10,
                        "7": 10,
                        "8": 10,
                        "9": 10,
                        "M1": 15,
                        "M2": 15,
                        "M3": 15
                    },
                    "requireCondition": "frozenEnemy",
                    "checkboxLabel": "물리 취약 적용"
                }
            ]
        },

        "ultimate": {
            "name": "트레몰로",
            "type": "ultimate",
            "element": "physical",
            "description": "적에게 물리 피해를 줍니다. 적이 물리 취약 상태라면 띄우기 상태를 부여합니다",
            "phases": {
                "enhance1st": {
                    "name": "",
                    "multipliers": {
                        "1": 489,
                        "2": 538,
                        "3": 586,
                        "4": 635,
                        "5": 684,
                        "6": 733,
                        "7": 782,
                        "8": 831,
                        "9": 880,
                        "M1": 941,
                        "M2": 1014,
                        "M3": 1100
                    }
                }
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
            "name": "작업 연기",
            "description": "배틀 스킬 서스템인의 피해가 40% 증가",
            "effects": [

            ]
        },
        {
            "level": 4,
            "name": "임무보다는 목숨을",
            "description": "의지 10 증가, 힘 10 증가",
            "effects": [
                {
                    "stat": "will",
                    "target": "self",
                    "value": 10
                },
                {
                    "stat": "strength",
                    "target": "self",
                    "value": 10
                }
            ]
        },
        {
            "level": 5,
            "effects": []
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstellaData;
}
if (typeof window !== 'undefined') {
    window.EstellaData = EstellaData;
}
