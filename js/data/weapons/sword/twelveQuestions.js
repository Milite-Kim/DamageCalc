//DamageCalc\js\data\weapons\sword\twelveQuestions.js

const TwelveQuestionsData = {
    "id": "twelve_questions",
    "name": "십이문",
    "type": "sword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "agility2",
    "option2": "atkIncrease2",

    "option3": {
        "name": "고통 · 파고드는 추궁",
        "keyword": "고통",
        "stackRule": "stack",
        "maxStacks": 2,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 보조 능력치 증가(% 단위), 장착자가 아츠 이상을 소모한 뒤, 공격력 증가(최대 2스택)",

        "personalEffect": {
            "stat": "minorStat",
            "description": "보조 능력치 증가",
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
            "description": "아츠 이상 소모 조건 공증",
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
    window.TwelveQuestionsData = TwelveQuestionsData;
}