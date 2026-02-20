//DamageCalc\js\data\operators\lifeng.js

const LifengData = {
    "id": "lifeng",
    "name": "여풍",
    "element": "physical",
    "weaponType": "polearm",
    "majorStat": "agility",
    "minorStat": "strength",
    "image": "",

    "stats": {
        "1": {
            "operatorAtk": 30,
            "strength": 14,
            "agility": 20,
            "intellect": 13,
            "will": 12
        },
        "20": {
            "operatorAtk": 90,
            "strength": 38,
            "agility": 44,
            "intellect": 35,
            "will": 35
        },
        "40": {
            "operatorAtk": 153,
            "strength": 62,
            "agility": 69,
            "intellect": 58,
            "will": 58
        },
        "60": {
            "operatorAtk": 217,
            "strength": 86,
            "agility": 94,
            "intellect": 81,
            "will": 82
        },
        "80": {
            "operatorAtk": 280,
            "strength": 111,
            "agility": 119,
            "intellect": 104,
            "will": 105
        },
        "90": {
            "operatorAtk": 312,
            "strength": 123,
            "agility": 132,
            "intellect": 115,
            "will": 117
        }
    },

    "skills": {
        "basicAttack": {
            "name": "업보 파괴",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 24, "2": 27, "3": 29, "4": 32, "5": 34,
                        "6": 36, "7": 39, "8": 41, "9": 44,
                        "M1": 47, "M2": 50, "M3": 55
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 29, "2": 32, "3": 35, "4": 38, "5": 41,
                        "6": 44, "7": 47, "8": 49, "9": 52,
                        "M1": 56, "M2": 60, "M3": 65
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 35, "2": 39, "3": 42, "4": 46, "5": 49,
                        "6": 53, "7": 56, "8": 60, "9": 63,
                        "M1": 67, "M2": 73, "M3": 79
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계 (강력한 일격)",
                    "type": "heavyStrike",
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 68, "2": 74, "3": 81, "4": 88, "5": 95,
                        "6": 101, "7": 108, "8": 115, "9": 122,
                        "M1": 130, "M2": 140, "M3": 152
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
            "name": "신체 정화",
            "type": "battleSkill",
            "element": "physical",
            "description": "적에게 물리 피해 2회를 가한 후, 지면을 힘차게 내려쳐 물리 피해를 가하며 '넘어뜨리기' 상태를 가합니다. 그 후 적에게 물리 취약을 가합니다",
            "phases": {
                "1st": {
                    "name": "첫 휘두르기",
                    "multipliers": {
                        "1": 38, "2": 42, "3": 46, "4": 50, "5": 53,
                        "6": 57, "7": 61, "8": 65, "9": 69,
                        "M1": 73, "M2": 79, "M3": 86
                    }
                },
                "2nd": {
                    "name": "두 번째 휘두르기",
                    "multipliers": {
                        "1": 38, "2": 42, "3": 46, "4": 50, "5": 53,
                        "6": 57, "7": 61, "8": 65, "9": 69,
                        "M1": 73, "M2": 79, "M3": 86
                    }
                },
                "last": {
                    "name": "마지막 내려치기",
                    "multipliers": {
                        "1": 119, "2": 131, "3": 143, "4": 155, "5": 167,
                        "6": 178, "7": 190, "8": 202, "9": 214,
                        "M1": 229, "M2": 247, "M3": 268
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "knockdown",
                    "target": "enemy",
                    "value": true,
                    "checkboxLabel": "넘어뜨리기 적용"
                },
                {
                    "type": "debuff",
                    "stat": "physicalVulnerability",
                    "target": "enemy",
                    "values": {
                        "1": 5, "2": 5, "3": 5, "4": 5, "5": 5,
                        "6": 7, "7": 7, "8": 7, "9": 9,
                        "M1": 10, "M2": 10, "M3": 12
                    },
                    "checkboxLabel": "물리 취약 적용"
                }
            ]
        },

        "linkedSkill": {
            "name": "분노의 형상",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 물리 피해를 2회 줍니다. 그 후 연타 버프를 획득합니다",
            "phases": {
                "1st": {
                    "name": "첫 물리 피해",
                    "multipliers": {
                        "1": 47, "2": 51, "3": 56, "4": 61, "5": 65,
                        "6": 70, "7": 75, "8": 79, "9": 84,
                        "M1": 90, "M2": 97, "M3": 105
                    }
                },
                "2nd": {
                    "name": "두 번째 피해",
                    "multipliers": {
                        "1": 167, "2": 183, "3": 200, "4": 217, "5": 233,
                        "6": 250, "7": 267, "8": 283, "9": 300,
                        "M1": 321, "M2": 346, "M3": 375
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "buff",
                    "stat": "linkBuff",
                    "target": "team",
                    "value": true,
                    "checkboxLabel": "연타 버프 적용"
                }
            ]
        },

        "ultimate": {
            "name": "움직이지 않는 마음",
            "type": "ultimate",
            "element": "physical",
            "description": "적에게 물리 피해를 주며 '넘어뜨리기' 상태로 만든다. 이후 다시 물리 피해를 가하며 '넘어뜨리기' 상태로 만든다. 만약 연타 버프를 소모한 경우에는 추가 물리 피해를 가한다.",
            "phases": {
                "1st": {
                    "name": "첫 물리 피해",
                    "multipliers": {
                        "1": 178, "2": 196, "3": 213, "4": 231, "5": 249,
                        "6": 267, "7": 284, "8": 302, "9": 320,
                        "M1": 342, "M2": 369, "M3": 400
                    }
                },
                "2nd": {
                    "name": "두 번째 피해",
                    "multipliers": {
                        "1": 178, "2": 196, "3": 213, "4": 231, "5": 249,
                        "6": 267, "7": 284, "8": 302, "9": 320,
                        "M1": 342, "M2": 369, "M3": 400
                    }
                },
                "extraAttack": {
                    "name": "연타 버프 소모 시 추가 피해",
                    "multipliers": {
                        "1": 267, "2": 294, "3": 320, "4": 347, "5": 374,
                        "6": 400, "7": 427, "8": 454, "9": 480,
                        "M1": 514, "M2": 554, "M3": 600
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "knockdown",
                    "target": "enemy",
                    "value": true,
                    "count": 2,
                    "checkboxLabel": "넘어뜨리기 적용 (2회)"
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
            "id": "illumination",
            "name": "돈오",
            "description": "지능 및 의지 스탯 1당, 공격력 0.15% 증가",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "dynamicValue": {
                        "basedOn": ["intellect", "will"],
                        "perPoint": 0.15
                    }
                }
            ]
        },
        {
            "id": "subduerOfEvil",
            "name": "복마",
            "description": "적에게 넘어뜨리기 피해를 줄 때마다 자신의 공격력의 100% 물리 피해를 추가로 가함",
            "effects": [
                {
                    "stat": "additionalDamage",
                    "target": "self",
                    "value": 100,
                    "conditions": {
                        "onDebuff": "knockdown"
                    }
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "파집",
            "description": "배틀 스킬의 물리 취약 효과 +5%",
            "effects": [
                {
                    "stat": "appliedEffectEnhancement",
                    "target": "self",
                    "value": 5,
                    "conditions": {
                        "skill": "battleSkill",
                        "effectStats": ["physicalVulnerability"]
                    }
                }
            ]
        },
        {
            "level": 2,
            "name": "수신",
            "description": "모든 능력이 15 증가",
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
                },
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 15
                },
                {
                    "stat": "will",
                    "target": "self",
                    "value": 15
                }
            ]
        },
        {
            "level": 3,
            "name": "양성",
            "description": "재능 '돈오'의 효과가 0.05% 추가 상승한다 (0.15% → 0.2%)",
            "effects": [
                {
                    "stat": "talentEnhancement",
                    "target": "self",
                    "value": 0.05,
                    "conditions": {
                        "talentId": "illumination"
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
            "name": "불해",
            "description": "재능 '복마'가 강화되어, 발동 시 추가로 250%의 추가 피해를 준다(15초 쿨)",
            "toggleable": true,
            "checkboxLabel": "불해 활성화 (복마 추가 피해 250%)",
            "effects": [
                {
                    "stat": "talentEnhancement",
                    "target": "self",
                    "value": 250,
                    "conditions": {
                        "talentId": "subduerOfEvil"
                    }
                }
            ]
        }
    ]
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = LifengData;
}
if (typeof window !== 'undefined') {
    window.LifengData = LifengData;
}
