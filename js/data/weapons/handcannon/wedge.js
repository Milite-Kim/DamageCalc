//DamageCalc\js\data\weapons\handcannon\wedge.js

const WedgeData = {
    "id": "wedge",
    "name": "쐐기",
    "type": "handcannon",
    "rarity": 6,

    "weaponAtk": 500,

    "option1": "mainStat3",
    "option2": "critRate3",

    "option3": {
        "name": "고통 · 문명의 쐐기",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": "1",
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 아츠 피해 증가, 조건에 따라 장착자의 아츠 피해 증가, 추가 조건에 의해 아츠피해가 추가 증가",

        "personalEffect": {
            "stat": "artsDamageIncrease",
            "description": "장착자의 아츠 피해 증가",
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
        },

        "keywordEffect": [
            {
                "stat": "artsDamageIncrease",
                "target": "self",
                "description": "조건에 따른 장착자의 아츠 피해 증가",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 8,
                    "2": 9.6,
                    "3": 11.2,
                    "4": 12.8,
                    "5": 14.4,
                    "6": 16,
                    "7": 17.6,
                    "8": 19.2,
                    "9": 22.4
                }
            },
            {
                "stat": "artsDamageIncrease",
                "target": "self",
                "description": "추가 조건에 따른 장착자의 아츠 피해 추가 증가",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 16,
                    "2": 19.2,
                    "3": 22.4,
                    "4": 25.6,
                    "5": 28.8,
                    "6": 32,
                    "7": 35.2,
                    "8": 38.4,
                    "9": 44.8
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.WedgeData = WedgeData;
}