//DamageCalc\js\data\weapons\greatsword\formerFinery.js

const FormerFineryData = {
    "id": "former_finery",
    "name": "과거의 일품",
    "type": "greatsword",
    "rarity": 6,

    "weaponAtk": 495,

    "option1": "will3",
    "option2": "hpIncrease3",

    "option3": {
        "name": "효율 · 절계 의료법",
        "keyword": "효율",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자의 치료 효율 증가. 비호 상태의 오퍼레이터가 피해 받은 경우, 장착자가 대상에게 주는 회복 효과 증가",

        "personalEffect": {
            // 구현 안함
        },

        "keywordEffect":
        {
            //구현 안함
        }
    }
}

if (typeof window !== 'undefined') {
    window.FormerFineryData = FormerFineryData;
}