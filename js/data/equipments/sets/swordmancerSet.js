//DamageCalc\js\data\equipments\sets\swordmancerSet.js

const SwordmancerSetData = {
    "set_Id": "Swordmancer",
    "setName": "검술사",
    "requiredPieces": 3,

    //세트 효과
    "setBonus": {
        "description": "불균형 효율 보너스 +20%. 물리 이상 부여 후 공격력 250% 추가 물리 피해 (15초마다 1회)",

        "baseEffect": {
            "stat": "staggerEfficiency",
            "target": "self",
            "value": 20,
            "description": "불균형 효율 보너스 +20%"
        },

        "conditionalEffects": [
            {
                "id": "swordmancer_physical_proc",
                "stat": "physicalProcAtkRatio",
                "target": "self",
                "value": 250,
                "conditions": {
                    "userToggleable": true
                },
                "description": "물리 이상 부여 후 공격력 250% 추가 물리 피해 (15초마다 1회)"
            }
        ]
    },

    "items": {
        "swordmancer_filter": {
            "id": "swordmancer_filter",
            "name": "검술사 초소형 필터",
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
        "swordmancer_beacon": {
            "id": "swordmancer_beacon",
            "name": "검술사 위치 신호기",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                },
                {
                    "stat": "artsEnhance",
                    "description": "오리지늄 아츠 강도",
                    "values": { "0": 41, "1": 45, "2": 49, "3": 53 }
                }
            ]
        },
        "swordmancer_flint": {
            "id": "swordmancer_flint",
            "name": "검술사 부싯돌",
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
                    "stat": "physicalDamageIncrease",
                    "description": "물리 피해 증가",
                    "values": { "0": 23.0, "1": 25.3, "2": 27.6, "3": 29.9 }
                }
            ]
        },
        "swordmancer_metal_gloves": {
            "id": "swordmancer_metal_gloves",
            "name": "검술사 전술 금속 장갑",
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
                    "stat": "ultimateDamageIncrease",
                    "description": "궁극기 피해 증가",
                    "values": { "0": 43.1, "1": 47.4, "2": 51.7, "3": 56.1 }
                }
            ]
        },
        "swordmancer_tactical_gloves": {
            "id": "swordmancer_tactical_gloves",
            "name": "검술사 전술 장갑",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "strength",
                    "description": "힘",
                    "values": { "0": 65, "1": 71, "2": 78, "3": 84 }
                },
                {
                    "stat": "will",
                    "description": "의지",
                    "values": { "0": 43, "1": 47, "2": 51, "3": 55 }
                },
                {
                    "stat": "physicalDamageIncrease",
                    "description": "물리 피해 증가",
                    "values": { "0": 19.2, "1": 21.1, "2": 23.0, "3": 24.9 }
                }
            ]
        },
        "swordmancer_light_armor": {
            "id": "swordmancer_light_armor",
            "name": "검술사 경장갑",
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
                    "stat": "ultimateChargeEfficiency",
                    "description": "궁극기 충전 효율",
                    "values": { "0": 12.3, "1": 13.6, "2": 14.8, "3": 16.0 }
                }
            ]
        },
        "swordmancer_heavy_armor": {
            "id": "swordmancer_heavy_armor",
            "name": "검술사 중장갑",
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
    window.SwordmancerSetData = SwordmancerSetData;
}
