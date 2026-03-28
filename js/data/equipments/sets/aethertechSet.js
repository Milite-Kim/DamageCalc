//DamageCalc\js\data\equipments\sets\aethertechSet.js

const AethertechSetData = {
    "set_Id": "Aethertech",
    "setName": "경량 초자연",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "공격력 +8%. 방어 불능 부여 후 물리 피해 +8% (최대 4스택). 4스택 도달 시 추가 물리 피해 +16%",

        "baseEffect": {
            "stat": "atkIncrease",
            "target": "self",
            "value": 8,
            "description": "공격력 +8%"
        },

        "conditionalEffects": [
            {
                "id": "aethertech_defense_down",
                "stat": "physicalDamageIncrease",
                "target": "self",
                "value": 8,
                "conditions": {
                    "userToggleable": true,
                    "maxStacks": 4
                },
                "description": "물리 피해 +8% (방어 불능 부여 후, 스택당, 최대 4스택)"
            },
            {
                "id": "aethertech_full_stack",
                "stat": "physicalDamageIncrease",
                "target": "self",
                "value": 16,
                "conditions": {
                    "userToggleable": true
                },
                "description": "추가 물리 피해 +16% (방어 불능 4스택 도달 시)"
            }
        ]
    },

    "items": {
        "aethertech_watch": {
            "id": "aethertech_watch",
            "name": "경량 초자연 손목시계",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "aethertech_stabilizer_T1": {
            "id": "aethertech_stabilizer_T1",
            "name": "경량 초자연 안정판 · Ⅰ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "physicalDamageIncrease",
                    "description": "물리 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "aethertech_stabilizer": {
            "id": "aethertech_stabilizer",
            "name": "경량 초자연 안정판",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                }
            ]
        },
        "aethertech_analysis_ring": {
            "id": "aethertech_analysis_ring",
            "name": "경량 초자연 분석 반지",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "physicalDamageIncrease",
                    "description": "물리 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "aethertech_light_gloves": {
            "id": "aethertech_light_gloves",
            "name": "경량 초자연 경량 보호 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "skillsDamageIncrease",
                    "description": "모든 스킬 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "aethertech_gloves": {
            "id": "aethertech_gloves",
            "name": "경량 초자연 보호 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 34, "1": 38, "2": 41, "3": 45 }
                }
            ]
        },
        "aethertech_armor": {
            "id": "aethertech_armor",
            "name": "경량 초자연 보호판",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "staggerDamageBonus",
                    "description": "불균형 목표에 주는 피해 보너스",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.AethertechSetData = AethertechSetData;
}
