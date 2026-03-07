//DamageCalc\js\data\weapons\sword\eminentRepute.js

const EminentReputeData = {
    "id": "eminent_repute",
    "name": "위대한 이름",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "mainStat3",
    "option2": "physicalDamage3",

    "option3": {
        "name": "잔혹 · 엄격한 규율",
        "keyword": "잔혹",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "공격력 증가, 장착자가 조건에 따라 공격력 증가. 팀원의 경우 그 절반의 효과를 획득 ",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "공격력 증가",
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
                "stat": "atkIncrease",
                "target": "self",
                "description": "조건에 따라 공격력 증가", //아래의 수치는 최대치 기준
                "conditions": {
                    "userToggleable": true
                },
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
                }
            },
            {
                "stat": "atkIncrease",
                "target": "allies",
                "description": "다른 팀원 공격력 증가",
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
        ]
    }
}

if (typeof window !== 'undefined') {
    window.EminentReputeData = EminentReputeData;
}