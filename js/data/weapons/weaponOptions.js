//DamageCalc\js\data\weapons\weaponOptions.js

// ===== 첫 번째 옵션 풀 (스탯 증가) =====
const OPTION1_POOL = {
    // 주요능력치 (오퍼레이터의 주 스탯)
    "mainStat1": {
        "name": "주요능력치 증가 · 소",
        "stat": "majorStat",  // 특수 키워드
        "grade": "small",
        "values": {
            "3": 26, "4": 34, "5": 42, "6": 51, "7": 59, "8": 67, "9": 79
        }
    },
    "mainStat2": {
        //아직 인게임 내에 해당 옵션을 지닌 무기가 없기에 데이터가 없음
    },
    "mainStat3": {
        "name": "주요능력치 증가 · 대",
        "stat": "majorStat",
        "grade": "large",
        "values": {
            "3": 40, "4": 47, "5": 53, "6": 60, "7": 67, "8": 73, "9": 80
        }
    },

    // 힘 증가
    "strength1": {
        "name": "힘 증가 · 소",
        "stat": "strength",
        "grade": "small",
        "values": {
            "3": 31, "4": 40, "5": 50, "6": 60, "7": 69, "8": 79, "9": 93
        }
    },
    "strength2": {
        "name": "힘 증가 · 중",
        "stat": "strength",
        "grade": "medium",
        "values": {
            "3": 41, "4": 54, "5": 67, "6": 80, "7": 92, "8": 105, "9": 124
        }
    },
    "strength3": {
        "name": "힘 증가 · 대",
        "stat": "strength",
        "grade": "large",
        "values": {
            "3": 52, "4": 68, "5": 84, "6": 100, "7": 116, "8": 132, "9": 156
        }
    },

    // 민첩 증가
    "agility1": {
        "name": "민첩 증가 · 소",
        "stat": "agility",
        "grade": "small",
        "values": {
            "3": 31, "4": 40, "5": 50, "6": 60, "7": 69, "8": 79, "9": 93
        }
    },
    "agility2": {
        "name": "민첩 증가 · 중",
        "stat": "agility",
        "grade": "medium",
        "values": {
            "3": 41, "4": 54, "5": 67, "6": 80, "7": 92, "8": 105, "9": 124
        }
    },
    "agility3": {
        "name": "민첩 증가 · 대",
        "stat": "agility",
        "grade": "large",
        "values": {
            "3": 52, "4": 68, "5": 84, "6": 100, "7": 116, "8": 132, "9": 156
        }
    },

    // 지능 증가
    "intellect1": {
        "name": "지능 증가 · 소",
        "stat": "intellect",
        "grade": "small",
        "values": {
            "3": 31, "4": 40, "5": 50, "6": 60, "7": 69, "8": 79, "9": 93
        }
    },
    "intellect2": {
        "name": "지능 증가 · 중",
        "stat": "intellect",
        "grade": "medium",
        "values": {
            "3": 41, "4": 54, "5": 67, "6": 80, "7": 92, "8": 105, "9": 124
        }
    },
    "intellect3": {
        "name": "지능 증가 · 대",
        "stat": "intellect",
        "grade": "large",
        "values": {
            "3": 52, "4": 68, "5": 84, "6": 100, "7": 116, "8": 132, "9": 156
        }
    },

    // 의지 증가
    "will1": {
        "name": "의지 증가 · 소",
        "stat": "will",
        "grade": "small",
        "values": {
            "3": 31, "4": 40, "5": 50, "6": 60, "7": 69, "8": 79, "9": 93
        }
    },
    "will2": {
        "name": "의지 증가 · 중",
        "stat": "will",
        "grade": "medium",
        "values": {
            "3": 41, "4": 54, "5": 67, "6": 80, "7": 92, "8": 105, "9": 124
        }
    },
    "will3": {
        "name": "의지 증가 · 대",
        "stat": "will",
        "grade": "large",
        "values": {
            "3": 52, "4": 68, "5": 84, "6": 100, "7": 116, "8": 132, "9": 156
        }
    }
};

