//DamageCalc\js\data\equipments\sets\miSecuritySet.js

const MISecuritySetData = {
    "set_Id": "MI_Security",
    "setName": "M. I. 경찰용",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "장착자의 치명타 확률 +5%. 치명타 후 공격력 +5% (최대 5스택). 5스택 달성 시 치명타 확률 추가 +5%",

        "baseEffect": {
            "stat": "critRate",
            "target": "self",
            "value": 5,
            "description": "치명타 확률 +5%"
        },

        "conditionalEffects": [
            {
                "id": "mi_atk_stack",
                "stat": "atkIncrease",
                "target": "self",
                "value": 5,
                "conditions": {
                    "userToggleable": true,
                    "maxStacks": 5
                },
                "description": "치명타 후 공격력 +5% (0~5스택)"
            },
            {
                "id": "mi_crit_max_stack",
                "stat": "critRate",
                "target": "self",
                "value": 5,
                "conditions": {
                    "triggersAtMaxStacks": "mi_atk_stack"
                },
                "description": "5스택 달성 시 치명타 확률 추가 +5% (자동)"
            }
        ]
    },

    "items": {
        "mi_security_kit_dagger_T1": {
            "id": "mi_security_kit_dagger_T1",
            "name": "M. I. 경찰용 단검 · Ⅰ",
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
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "mi_security_kit_dagger": {
            "id": "mi_security_kit_dagger",
            "name": "M. I. 경찰용 단검",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "heatDamageIncrease",
                    "description": "열기 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                },
                {
                    "stat": "natureDamageIncrease",
                    "description": "자연 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "mi_security_kit_multitool": {
            "id": "mi_security_kit_multitool",
            "name": "M. I. 경찰용 다용도 공구",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 32, "1": 35, "2": 38, "3": 41 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 21, "1": 23, "2": 25, "3": 27 }
                },
                {
                    "stat": "critRate",
                    "description": "치명타 확률",
                    "values": { "0": 10.4, "1": 11.4, "2": 12.4, "3": 13.5 }
                }
            ]
        },
        "mi_security_kit_scope_T1": {
            "id": "mi_security_kit_scope_T1",
            "name": "M. I. 경찰용 조준기 · Ⅰ",
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
                    "stat": "critRate",
                    "description": "치명타 확률",
                    "values": { "0": 10.4, "1": 11.4, "2": 12.4, "3": 13.5 }
                }
            ]
        },
        "mi_security_kit_scope": {
            "id": "mi_security_kit_scope",
            "name": "M. I. 경찰용 조준기",
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
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "mi_security_kit_armband": {
            "id": "mi_security_kit_armband",
            "name": "M. I. 경찰용 암밴드",
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
                    "stat": "cryoDamageIncrease",
                    "description": "냉기 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                },
                {
                    "stat": "electricDamageIncrease",
                    "description": "전기 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "mi_security_gloves_bracelet_T1": {
            "id": "mi_security_gloves_bracelet_T1",
            "name": "M. I. 경찰용 장갑(팔찌) · Ⅰ",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "critRate",
                    "description": "치명타 확률",
                    "values": { "0": 8.6, "1": 9.5, "2": 10.3, "3": 11.2 }
                }
            ]
        },
        "mi_security_gloves_bracelet": {
            "id": "mi_security_gloves_bracelet",
            "name": "M. I. 경찰용 장갑(팔찌)",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "basicAttackDamageIncrease",
                    "description": "일반 공격 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "mi_security_gloves_T1": {
            "id": "mi_security_gloves_T1",
            "name": "M. I. 경찰용 장갑 · Ⅰ",
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
                    "stat": "ultimateDamageIncrease",
                    "description": "궁극기 피해 증가",
                    "values": { "0": 43.1, "1": 47.4, "2": 51.7, "3": 56.1 }
                }
            ]
        },
        "mi_security_gloves": {
            "id": "mi_security_gloves",
            "name": "M. I. 경찰용 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 34.5, "1": 38.0, "2": 41.4, "3": 44.9 }
                }
            ]
        },
        "mi_security_armor_cloak_T2": {
            "id": "mi_security_armor_cloak_T2",
            "name": "M. I. 경찰용 망토 · Ⅱ",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "battleSkillDamageIncrease",
                    "description": "배틀 스킬 피해 증가",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "mi_security_armor_cloak_T1": {
            "id": "mi_security_armor_cloak_T1",
            "name": "M. I. 경찰용 망토 · Ⅰ",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "critRate",
                    "description": "치명타 확률",
                    "values": { "0": 5.2, "1": 5.7, "2": 6.2, "3": 6.7 }
                }
            ]
        },
        "mi_security_armor_cloak": {
            "id": "mi_security_armor_cloak",
            "name": "M. I. 경찰용 망토",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "intellect",
                    "description": "지능",
                    "values": { "0": 87, "1": 95, "2": 104, "3": 113 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 58, "1": 63, "2": 69, "3": 75 }
                },
                {
                    "stat": "basicAttackDamageIncrease",
                    "description": "일반 공격 피해 증가",
                    "values": { "0": 13.8, "1": 15.2, "2": 16.6, "3": 17.9 }
                }
            ]
        },
        "mi_security_armor_T1": {
            "id": "mi_security_armor_T1",
            "name": "M. I. 경찰용 방어구 · Ⅰ",
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
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 12.3, "1": 13.6, "2": 14.8, "3": 16.0 }
                }
            ]
        },
        "mi_security_armor": {
            "id": "mi_security_armor",
            "name": "M. I. 경찰용 방어구",
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
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 20, "1": 22, "2": 24, "3": 27 }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.MISecuritySetData = MISecuritySetData;
}
