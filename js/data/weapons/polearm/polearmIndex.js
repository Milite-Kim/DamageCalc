// DamageCalc\js\data\weapons\polearm\polearmIndex.js
// 장병기 무기 통합 export

//const chimericJustice = window.ChimericJusticeData || {};
//const cohesiveTraction = window.CohesiveTractionData || {};
const jet = window.JETData || {};
//const mountainBearer = window.MountainBearerData || {};
//const objRazorhorn = window.ObjRazorhornData || {};
const valiant = window.ValiantData || {};

// 장병기 무기 객체로 export
const POLEARM_WEAPONS = {
    //chimeric_justice: chimericJustice,
    //cohesive_traction: cohesiveTraction,
    jet: jet,
    //mountain_bearer: mountainBearer,
    //obj_razorhorn: objRazorhorn,
    valiant: valiant
};

// 배열 형태로도 제공 (UI에서 map 돌릴 때 편함)
const POLEARM_WEAPONS_LIST = Object.values(POLEARM_WEAPONS);

//export
if (typeof window !== 'undefined') {
    window.POLEARM_WEAPONS = POLEARM_WEAPONS;
    window.POLEARM_WEAPONS_LIST = POLEARM_WEAPONS_LIST;

    //window.chimericJustice = chimericJustice;
    //window.cohesiveTraction = cohesiveTraction;
    window.jet = jet;
    //window.mountainBearer = mountainBearer;
    //window.objRazorhorn = objRazorhorn;
    window.valiant = valiant;
}