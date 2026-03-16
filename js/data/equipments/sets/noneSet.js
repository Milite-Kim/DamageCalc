//DamageCalc\js\data\equipments\sets\noneSet.js

const NoneSetData = {
    "set_Id": "None",
    "setName": "세트 없음",
    "requiredPieces": 0,

    //세트 효과 없음
    "setBonus": null,

    "items": {
        "crisis_escape_stamp_T1": {
            "id": "crisis_escape_stamp_T1",
            "name": "위기 탈출 도장 · Ⅰ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "critRate",
                    "description": "치명타 확률",
                    "values": { "0": 10.8, "1": 11.9, "2": 13.0, "3": 14.0 }
                }
            ]
        },
        "crisis_escape_stamp": {
            "id": "crisis_escape_stamp",
            "name": "위기 탈출 도장",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 25.7, "1": 28.3, "2": 30.9, "3": 33.4 }
                }
            ]
        },
        "crisis_escape_panel_T1": {
            "id": "crisis_escape_panel_T1",
            "name": "위기 탈출 식별 패널 · Ⅰ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 43.2, "1": 47.5, "2": 51.8, "3": 56.2 }
                }
            ]
        },
        "crisis_escape_panel": {
            "id": "crisis_escape_panel",
            "name": "위기 탈출 식별 패널",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "damageReduction",
                    "description": "모든 피해 감소",
                    "values": { "0": 17.8, "1": 19.2, "2": 20.6, "3": 21.9 }
                }
            ]
        },
        "crisis_escape_gloves": {
            "id": "crisis_escape_gloves",
            "name": "위기 탈출 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 86, "1": 94, "2": 103, "3": 111 }
                },
                {
                    "stat": "skillsDamageIncrease",
                    "description": "모든 스킬 피해 증가",
                    "values": { "0": 24.0, "1": 26.4, "2": 28.8, "3": 31.2 }
                }
            ]
        },
        "crisis_escape_protective_gloves": {
            "id": "crisis_escape_protective_gloves",
            "name": "위기 탈출 보호 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 86, "1": 94, "2": 103, "3": 111 }
                },
                {
                    "stat": "ultimateDamageIncrease",
                    "description": "궁극기 피해 증가",
                    "values": { "0": 45.0, "1": 49.5, "2": 54.0, "3": 58.5 }
                }
            ]
        },
        "crisis_escape_armor": {
            "id": "crisis_escape_armor",
            "name": "위기 탈출 방어구",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 115, "1": 126, "2": 138, "3": 149 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 12.9, "1": 14.1, "2": 15.4, "3": 16.7 }
                }
            ]
        },
        "crisis_escape_heavy_armor": {
            "id": "crisis_escape_heavy_armor",
            "name": "위기 탈출 중장갑",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 115, "1": 126, "2": 138, "3": 149 }
                },
                {
                    "stat": "basicAttackDamageIncrease",
                    "description": "일반 공격 피해 증가",
                    "values": { "0": 14.4, "1": 15.8, "2": 17.3, "3": 18.7 }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.NoneSetData = NoneSetData;
}
