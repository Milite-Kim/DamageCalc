//DamageCalc\js\data\weapons\greatsword\exemplar.js

const ExemplarData = {
    "id": "exemplar",
    "name": "모범",
    "type": "greatsword",
    "rarity": 6,

    "weaponAtk": 500,

    "option1": "mainStat3",
    "option2": "atkIncrease3",

    "option3": {
        "name": "억제 · 다층 절단",
        "keyword": "억제",
        "stackRule": "stack",
        "maxStacks": 4,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 물리 피해 증가. 배틀 스킬 및 궁극기가 적에게 적중 시, 물리 피해 증가 버프 획득(최대 3스택)",

        "personalEffect": {
            "stat": "physicalDamageIncrease",
            "description": "장착자의 물리 피해 증가",
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
            "description": "배스, 궁 적중 조건, 물리 피증",
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
        }

    }
}

if (typeof window !== 'undefined') {
    window.ExemplarData = ExemplarData;
}