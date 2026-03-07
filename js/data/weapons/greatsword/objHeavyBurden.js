//DamageCalc\js\data\weapons\greatsword\objHeavyBurden.js

const OBJHeavyBurdenData = {
    "id": "obj_heavy_burden",
    "name": "O.B.J. 헤비 버든",
    "type": "greatsword",
    "rarity": 5,

    "weaponAtk": 411,

    "option1": "strength2",
    "option2": "hpIncrease2",

    "option3": {
        "name": "효율 · 강인한 의지",
        "keyword": "효율",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 보조 능력치 증가(% 단위). 장착자가 적에게 넘어뜨리기 피해를 주거나 허약을 부여할 때, 방어력 증가",

        "personalEffect": {
            "stat": "minorStat",
            "description": "장착자의 보조 능력치 증가(%)",
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

        "keywordEffect":
        {
            // 구현 안함
        }
    }
}

if (typeof window !== 'undefined') {
    window.OBJHeavyBurdenData = OBJHeavyBurdenData;
}