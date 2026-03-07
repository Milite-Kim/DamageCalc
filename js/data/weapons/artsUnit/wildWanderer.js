//DamageCalc\js\data\weapons\artsUnit\wildWanderer.js

const WildWandererData = {
    "id": "wild_wanderer",
    "name": "황무지의 방랑자",
    "type": "artsUnit",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "intellect2",
    "option2": "electricDamage2",

    "option3": {
        "name": "고통 · 황무지 군집",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 오리지늄 아츠 강도 증가. 장착자가 감전 부여 시, 팀 전체가 주는 물리와 전기 피해 증가",

        "personalEffect": {
            "stat": "artsEnhance",
            "description": "장착자의 오리지늄 아츠 강도 증가",
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

        "keywordEffect": [
            {
                "stat": "physicalDamageIncrease",
                "target": "team",
                "description": "감전 부여 조건, 팀 물리 피증",
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
            },
            {
                "stat": "electricDamageIncrease",
                "target": "team",
                "description": "감전 부여 조건, 팀 전기 피증",
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
        ]
    }
}

if (typeof window !== 'undefined') {
    window.WildWandererData = WildWandererData;
}