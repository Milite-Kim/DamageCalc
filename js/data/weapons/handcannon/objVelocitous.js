//DamageCalc\js\data\weapons\handcannon\objVelocitous.js

const OBJVelocitousData = {
    "id": "obj_velocitous",
    "name": "O.B.J. 벨로시투스",
    "type": "handcannon",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "agility2",
    "option2": "ultimateCharge2",

    "option3": {
        "name": "방출 · 신속한 일격",
        "keyword": "방출",
        "stackRule": "stack",
        "maxStacks": 4,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 공격력 증가. 장착자가 아츠 부착 소모 시, 해당 스택에 비례하여 자연 피해 증가",

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
            "stat": "natureDamageIncrease",
            "target": "self",
            "description": "아츠 부착 소모 비례, 자연 피증",
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
    window.OBJVelocitousData = OBJVelocitousData;
}