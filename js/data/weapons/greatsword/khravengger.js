//DamageCalc\js\data\weapons\greatsword\khravengger.js

const KhravenggerData = {
    "id": "khravengger",
    "name": "헤라펜거",
    "type": "greatsword",
    "rarity": 6,

    "weaponAtk": 505,

    "option1": "strength3",
    "option2": "atkIncrease",

    "option3": {
        "name": "방출 · 사무치는 추위",
        "keyword": "방출",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 모든 스킬 피해 증가. 장착자가 배틀 스킬로 냉기 부착을 부여할 때, 냉기 피해 증가 버프 획득, 장착자가 냉기 부착 상대에게 연계 스킬로 피해를 줄 때, 냉기 피해 증가 버프 획득",

        "personalEffect": {
            "stat": "skillsDamageIncrease", //기존에 없던 변수명. constants 및 계산식 추가 필요
            "description": "장착자의 모드 스킬 피해 증가",
            "values": {
                "1": 20,
                "2": 24,
                "3": 28,
                "4": 32,
                "5": 36,
                "6": 40,
                "7": 44,
                "8": 48,
                "9": 56
            }
        },

        "keywordEffect": [
            {
                "stat": "cryoDamageIncrease",
                "target": "self",
                "description": "배스로 냉기 부착 조건, 냉피증",
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
            },
            {
                "stat": "cryoDamageIncrease",
                "target": "self",
                "description": "냉기 부착 적에게 연계 조건, 냉피증",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 20,
                    "2": 24,
                    "3": 28,
                    "4": 32,
                    "5": 36,
                    "6": 40,
                    "7": 44,
                    "8": 48,
                    "9": 56
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.KhravenggerData = KhravenggerData;
}