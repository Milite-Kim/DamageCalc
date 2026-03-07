//DamageCalc\js\data\weapons\polearm\chimericJustice.js

const ChimericJusticeData = {
    "id": "chimeric_justice",
    "name": "키메라의 정의",
    "type": "polearm",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "strength2",
    "option2": "ultimateCharge2",

    "option3": {
        "name": "잔혹 · 분노의 융합",
        "keyword": "잔혹",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 치명타 확률 증가. 장착자가 방어 불능 스택이 없는 적에게 방어 불능 부여 시, 공격력 증가",

        "personalEffect": {
            "stat": "critRate",
            "description": "장착자의 치명타 확률 증가",
            "values": {
                "1": 3,
                "2": 3.6,
                "3": 4.2,
                "4": 4.8,
                "5": 5.4,
                "6": 6,
                "7": 6.6,
                "8": 7.2,
                "9": 8.4
            }
        },

        "keywordEffect": {
            "stat": "atkIncrease",
            "target": "self",
            "description": "방불 첫 부여 조건, 공증",
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
        }
    }
}

if (typeof window !== 'undefined') {
    window.ChimericJusticeData = ChimericJusticeData;
}