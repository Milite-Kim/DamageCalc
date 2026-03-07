//DamageCalc\js\data\weapons\artsUnit\chivalricVirtues.js

const ChivalricVirtuesData = {
    "id": "chivalric_virtues",
    "name": "기사도 정신",
    "type": "artsUnit",
    "rarity": 6,

    "weaponAtk": 485,

    "option1": "will3",
    "option2": "hpIncrease3",

    "option3": {
        "name": "의료 · 침식성 광기의 불꽃",
        "keyword": "의료",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 치유 효율 증가, 장착자가 자신의 스킬로 치유한 후, 팀 전체의 공격력 증가",

        "personalEffect": {
            "stat": "healEfficiency",
            "description": "치유 효율 증가",
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
            "stat": "atkIncrease",
            "target": "team",
            "description": "치유 조건 팀 공증 적용",
            "conditions": {
                "userToggleable": true
            },
            "values": {
                "1": 9,
                "2": 10.8,
                "3": 12.6,
                "4": 14.4,
                "5": 16.2,
                "6": 18,
                "7": 19.8,
                "8": 21.6,
                "9": 25.2
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.ChivalricVirtuesData = ChivalricVirtuesData;
}