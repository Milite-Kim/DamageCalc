//DamageCalc\js\data\weapons\sword\wolfBloodstain.js

const WolfBloodstainData = {
    "id": "wolf_bloodstain",
    "name": "늑대의 혈흔",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 505,

    "option1": "agility3",
    "option2": "critRate3",

    "option3": {
        "name": "골절 · 군랑의 포식",
        "keyword": "골절",
        "stackRule": "stack",
        "maxStacks": 16,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "공격력 증가. 치명타 피해를 준 후 늑대의 피 1스택 획득 (최대 16스택). " +
            "스택당 물리·열기 피해 증가. 16스택 달성 시 물리·열기 피해 추가 증가 (20초, 이후 스택 초기화).",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "공격력 증가",
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

        "keywordEffect": [
            {
                "stat": "physicalDamageIncrease",
                "target": "self",
                "description": "늑대의 피 스택당 물리 피해 증가",
                "values": {
                    "1": 1,
                    "2": 1.2,
                    "3": 1.4,
                    "4": 1.6,
                    "5": 1.8,
                    "6": 2,
                    "7": 2.2,
                    "8": 2.4,
                    "9": 2.8
                }
            },
            {
                "stat": "heatDamageIncrease",
                "target": "self",
                "description": "늑대의 피 스택당 열기 피해 증가",
                "values": {
                    "1": 1,
                    "2": 1.2,
                    "3": 1.4,
                    "4": 1.6,
                    "5": 1.8,
                    "6": 2,
                    "7": 2.2,
                    "8": 2.4,
                    "9": 2.8
                }
            },
            {
                "stat": "physicalDamageIncrease",
                "target": "self",
                "description": "16스택 달성 추가 물리 피해 증가",
                "noStackMultiplier": true,
                "values": {
                    "1": 24,
                    "2": 28.8,
                    "3": 33.6,
                    "4": 38.4,
                    "5": 43.2,
                    "6": 48,
                    "7": 52.8,
                    "8": 57.6,
                    "9": 67.2
                }
            },
            {
                "stat": "heatDamageIncrease",
                "target": "self",
                "description": "16스택 달성 추가 열기 피해 증가",
                "noStackMultiplier": true,
                "values": {
                    "1": 24,
                    "2": 28.8,
                    "3": 33.6,
                    "4": 38.4,
                    "5": 43.2,
                    "6": 48,
                    "7": 52.8,
                    "8": 57.6,
                    "9": 67.2
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.WolfBloodstainData = WolfBloodstainData;
}
