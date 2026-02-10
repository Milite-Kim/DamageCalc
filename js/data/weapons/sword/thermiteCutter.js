//DamageCalc\js\data\weapons\sword\thermiteCutter.js

const ThermiteCutterData = {
    "id": "thermite_cutter",
    "name": "테르밋 커터",
    "type": "sword",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "will3", // 의지 증가 대
    "option2": "atkIncrease3", // 공격력 증가 대

    "option3": {
        "name": "흐름 · 고열 방출",
        "keyword": "흐름",
        "stackRule": "stack",
        "maxStacks": 2,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 공격력 증가. 특정 조건 만족 시 팀 전체의 공격력 증가 (같은 이름의 효과는 최대 2스택)",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "장착자 공격력 증가",
            "values": {
                "1": 10, "2": 12, "3": 14, "4": 16, "5": 18, "6": 20, "7": 22, "8": 24, "9": 26
            }
        },

        "keywordEffect": {
            "stat": "atkIncrease",
            "target": "team",
            "description": "팀 전체 공격력 증가",
            "conditions": {
                "userToggleable": true
            },
            "values": {
                "1": 5, "2": 6, "3": 7, "4": 8, "5": 9, "6": 10, "7": 11, "8": 12, "9": 14
            }
        }
    }
}

if (typeof window !== 'undefined') {
    window.ThermiteCutterData = ThermiteCutterData;
}