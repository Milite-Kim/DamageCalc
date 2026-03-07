//DamageCalc\js\data\weapons\artsUnit\detonationUnit.js

const DetonationUnitData = {
    "id": "detonation_unit",
    "name": "폭발 유닛",
    "type": "artsUnit",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "mainStat3",
    "option2": "artsEnhance3",

    "option3": {
        "name": "방출 · 우승자의 위세",
        "keyword": "방출",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 보조 능력치 증가(% 단위). 장착자가 아츠 폭발 피해를 줄 시, 대상이 받는 아츠 피해 증가",

        "personalEffect": {
            "stat": "minorStat",
            "description": "장착자의 보조 능력치 증가",
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
            "stat": "takenArtsDamageIncrease",
            "target": "enemy",
            "description": "아츠 폭발 조건, 아츠 받피증",
            "conditions": {
                "userToggleable": true
            },
            "values": {
                "1": 9,
                "2": 10.8,
                "3": 12.6,
                "4": 14.4,
                "5": 16.2,
                "6": 18,
                "7": 19.8,
                "8": 21.6,
                "9": 25.2
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.DetonationUnitData = DetonationUnitData;
}