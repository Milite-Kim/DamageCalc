//DamageCalc\js\data\weapons\greatsword\sunderedPrince.js

const SunderedPrinceData = {
    "id": "sundered_prince",
    "name": "분쇄의 군주",
    "type": "greatsword",
    "rarity": 6,

    "weaponAtk": 490,

    "option1": "strength3",
    "option2": "critRate3",

    "option3": {
        "name": "분쇄 · 군왕의 위세",
        "keyword": "분쇄",
        "stackRule": "stack",
        "maxStacks": 2,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자가 적에게 강력한 일격 피해를 가했을 때, 공격력 증가. 장착자가 메인 오퍼레이터일 경우 해당 수치가 2배로 증가",

        "personalEffect": {
            // 기본 효과 자체가 조건부이기에 스택으로 계산 가능하도록 키워드 효과로만 구현
        },

        "keywordEffect":
        {
            "stat": "atkIncrease",
            "target": "self",
            "description": "강력한 일격 조건, 공증(메인이면 2중첩으로)",
            "conditions": {
                "userToggleable": true
            },
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
        }

    }
}

if (typeof window !== 'undefined') {
    window.SunderedPrinceData = SunderedPrinceData;
}