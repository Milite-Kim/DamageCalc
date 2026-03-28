//DamageCalc\js\data\equipments\sets\frontiersSet.js

const FrontiersSetData = {
    "set_Id": "Frontiers",
    "setName": "개척",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "연계 스킬 쿨타임 -15%. 조건 만족 시, 팀 전체 피해 +16%",

        "baseEffect": {
            "stat": "linkedSkillCooldownReduction",
            "target": "self",
            "value": 15,
            "description": "연계 스킬 쿨타임 -15%"
        },

        "conditionalEffects": [
            {
                "id": "frontiers_team_damage",
                "stat": "allDamageIncrease",
                "target": "allies",
                "value": 16,
                "conditions": {
                    "userToggleable": true
                },
                "description": "팀 전체 피해 +16%"
            }
        ]
    },

    "items": {
        "frontiers_kit_o2_tube": {
            "id": "frontiers_kit_o2_tube",
            "name": "개척자 산소 공급 장치",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                },
                {
                    "stat": "physicalDamageIncrease",
                    "description": "물리 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "frontiers_kit_analyzer": {
            "id": "frontiers_kit_analyzer",
            "name": "개척자 분석 장치",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                },
                {
                    "stat": "ultimateDamageIncrease",
                    "description": "궁극기 피해 증가",
                    "values": { "0": 51.7, "1": 56.9, "2": 62.1, "3": 67.3 }
                }
            ]
        },
        "frontiers_kit_oxygen": {
            "id": "frontiers_kit_oxygen",
            "name": "개척자 증량 산소 공급 장치",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "supportStatIncrease",
                    "description": "보조 능력치",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "frontiers_kit_communicator_T1": {
            "id": "frontiers_kit_communicator_T1",
            "name": "개척자 통신기 · Ⅰ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "cryoDamageIncrease",
                    "description": "냉기 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                },
                {
                    "stat": "electricDamageIncrease",
                    "description": "전기 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "frontiers_kit_communicator": {
            "id": "frontiers_kit_communicator",
            "name": "개척자 통신기",
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
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "frontiers_gloves_fiber": {
            "id": "frontiers_gloves_fiber",
            "name": "개척자 섬유 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "skillsDamageIncrease",
                    "description": "모든 스킬 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "frontiers_gloves_anticorrosion": {
            "id": "frontiers_gloves_anticorrosion",
            "name": "개척자 내부식성 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 34.5, "1": 38.0, "2": 41.4, "3": 44.9 }
                }
            ]
        },
        "frontiers_armor_command": {
            "id": "frontiers_armor_command",
            "name": "개척자 방호복",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 12.3, "1": 13.6, "2": 14.8, "3": 16.0 }
                }
            ]
        },
        "frontiers_armor_T3": {
            "id": "frontiers_armor_T3",
            "name": "개척자 방어구 · Ⅲ",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "supportStatIncrease",
                    "description": "보조 능력치",
                    "values": { "0": 10.4, "1": 11.4, "2": 12.4, "3": 13.5 }
                }
            ]
        },
        "frontiers_armor_T2": {
            "id": "frontiers_armor_T2",
            "name": "개척자 방어구 · Ⅱ",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "frontiers_armor_T1": {
            "id": "frontiers_armor_T1",
            "name": "개척자 방어구 · Ⅰ",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "frontiers_armor": {
            "id": "frontiers_armor",
            "name": "개척자 방어구",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "ultimateDamageIncrease",
                    "description": "궁극기 피해 증가",
                    "values": { "0": 25.9, "1": 28.5, "2": 31.1, "3": 33.6 }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.FrontiersSetData = FrontiersSetData;
}
