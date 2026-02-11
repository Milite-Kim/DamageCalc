//DamageCalc\js\data\operators\akekuri.js

const AkekuriData = {
    "id": "akekuri",
    "name": "아케쿠리",
    "element": "heat",
    "weaponType": "sword",
    "majorStat": "agility",
    "minorStat": "intellect",
    "image": "",

    "stats": {
        "1": {
            "operatorAtk": 30,
            "strength": 13,
            "agility": 15,
            "intellect": 12,
            "will": 9
        },
        "20": {
            "operatorAtk": 92,
            "strength": 34,
            "agility": 42,
            "intellect": 32,
            "will": 30
        },
        "40": {
            "operatorAtk": 157,
            "strength": 55,
            "agility": 70,
            "intellect": 53,
            "will": 52
        },
        "60": {
            "operatorAtk": 222,
            "strength": 77,
            "agility": 98,
            "intellect": 75,
            "will": 74
        },
        "80": {
            "operatorAtk": 287,
            "strength": 99,
            "agility": 126,
            "intellect": 96,
            "will": 96
        },
        "90": {
            "operatorAtk": 319,
            "strength": 110,
            "agility": 140,
            "intellect": 106,
            "will": 108
        }
    },

    "skills": {
        "basicAttack": {
            "name": "진취의 검날",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 20, "2": 22, "3": 24, "4": 26, "5": 28,
                        "6": 30, "7": 32, "8": 34, "9": 36,
                        "M1": 39, "M2": 42, "M3": 45
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 28, "2": 30, "3": 33, "4": 36, "5": 39,
                        "6": 41, "7": 44, "8": 47, "9": 50,
                        "M1": 53, "M2": 57, "M3": 62
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 33, "2": 36, "3": 39, "4": 43, "5": 46,
                        "6": 49, "7": 52, "8": 55, "9": 59,
                        "M1": 63, "M2": 67, "M3": 73
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계 (강력한 일격)",
                    "type": "heavyStrike",
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 50, "2": 54, "3": 59, "4": 64, "5": 69,
                        "6": 74, "7": 79, "8": 84, "9": 89,
                        "M1": 95, "M2": 103, "M3": 111
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
            "name": "열정 분출",
            "type": "battleSkill",
            "element": "heat",
            "description": "적에게 열기 피해를 가하고 열기 부착을 부여한다",
            "phases": {
                "1st": {
                    "name": "베기 공격",
                    "multipliers": {
                        "1": 142, "2": 156, "3": 171, "4": 185, "5": 199,
                        "6": 213, "7": 228, "8": 242, "9": 256,
                        "M1": 274, "M2": 295, "M3": 320
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "섬광 돌진",
            "type": "linkedSkill",
            "element": "physical",
            "description": "적에게 2연속으로 찌르기를 가한다",
            "phases": {
                "1st": {
                    "name": "찌르기 총 피해량",
                    "multipliers": {
                        "1": 160, "2": 176, "3": 192, "4": 208, "5": 224,
                        "6": 240, "7": 256, "8": 272, "9": 288,
                        "M1": 308, "M2": 332, "M3": 360
                    }
                }
            }
        },

        "ultimate": {
            "name": "소대, 집합!",
            "type": "ultimate",
            "description": "스킬 게이지를 회복한다"
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
            "id": "stayingInTheZone",
            "name": "몰입의 시간",
            "description": "팀원에게 '연타' 버프를 적용한다",
            "toggleable": true,
            "checkboxLabel": "연타 버프 적용",
            "effects": [
                {
                    "stat": "linkBuff",
                    "target": "team",
                    "value": true
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "긍정적 피드백",
            "description": "공격력 10% 증가, 최대 5중첩 가능",
            "toggleable": true,
            "checkboxLabel": "긍정적 피드백 활성화",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "value": 10,
                    "stack": 5
                }
            ]
        },
        {
            "level": 2,
            "name": "이념의 불씨",
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
            "level": 3,
            "name": "혼신의 협력",
            "description": "팀 전체 공격력 10% 증가",
            "toggleable": true,
            "checkboxLabel": "혼신의 협력 활성화 (팀 공격력 10% 증가)",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "team",
                    "value": 10
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
    module.exports = AkekuriData;
}
if (typeof window !== 'undefined') {
    window.AkekuriData = AkekuriData;
}
