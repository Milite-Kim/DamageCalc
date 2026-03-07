//DamageCalc\js\data\weapons\polearm\valiant.js

const ValiantData = {
    "id": "valiant",
    "name": "용사",
    "type": "polearm",
    "rarity": 6,

    "weaponAtk": 495,

    "option1": "agility3",
    "option2": "physicalDamage3",

    "option3": {
        "name": "기예 · 좋은 품성의 결실",
        "keyword": "기예",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 공격력 증가, 장착자가 물리 이상 피해를 줄 시, 추가로 공격력에 비례한 물리 피해를 입힘",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "공격력 증가",
            "values": {
                "1": 10,
                "2": 12,
                "3": 14,
                "4": 16,
                "5": 18,
                "6": 20,
                "7": 22,
                "8": 24,
                "9": 28
            }
        },

        "keywordEffect": {
            "stat": "additionalDamage",
            "target": "enemy",
            "description": "물리 이상 피해를 줄 때, 추가 물리 피해",
            "conditions": {
                "userToggleable": true,
                "onDebuff": ["knockdown", "launch", "heavyAttack", "armorBreak", "shatter"]
            },
            "values": {
                "1": 120,
                "2": 144,
                "3": 168,
                "4": 192,
                "5": 216,
                "6": 240,
                "7": 264,
                "8": 280,
                "9": 336
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.ValiantData = ValiantData;
}