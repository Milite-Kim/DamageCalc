//DamageCalc\js\data\weapons\artsUnit\opusEtchFigure.js

const OpusEtchFigureData = {
    "id": "opus_etch_figure",
    "name": "작품: 침식 흔적",
    "type": "artsUnit",
    "rarity": 6,

    "weaponAtk": 485,

    "option1": "will3",
    "option2": "natureDamageIncrease3",

    "option3": {
        "name": "억제 · 빙퇴석의 침식 흔적",
        "keyword": "억제",
        "stackRule": "unique", // 사명의 길과 마찬가지로, 하나의 옵션은 중첩 안됨. 하나의 옵션은 중첩 가능함
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 공격력 증가. 배틀 스킬로 자연 부착 부여 시, 다른 아군이 주는 아츠 피해 증가(중첩 불가). 자연 부착이 된 적마다 다른 아군이 주는 아츠 피해 증가(최대 3스택)",

        "personalEffect": {
            "stat": "atkIncrease",
            "description": "장착자의 공격력 증가",
            "values": {
                "1": 7,
                "2": 8.4,
                "3": 9.8,
                "4": 11.2,
                "5": 12.6,
                "6": 14,
                "7": 15.4,
                "8": 16.8,
                "9": 19.6
            }
        },

        "keywordEffect": [
            {
                "stat": "artsDamageIncrease",
                "target": "allies",
                "description": "배스 자연 부착 부여 조건, 아군 아츠 피증",
                "conditions": {
                    "userToggleable": true
                },
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
            {
                "stat": "artsDamageIncrease",
                "target": "allies",
                "description": "자연 부착 적 수 비례, 아군 아츠 피증(현재 1스택 적용)",
                "conditions": {
                    "userToggleable": true
                },
                "values": {
                    "1": 2,
                    "2": 2.4,
                    "3": 2.8,
                    "4": 3.2,
                    "5": 3.6,
                    "6": 4,
                    "7": 4.4,
                    "8": 4.8,
                    "9": 5.6
                }
            }
        ]
    }
}

if (typeof window !== 'undefined') {
    window.OpusEtchFigureData = OpusEtchFigureData;
}