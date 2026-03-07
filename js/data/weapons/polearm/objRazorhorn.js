//DamageCalc\js\data\weapons\polearm\objRazorhorn.js
const OBJRazorhornData = {
    "id": "obj_razorhorn",
    "name": "O.B.J. 스파이크",
    "type": "polearm",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "will2",
    "option2": "physicalDamageIncrease2",

    "option3": {
        "name": "고통 · 빙산을 넘어서",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자가 냉기 부착과 동결 상태인 적에게 주는 피해 증가. 동결 소모한 후, 공격력 증가 버프",

        "personalEffect": {
            "stat": "allDamageIncrease",
            "description": "냉기 부착과 동결 상태의 적에게 주는 피해 증가",
            "conditions": {
                "debuff": ["freeze"]
            },
            "values": {
                "1": 8,
                "2": 9.6,
                "3": 11.2,
                "4": 12.8,
                "5": 14.4,
                "6": 16,
                "7": 17.6,
                "8": 19.2,
                "9": 22.4
            }
        },

        "keywordEffect": {
            "stat": "atkIncrease",
            "target": "self",
            "description": "동결 소모 조건, 공증",
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
    window.OBJRazorhornData = OBJRazorhornData;
}