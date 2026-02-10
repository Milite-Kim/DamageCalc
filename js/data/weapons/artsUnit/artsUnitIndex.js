//DamageCalc\js\data\weapons\artsUnit\artsUnitIndex.js
// 아츠 유닛 무기 통합 export

const chivalricVirtues = window.chivalricVirtuesData || {};
const deliveryGuaranteed = window.deliveryGuaranteedData || {};
const detonationUnit = window.detonationUnitData || {};
const dreamsOfTheStarryBeach = window.dreamsOfTheStarryBeachData || {};
const freedomToProselytize = window.freedomToProselytizeData || {};
const monaihe = window.monaiheData || {};
const oblivion = window.oblivionData || {};
const objArtsIdentifier = window.objArtsIdentifierData || {};
const opusEtchFigure = window.opusEtchFigureData || {};
const stanzaOfMemorials = window.stanzaOfMemorialsData || {};
const wildWanderer = window.wildWandererData || {};


// 아츠 유닛 무기 객체로 export
const ARTSUNIT_WEAPONS = {
    chivalricVirtues,
    deliveryGuaranteed,
    detonationUnit,
    dreamsOfTheStarryBeach,
    freedomToProselytize,
    monaihe,
    oblivion,
    objArtsIdentifier,
    opusEtchFigure,
    stanzaOfMemorials,
    wildWanderer
};

// 배열 형태로도 제공 (UI에서 map 돌릴 때 편함)
const ARTSUNIT_WEAPONS_LIST = Object.values(ARTSUNIT_WEAPONS);

// 브라우저용 추가
if (typeof window !== 'undefined') {
    window.ARTSUNIT_WEAPONS = ARTSUNIT_WEAPONS;
    window.ARTSUNIT_WEAPONS_LIST = ARTSUNIT_WEAPONS_LIST;

    window.chivalricVirtues = chivalricVirtues;
    window.deliveryGuaranteed = deliveryGuaranteed;
    window.detonationUnit = detonationUnit;
    window.dreamsOfTheStarryBeach = dreamsOfTheStarryBeach;
    window.freedomToProselytize = freedomToProselytize;
    window.monaihe = monaihe;
    window.oblivion = oblivion;
    window.objArtsIdentifier = objArtsIdentifier;
    window.opusEtchFigure = opusEtchFigure;
    window.stanzaOfMemorials = stanzaOfMemorials;
    window.wildWanderer = wildWanderer;
}