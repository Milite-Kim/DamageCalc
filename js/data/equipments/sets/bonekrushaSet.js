//DamageCalc\js\data\equipments\sets\bonekrushaSet.js

const BonekrushaSetData = {
    "set_Id": "Bone_Krusha",
    "setName": "본 크러셔",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "공격력 +15%. 연계 스킬 사용 시 본 크러셔의 압박 획득, 다음 배틀 스킬 피해 +30% (스택당, 최대 2스택)",

        "baseEffect": {
            "stat": "atkIncrease",
            "target": "self",
            "value": 15,
            "description": "공격력 +15%"
        },

        "conditionalEffects": [
            {
                "id": "bonekrusha_pressure",
                "stat": "battleSkillDamageIncrease",
                "target": "self",
                "value": 30,
                "conditions": {
                    "userToggleable": true,
                    "maxStacks": 2
                },
                "description": "배틀 스킬 피해 +30% (본 크러셔의 압박 스택당, 최대 2스택)"
            }
        ]
    },

    "items": {
        "bone_krusher_statue_T1": {
            "id": "bone_krusher_statue_T1",
            "name": "본 크러셔 조각상 · Ⅰ",
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
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "bone_krusher_statue": {
            "id": "bone_krusher_statue",
            "name": "본 크러셔 조각상",
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
        "bone_krusher_mask_T2": {
            "id": "bone_krusher_mask_T2",
            "name": "본 크러셔 마스크 · Ⅱ",
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
        "bone_krusher_mask_T1": {
            "id": "bone_krusher_mask_T1",
            "name": "본 크러셔 마스크 · Ⅰ",
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
                    "stat": "critRate",
                    "description": "치명타 확률",
                    "values": { "0": 10.4, "1": 11.4, "2": 12.4, "3": 13.5 }
                }
            ]
        },
        "bone_krusher_mask": {
            "id": "bone_krusher_mask",
            "name": "본 크러셔 마스크",
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
                    "stat": "staggerDamageBonus",
                    "description": "불균형 목표에 주는 피해 보너스",
                    "values": { "0": 41.4, "1": 45.5, "2": 49.7, "3": 53.8 }
                }
            ]
        },
        "bone_krusher_gloves_T1": {
            "id": "bone_krusher_gloves_T1",
            "name": "본 크러셔 장갑(손목) · Ⅰ",
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
                    "stat": "cryoDamageIncrease",
                    "description": "냉기 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                },
                {
                    "stat": "electricDamageIncrease",
                    "description": "전기 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                }
            ]
        },
        "bone_krusher_gloves": {
            "id": "bone_krusher_gloves",
            "name": "본 크러셔 장갑(손목)",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "agility",
                    "description": "민첩",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "heatDamageIncrease",
                    "description": "열기 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                },
                {
                    "stat": "natureDamageIncrease",
                    "description": "자연 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                }
            ]
        },
        "bone_krusher_muffler_T1": {
            "id": "bone_krusher_muffler_T1",
            "name": "본 크러셔 머플러 · Ⅰ",
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
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 12.3, "1": 13.6, "2": 14.8, "3": 16.0 }
                }
            ]
        },
        "bone_krusher_muffler": {
            "id": "bone_krusher_muffler",
            "name": "본 크러셔 머플러",
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
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "bone_krusher_heavy_armor_T2": {
            "id": "bone_krusher_heavy_armor_T2",
            "name": "본 크러셔 중갑 방어구 · Ⅱ",
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
                    "stat": "cryoDamageIncrease",
                    "description": "냉기 피해 증가",
                    "values": { "0": 11.5, "1": 12.7, "2": 13.8, "3": 14.9 }
                },
                {
                    "stat": "electricDamageIncrease",
                    "description": "전기 피해 증가",
                    "values": { "0": 11.5, "1": 12.7, "2": 13.8, "3": 14.9 }
                }
            ]
        },
        "bone_krusher_heavy_armor_T1": {
            "id": "bone_krusher_heavy_armor_T1",
            "name": "본 크러셔 중갑 방어구 · Ⅰ",
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
                    "stat": "linkedSkillDamageIncrease",
                    "description": "연계 스킬 피해 증가",
                    "values": { "0": 20.7, "1": 22.8, "2": 24.8, "3": 26.9 }
                }
            ]
        },
        "bone_krusher_heavy_armor": {
            "id": "bone_krusher_heavy_armor",
            "name": "본 크러셔 중갑 방어구",
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
        }
    }
}


if (typeof window !== 'undefined') {
    window.BonekrushaSetData = BonekrushaSetData;
}
