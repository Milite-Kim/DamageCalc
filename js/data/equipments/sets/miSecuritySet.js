//DamageCalc\js\data\equipments\sets\miSecuritySet.js

const MISecuritySetData = {
    "set_Id": "MI_Security",
    "setName": "MI 경찰용",
    "requiredPieces": 3,

    //세트 효과
    "setBouns": {
        "description": "장착자의 치명타 확률 +5%, 조건에 따라 공격력 최대 +25%, 치명타 확률 +5%",

        "baseEffect": {
            "stat": "critRate",
            "target": "self",
            "value": 5,
            "description": "치명타 확률 +5%"
        },

        "conditionalEffects": [
            {
                "id": "atk_boost",
                "stat": "atkIncrease",
                "target": "self",
                "value": 25,
                "conditions": {
                    "userToggleable": true
                },
                "description": "공격력 증가 +25%"
            },
            {
                "id": "critRate_boost",
                "stat": "critRate",
                "target": "self",
                "value": 5,
                "conditions": {
                    "userToggleable": true
                },
                "description": "치명타 확률 +5%"
            }
        ]
    },

    "items": {
        "": {
            "id": "",
            "name": "",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3": }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                }
            ]
        },
          "": {
            "id": "",
            "name": "",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3": }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                }
            ]
        },
          "": {
            "id": "",
            "name": "",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3": }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                }
            ]
        },
          "": {
            "id": "",
            "name": "",
            "type": "armor",
            "rarity": 5,
            "options": [
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3": }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                }
            ]
        },
        "": {
            "id": "",
            "name": "",
            "type": "gloves",
            "rarity": 5,
            "options": [
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3": }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                }
            ]
        },
        "": {
            "id": "",
            "name": "",
            "type": "kit",
            "rarity": 5,
            "options": [
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3": }
                },
                {
                    "stat": "",
                    "description": "",
                    "values": { "0": , "1": , "2": , "3":  }
                }
            ]
        }
    }
}


if (typeof window !== 'undefined') {
    window.MISecuritySetData = MISecuritySetData;
}