//DamageCalc\js\data\equipments\sets\type50YinglungSet.js
// 단조 보너스 % 수치: 제공된 데이터 없음, 기존 세트 패턴(강화 단계당 기본값의 약 10%) 기반 추정

const Type50YinglungSetData = {
    "set_Id": "",
    "setName": "응룡 50식",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "장착자의 공격력 +15%. 응룡의 예리함 스택당 연계 스킬 피해 +20% (최대 3스택)",

        "baseEffect": {
            "stat": "atkIncrease",
            "target": "self",
            "value": 15,
            "description": "공격력 +15%"
        },

        "conditionalEffects": [
            {
                "id": "yinglung_sharpness",
                "stat": "linkedSkillDamageIncrease",
                "target": "self",
                "value": 20,
                "conditions": {
                    "userToggleable": true,
                    "maxStacks": 3
                },
                "description": "응룡의 예리함 스택당 연계 스킬 피해 +20% (0~3스택 선택)"
            }
        ]
    },

    "items": {
        "type50_yinglung_kit_detector_T2": {
            "id": "",
            "name": "응룡 50식 탐지기 · Ⅱ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "type50_yinglung_kit_detector_T1": {
            "id": "",
            "name": "응룡 50식 탐지기 · Ⅰ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "ultimateDamageIncrease",
                    "description": "궁극기 피해 증가",
                    "values": { "0": 51.7, "1": 56.9, "2": 62.1, "3": 67.2 }
                }
            ]
        },
        "type50_yinglung_kit_detector": {
            "id": "",
            "name": "응룡 50식 탐지기",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "physicalDamageIncrease",
                    "description": "물리 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "type50_yinglung_kit_dagger_T1": {
            "id": "",
            "name": "응룡 50식 단검 · Ⅰ",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "skillsDamageIncrease",
                    "description": "모든 스킬 피해 증가",
                    "values": { "0": 27.6, "1": 30.4, "2": 33.1, "3": 35.9 }
                }
            ]
        },
        "type50_yinglung_kit_dagger": {
            "id": "",
            "name": "응룡 50식 단검",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "type50_yinglung_gloves_T1": {
            "id": "",
            "name": "응룡 50식 보호 장갑 · Ⅰ",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 34.5, "1": 37.9, "2": 41.4, "3": 44.8 }
                }
            ]
        },
        "type50_yinglung_gloves": {
            "id": "",
            "name": "응룡 50식 보호 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 34.5, "1": 37.9, "2": 41.4, "3": 44.8 }
                }
            ]
        },
        "type50_yinglung_armor_light": {
            "id": "",
            "name": "응룡 50식 경갑",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "skillsDamageIncrease",
                    "description": "모든 스킬 피해 증가",
                    "values": { "0": 13.8, "1": 15.2, "2": 16.6, "3": 18.0 }
                }
            ]
        },
        "type50_yinglung_armor_heavy_T2": {
            "id": "",
            "name": "응룡 50식 중갑 · Ⅱ",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "type50_yinglung_armor_heavy_T1": {
            "id": "",
            "name": "응룡 50식 중갑 · Ⅰ",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 12.3, "1": 13.6, "2": 14.8, "3": 16.0 }
                }
            ]
        },
        "type50_yinglung_armor_heavy": {
            "id": "",
            "name": "응룡 50식 중갑",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "physicalDamageIncrease",
                    "description": "물리 피해 증가",
                    "values": { "0": 11.5, "1": 12.7, "2": 13.8, "3": 14.9 }
                }
            ]
        }
    }
}

if (typeof window !== 'undefined') {
    window.Type50YinglungSetData = Type50YinglungSetData;
}
