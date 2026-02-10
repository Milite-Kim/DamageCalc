//DamageCalc\js\data\equipments\sets\eternalXiraniteSet.js

const EternalXiraniteSetData = {
    "set_Id": "Eternal_Xiranite",
    "setName": "식양의 숨결",
    "requiredPieces": 3,

    //세트 효과
    "setBouns": {
        "description": "장착자의 생명력 +1000. 조건 만족 시, 다른 팀원이 주는 피해 16% 증가(중첩 불가)",

        "baseEffect": {
            "stat": "hpIncrease",
            "target": "self",
            "value": 1000,
            "description": "생명력 1000 증가"
        },

        "conditionalEffects": [
            {
                "id": "allDamageIncrease",
                "stat": "allDamageIncrease",
                "target": "allies",
                "value": 16,
                "conditions": {
                    "userToggleable": true
                },
                "description": "다른 팀원이 주는 피해 16% 증가"
            }
        ]
    },

    "items": {
        "eternal_xiranite_armor": {
            "id": "eternal_xiranite_armor",
            "name": "식양의 숨결 장갑",
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
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 20, "1": 22, "2": 24, "3": 27 }
                }
            ]
        },
        "eternal_xiranite_gloves": {
            "id": "eternal_xiranite_gloves",
            "name": "식양의 장갑 글러브",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율 증가",
                    "values": { "0": 20.5, "1": 22.6, "2": 24.6, "3": 26.7 }
                }
            ]
        },
        "eternal_xiranite_gloves_T1": {
            "id": "eternal_xiranite_gloves_T1",
            "name": "식양의 장갑 글로브 · Ⅰ",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율 증가",
                    "values": { "0": 20.5, "1": 22.6, "2": 24.6, "3": 26.7 }
                }
            ]
        },
        "eternal_xiranite_power_core": {
            "id": "eternal_xiranite_power_core",
            "name": "식양의 숨결 충전 코어",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율 증가",
                    "values": { "0": 24.6, "1": 27.1, "2": 29.6, "3": 32.0 }
                }
            ]
        },
        "eternal_xiranite_power_core_T1": {
            "id": "eternal_xiranite_power_core_T1",
            "name": "식양의 숨결 충전 코어 · Ⅰ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "healEfficiency",
                    "description": "치유 효율 증가",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "eternal_xiranite_auxiliary_arm": {
            "id": "eternal_xiranite_auxiliary_arm",
            "name": "식양의 숨결 보조 견갑",
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
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율 증가",
                    "values": { "0": 24.6, "1": 27.1, "2": 29.6, "3": 32.0 }
                }
            ]
        }
    }
}

if (typeof window !== 'undefined') {
    window.EternalXiraniteSetData = EternalXiraniteSetData;
}