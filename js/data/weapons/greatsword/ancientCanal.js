//DamageCalc\js\data\weapons\greatsword\ancientCanal.js

const AncientCanalData = {
    "id": "ancient_canal",
    "name": "고대의 강줄기",
    "type": "greatsword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "strength2",
    "option2": "artsEnhance2",

    "option3": {
        "name": "잔혹 · 천추의 대지",
        "keyword": "잔혹",
        "stackRule": "stack",
        "maxStacks": 4,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 오리지늄 아츠 강도 증가. 장착자가 방어 불능 스택 소모 시, 소모한 스택에 비례하여 물리 피해 증가 버프 획득",

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

        "keywordEffect":
        {
            "stat": "physicalDamageIncrease",
            "target": "self",
            "description": "방불 스택 소모 조건, 물리 피증",
            "conditions": {
                "userToggleable": true
            },
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
        }

    }
}

if (typeof window !== 'undefined') {
    window.AncientCanalData = AncientCanalData;
}