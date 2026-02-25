//DamageCalc\js\data\weapons\sword\sunderingSteel.js

const SunderingSteelData = {
    "id": "sundering_steel",
    "name": "강철의 여운",
    "type": "sword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "agility2",
    "option2": "physicalDamageIncrease2",

    "option3": {
        "name": "기예 · 옛 불의 잔향",
        "keyword": "기예",
        "stackRule": "stack",
        "maxStacks": 2,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자 공격력 증가, 조건에 따라 장착자의 공격력 증가",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "공격력 증가",
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

        "keywordEffect": {
            "stat": "atkIncrease",
            "target": "self",
            "description": "조건부 공격력 증가",
            "conditions": {
                "userToggleable": true
            },
            "values": {
                "1": 7.5,
                "2": 9,
                "3": 10.5,
                "4": 12,
                "5": 13.5,
                "6": 15,
                "7": 16.5,
                "8": 18,
                "9": 21
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.SunderingSteelData = SunderingSteelData;
}