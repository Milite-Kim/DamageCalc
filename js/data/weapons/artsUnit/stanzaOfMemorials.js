//DamageCalc\js\data\weapons\artsUnit\stanzaOfMemorials.js

const StanzaOfMemorialsData = {
    "id": "stanza_of_memorials",
    "name": "망자의 노래",
    "type": "artsUnit",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "intellect2",
    "option2": "atkIncrease2",

    "option3": {
        "name": "어둠 · 무덤 위의 불씨",
        "keyword": "어둠",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 최대 생명력 증가. 궁극기 사용 시, 자신과 속성이 다른 오퍼레이터의 공격력 증가", //현재 이에 대한 자동 계산이 없으니 allies로 처리

        "personalEffect": {
            "stat": "hpIncrease",
            "description": "최대 생명력 증가", // 계산 안함
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

        "keywordEffect": {
            "stat": "atkIncrease",
            "target": "allies",
            "description": "궁극기 사용, 다른 아군 공증 적용(속성 판정 없음)",
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
    }
}

if (typeof window !== 'undefined') {
    window.StanzaOfMemorialsData = StanzaOfMemorialsData;
}