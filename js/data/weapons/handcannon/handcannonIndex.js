//DamageCalc\js\data\weapons\handcannon\handcannonIndex.js
// 권총 무기 통합 export

const artzyTyrannical = window.ArtzyTyrannicalData || {};
//const clannibal = window.ClannibalData || {};
//const navigator = window.NavigatorData || {};
//const objVelocitous = window.ObjVelocitousData || {};
//const opusTheLiving = window.OpusTheLivingData || {};
//const rationalFarewell = window.RationalFarewellData || {};
const wedge = window.WedgeData || {};

// 권총 무기 객체로 export (키는 무기 ID와 일치시킴)
const HANDCANNON_WEAPONS = {
    artzy_tyrannical: artzyTyrannical,
    //clannibal,
    //navigator,
    //obj_velocitous: objVelocitous,
    //opus_the_living: opusTheLiving,
    //rational_farewell: rationalFarewell,
    wedge: wedge
};

// 배열 형태로도 제공 (UI에서 map 돌릴 때 편함)
const HANDCANNON_WEAPONS_LIST = Object.values(HANDCANNON_WEAPONS);


if (typeof window !== 'undefined') {
    window.HANDCANNON_WEAPONS = HANDCANNON_WEAPONS;
    window.HANDCANNON_WEAPONS_LIST = HANDCANNON_WEAPONS_LIST;

    window.artzyTyrannical = artzyTyrannical;
    //window.clannibal = clannibal;
    //window.navigator = navigator;
    //window.objVelocitous = objVelocitous;
    //window.opusTheLiving = opusTheLiving;
    //window.rationalFarewell = rationalFarewell;
    window.wedge = wedge;
}