//DamageCalc\js\data\weapons\artsUnit\freedomToProselytize.js

const FreedomToProselytizeData = {
    "id": "freedom_to_proselytize",
    "name": "선교의 자유",
    "type": "artsUnit",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "will2",
    "option2": "healEfficiency2",

    "option3": {
        "name": "의료 · 신앙의 구원",
        "keyword": "의료",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 주요 능력치 증가(% 단위). 장착자가 자신의 배틀 스킬로 치유 시, 메인 컨트롤 오퍼레이터의 체력을 추가로 회복",

        "personalEffect": {
            "stat": "mainStat",// 이거 % 단위임. 이거 확인 부탁함
            "description": "장착자의 주요 능력치 증가",
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

        "keywordEffect": {
            // 별도의 딜 관련 효과 없음
        }
    }
}

if (typeof window !== 'undefined') {
    window.FreedomToProselytizeData = FreedomToProselytizeData;
}