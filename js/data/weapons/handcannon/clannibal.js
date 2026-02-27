//DamageCalc\js\data\weapons\handcannon\clannibal.js

const ClannibalData = {
    "id": "clannibal",
    "name": "클래니벌",
    "type": "handcannon",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "mainStat3",
    "option2": "artsDamageIncrease3",

    "option3": {
        "name": "고통 · 가차 없는 숙청",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 아츠 피해 증가, 조건에 따라 대상이 받는 아츠 피해 증가",

        "personalEffect": {
            "stat": "artsDamageIncrease",
            "description": "아츠 피해 증가",
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
        },

        "keywordEffect": {
            "stat": "takenArtsDamageIncrease",
            "target": "enemy",
            "description": "대상이 받는 아츠 피해 증가",
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
    window.ClannibalData = ClannibalData;
}