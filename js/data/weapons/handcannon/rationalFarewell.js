//DamageCalc\js\data\weapons\handcannon\rationalFarewell.js

const RationalFarewellData = {
    "id": "rational_farewell",
    "name": "이성적인 작별",
    "type": "handcannon",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "strength2",
    "option2": "heatDamage2",

    "option3": {
        "name": "추격 · 옛 시절의 원조",
        "keyword": "추격",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자 배틀 스킬 피해 증가. 장착자가 연계 스킬로 아츠 폭발 피해를 주거나 연소 부여 시, 공격력 증가",

        "personalEffect": {
            "stat": "battleSkillDamageIncrease",
            "description": "장착자의 배틀 스킬 피해 증가",
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
            "stat": "atkIncrease",
            "target": "self",
            "description": "연계 스킬 아츠 폭발 혹은 연소 부여 조건, 공증",
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
    }
}

if (typeof window !== 'undefined') {
    window.RationalFarewellData = RationalFarewellData;
}