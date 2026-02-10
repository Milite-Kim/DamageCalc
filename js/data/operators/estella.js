//DamageCalc\js\data\operators\estella.js

const LaevatainData = {
    "id": "",
    "name": "",
    "element": "",
    "weaponType": "",
    "majorStat": "",
    "minorStat": "",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": ,
            "strength": ,
            "agility": ,
            "intellect": ,
            "will": 
        },
        "20": {
            "operatorAtk": ,
            "strength": ,
            "agility": ,
            "intellect": ,
            "will": 
        },
        "40": {
            "operatorAtk": ,
            "strength": ,
            "agility": ,
            "intellect": ,
            "will": 
        },
        "60": {
            "operatorAtk": ,
            "strength": ,
            "agility": ,
            "intellect": ,
            "will": 
        },
        "80": {
            "operatorAtk": ,
            "strength": ,
            "agility": ,
            "intellect": ,
            "will": 
        },
        "90": {
            "operatorAtk": ,
            "strength": ,
            "agility": ,
            "intellect": ,
            "will": 
        }
    },

    "skills": {
        "basicAttack": {
            "name": "",
            "type": "basicAttack",
            "element": "",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": ,
                        "2": ,
                        "3": ,
                        "4": ,
                        "5": ,
                        "6": ,
                        "7": ,
                        "8": ,
                        "9": ,
                        "M1": ,
                        "M2": ,
                        "M3": 
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": ,
                        "2": ,
                        "3": ,
                        "4": ,
                        "5": ,
                        "6": ,
                        "7": ,
                        "8": ,
                        "9": ,
                        "M1": ,
                        "M2": ,
                        "M3": 
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": ,
                        "2": ,
                        "3": ,
                        "4": ,
                        "5": ,
                        "6": ,
                        "7": ,
                        "8": ,
                        "9": ,
                        "M1": ,
                        "M2": ,
                        "M3": 
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": ,
                        "2": ,
                        "3": ,
                        "4": ,
                        "5": ,
                        "6": ,
                        "7": ,
                        "8": ,
                        "9": ,
                        "M1": ,
                        "M2": ,
                        "M3": 
                    }
                },
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,        // 일반 공격 피해 증가 적용됨
                    "multipliers": {
                        "1": ,
                        "2": ,
                        "3": ,
                        "4": ,
                        "5": ,
                        "6": ,
                        "7": ,
                        "8": ,
                        "9": ,
                        "M1": ,
                        "M2": ,
                        "M3": 
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
            "name": "",
            "type": "battleSkill",
            "element": "",
            "description": "",
            "phases": {
                "1st": {
                    "name": "",
                    "multipliers": {
                        "1": ,
                        "2": ,
                        "3": ,
                        "4": ,
                        "5": ,
                        "6": ,
                        "7": ,
                        "8": ,
                        "9": ,
                        "M1": ,
                        "M2": ,
                        "M3": 
                    }
                }
            }
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
                        "1": 240,
                        "2": 264,
                        "3": 288,
                        "4": 312,
                        "5": 336,
                        "6": 360,
                        "7": 384,
                        "8": 408,
                        "9": 432,
                        "M1": 462,
                        "M2": 498,
                        "M3": 540
                    }
                }
            }
        },

        "ultimate": {
            "name": "",
            "type": "ultimate",
            "element": "",
            "description": "",
            "phases": {
                "enhance1st": {
                    "name": "",
                    "type": "",
                    "multipliers": {
                        "1": ,
                        "2": ,
                        "3": ,
                        "4": ,
                        "5": ,
                        "6": ,
                        "7": ,
                        "8": ,
                        "9": ,
                        "M1": ,
                        "M2": ,
                        "M3": 
                    }
               }
            }
        }
    },

    "talents": [
        {
            "id": "",
            "name": "",
            "description": "",
            "requireActive": false,
            "effects": [
                {
                    "stat": "",
                    "target": "self",
                    "value": 60,
                    "description": " +60"
                }
            ]
        },
        {
            "id": "",
            "name": "",
            "description": "",
            "requireActive": false,
            "effects": [
                {
                    "stat": "heatResistanceIgnore",
                    "target": "enemy",
                    "value": 20,
                    "description": "열기 저항 20 무시"
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