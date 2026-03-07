//DamageCalc\js\data\weapons\artsUnit\dreamsOfTheStarryBeach.js

const DreamsOfTheStarryBeachData = {
    "id": "dreams_of_the_starry_beach",
    "name": "바다와 별의 꿈",
    "type": "artsUnit",
    "rarity": 6,

    "weaponAtk": 495,

    "option1": "intellect3",
    "option2": "healEfficiency3",

    "option3": {
        "name": "고통 · 밀물과 썰물의 속삭임",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 보조 능력치 증가(% 단위). 장착자가 부식을 소모했을 시, 대상이 받는 아츠 피해 증가",

        "personalEffect": {
            "stat": "minorStat",
            "description": "장착자의 보조 능력치 증가",
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
            "stat": "takenArtsDamageIncrease",
            "target": "enemy",
            "description": "부식 소모 조건, 아츠 받피증",
            "conditions": {
                "userToggleable": true
            },
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
        }
    }
}

if (typeof window !== 'undefined') {
    window.DreamsOfTheStarryBeachData = DreamsOfTheStarryBeachData;
}