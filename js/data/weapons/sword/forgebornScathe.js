//DamageCalc\js\data\weapons\sword\forgebornScathe.js

const ForgebornScatheData = {
    "id": "forgeborn_scathe",
    "name": "용조의 불꽃",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 510,

    "option1": "intellect3", // 지능 증가 대
    "option2": "atkIncrease3", // 공격력 증가 대

    "option3": {
        "name": "어둠 · 울부짖는 불길",
        "keyword": "어둠",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "열기 피해 증가 및 궁극기 시전 시 일반 공격 피해 증가 (같은 이름의 효과는 중첩되지 않습니다)",

        "personalEffect": {
            "stat": "heatDamageIncrease",
            "description": "열기 피해 증가",
            "values": {
                "1": 16.0, "2": 19.2, "3": 22.4, "4": 25.6, "5": 28.8,
                "6": 32.0, "7": 35.2, "8": 38.4, "9": 44.8
            }
        },

        "keywordEffect": {
            "stat": "basicAttackDamageIncrease",
            "target": "self",  // 자신만 적용이지만 키워드 규칙 따름
            "description": "궁극기 시전 시 일반 공격 피해 증가",
            "conditions": {
                "duringUltimate": true,
                "userToggleable": true
            },
            "values": {
                "1": 75, "2": 90, "3": 105, "4": 120, "5": 135,
                "6": 150, "7": 165, "8": 180, "9": 210
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.ForgebornScatheData = ForgebornScatheData;
}