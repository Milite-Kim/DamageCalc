//DamageCalc\js\data\weapons\artsUnit\monaihe.js

const MonaiheData = {
    "id": "monaihe",
    "name": "무가내하",
    "type": "artsUnit",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "will2",
    "option2": "ultimateCharge2",

    "option3": {
        "name": "사기 · 순묘 분석법",
        "keyword": "사기",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 주요 능력치 증가(% 단위). 장착자의 오리지늄 아츠 강도 증가",

        "personalEffect": {
            "stat": "mainStat", // % 단위임. 확인 필요
            "description": "주요 능력치 증가",
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
            "stat": "artsEnhance",
            "target": "self",
            "description": "오리지늄 아츠 강도 증가",
            "conditions": {
                //별도의 조건 없음
            },
            "values": {
                "1": 25,
                "2": 30,
                "3": 35,
                "4": 40,
                "5": 45,
                "6": 50,
                "7": 55,
                "8": 60,
                "9": 70
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.MonaiheData = MonaiheData;
}