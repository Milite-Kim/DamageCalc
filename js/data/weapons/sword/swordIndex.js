//DamageCalc\js\data\weapons\sword\swordIndex.js
// 한손검 무기 통합 export

const aspirant = window.AspirantData || {};
const wolfBloodstain = window.WolfBloodstainData || {};
const brilliantMemory = window.BrilliantMemoryData || {};
//const eminentRepute = window.eminentReputeData || {};
const finchaserV3 = window.FinchaserV3Data || {};
const forgebornScathe = window.ForgebornScatheData || {};
const fortmaker = window.FortmakerData || {};
//const grandVision = window.grandVisionData || {};
//const neverRest = window.neverRestData || {};
const objEdgeOfLight = window.OBJEdgeOfLightData || {};
//const rapidAscent = window.rapidAscentData || {};
//const sunderingSteel = window.sunderingSteelData || {};
const thermiteCutter = window.ThermiteCutterData || {};
const twelveQuestions = window.TwelveQuestionsData || {};
//const umbralTorch = window.umbralTorchData || {};
//const whiteNightNova = window.whiteNightNovaData || {};

// 한손검 무기 객체로 export
const SWORD_WEAPONS = {
    aspirant: aspirant,
    wolf_bloodstain: wolfBloodstain,
    brilliant_memory: brilliantMemory,
    //eminent_repute,
    finchaserV3: finchaserV3,
    forgeborn_scathe: forgebornScathe,
    fortmaker: fortmaker,
    //grand_vision,
    //never_rest,
    obj_edge_of_light: objEdgeOfLight,
    //rapid_ascent,
    //sundering_steel,
    thermite_cutter: thermiteCutter,
    twelve_questions: twelveQuestions,
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

    window.aspirant = aspirant;
    window.wolfBloodstain = wolfBloodstain;
    window.brilliantMemory = brilliantMemory;
    //window.eminentRepute = eminentRepute;
    window.finchaserV3 = finchaserV3;
    window.forgebornScathe = forgebornScathe;
    window.fortmaker = fortmaker;
    //window.grandVision = grandVision;
    //window.neverRest = neverRest;
    window.objEdgeOfLight = objEdgeOfLight;
    //window.rapidAscent = rapidAscent;
    //window.sunderingSteel = sunderingSteel;
    window.thermiteCutter = thermiteCutter;
    window.twelveQuestions = twelveQuestions;
    //window.umbralTorch = umbralTorch;
    //window.whiteNightNova = whiteNightNova;
}