// DamageCalc\js\data\weapons\greatsword\greatswordIndex.js
// 양손검 무기 통합 export

const ancientCanal = window.AncientCanalData || {};
const exemplar = window.ExemplarData || {};
const finishingCall = window.FinishingCallData || {};
const formerFinery = window.FormerFineryData || {};
const khravengger = window.KhravenggerData || {};
const objHeavyBurden = window.OBJHeavyBurdenData || {};
const seekerOfDarkLung = window.SeekerOfDarkLungData || {};
const sunderedPrince = window.SunderedPrinceData || {};
const thunderberge = window.ThunderbergeData || {};

// 양손검 무기 객체로 export
const GREATSWORD_WEAPONS = {
    ancientCanal,
    exemplar,
    finishingCall,
    formerFinery,
    khravengger,
    objHeavyBurden,
    seekerOfDarkLung,
    sunderedPrince,
    thunderberge
};

// 배열 형태로도 제공 (UI에서 map 돌릴 때 편함)
const GREATSWORD_WEAPONS_LIST = Object.values(GREATSWORD_WEAPONS);

// 브라우저용 추가
if (typeof window !== 'undefined') {
    window.GREATSWORD_WEAPONS = GREATSWORD_WEAPONS;
    window.GREATSWORD_WEAPONS_LIST = GREATSWORD_WEAPONS_LIST;

    window.ancientCanal = ancientCanal;
    window.exemplar = exemplar;
    window.finishingCall = finishingCall;
    window.formerFinery = formerFinery;
    window.khravengger = khravengger;
    window.objHeavyBurden = objHeavyBurden;
    window.seekerOfDarkLung = seekerOfDarkLung;
    window.sunderedPrince = sunderedPrince;
    window.thunderberge = thunderberge;
}