//DamageCalc\js\data\weapons\greatsword\finishingCall.js

const FinishingCallData = {
    "id": "finishing_call",
    "name": "최후의 메아리",
    "type": "greatsword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "strength2",
    "option2": "hpIncrease2",

    "option3": {
        "name": "의료 · 기사의 영광",
        "keyword": "의료",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 보조 능력치 증가(% 단위). 연계 스킬로 주는 치유 효과 증가",

        "personalEffect": {
            "stat": "minorStat",
            "description": "장착자의 보조 능력치 증가(%)",
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

        "keywordEffect":
        {
            //구현 안함
        }

    }
}

if (typeof window !== 'undefined') {
    window.FinishingCallData = FinishingCallData;
}