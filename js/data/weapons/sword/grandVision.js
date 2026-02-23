//DamageCalc\js\data\weapons\sword\grandVision.js

const GrandVisionData = {
    "id": "grand_vision",
    "name": "장대한 염원",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 500,

    "option1": "agility3",
    "option2": "atkIncrease3",

    "option3": {
        "name": "고통 · 간절한 소망",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자 오리지늄 아츠 강도 증가, 조건에 따라 배틀 스킬 혹은 궁극기가 주는 물리 피해 증가",

        "personalEffect": {
            "stat": "artsEnhance",
            "description": "장착자 오리지늄 아츠 강도 증가",
            "values": {
                "1": 30,
                "2": 36,
                "3": 42,
                "4": 48,
                "5": 54,
                "6": 60,
                "7": 66,
                "8": 72,
                "9": 84
            }
        },

        "keywordEffect": {
            "stat": "physicalDamageIncrease",
            "target": "self",
            "description": "배틀 스킬 및 궁극기가 주는 물리 피해 증가",
            "conditions": {
                "userToggleable": true,
                "skills": ["battleSkill", "ultimate"]
            },
            "values": {
                "1": 36,
                "2": 43.2,
                "3": 50.4,
                "4": 57.6,
                "5": 64.8,
                "6": 72,
                "7": 79.2,
                "8": 86.4,
                "9": 100.8
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.GrandVisionData = GrandVisionData;
}