//DamageCalc\js\data\weapons\sword\aspirant.js

const AspirantData = {
    "id": "aspirant",
    "name": "숭배의 시선",
    "type": "sword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "agility2",
    "option2": "physicalDamage2",

    "option3": {
        "name": "어둠 · 우러러보는 경지",
        "keyword": "어둠",
        "stackRule": "stack",
        "maxStacks": 3,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 궁극기 피해 증가. 장착자가 적에게 띄우기 피해를 줬을 때, 30초 내 다음 궁극기를 사용하는 중에 주는 물리 피해 증가(최대 3중첩)",

        "personalEffect": {
            "stat": "ultimateDamageIncrease",
            "description": "장착자의 궁극기 피해 증가",
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

        "keywordEffect": {
            "stat": "physicalDamageIncrease",
            "target": "self",
            "description": "궁극기 중 물리 피해 증가",
            "conditions": {
                "userToggleable": true,
                "duringUltimate": true
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
    }
}

if (typeof window !== 'undefined') {
    window.AspirantData = AspirantData;
}