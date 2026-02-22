//DamageCalc\js\data\operators\snowshine.js

const SnowshineData = {
    "id": "snowshine",
    "name": "스노우샤인",
    "element": "cryo",
    "weaponType": "greatsword",
    "majorStat": "strength",
    "minorStat": "will",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 18,
            "agility": 12,
            "intellect": 9,
            "will": 11
        },
        "20": {
            "operatorAtk": 87,
            "strength": 47,
            "agility": 32,
            "intellect": 27,
            "will": 31
        },
        "40": {
            "operatorAtk": 147,
            "strength": 78,
            "agility": 52,
            "intellect": 46,
            "will": 53
        },
        "60": {
            "operatorAtk": 207,
            "strength": 108,
            "agility": 73,
            "intellect": 65,
            "will": 75
        },
        "80": {
            "operatorAtk": 267,
            "strength": 139,
            "agility": 94,
            "intellect": 84,
            "will": 97
        },
        "90": {
            "operatorAtk": 297,
            "strength": 154,
            "agility": 104,
            "intellect": 93,
            "will": 108
        }
    },

    "skills": {
        "basicAttack": {
            "name": "저체온 강타",
            "type": "basicAttack",
            "element": "physical",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
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
                "2nd": {
                    "name": "일반 공격 2단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 59,
                        "2": 64,
                        "3": 70,
                        "4": 76,
                        "5": 82,
                        "6": 88,
                        "7": 94,
                        "8": 99,
                        "9": 105,
                        "M1": 113,
                        "M2": 121,
                        "M3": 132
                    }
                },
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
                    "multipliers": {
                        "1": 100,
                        "2": 110,
                        "3": 120,
                        "4": 130,
                        "5": 140,
                        "6": 150,
                        "7": 160,
                        "8": 170,
                        "9": 180,
                        "M1": 193,
                        "M2": 208,
                        "M3": 225
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
            "name": "포화성 방어",
            "type": "battleSkill",
            "element": "cryo",
            "description": "적의 공격을 방어합니다. 방어를 성공하면 반격하여 냉기 피해를 주고, 냉기 부착을 부여합니다",
            "phases": {
                "1st": {
                    "name": "반격 피해",
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

        "linkedSkill": {
            //회복 스킬이라 데미지가 없음
        },

        "ultimate": {
            "name": "살얼음 추위",
            "type": "ultimate",
            "element": "cryo",
            "description": "적에게 냉기 피해를 준 뒤, 5초 간 0.5초 간격으로 냉기 피해를 지속적으로 주고, 강제로 동결 시킵니다",
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
                },
                "2nd": {
                    "name": "지속 피해",
                    "hitCount": 10,
                    "multipliers": {
                        "1": 29,
                        "2": 32,
                        "3": 35,
                        "4": 37,
                        "5": 40,
                        "6": 43,
                        "7": 46,
                        "8": 49,
                        "9": 52,
                        "M1": 55,
                        "M2": 60,
                        "M3": 65
                    }
                }
            },
            "appliedEffects": [
                {
                    "type": "debuff",
                    "stat": "freeze",
                    "target": "enemy",
                    "value": true,
                    "forced": true,
                    "checkboxLabel": "동결 강제 부여 (등급 1 고정)"
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
            "name": "얼어붙은 대지의 방패",
            "description": "방어력 +20, 의지 +20", // 현 시점 아군 오퍼레이터의 피격은 고려하지 않으므로 방어력은 미구현ㄴ
            "effects": [
                {
                    "stat": "will",
                    "target": "self",
                    "value": 20
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
    module.exports = SnowshineData;
}
if (typeof window !== 'undefined') {
    window.SnowshineData = SnowshineData;
}
