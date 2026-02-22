//DamageCalc\js\data\operators\yvonne.js

const YvonneData = {
    "id": "yvonne",
    "name": "이본",
    "element": "cryo",
    "weaponType": "handcannon",
    "majorStat": "intellect",
    "minorStat": "agility",
    "image": "",

    "stats": {
        // 레벨별 스탯 입력 예정
        "1": {
            "operatorAtk": 30,
            "strength": 8,
            "agility": 14,
            "intellect": 24,
            "will": 10
        },
        "20": {
            "operatorAtk": 92,
            "strength": 24,
            "agility": 38,
            "intellect": 57,
            "will": 30
        },
        "40": {
            "operatorAtk": 157,
            "strength": 40,
            "agility": 64,
            "intellect": 91,
            "will": 52
        },
        "60": {
            "operatorAtk": 223,
            "strength": 57,
            "agility": 89,
            "intellect": 125,
            "will": 73
        },
        "80": {
            "operatorAtk": 288,
            "strength": 74,
            "agility": 115,
            "intellect": 159,
            "will": 94
        },
        "90": {
            "operatorAtk": 321,
            "strength": 82,
            "agility": 128,
            "intellect": 176,
            "will": 105
        }
    },

    "skills": {
        "basicAttack": {
            "name": "점프 트리거",
            "type": "basicAttack",
            "element": "cryo",
            "phases": {
                "1st": {
                    "name": "일반 공격 1단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 24,
                        "2": 26,
                        "3": 28,
                        "4": 31,
                        "5": 33,
                        "6": 35,
                        "7": 38,
                        "8": 40,
                        "9": 42,
                        "M1": 45,
                        "M2": 49,
                        "M3": 53
                    }
                },
                "2nd": {
                    "name": "일반 공격 2단계",
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
                "3rd": {
                    "name": "일반 공격 3단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 32,
                        "2": 35,
                        "3": 38,
                        "4": 41,
                        "5": 44,
                        "6": 47,
                        "7": 50,
                        "8": 54,
                        "9": 57,
                        "M1": 61,
                        "M2": 65,
                        "M3": 71
                    }
                },
                "4th": {
                    "name": "일반 공격 4단계",
                    "type": "basicAttack",
                    "multipliers": {
                        "1": 41,
                        "2": 45,
                        "3": 49,
                        "4": 53,
                        "5": 58,
                        "6": 62,
                        "7": 66,
                        "8": 70,
                        "9": 74,
                        "M1": 79,
                        "M2": 85,
                        "M3": 92
                    }
                },
                "5th": {
                    "name": "일반 공격 5단계 (강력한 일격)",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,        // 일반 공격 피해 증가 적용됨
                    "multipliers": {
                        "1": 56,
                        "2": 62,
                        "3": 67,
                        "4": 73,
                        "5": 79,
                        "6": 84,
                        "7": 90,
                        "8": 96,
                        "9": 101,
                        "M1": 108,
                        "M2": 117,
                        "M3": 126
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
            "name": "얼음 폭탄 · β형",
            "type": "battleSkill",
            "element": "cryo",
            "description": "적에게 냉각탄을 발사하여 냉기 피해를 입힙니다. 냉기 부착 혹은 자연 부착인 적에게 명중 시, 대상이 보유한 모든 아츠 부착을 소모하여 피해를 주고 강제로 동결을 부여한다. 추가로 소모된 스택 수치에 따라 추가 냉기 피해를 준다",
            "phases": {
                "1st": {
                    "name": "냉각탄",
                    "multipliers": {
                        "1": 111,
                        "2": 122,
                        "3": 133,
                        "4": 144,
                        "5": 155,
                        "6": 167,
                        "7": 178,
                        "8": 189,
                        "9": 200,
                        "M1": 214,
                        "M2": 230,
                        "M3": 250
                    }
                },
                "2nd": {
                    "name": "동결 부여 피해",
                    "multipliers": {
                        "1": 67,
                        "2": 73,
                        "3": 80,
                        "4": 87,
                        "5": 93,
                        "6": 100,
                        "7": 107,
                        "8": 113,
                        "9": 120,
                        "M1": 128,
                        "M2": 138,
                        "M3": 150
                    }
                },
                "3rd": {
                    "name": "추가 스택 비례 피해",
                    "dynamicHitCount": ["cryoStacks", "natureStacks"],
                    "multipliers": {
                        "1": 89,
                        "2": 98,
                        "3": 107,
                        "4": 116,
                        "5": 124,
                        "6": 133,
                        "7": 142,
                        "8": 151,
                        "9": 160,
                        "M1": 171,
                        "M2": 185,
                        "M3": 200
                    }
                }
            }
        },

        "linkedSkill": {
            "name": "꽁꽁이 · υ37",
            "type": "linkedSkill",
            "element": "cryo",
            "description": "적 위치에 꽁꽁이를 배치하여 4회에 걸쳐 충격파를 내 냉기 피해를 줍니다. 그 후 꽁꽁이가 폭발하여 주위의 적에게 강제로 동결 상태를 부여하고 냉기 피해를 줍니다",
            "phases": {
                "1st": {
                    "name": "충격파 피해",
                    "hitCount": 4,
                    "multipliers": {
                        "1": 45,
                        "2": 49,
                        "3": 54,
                        "4": 58,
                        "5": 62,
                        "6": 67,
                        "7": 71,
                        "8": 76,
                        "9": 80,
                        "M1": 86,
                        "M2": 93,
                        "M3": 100
                    }
                },
                "2nd": {
                    "name": "폭발 피해",
                    "multipliers": {
                        "1": 89,
                        "2": 98,
                        "3": 107,
                        "4": 116,
                        "5": 125,
                        "6": 134,
                        "7": 142,
                        "8": 151,
                        "9": 160,
                        "M1": 171,
                        "M2": 185,
                        "M3": 200
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
        },

        "ultimate": {
            "name": "아이스 슈터",
            "type": "ultimate",
            "element": "cryo",
            "description": "7초 간 기본 공격이 강화되어, 발사할 때마다 치명타 확률이 3% 증가한다(최대 10스택). 스택 수치가 최대라면 치명타 피해가 60% 증가한다. 마지막 일반 공격은 강력한 일격으로 바뀌어 대량의 냉기 피해를 주고, 적이 동결 상태라면 추가로 냉기 피해를 1회 준다.", //스택제 치확이 구현 어렵다면 그냥 일괄 적용
            "phases": {
                "enhance1st": {
                    "name": "강화 기본 공격",
                    "type": "basicAttack",
                    "hitCount": 73,
                    "multipliers": {
                        "1": 8.9,
                        "2": 9.8,
                        "3": 10.7,
                        "4": 11.6,
                        "5": 12.5,
                        "6": 13.4,
                        "7": 14.3,
                        "8": 15.1,
                        "9": 16,
                        "M1": 17.2,
                        "M2": 18.5,
                        "M3": 20
                    }
                },
                "enhance2nd": {
                    "name": "강화 강력한 일격",
                    "type": "heavyStrike",        // 강력한 일격
                    "isBasicAttack": true,
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
                "addtionalDamage": {
                    "name": "동결 적 상대 추가 피해",
                    "type": "ultimate",
                    "userToggleable": true,
                    "checkboxLabel": "동결 적 상대 추가 피해 적용",
                    "multipliers": {
                        "1": 267,
                        "2": 294,
                        "3": 320,
                        "4": 347,
                        "5": 374,
                        "6": 400,
                        "7": 427,
                        "8": 454,
                        "9": 480,
                        "M1": 514,
                        "M2": 554,
                        "M3": 600
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
            "id": "barrageOfTechnology",
            "name": "하이테크 버스트",
            "description": "배틀 스킬 발동 후, 다음 일반 공격은 즉시 '강력한 일격'이 발사되고, 해당 강력한 일격이 주는 피해 +50%",
            "effects": [
                {
                    "stat": "heavyStrikeDamageIncrease",
                    "target": "self",
                    "value": 50,
                    "conditions": {
                        "skills": "basicAttack",
                        "phases": "5th",
                        "userToggleable": true,
                        "checkboxLabel": "하이테크 버스트 : 강력한 일격 피해 50% 증가"
                    }// 혹은 그냥 체크박스 체크 시, 배틀 스킬 계수에 딜이 증가된 강력한 일격 계수를 추가하는 방식도 좋을 듯
                }
            ]
        },
        {
            "id": "freezingPoint",
            "name": "빙점",
            "description": "냉기 부착인 적에게 주는 치명타 피해 +20%. 동결 상태인 적에게는 두 배로 적용됩니다",
            "effects": [
                {
                    "normal": {
                        "stat": "criticalDamage",
                        "target": "self",
                        "value": 20,
                        "conditions": {
                            "userToggleable": true,
                            "checkboxLabel": "빙점 : 냉기 부착 적 상대 적용. 치명타 피해 +20%"
                        }
                    },
                    "enhance": {
                        "stat": "criticalDamage",
                        "target": "self",
                        "value": 40,
                        "conditions": {
                            "userToggleable": true,
                            "checkboxLabel": "빙점 : 동결 적 상대 적용. 치명타 피해 +40%"
                        }
                    }
                }
            ]
        }
    ],

    "potentials": [
        {
            "level": 1,
            "name": "급속 냉동 도우미",
            "description": "연계 스킬의 충격파 횟수가 2회 증가",
            "effects": [
                {
                    "stat": "hitCountBonus",
                    "target": "self",
                    "value": 2,
                    "conditions": {
                        "skill": "linkedSkill",
                        "phases": "1st"
                    }
                }
            ]
        },
        {
            "level": 2,
            "name": "완벽한 창조물",
            "description": "지능 +20, 치명타 확률 +7%",
            "effects": [
                {
                    "stat": "intellect",
                    "target": "self",
                    "value": 20
                },
                {
                    "stat": "criticalRate",
                    "target": "self",
                    "value": 7
                }
            ]
        },
        {
            "level": 3,
            "name": "뚝딱 충전",
            "description": "재능 빙점의 효과가 냉기 부착 적 상대로 주는 치명타 피해 증가량이 10% 추가 증가. 동결 적에게는 동일하게 2배로 적용",
            "effects": [
                {
                    "stat": "talentEnhancement",
                    "target": "self",
                    "value": 10,
                    "conditions": {
                        "talentId": "freezingPoint",
                        "effects": "normal"
                    }
                },
                {
                    "stat": "talentEnhancement",
                    "target": "self",
                    "value": 20,
                    "conditions": {
                        "talentId": "freezingPoint",
                        "effects": "enhance"
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
            "name": "기교 전문가",
            "description": "궁극기 지속 시간동안 공격력 +10%, 치명타 피해 +30%",
            "effects": [
                {
                    "stat": "atkIncrease",
                    "target": "self",
                    "value": 10,
                    "conditions": {
                        "skills": "ultimate"
                    }
                },
                {
                    "stat": "criticalDamage",
                    "target": "self",
                    "value": 30,
                    "conditions": {
                        "skills": "ultimate"
                    }
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = YvonneData;
}
if (typeof window !== 'undefined') {
    window.YvonneData = YvonneData;
}
