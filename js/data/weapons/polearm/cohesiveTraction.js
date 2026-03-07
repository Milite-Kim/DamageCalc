//DamageCalc\js\data\weapons\polearm\cohesiveTraction.js

const CohesiveTractionData = {
    "id": "cohesive_traction",
    "name": "중심력",
    "type": "polearm",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "will2",
    "option2": "electricDamage2",

    "option3": {
        "name": "억제 · 동심원",
        "keyword": "억제",
        "stackRule": "stack",
        "maxStacks": 3,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 연계 스킬 피해 증가. 장착자가 연계 스킬 발동 시, 30초 내 다음 배틀 스킬의 전기 피해 증가",

        "personalEffect": {
            "stat": "linkedSkillDamageIncrease",
            "description": "장착자의 연계 스킬 피해 증가",
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

        "keywordEffect": {
            "stat": "electricDamageIncrease",
            "target": "self",
            "description": "배틀 스킬로 주는 전기 피해 증가",
            "conditions": {
                "userToggleable": true,
                "skills": "battleSkill"
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
    window.CohesiveTractionData = CohesiveTractionData;
}