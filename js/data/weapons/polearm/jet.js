//DamageCalc\js\data\weapons\polearm\jet.js

const JETData = {
    "id": "jet",
    "name": "J.E.T.",
    "type": "polearm",
    "rarity": 6,

    "weaponAtk": 500,

    "option1": "mainStat3",
    "option2": "atkIncrease3",

    "option3": {
        "name": "억제 · 천체 물리학",
        "keyword": "억제",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 아츠 피해 증가, 장착자가 배틀 스킬 사용할 때, 적에게 주는 아츠 피해 증가 버프 획득, 장착자가 연계 스킬 사용할 때, 아츠 피해 증가 버프 획득",

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
                "description": "배스 아츠 피증 조건 만족",
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
            },
            {
                "stat": "artsDamageIncrease",
                "target": "self",
                "description": "연계 아츠 피증 효과 만족",
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
    window.JETData = JETData;
}