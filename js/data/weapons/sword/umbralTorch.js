//DamageCalc\js\data\weapons\sword\umbralTorch.js

const UmbralTorchData = {
    "id": "umbral_torch",
    "name": "암흑의 횃불",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "intellect3",
    "option2": "heatDamageIncrease3",

    "option3": {
        "name": "고통 · 쌓이는 탐욕",
        "keyword": "고통",
        "stackRule": "stack",
        "maxStacks": 2,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자 공격력 증가, 조건에 따라 열기와 자연 피해 증가(최대 2스택)",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "장착자 공격력 증가",
            "values": {
                "1": 7,
                "2": 8.4,
                "3": 9.8,
                "4": 11.2,
                "5": 12.6,
                "6": 14,
                "7": 15.4,
                "8": 16.8,
                "9": 19.6
            }
        },

        "keywordEffect": [
            {
                "stat": "heatDamageIncrease",
                "target": "self",
                "description": "열기 피해 증가 적용",
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
                "stat": "natureDamageIncrease",
                "target": "self",
                "description": "자연 피해 증가 적용",
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
    window.UmbralTorchData = UmbralTorchData;
}