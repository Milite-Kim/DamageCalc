//DamageCalc\js\data\weapons\sword\fortmaker.js

const FortmakerData = {
    "id": "fortmaker",
    "name": "불사의 성주",
    "type": "sword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "intellect2",
    "option2": "ultimateCharge2",

    "option3": {
        "name": "사기 · 잔성의 귀로",
        "keyword": "사기",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 공격력 증가, 장착자의 오리지늄 아츠 강도 증가",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "장착자의 공격력 증가",
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
        },

        "keywordEffect": {
            "stat": "artsEnhance",
            "target": "self",
            "description": "장착자의 오리지늄 아츠 강도 증가",
            "conditions": {
                // 상시 적용
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
    }
}

if (typeof window !== 'undefined') {
    window.FortmakerData = FortmakerData;
}