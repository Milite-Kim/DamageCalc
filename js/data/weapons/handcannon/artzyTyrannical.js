//DamageCalc\js\data\weapons\handcannon\artzyTyrannical.js

const ArtzyTyrannicalData = {
    "id": "artzy_tyrannical",
    "name": "예술의 폭군",
    "type": "handcannon",
    "rarity": 6,

    "weaponAtk": 505,

    "option1": "intellect3",
    "option2": "critRate3",

    "option3": {
        "name": "골절 · 예술적 폭언",
        "keyword": "골절",
        "stackRule": "stack",
        "maxStacks": 3,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 냉기피해 증가, 배틀 스킬 및 연계 스킬이 적에게 치명타 피해를 줄 시, 냉기 피해 증가(최대 3스택)",

        "personalEffect": {
            "stat": "cryoDamageIncrease",
            "description": "장착자의 냉기 피해 증가",
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

        "keywordEffect": {
            "stat": "cryoDamageIncrease",
            "target": "self",
            "description": "냉기 피해 증가 3스택",
            "conditions": {
                "userToggleable": true
            },
            "values": {
                "1": 12,
                "2": 14.4,
                "3": 16.8,
                "4": 19.2,
                "5": 21.6,
                "6": 24,
                "7": 26.4,
                "8": 28.8,
                "9": 33.6
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.ArtzyTyrannicalData = ArtzyTyrannicalData;
}