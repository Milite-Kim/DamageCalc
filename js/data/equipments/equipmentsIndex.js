//DamageCalc\js\data\equipments\equipmentsIndex.js
// 모든 장비 통합 export

const hotWorkSet = window.HotWorkSetData || {};
const eternalXiraniteSet = window.EternalXiraniteSetData || {};

// 모든 세트 데이터
const ALL_SETS = {
    hot_work: hotWorkSet,
    eternal_xiranite: eternalXiraniteSet
};

// 모든 장비를 flat하게 (ID를 키로)
const ALL_EQUIPMENT = {};
Object.values(ALL_SETS).forEach(setData => {
    Object.assign(ALL_EQUIPMENT, setData.items);
});

// 모든 장비를 배열로
const ALL_EQUIPMENT_LIST = Object.values(ALL_EQUIPMENT);

// 타입별로 분류
const EQUIPMENT_BY_TYPE = {
    armor: [],
    gloves: [],
    kit: []
};

ALL_EQUIPMENT_LIST.forEach(item => {
    if (EQUIPMENT_BY_TYPE[item.type]) {
        EQUIPMENT_BY_TYPE[item.type].push(item);
    }
});

// 세트별로 정리
const SETS_BY_ID = {
    hot_work: hotWorkSet,
    eternal_xiranite: eternalXiraniteSet
};

/**
 * ID로 장비 찾기
 * @param {string} equipmentId - 장비 ID
 * @returns {Object|null} 장비 데이터
 */
function getEquipmentById(equipmentId) {
    return ALL_EQUIPMENT[equipmentId] || null;
}

/**
 * 타입으로 장비 목록 가져오기
 * @param {string} type - 장비 타입 (armor, gloves, kit)
 * @returns {Array} 해당 타입의 장비 배열
 */
function getEquipmentByType(type) {
    return EQUIPMENT_BY_TYPE[type] || [];
}

/**
 * 세트 ID로 세트 데이터 가져오기
 * @param {string} setId - 세트 ID
 * @returns {Object|null} 세트 데이터
 */
function getSetById(setId) {
    return SETS_BY_ID[setId] || null;
}

/**
 * 장비가 속한 세트 ID 찾기
 * @param {string} equipmentId - 장비 ID
 * @returns {string|null} 세트 ID
 */
function getEquipmentSetId(equipmentId) {
    for (const [setId, setData] of Object.entries(ALL_SETS)) {
        if (setData.items[equipmentId]) {
            return setId;
        }
    }
    return null;
}

/**
 * 착용한 장비의 세트 효과 확인
 * @param {Array} equippedItems - 착용 장비 배열 [armor, gloves, kit1, kit2]
 * @returns {Object} 활성화된 세트 효과들
 */
function checkSetBonus(equippedItems) {
    const setCounts = {};
    const activeSetBonuses = {};

    // 착용한 장비의 세트 카운트
    equippedItems.forEach(item => {
        if (!item) return;

        const setId = getEquipmentSetId(item.id);
        if (setId) {
            setCounts[setId] = (setCounts[setId] || 0) + 1;
        }
    });

    // 세트 효과 활성화 확인
    Object.entries(setCounts).forEach(([setId, count]) => {
        const setData = ALL_SETS[setId];
        if (setData && count >= setData.requiredPieces) {
            activeSetBonuses[setId] = {
                setName: setData.setName,
                count: count,
                required: setData.requiredPieces,
                ...setData.setBonus
            };
        }
    });

    return activeSetBonuses;
}

/**
 * 장비 옵션 효과 계산
 * @param {Array} equippedItems - 착용 장비 배열
 * @param {Array} forgeLevels - 단조 레벨 배열 [0-3, 0-3, 0-3, 0-3]
 * @returns {Object} { stats, damageIncrease, utility }
 */
function calculateEquipmentStats(equippedItems, forgeLevels) {
    const stats = {
        strength: 0,
        agility: 0,
        intellect: 0,
        will: 0
    };

    const damageIncrease = {};
    const utility = {};

    equippedItems.forEach((item, index) => {
        if (!item) return;

        const forgeLevel = forgeLevels[index] || 0;

        item.options.forEach(option => {
            const value = option.values[forgeLevel];

            // 기본 스탯
            if (stats.hasOwnProperty(option.stat)) {
                stats[option.stat] += value;
            }
            // 피해 증가 또는 특수 효과
            else if (option.stat.includes('Damage') ||
                option.stat === 'artsEnhance' ||
                option.stat === 'criticalRate') {
                damageIncrease[option.stat] =
                    (damageIncrease[option.stat] || 0) + value;
            }
            // 유틸리티 스탯
            else {
                utility[option.stat] =
                    (utility[option.stat] || 0) + value;
            }
        });
    });

    return { stats, damageIncrease, utility };
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // 세트 데이터
        ALL_SETS,
        SETS_BY_ID,

        // 장비 데이터
        ALL_EQUIPMENT,
        ALL_EQUIPMENT_LIST,
        EQUIPMENT_BY_TYPE,

        // 유틸 함수
        getEquipmentById,
        getEquipmentByType,
        getSetById,
        getEquipmentSetId,
        checkSetBonus,
        calculateEquipmentStats
    };
}

// 브라우저용 전역 변수 등록
if (typeof window !== 'undefined') {
    window.ALL_SETS = ALL_SETS;
    window.SETS_BY_ID = SETS_BY_ID;
    window.ALL_EQUIPMENT = ALL_EQUIPMENT;
    window.ALL_EQUIPMENT_LIST = ALL_EQUIPMENT_LIST;
    window.EQUIPMENT_BY_TYPE = EQUIPMENT_BY_TYPE;
    window.getEquipmentById = getEquipmentById;
    window.getEquipmentByType = getEquipmentByType;
    window.getSetById = getSetById;
    window.getEquipmentSetId = getEquipmentSetId;
    window.checkSetBonus = checkSetBonus;
    window.calculateEquipmentStats = calculateEquipmentStats;
}