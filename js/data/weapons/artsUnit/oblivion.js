//DamageCalc\js\data\weapons\artsUnit\oblivion.js

const OblivionData = {
    "id": "oblivion",
    "name": "망각",
    "type": "artsUnit",
    "rarity": 6,

    "weaponAtk": 495,

    "option1": "intellect3",
    "option2": "artsDamage3",

    "option3": {
        "name": "어둠 · 치욕",
        "keyword": "어둠",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 치명타 확률 증가. 궁극기 사용 시, 아츠 피해 증가 버프 획득. 연계 스킬 사용 시, 아츠 피해 증가 버프 획득",

        "personalEffect": {
            "stat": "critRate",
            "description": "장착자의 치명타 확률 증가",
            "values": {
                "1": 5,
                "2": 6,
                "3": 7,
                "4": 8,
                "5": 9,
                "6": 10,
                "7": 11,
                "8": 12,
                "9": 14
            }
        },

        "keywordEffect": [
            {
                "stat": "artsDamageIncrease",
                "target": "self",
                "description": "궁극기 사용 조건, 아츠 피해 증가",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 24,
                    "2": 28.8,
                    "3": 33.6,
                    "4": 38.4,
                    "5": 43.2,
                    "6": 48,
                    "7": 52.8,
                    "8": 57.6,
                    "9": 67.2
                }
            },
            {
                "stat": "artsDamageIncrease",
                "target": "self",
                "description": "연계 스킬 사용 조건, 아츠 피해 증가",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 12,
                    "2": 14.4,
                    "3": 16.8,
                    "4": 19.2,
                    "5": 21.6,
                    "6": 24,
                    "7": 26.4,
                    "8": 28.8,
                    "9": 33.6
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.OblivionData = OblivionData;
}