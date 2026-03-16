//DamageCalc\js\data\equipments\sets\pulserLabsSet.js

const PulserLabsSetData = {
    "set_Id": "Pulser_Labs",
    "setName": "펄스식",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "장착자의 오리지늄 아츠 강도 +30. 조건부로 전기 피해 50% 증가 혹은 냉기 피해 50% 증가",

        "baseEffect": {
            "stat": "artsEnhance",
            "target": "self",
            "value": 30,
            "description": "오리지늄 아츠 강도 +30"
        },

        "conditionalEffects": [
            {
                "id": "electric_boost",
                "stat": "electricDamageIncrease",
                "target": "self",
                "value": 50,
                "conditions": {
                    "userToggleable": true
                },
                "description": "전기 피해 증가 +50% (감전 부여 후)"
            },
            {
                "id": "cryo_boost",
                "stat": "cryoDamageIncrease",
                "target": "self",
                "value": 50,
                "conditions": {
                    "userToggleable": true
                },
                "description": "냉기 피해 증가 +50% (동결 부여 후)"
            }
        ]
    },

    "items": {
        "pulser_labs_kit_calibrator": {
            "id": "pulser_labs_kit_calibrator",
            "name": "펄스식 교정기",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                },
                {
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                }
            ]
        },
        "pulser_labs_gloves": {
            "id": "pulser_labs_gloves",
            "name": "펄스식 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
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
        "pulser_labs_armor_jammer": {
            "id": "pulser_labs_armor_jammer",
            "name": "펄스식 교란 방어구",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 20, "1": 22, "2": 24, "3": 27 }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.PulserLabsSetData = PulserLabsSetData;
}
