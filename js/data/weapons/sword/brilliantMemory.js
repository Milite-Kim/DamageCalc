//DamageCalc\js\data\weapons\sword\brilliantMemory.js

const BrilliantMemoryData = {
    "id": "brilliant_memory",
    "name": "찬란했던 기억",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "agility3",
    "option2": "critRate3",

    "option3": {
        "name": "어둠 · 사라지지 않은 여광",
        "keyword": "사라지지 않은 여광",
        "stackRule": "stack",
        "maxStacks": 3,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "스킬로 방어 불능 부여 시 궁극기 피해 증가 (최대 3스택)",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "공격력 증가",
            "values": {
                "1": 7,
                "2": 8.4,
                "3": 9.8,
                "4": 11.2,
                "5": 12.6,
                "6": 14,
                "7": 15.4,
                "8": 16.8,
                "9": 19.6
            }
        },

        "keywordEffect": {
            "stat": "ultimateDamageIncrease",
            "target": "self",
            "description": "스킬로 방어 불능 부여 → 궁극기 피해 증가 (스택당)",
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
    }
}

if (typeof window !== 'undefined') {
    window.BrilliantMemoryData = BrilliantMemoryData;
}
