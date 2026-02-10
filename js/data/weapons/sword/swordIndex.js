//DamageCalc\js\data\weapons\sword\swordIndex.js
// 한손검 무기 통합 export

//const aspirant = window.aspirantData || {};
//const eminentRepute = window.eminentReputeData || {};
//const finchaserV3 = window.finchaserV3Data || {};
const forgebornScathe = window.ForgebornScatheData || {};
//const fortmaker = window.fortmakerData || {};
//const grandVision = window.grandVisionData || {};
//const neverRest = window.neverRestData || {};
//const objEdgeOfLight = window.objEdgeOfLightData || {};
//const rapidAscent = window.rapidAscentData || {};
//const sunderingSteel = window.sunderingSteelData || {};
const thermiteCutter = window.ThermiteCutterData || {};
//const twelveQuestions = window.twelveQuestionsData || {};
//const umbralTorch = window.umbralTorchData || {};
//const whiteNightNova = window.whiteNightNovaData || {};

// 한손검 무기 객체로 export
const SWORD_WEAPONS = {
    //aspirant,
    //eminent_repute,
    //finchaserV3,
    forgeborn_scathe: forgebornScathe,
    //fortmaker,
    //grand_vision,
    //never_rest,
    //obj_Edge_of_light,
    //rapid_ascent,
    //sundering_steel,
    thermite_cutter: thermiteCutter//,
    //twelve_questions,
    //umbral_torch,
    //white_night_nova
};

// 배열 형태로도 제공 (UI에서 map 돌릴 때 편함)
const SWORD_WEAPONS_LIST = Object.values(SWORD_WEAPONS);


// 브라우저용 전역 변수 등록
if (typeof window !== 'undefined') {
    window.SWORD_WEAPONS = SWORD_WEAPONS;
    window.SWORD_WEAPONS_LIST = SWORD_WEAPONS_LIST;
    // 개별 export도 제공

    //window.aspirant = aspirant;
    //window.eminentRepute = eminentRepute;
    //window.finchaserV3 = finchaserV3;
    window.forgebornScathe = forgebornScathe;
    //window.fortmaker = fortmaker;
    //window.grandVision = grandVision;
    //window.neverRest = neverRest;
    //window.objEdgeOfLight = objEdgeOfLight;
    //window.rapidAscent = rapidAscent;
    //window.sunderingSteel = sunderingSteel;
    window.thermiteCutter = thermiteCutter;
    //window.twelveQuestions = twelveQuestions;
    //window.umbralTorch = umbralTorch;
    //window.whiteNightNova = whiteNightNova;
}