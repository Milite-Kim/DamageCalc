//DamageCalc\js\data\weapons\artsUnit\deliveryGuaranteed.js

const DeliveryGuaranteedData = {
    "id": "delivery_guaranteed",
    "name": "사명의 길",
    "type": "artsUnit",
    "rarity": 6,

    "weaponAtk": 500,

    "option1": "will3",
    "option2": "ultimateCharge3",

    "option3": {
        "name": "추격 · 굴하지 않는 사명",
        "keyword": "추격",
        "stackRule": "unique", // 이거 두 가지 옵션 중 하나만 스택이 쌓임. 이거 구현 필요. 단 현재 보스를 가정하면 사실 상 1스택이 기본임
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 자연 피해 증가. 장착자의 연계 스킬로 띄우기 피해를 줬을 때, 팀 전체의 아츠 피해 증가(중첩 안됨). 띄우기 피해를 받은 적이 있을 때 마다, 팀 전체가 주는 아츠 피해 증가(최대 3중첩)",

        "personalEffect": {
            "stat": "natureDamageIncrease",
            "description": "장착자의 자연 피해 증가",
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
                "stat": "artsDamageIncrease",
                "target": "team",
                "description": "연계 띄우기 조건, 아츠피증",
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
                "stat": "artsDamageIncrease",
                "target": "team",
                "description": "띄우기 적 조건, 아츠피증(현재 1스택 적용)",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 3.5,
                    "2": 4.2,
                    "3": 4.9,
                    "4": 5.6,
                    "5": 6.3,
                    "6": 7,
                    "7": 7.7,
                    "8": 8.4,
                    "9": 9.8
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.DeliveryGuaranteedData = DeliveryGuaranteedData;
}