//DamageCalc\js\data\equipments\sets\hotWorkSet.js

const HotWorkSetData = {
    "set_Id": "Hot_Work",
    "setName": "열 작업용",
    "requiredPieces": 3,

    //세트 효과
    "setBouns": {
        "description": "장착자의 오리지늄 강도 +30. 조건부로 열기 피해 50% 증가 혹은 자연 피해 50% 증가",

        "baseEffect": {
            "stat": "artsEnhance",
            "target": "self",
            "value": 30,
            "description": "오리지늄 아츠 강도 +30"
        },

        "conditionalEffects": [
            {
                "id": "heat_boost",
                "stat": "heatDamageIncrease",
                "target": "self",
                "value": 50,
                "conditions": {
                    "userToggleable": true
                },
                "description": "열기 피해 증가 +50%"
            },
            {
                "id": "nature_boost",
                "stat": "natureDamageIncrease",
                "target": "self",
                "value": 50,
                "conditions": {
                    "userToggleable": true
                },
                "description": "자연 피해 증가 +50%"
            }
        ]
    },

    "items": {
        "hot_work_exoskeleton": {
            "id": "hot_work_exoskeleton",
            "name": "열 작업용 강화 골격",
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
                    "stat": "heatDamageIncrease",
                    "description": "열기 피해 증가",
                    "values": { "0": 11.5, "1": 12.7, "2": 13.8, "3": 14.9 }
                },
                {
                    "stat": "natureDamageIncrease",
                    "description": "자연 피해 증가",
                    "values": { "0": 11.5, "1": 12.7, "2": 13.8, "3": 14.9 }
                }
            ]
        },
        "hot_work_gauntlets": {
            "id": "hot_work_gauntlets",
            "name": "열 작업용 건틀릿",
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
                    "stat": "heatDamageIncrease",
                    "description": "열기 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                },
                {
                    "stat": "natureDamageIncrease",
                    "description": "자연 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                }
            ]
        },
        "hot_work_gauntlets_T1": {
            "id": "hot_work_gauntlets_T1",
            "name": "열 작업용 건틀릿 · Ⅰ",
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
                    "stat": "heatDamageIncrease",
                    "description": "열기 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                },
                {
                    "stat": "natureDamageIncrease",
                    "description": "자연 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                }
            ]
        },
        "hot_work_pyrometer": {
            "id": "hot_work_pyrometer",
            "name": "열 작업용 온도 측정기",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                },
                {
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "hot_work_power_bank": {
            "id": "hot_work_power_bank",
            "name": "열 작업용 에너지 저장함",
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
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                }
            ]
        },
        "hot_work_power_catridge": {
            "id": "hot_work_power_catridge",
            "name": "열 작업용 전력 상자",
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
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.HotWorkSetData = HotWorkSetData;
}