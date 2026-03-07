//DamageCalc\js\data\weapons\handcannon\opusTheLiving.js

const OpusTheLivingData = {
    "id": "opus_the_living",
    "name": "작품: 중생",
    "type": "handcannon",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "agility2",
    "option2": "artsDamageIncrease2",

    "option3": {
        "name": "고통 · 중생의 귀로",
        "keyword": "고통",
        "stackRule": "stack",
        "maxStacks": 2,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 치명타 확률 증가. 장착자가 아츠 이상 효과 부여할 때, 공격력 증가(최대 2중첩)",

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
            "description": "아츠 이상 부여 조건, 공증",
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
    }
}

if (typeof window !== 'undefined') {
    window.OpusTheLivingData = OpusTheLivingData;
}