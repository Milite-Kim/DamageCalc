//DamageCalc\js\data\equipments\sets\lynxSet.js

const LynxSetData = {
    "set_Id": "Lynx",
    "setName": "생체 보조",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "치유 효율 +20%. 아군 치유 시 목표 받는 피해 -15%. 치유량 최대치 초과 시 받는 피해 -30%",

        "baseEffect": {
            "stat": "healEfficiency",
            "target": "self",
            "value": 20,
            "description": "치유 효율 +20%"
        },

        "conditionalEffects": [
            {
                "id": "lynx_heal_damage_reduction",
                "stat": "damageReduction",
                "target": "allies",
                "value": 15,
                "conditions": {
                    "userToggleable": true
                },
                "description": "아군 치유 시 목표 받는 피해 -15%"
            },
            {
                "id": "lynx_overheal_damage_reduction",
                "stat": "damageReduction",
                "target": "allies",
                "value": 30,
                "conditions": {
                    "userToggleable": true
                },
                "description": "치유량 최대치 초과 시 받는 피해 -30%"
            }
        ]
    },

    "items": {
        "lynx_syringe": {
            "id": "lynx_syringe",
            "name": "생체 보조 보호 주사기",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                },
                {
                    "stat": "healEfficiency",
                    "description": "치유 효율 보너스",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "lynx_shield_plate": {
            "id": "lynx_shield_plate",
            "name": "생체 보조 보호판",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "mainStat",
                    "description": "주요 능력치",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "lynx_connector_T2": {
            "id": "lynx_connector_T2",
            "name": "생체 보조 접속기 · Ⅱ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                },
                {
                    "stat": "hpIncrease",
                    "description": "생명력",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "lynx_connector_T1": {
            "id": "lynx_connector_T1",
            "name": "생체 보조 접속기 · Ⅰ",
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
                    "stat": "hpIncrease",
                    "description": "생명력",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "lynx_connector": {
            "id": "lynx_connector",
            "name": "생체 보조 접속기",
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
                    "stat": "damageReduction",
                    "description": "모든 피해 감소",
                    "values": { "0": 17.2, "1": 18.5, "2": 19.9, "3": 21.2 }
                }
            ]
        },
        "lynx_metal_gloves": {
            "id": "lynx_metal_gloves",
            "name": "생체 보조 금속 장갑",
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
                    "stat": "healEfficiency",
                    "description": "치유 효율 보너스",
                    "values": { "0": 17.3, "1": 19.0, "2": 20.7, "3": 22.4 }
                }
            ]
        },
        "lynx_wrist_gloves": {
            "id": "lynx_wrist_gloves",
            "name": "생체 보조 장갑(팔목)",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 20.5, "1": 22.6, "2": 24.6, "3": 26.7 }
                }
            ]
        },
        "lynx_breastplate": {
            "id": "lynx_breastplate",
            "name": "생체 보조 흉갑",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "healEfficiency",
                    "description": "치유 효율 보너스",
                    "values": { "0": 10.4, "1": 11.4, "2": 12.4, "3": 13.5 }
                }
            ]
        },
        "lynx_heavy_armor": {
            "id": "lynx_heavy_armor",
            "name": "생체 보조 중갑",
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
                    "stat": "healEfficiency",
                    "description": "치유 효율 보너스",
                    "values": { "0": 10.4, "1": 11.4, "2": 12.4, "3": 13.5 }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.LynxSetData = LynxSetData;
}
