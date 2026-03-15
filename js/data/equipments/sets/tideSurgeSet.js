//DamageCalc\js\data\equipments\sets\tideSurgeSet.js

const TideSurgeSetData = {
    "set_Id": "",
    "setName": "조류의 물결",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "장착자의 모든 스킬 피해 +20%. 조건 만족 시, 아츠 피해 +35% (중첩 불가)",

        "baseEffect": {
            "stat": "skillsDamageIncrease",
            "target": "self",
            "value": 20,
            "description": "모든 스킬 피해 +20%"
        },

        "conditionalEffects": [
            {
                "id": "arts_boost",
                "stat": "artsDamageIncrease",
                "target": "self",
                "value": 35,
                "conditions": {
                    "userToggleable": true
                },
                "description": "아츠 피해 +35% (아츠 부착 2스택 이상 부여 후)"
            }
        ]
    },

    "items": {
        "tide_surge_armor": {
            "id": "",
            "name": "낙조 경갑",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 12.3, "1": 13.6, "2": 14.8, "3": 16.0 }
                }
            ]
        },
        "tide_surge_gloves": {
            "id": "",
            "name": "조류의 물결 금속 장갑",
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
                    "stat": "cryoDamageIncrease",
                    "description": "냉기 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                },
                {
                    "stat": "electricDamageIncrease",
                    "description": "전기 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                }
            ]
        },
        "tide_surge_kit_flamesaw": {
            "id": "",
            "name": "탁류 화염 절단기",
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
                    "stat": "basicAttackDamageIncrease",
                    "description": "일반 공격 피해 증가",
                    "values": { "0": 27.6, "1": 30.4, "2": 33.1, "3": 35.9 }
                }
            ]
        },
        "tide_surge_kit_oxygen": {
            "id": "",
            "name": "현하 산소 공급 장치",
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
        }
    }
}

if (typeof window !== 'undefined') {
    window.TideSurgeSetData = TideSurgeSetData;
}
