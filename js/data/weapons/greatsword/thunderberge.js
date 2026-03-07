//DamageCalc\js\data\weapons\greatsword\thunderberge.js

const ThunderbergeData = {
    "id": "thunderberge",
    "name": "천둥의 흔적",
    "type": "greatsword",
    "rarity": 6,

    "weaponAtk": 495,

    "option1": "strength3",
    "option2": "hpIncrease3",

    "option3": {
        "name": "의료 · 탈로스의 눈",
        "keyword": "의료",
        "stackRule": "unique",
        "maxStacks": 1,
        "minLevel": 1,
        "maxLevel": 9,
        "maxBreakthrough": 6,
        "description": "장착자가 부여하는 보호 효과 증가. 장착자가 연계 스킬로 치유 시, 메인 오퍼레이터에게 부여하는 보호 효과 증가",

        "personalEffect": {
            // 구현 안함
        },

        "keywordEffect":
        {
            // 구현 안함
        }

    }
}

if (typeof window !== 'undefined') {
    window.ThunderbergeData = ThunderbergeData;
}