//DamageCalc\js\data\weapons\sword\finchaserV3.js

const FinchaserV3Data = {
    "id": "finchaserV3",
    "name": "린수를 찾아서 3.0",
    "type": "sword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "strength2",
    "option2": "cryoDamage2",

    "option3": {
        "name": "억제 · 린수를 향한 의지",
        "keyword": "억제",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 공격력 증가, 장착자가 배틀 스킬을 사용하여 적에게 동결을 부여했을 때, 목표가 받는 냉기 피해 증가",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "장착자의 공격력 증가",
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
            "stat": "takenCryoDamageIncrease",
            "target": "enemy",
            "description": "배스 동결 부여 조건, 냉기 받피증",
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
        }
    }
}

if (typeof window !== 'undefined') {
    window.FinchaserV3Data = FinchaserV3Data;
}