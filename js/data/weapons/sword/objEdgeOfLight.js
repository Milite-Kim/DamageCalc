//DamageCalc\js\data\weapons\sword\objEdgeOfLight.js

const OBJEdgeOfLightData = {
    "id": "obj_edge_of_light",
    "name": "O.B.J. 엣지 오브 라이트",
    "type": "sword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "agility2",
    "option2": "atkIncrease2",

    "option3": {
        "name": "흐름 · 거침없는 예리함",
        "keyword": "흐름",
        "stackRule": "stack",
        "maxStacks": 3,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 보조 능력치 증가(% 단위), 장착자가 자신의 스킬로 스킬 게이지를 회복했을 때, 팀 전체가 주는 열기와 전기 피해 증가(최대 3스택)",

        "personalEffect": {
            "stat": "minorStat",
            "description": "보조 능력치 증가",
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

        "keywordEffect": [
            {
                "stat": "heatDamageIncrease",
                "target": "team",
                "description": "팀의 열기 피해 증가",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 3,
                    "2": 3.6,
                    "3": 4.2,
                    "4": 4.8,
                    "5": 5.4,
                    "6": 6,
                    "7": 6.6,
                    "8": 7.2,
                    "9": 8.4
                }
            },
            {
                "stat": "electricDamageIncrease",
                "target": "team",
                "description": "팀의 전기 피해 증가",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 3,
                    "2": 3.6,
                    "3": 4.2,
                    "4": 4.8,
                    "5": 5.4,
                    "6": 6,
                    "7": 6.6,
                    "8": 7.2,
                    "9": 8.4
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.OBJEdgeOfLightData = OBJEdgeOfLightData;
}