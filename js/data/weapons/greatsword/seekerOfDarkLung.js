//DamageCalc\js\data\weapons\greatsword\seekerOfDarkLung.js

const SeekerOfDarkLungData = {
    "id": "seeker_of_dark_lung",
    "name": "검은 추적자",
    "type": "greatsword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "strength2",
    "option2": "ultimateCharge2",

    "option3": {
        "name": "방출 · 꿰뚫는 이치",
        "keyword": "방출",
        "stackRule": "stack",
        "maxStacks": 3,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 주요 능력치 증가(%). 장착자가 적에게 아츠 폭발 피해를 줬을 때, 공격력 증가(최대 3중첩)",

        "personalEffect": {
            "stat": "mainStat",
            "description": "장착자의 주요 능력치 증가(%)",
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

        "keywordEffect":
        {
            "stat": "atkIncrease",
            "target": "self",
            "description": "아츠 폭발 조건, 공증",
            "conditions": {
                "userToggleable": true
            },
            "values": {
                "1": 6,
                "2": 7.2,
                "3": 8.4,
                "4": 9.6,
                "5": 10.8,
                "6": 12,
                "7": 13.2,
                "8": 14.4,
                "9": 16.8
            }
        }

    }
}

if (typeof window !== 'undefined') {
    window.SeekerOfDarkLungData = SeekerOfDarkLungData;
}