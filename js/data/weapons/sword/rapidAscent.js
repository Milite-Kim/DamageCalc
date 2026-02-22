//DamageCalc\js\data\weapons\sword\rapidAscent.js

const RapidAscentData = {
    "id": "rapid_ascent",
    "name": "부요",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 495,

    "option1": "mainStat3",
    "option2": "criRate3",

    "option3": {
        "name": "어둠 · 청운",
        "keyword": "어둠",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "배틀 스킬과 궁극기가 주는 물리 피해 증가, 불균형 상태의 적에게 주는 피해 증가",

        "personalEffect": {
            "stat": "physicalDamageIncrease",
            "description": "주는 물리 피해 증가",
            "values": {
                "1": 15,
                "2": 18,
                "3": 21,
                "4": 24,
                "5": 27,
                "6": 30,
                "7": 33,
                "8": 36,
                "9": 42
            },
            "conditions": {
                "skills": ["battleSkill", "ultimate"]
            }
        },

        "keywordEffect": {
            "stat": "staggeredDamageIncrease", //불균형 상대 대상에게 주는 피해량 증가
            "target": "self",
            "description": "불균형 상태인 적에게 주는 피해 증가",
            "conditions": {
                "userToggleable": true
            },
            "values": {
                "1": 50,
                "2": 60,
                "3": 70,
                "4": 80,
                "5": 90,
                "6": 100,
                "7": 110,
                "8": 120,
                "9": 140
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.RapidAscentData = RapidAscentData;
}