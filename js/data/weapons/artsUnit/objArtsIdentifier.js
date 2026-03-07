//DamageCalc\js\data\weapons\artsUnit\objArtsIdentifier.js

const OBJArtsIdentifierData = {
    "id": "obj_arts_identifier",
    "name": "O.B.J. 아츠 아이덴티티",
    "type": "artsUnit",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "intellect2",
    "option2": "artsEnhance2",

    "option3": {
        "name": "추격 · 아츠 승화",
        "keyword": "추격",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 최대 생명력 증가. 장착자가 연계 스킬로 적에게 아츠 폭발 혹은 물리 이상을 부여할 때, 팀 전체가 주는 열기와 전기 피해 증가",

        "personalEffect": {
            "stat": "hpIncrease",
            "description": "장착자의 최대 생명력 증가", // 현재 계산 안함
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

        "keywordEffect": [
            {
                "stat": "heatDamageIncrease",
                "target": "team",
                "description": "연계 스킬 조건, 팀 열기 피해 증가",
                "conditions": {
                    "userToggleable": true
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
            {
                "stat": "electricDamageIncrease",
                "target": "team",
                "description": "연계 스킬 조건, 팀 전기 피해 증가",
                "conditions": {
                    "userToggleable": true
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
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.OBJArtsIdentifierData = OBJArtsIdentifierData;
}