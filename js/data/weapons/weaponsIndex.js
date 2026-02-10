//DamageCalc\js\data\weapons\weaponsIndex.js
// 모든 무기 타입 통합 export

// 타입별로 정리 (window 객체에서 직접 참조, const 재선언 방지)
const WEAPONS_BY_TYPE = {
    sword: window.SWORD_WEAPONS || {},
    greatsword: window.GREATSWORD_WEAPONS || {},
    handcannon: window.HANDCANNON_WEAPONS || {},
    artsUnit: window.ARTSUNIT_WEAPONS || {},
    polearm: window.POLEARM_WEAPONS || {}
};

// 모든 무기를 flat하게 (ID를 키로)
const ALL_WEAPONS = {
    ...(window.SWORD_WEAPONS || {}),
    ...(window.GREATSWORD_WEAPONS || {}),
    ...(window.HANDCANNON_WEAPONS || {}),
    ...(window.ARTSUNIT_WEAPONS || {}),
    ...(window.POLEARM_WEAPONS || {})
};

// 모든 무기를 배열로
const ALL_WEAPONS_LIST = Object.values(ALL_WEAPONS);

// 타입별 리스트
const WEAPONS_LIST_BY_TYPE = {
    sword: Object.values(window.SWORD_WEAPONS || {}),
    greatsword: Object.values(window.GREATSWORD_WEAPONS || {}),
    handcannon: Object.values(window.HANDCANNON_WEAPONS || {}),
    artsUnit: Object.values(window.ARTSUNIT_WEAPONS || {}),
    polearm: Object.values(window.POLEARM_WEAPONS || {})
};

// WEAPON_TYPES는 constants.js에 이미 정의되어 있으므로 여기서는 선언하지 않음

/**
 * ID로 무기 찾기
 * @param {string} weaponId - 무기 ID
 * @returns {Object|null} 무기 데이터
 */
function getWeaponById(weaponId) {
    return ALL_WEAPONS[weaponId] || null;
}

/**
 * 타입으로 무기 목록 가져오기
 * @param {string} type - 무기 타입 (sword, greatsword 등)
 * @returns {Array} 해당 타입의 무기 배열
 */
function getWeaponsByType(type) {
    return WEAPONS_LIST_BY_TYPE[type] || [];
}

/**
 * 오퍼레이터가 사용 가능한 무기 필터링
 * @param {Object} operatorData - 오퍼레이터 데이터
 * @returns {Array} 사용 가능한 무기 배열
 */
function getWeaponsForOperator(operatorData) {
    const weaponType = operatorData.weaponType;
    return getWeaponsByType(weaponType);
}

// 브라우저용 전역 변수 등록
if (typeof window !== 'undefined') {
    // 무기 데이터
    window.WEAPONS_BY_TYPE = WEAPONS_BY_TYPE;
    window.ALL_WEAPONS = ALL_WEAPONS;
    window.ALL_WEAPONS_LIST = ALL_WEAPONS_LIST;
    window.WEAPONS_LIST_BY_TYPE = WEAPONS_LIST_BY_TYPE;
    // window.WEAPON_TYPES는 constants.js에서 이미 등록됨

    // 유틸 함수
    window.getWeaponById = getWeaponById;
    window.getWeaponsByType = getWeaponsByType;
    window.getWeaponsForOperator = getWeaponsForOperator;
}