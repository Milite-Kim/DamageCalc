//DamageCalc\js\data\weapons\polearm\mountainBearer.js

const MountainBearerData = {
    "id": "mountain_bearer",
    "name": "산의 지배자",
    "type": "polearm",
    "rarity": 6,

    "weaponAtk": 500,

    "option1": "agility3",
    "option2": "physicalDamage3",

    "option3": {
        "name": "효율 · 하나되는 자연",
        "keyword": "효율",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자가 방어불능 상태인 적에게 주는 피해 증가. 장착자가 자신의 배틀 스킬로 방어 불능 상태를 부여할 때, 모든 능력치 증가. 장착자가 배틀 스킬로 물리 취약 부여 시, 모든 능력치 증가",

        "personalEffect": {
            "stat": "allDamageIncrease",
            "description": "장착자가 방어불능 상태인 적에게 주는 피해 증가",
            "conditions": {
                "debuff": "defenceless"
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
        },

        "keywordEffect": [
            {
                "stat": "allStat", // 기존에 없는 변수
                "target": "self",
                "description": "배스 방불 부여 조건, 스탯 증가",
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
                "stat": "allStat", // 기존에 없는 변수
                "target": "self",
                "description": "배스 취약 부여 조건, 스탯 증가",
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
    window.MountainBearerData = MountainBearerData;
}