//DamageCalc\js\data\weapons\sword\neverRest.js

const NeverRestData = {
    "id": "never_rest",
    "name": "끝없는 방랑",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 500,

    "option1": "will3",
    "option2": "atkIncrease3",

    "option3": {
        "name": "흐름 · 윤회",
        "keyword": "흐름",
        "stackRule": "stack",
        "maxStacks": 5,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "물리 피해 증가, 자신이 주는 물리피해 증가. 그 절반만큼 다른 팀원이 주는 물리 피해 증가",

        "personalEffect": {
            "stat": "physicalDamageIncrease",
            "description": "물리 피해 증가",
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
        },

        "keywordEffect": [
            {
                "stat": "physicalDamageIncrease",
                "target": "self",
                "description": "자신이 주는 물리 피해 증가",
                "conditions": {
                    "userToggleable": true
                },
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
            {
                "stat": "physicalDamageIncrease",
                "target": "allies",
                "description": "팀원이 주는 물리 피해 증가",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 2.5,
                    "2": 3,
                    "3": 3.5,
                    "4": 4,
                    "5": 4.5,
                    "6": 5,
                    "7": 5.5,
                    "8": 6,
                    "9": 7
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.NeverRestData = NeverRestData;
}