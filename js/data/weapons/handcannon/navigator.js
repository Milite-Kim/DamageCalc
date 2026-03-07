//DamageCalc\js\data\weapons\handcannon\navigator.js

const NavigatorData = {
    "id": "navigator",
    "name": "항로의 개척자",
    "type": "handcannon",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "intellect3",
    "option2": "cryoDamage3",

    "option3": {
        "name": "고통 · 외로운 항해",
        "keyword": "고통",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 치명타 확률 증가. 조건에 따라 냉기와 자연 피해 증가 및 치명타 확률 증가/추가 조건에 따라 효과가 2배로 증가",

        "personalEffect": {
            "stat": "critRate",
            "description": "치명타 확률 증가",
            "values": {
                "1": 3.5,
                "2": 4.2,
                "3": 4.9,
                "4": 5.6,
                "5": 6.3,
                "6": 7,
                "7": 7.7,
                "8": 8.4,
                "9": 9.8
            }
        },

        "keywordEffect": {
            "modes": [
                {
                    "id": "none",
                    "label": "미적용"
                },
                {
                    "id": "normal",
                    "label": "일반 (냉기+자연+치확)",
                    "effects": [
                        {
                            "stat": "cryoDamageIncrease",
                            "target": "self",
                            "values": {
                                "1": 3.5, "2": 4.2, "3": 4.9, "4": 5.6,
                                "5": 6.3, "6": 7, "7": 7.7, "8": 8.4, "9": 9.8
                            }
                        },
                        {
                            "stat": "natureDamageIncrease",
                            "target": "self",
                            "values": {
                                "1": 3.5, "2": 4.2, "3": 4.9, "4": 5.6,
                                "5": 6.3, "6": 7, "7": 7.7, "8": 8.4, "9": 9.8
                            }
                        },
                        {
                            "stat": "critRate",
                            "target": "self",
                            "values": {
                                "1": 2, "2": 2.4, "3": 2.8, "4": 3.2,
                                "5": 3.6, "6": 4, "7": 4.4, "8": 4.8, "9": 5.6
                            }
                        }
                    ]
                },
                {
                    "id": "enhanced",
                    "label": "강화 (2배)",
                    "effects": [
                        {
                            "stat": "cryoDamageIncrease",
                            "target": "self",
                            "values": {
                                "1": 7, "2": 8.4, "3": 9.8, "4": 11.2,
                                "5": 12.6, "6": 14, "7": 15.4, "8": 16.8, "9": 19.6
                            }
                        },
                        {
                            "stat": "natureDamageIncrease",
                            "target": "self",
                            "values": {
                                "1": 7, "2": 8.4, "3": 9.8, "4": 11.2,
                                "5": 12.6, "6": 14, "7": 15.4, "8": 16.8, "9": 19.6
                            }
                        },
                        {
                            "stat": "critRate",
                            "target": "self",
                            "values": {
                                "1": 4, "2": 4.8, "3": 5.6, "4": 6.4,
                                "5": 7.2, "6": 8, "7": 8.8, "8": 9.6, "9": 11.2
                            }
                        }
                    ]
                }
            ]
        }
    }
}

if (typeof window !== 'undefined') {
    window.NavigatorData = NavigatorData;
}