//DamageCalc\js\data\weapons\handcannon\handcannonIndex.js
// 권총 무기 통합 export

const artzyTyrannical = window.artzyTyrannicalData || {};
const clannibal = window.clannibalData || {};
const navigator = window.navigatorData || {};
const objVelocitous = window.objVelocitousData || {};
const opusTheLiving = window.opusTheLivingData || {};
const rationalFarewell = window.rationalFarewellData || {};
const wedge = window.wedgeData || {};

// 권총 무기 객체로 export
const HANDCANNON_WEAPONS = {
    artzyTyrannical,
    clannibal,
    navigator,
    objVelocitous,
    opusTheLiving,
    rationalFarewell,
    wedge
};

// 배열 형태로도 제공 (UI에서 map 돌릴 때 편함)
const HANDCANNON_WEAPONS_LIST = Object.values(HANDCANNON_WEAPONS);


if (typeof window !== 'undefined') {
    window.HANDCANNON_WEAPONS = HANDCANNON_WEAPONS;
    window.HANDCANNON_WEAPONS_LIST = HANDCANNON_WEAPONS_LIST;

    window.artzyTyrannical = artzyTyrannical;
    window.clannibal = clannibal;
    window.navigator = navigator;
    window.objVelocitous = objVelocitous;
    window.opusTheLiving = opusTheLiving;
    window.rationalFarewell = rationalFarewell;
    window.wedge = wedge;
}