// ===== 두 번째 옵션 풀 (부가적인 옵션) =====
const OPTION2_POOL = {
    // 공격력 증가
    "atkIncrease1": {
        "name": "공격력 증가 · 소",
        "stat": "atkIncrease",
        "grade": "small",
        "values": {
            "3": 7.8, "4": 10.2, "5": 12.6, "6": 15.0, "7": 17.4, "8": 19.8, "9": 23.4
        }
    },
    "atkIncrease2": {
        "name": "공격력 증가 · 중",
        "stat": "atkIncrease",
        "grade": "medium",
        "values": {
            "3": 10.4, "4": 13.6, "5": 16.8, "6": 20.0, "7": 23.2, "8": 26.4, "9": 31.2
        }
    },
    "atkIncrease3": {
        "name": "공격력 증가 · 대",
        "stat": "atkIncrease",
        "grade": "large",
        "values": {
            "3": 13.0, "4": 17.0, "5": 21.0, "6": 25.0, "7": 29.0, "8": 33.0, "9": 39.0
        }
    },

    // 생명력 증가 (데미지 계산엔 미포함이지만 일단 정의)
    "hpIncrease1": {
        "name": "생명력 증가 · 소",
        "stat": "hpIncrease",
        "grade": "small",
        "values": {
            "3": 15.6, "4": 20.4, "5": 25.2, "6": 30.0, "7": 34.8, "8": 39.6, "9": 46.8
        }
    },
    "hpIncrease2": {
        "name": "생명력 증가 · 중",
        "stat": "hpIncrease",
        "grade": "medium",
        "values": {
            "3": 20.8, "4": 27.2, "5": 33.6, "6": 40.0, "7": 46.4, "8": 52.8, "9": 62.4
        }
    },
    "hpIncrease3": {
        "name": "생명력 증가 · 대",
        "stat": "hpIncrease",
        "grade": "large",
        "values": {
            "3": 26.0, "4": 34.0, "5": 42.0, "6": 50.0, "7": 58.0, "8": 66.0, "9": 78.0
        }
    },

    // 물리 피해 증가
    "physicalDamage1": {
        "name": "물리 피해 증가 · 소",
        "stat": "physicalDamageIncrease",
        "grade": "small",
        "values": {
            "3": 8.7, "4": 11.3, "5": 14.0, "6": 16.7, "7": 19.3, "8": 22.0, "9": 26.0
        }
    },
    "physicalDamage2": {
        "name": "물리 피해 증가 · 중",
        "stat": "physicalDamageIncrease",
        "grade": "medium",
        "values": {
            "3": 11.6, "4": 15.1, "5": 18.7, "6": 22.2, "7": 25.8, "8": 29.3, "9": 34.7
        }
    },
    "physicalDamage3": {
        "name": "물리 피해 증가 · 대",
        "stat": "physicalDamageIncrease",
        "grade": "large",
        "values": {
            "3": 14.4, "4": 18.9, "5": 23.3, "6": 27.8, "7": 32.2, "8": 36.7, "9": 43.3
        }
    },

    // 열기 피해 증가
    "heatDamage1": {
        // 인게임 내에 구현된 무기 없음
    },
    "heatDamage2": {
        "name": "열기 피해 증가 · 중",
        "stat": "heatDamageIncrease",
        "grade": "medium",
        "values": {
            "3": 11.6, "4": 15.1, "5": 18.7, "6": 22.2, "7": 25.8, "8": 29.3, "9": 34.7
        }
    },
    "heatDamage3": {
        "name": "열기 피해 증가 · 대",
        "stat": "heatDamageIncrease",
        "grade": "large",
        "values": {
            "3": 14.4, "4": 18.9, "5": 23.3, "6": 27.8, "7": 32.2, "8": 36.7, "9": 43.3
        }
    },

    // 전기 피해 증가
    "electricDamage1": {
        // 인게임 내에 구현된 무기 없음
    },
    "electricDamage2": {
        "name": "전기 피해 증가 · 중",
        "stat": "electricDamageIncrease",
        "grade": "medium",
        "values": {
            "3": 11.6, "4": 15.1, "5": 18.7, "6": 22.2, "7": 25.8, "8": 29.3, "9": 34.7
        }
    },
    "electricDamage3": {
        // 인게임 내에 구현된 무기 없음
    },

    // 냉기 피해 증가
    "cryoDamage1": {
        // 인게임 내에 구현된 무기 없음
    },
    "cryoDamage2": {
        "name": "냉기 피해 증가 · 중",
        "stat": "cryoDamageIncrease",
        "grade": "medium",
        "values": {
            "3": 11.6, "4": 15.1, "5": 18.7, "6": 22.2, "7": 25.8, "8": 29.3, "9": 34.7
        }
    },
    "cryoDamage3": {
        "name": "냉기 피해 증가 · 대",
        "stat": "cryoDamageIncrease",
        "grade": "large",
        "values": {
            "3": 14.4, "4": 18.9, "5": 23.3, "6": 27.8, "7": 32.2, "8": 36.7, "9": 43.3
        }
    },

    // 자연 피해 증가
    "natureDamage1": {
        // 인게임 내에 구현된 무기 없음
    },
    "natureDamage2": {
        // 인게임 내에 구현된 무기 없음
    },
    "natureDamage3": {
        "name": "자연 피해 증가 · 대",
        "stat": "natureDamageIncrease",
        "grade": "large",
        "values": {
            "3": 14.4, "4": 18.9, "5": 23.3, "6": 27.8, "7": 32.2, "8": 36.7, "9": 43.3
        }
    },

    // 아츠 피해 증가
    "artsDamage1": {
        "name": "아츠 피해 증가 · 소",
        "stat": "artsDamageIncrease",
        "grade": "small",
        "values": {
            "3": 8.7, "4": 11.3, "5": 14.0, "6": 16.7, "7": 19.3, "8": 22.0, "9": 26.0
        }
    },
    "artsDamage2": {
        "name": "아츠 피해 증가 · 중",
        "stat": "artsDamageIncrease",
        "grade": "medium",
        "values": {
            "3": 11.6, "4": 15.1, "5": 18.7, "6": 22.2, "7": 25.8, "8": 29.3, "9": 34.7
        }
    },
    "artsDamage3": {
        "name": "아츠 피해 증가 · 대",
        "stat": "artsDamageIncrease",
        "grade": "large",
        "values": {
            "3": 14.4, "4": 18.9, "5": 23.3, "6": 27.8, "7": 32.2, "8": 36.7, "9": 43.3
        }
    },

    // 치명타 확률 증가
    "critRate1": {
        // 인게임 내에 구현된 무기 없음
    },
    "critRate2": {
        // 인게임 내에 구현된 무기 없음
    },
    "critRate3": {
        "name": "치명타 확률 증가 · 대",
        "stat": "criticalRate",
        "grade": "large",
        "values": {
            "3": 6.5, "4": 8.5, "5": 10.5, "6": 12.5, "7": 14.5, "8": 16.5, "9": 19.5
        }
    },

    // 오리지늄 아츠 강도 증가
    "artsEnhance1": {
        // 인게임 내에 구현된 무기 없음
    },
    "artsEnhance2": {
        "name": "오리지늄 아츠 강도 증가 · 중",
        "stat": "artsEnhance",
        "grade": "medium",
        "values": {
            "3": 20, "4": 27, "5": 33, "6": 40, "7": 46, "8": 52, "9": 62
        }
    },
    "artsEnhance3": {
        "name": "오리지늄 아츠 강도 증가 · 대",
        "stat": "artsEnhance",
        "grade": "large",
        "values": {
            "3": 26, "4": 34, "5": 42, "6": 50, "7": 58, "8": 66, "9": 78
        }
    },

    // 치유 효율 증가 (데미지 계산 미포함)
    "healEfficiency1": {
        // 인게임 내에 구현된 무기 없음
    },
    "healEfficiency2": {
        "name": "치유 효율 증가 · 중",
        "stat": "healEfficiency",
        "grade": "medium",
        "values": {
            "3": 12.4, "4": 16.2, "5": 20.0, "6": 23.8, "7": 27.6, "8": 31.4, "9": 37.1
        }
    },
    "healEfficiency3": {
        "name": "치유 효율 증가 · 대",
        "stat": "healEfficiency",
        "grade": "large",
        "values": {
            "3": 15.5, "4": 20.2, "5": 25.0, "6": 29.8, "7": 34.5, "8": 39.3, "9": 46.4
        }
    },

    // 궁극기 충전 효율 증가 (데미지 계산 미포함)
    "ultimateCharge1": {
        // 인게임 내 구현된 무기 없음
    },
    "ultimateCharge2": {
        "name": "궁극기 충전 효율 증가 · 중",
        "stat": "ultimateChargeEfficiency",
        "grade": "medium",
        "values": {
            "3": 12.4, "4": 16.2, "5": 20.0, "6": 23.8, "7": 27.6, "8": 31.4, "9": 37.1
        }
    },
    "ultimateCharge3": {
        "name": "궁극기 충전 효율 증가 · 대",
        "stat": "ultimateChargeEfficiency",
        "grade": "large",
        "values": {
            "3": 15.5, "4": 20.2, "5": 25.0, "6": 29.8, "7": 34.5, "8": 39.3, "9": 46.4
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        OPTION1_POOL,
        OPTION2_POOL
    };
}

// 브라우저용 추가
if (typeof window !== 'undefined') {
    window.OPTION1_POOL = OPTION1_POOL;
    window.OPTION2_POOL = OPTION2_POOL;
}