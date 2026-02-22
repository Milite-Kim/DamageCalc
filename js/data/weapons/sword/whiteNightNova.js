//DamageCalc\js\data\weapons\sword\whiteNightNova.js

const WhiteNightNovaData = {
    "id": "white_night_nova",
    "name": "백야의 별",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 505,

    "option1": "mainStat3",
    "option2": "artsEnhance3",

    "option3": {
        "name": "고통 · 백야의 별",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "아츠 피해 증가 및 적에게 연소 혹은 감전 부여 시, 아츠 피해 증가 및 오리지늄 아츠 강도 증가",

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

        "keywordEffect": [
            {
                "stat": "artsDamageIncrease",
                "target": "self",
                "description": "아츠 피해 증가",
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
            },
            {
                "stat": "artsEnhance",
                "target": "self",
                "conditions": {
                    "userToggleable": true // 혹시 이거 위의 것과 동시 적용하게 가능?
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
        ]
    }
}

if (typeof window !== 'undefined') {
    window.WhiteNightNovaData = WhiteNightNovaData;
}