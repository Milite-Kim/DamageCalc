//DamageCalc\js\data\constants.js

// ===== 기초 스탯 =====
const BASE_STATS = {
  OPERATOR_ATK: "operatorAtk",     // 오퍼레이터 기초 공격력
  WEAPON_ATK: "weaponAtk",         // 무기 기초 공격력

  STRENGTH: "strength",            // 힘 스탯
  AGILITY: "agility",              // 민첩 스탯
  INTELLECT: "intellect",          // 지능 스탯
  WILL: "will"                     // 의지 스탯
};

// ===== 공격력 증가 옵션 =====
const ATK_MODIFIERS = {
  ATK_INCREASE: "atkIncrease",             // 공격력 % 증가 옵션
  MAJOR_STAT_ATK: "majorStatAtkIncrease",  // 주 스탯에 의한 공격력 증가
  MINOR_STAT_ATK: "minorStatAtkIncrease",  // 부 스탯에 의한 공격력 증가
  FLAT_ATK: "flatAtk"                      // 고정 공격력 증가 옵션
};

// ===== 치명타 =====
const CRIT_STATS = {
  CRITICAL_RATE: "criticalRate",       // 치명타 확률 (기본 5%)
  CRITICAL_DAMAGE: "criticalDamage"    // 치명타 피해 (기본 50%)
};

// ===== 피해 증가 =====
const DAMAGE_INCREASE = {
  // 범용
  ALL_DAMAGE: "allDamageIncrease",              // 모든 피해 증가

  // 공격 타입별
  BASIC_ATTACK: "basicAttackDamageIncrease",    // 일반 공격 피해 증가
  HEAVY_STRIKE: "heavyStrikeDamageIncrease",    // 강력한 일격 피해 증가
  BATTLE_SKILL: "battleSkillDamageIncrease",    // 배틀 스킬 피해 증가
  LINKED_SKILL: "linkedSkillDamageIncrease",    // 연계 스킬 피해 증가
  ULTIMATE: "ultimateDamageIncrease",           // 궁극기 피해 증가

  // 속성별
  ARTS: "artsDamageIncrease",                   // 아츠 피해 증가
  HEAT: "heatDamageIncrease",                   // 열기 속성 피해 증가
  ELECTRIC: "electricDamageIncrease",           // 전기 속성 피해 증가
  CRYO: "cryoDamageIncrease",                   // 냉기 속성 피해 증가
  NATURE: "natureDamageIncrease",               // 자연 속성 피해 증가
  PHYSICAL: "physicalDamageIncrease"            // 물리 속성 피해 증가
};

// ===== 저항 관련 =====
const RESISTANCE_MODIFIERS = {
  // 저항 무시
  RESISTANCE_IGNORE: "resistanceIgnore",              // 범용 저항 무시
  HEAT_RES_IGNORE: "heatResistanceIgnore",           // 열기 저항 무시
  ELECTRIC_RES_IGNORE: "electricResistanceIgnore",   // 전기 저항 무시
  CRYO_RES_IGNORE: "cryoResistanceIgnore",          // 냉기 저항 무시
  NATURE_RES_IGNORE: "natureResistanceIgnore",       // 자연 저항 무시
  PHYSICAL_RES_IGNORE: "physicalResistanceIgnore",   // 물리 저항 무시

  // 저항 감소 (디버프)
  RESISTANCE_REDUCTION: "resistanceReduction",       // 범용 저항 감소
  HEAT_RES_REDUCTION: "heatResistanceReduction",     // 열기 저항 감소
  ELECTRIC_RES_REDUCTION: "electricResistanceReduction", // 전기 저항 감소
  CRYO_RES_REDUCTION: "cryoResistanceReduction",     // 냉기 저항 감소
  NATURE_RES_REDUCTION: "natureResistanceReduction", // 자연 저항 감소
  PHYSICAL_RES_REDUCTION: "physicalResistanceReduction" // 물리 저항 감소
};

// ===== 전투 효과 =====
const COMBAT_EFFECTS = {
  // 증폭 (주는 피해 증가)
  AMPLIFY: "amplify",                          // 범용 증폭
  HEAT_AMPLIFY: "heatAmplify",                 // 열기 증폭
  ELECTRIC_AMPLIFY: "electricAmplify",         // 전기 증폭
  CRYO_AMPLIFY: "cryoAmplify",                 // 냉기 증폭
  NATURE_AMPLIFY: "natureAmplify",             // 자연 증폭
  PHYSICAL_AMPLIFY: "physicalAmplify",         // 물리 증폭
  ARTS_AMPLIFY: "artsAmplify",                 // 아츠 증폭

  // 취약 (받는 피해 증가)
  VULNERABILITY: "vulnerability",                      // 범용 취약
  HEAT_VULNERABILITY: "heatVulnerability",             // 열기 취약
  ELECTRIC_VULNERABILITY: "electricVulnerability",     // 전기 취약
  CRYO_VULNERABILITY: "cryoVulnerability",             // 냉기 취약
  NATURE_VULNERABILITY: "natureVulnerability",         // 자연 취약
  PHYSICAL_VULNERABILITY: "physicalVulnerability",     // 물리 취약
  ARTS_VULNERABILITY: "artsVulnerability",             // 아츠 취약

  // 기타
  DAMAGE_TAKEN_INCREASE: "damageTakenIncrease",       // 받는 피해 증가 (취약과 별개)
  LINK_BUFF: "linkBuff"                                // 연타
};

// ===== 특수 효과 =====
const SPECIAL_EFFECTS = {
  ARTS_ENHANCE: "artsEnhance"           // 오리지늄 아츠 강도
};

// ===== 공격 타입 =====
const ATTACK_TYPES = {
  BASIC_ATTACK: "basicAttack",     // 일반 공격
  HEAVY_STRIKE: "heavyStrike",     // 강력한 일격
  BATTLE_SKILL: "battleSkill",     // 배틀 스킬
  LINKED_SKILL: "linkedSkill",     // 연계 스킬
  ULTIMATE: "ultimate"             // 궁극기
};

// ===== 속성 타입 =====
const ELEMENT_TYPES = {
  ALL: "all",
  HEAT: "heat",           // 열기
  ELECTRIC: "electric",   // 전기
  CRYO: "cryo",          // 냉기
  NATURE: "nature",      // 자연
  PHYSICAL: "physical"   // 물리
};

// ===== 저항 타입 =====
const RESISTANCE_TYPES = {
  PHYSICAL: "physical",        // 물리 저항
  ARTS: "arts",               // 아츠 저항 (통합)
  HEAT: "heat",               // 열기 저항
  ELECTRIC: "electric",       // 전기 저항
  CRYO: "cryo",              // 냉기 저항
  NATURE: "nature",           // 자연 저항
  SUPERNATURAL: "supernatural" // 초자연 저항
};

// ===== 대상 타입 =====
const TARGET_TYPES = {
  SELF: "self",       // 자신
  TEAM: "team",       // 팀 전체 (자신 포함)
  ALLIES: "allies",   // 아군 (자신 제외)
  ENEMY: "enemy"      // 적
};

// ===== 기본값 =====
const DEFAULT_VALUES = {
  CRITICAL_RATE: 5,          // 기본 치명타 확률 5%
  CRITICAL_DAMAGE: 50,       // 기본 치명타 피해 50%
  MAJOR_STAT_RATIO: 0.5,     // 주 스탯 → 공격력 변환 비율 50%
  MINOR_STAT_RATIO: 0.25,    // 부 스탯 → 공격력 변환 비율 25%
  ENEMY_DEFENSE: 100,        // 몬스터의 기본 방어력
  OPERATOR_LEVEL: 90         // 기본 오퍼레이터 레벨
};

// ===== 무기 타입 =====
const WEAPON_TYPES = {
  SWORD: "sword",              // 한손검
  GREATSWORD: "greatsword",    // 양손검
  HANDCANNON: "handcannon",    // 권총
  ARTS_UNIT: "artsUnit",       // 아츠 유닛
  POLEARM: "polearm"           // 장병기
};

// ===== 물리 이상 상태 =====
const PHYSICAL_DEBUFFS = {
  DEFENSELESS: "defenseless",      // 방어불능 (최대 4스택)
  KNOCKDOWN: "knockdown",           // 넘어뜨리기
  LAUNCH: "launch",                 // 띄우기
  ARMOR_BREAK: "armorBreak",        // 갑옷 파괴
  HEAVY_ATTACK: "heavyAttack"       // 강타
};

// ===== 물리 이상 효과 기본 배율 (%) =====
const PHYSICAL_DEBUFF_MULTIPLIERS = {
  LAUNCH: 120,                      // 띄우기 120%
  KNOCKDOWN: 120,                   // 넘어뜨리기 120%
  ARMOR_BREAK_BASE: 50,            // 갑옷 파괴 기본 50%
  ARMOR_BREAK_PER_STACK: 50,       // 갑옷 파괴 스택당 50%
  HEAVY_ATTACK_BASE: 150,           // 강타 기본 150%
  HEAVY_ATTACK_PER_STACK: 150       // 강타 스택당 150%
};

// ===== 갑옷 파괴 효과 (스택별) =====
const ARMOR_BREAK_EFFECTS = {
  PHYSICAL_DAMAGE_TAKEN: [12, 16, 20, 24],  // 받는 물리 피해 증가 % (등급 1~4)
  DURATION: [12, 18, 24, 30]                 // 지속 시간 (초)
};

// ===== 아츠 이상 상태 =====
const ARTS_DEBUFFS = {
  ELECTROCUTE: "electrocute",   // 감전
  CORROSION: "corrosion",       // 부식
  BURN: "burn",                 // 연소
  FREEZE: "freeze",             // 동결
  SHATTER: "shatter",           // 쇄빙
  ARTS_EXPLOSION: "artsExplosion" // 아츠 폭발
};

// ===== 아츠 이상 효과 기본 배율 (%) =====
const ARTS_DEBUFF_MULTIPLIERS = {
  ELECTROCUTE_BASE: 80,         // 감전 기본 80%
  ELECTROCUTE_PER_STACK: 80,    // 감전 스택당 80%
  CORROSION_BASE: 80,           // 부식 기본 80%
  CORROSION_PER_STACK: 80,      // 부식 스택당 80%
  BURN_BASE: 80,                // 연소 기본 80%
  BURN_PER_STACK: 80,           // 연소 스택당 80%
  BURN_DOT_BASE: 12,            // 연소 DoT 기본 12%
  BURN_DOT_PER_STACK: 12,       // 연소 DoT 스택당 12%
  FREEZE: 130,                  // 동결 130% (고정)
  SHATTER_BASE: 120,            // 쇄빙 기본 120%
  SHATTER_PER_STACK: 120,       // 쇄빙 스택당 120%
  ARTS_EXPLOSION: 160           // 아츠 폭발 160% (고정)
};

// ===== 감전 추가 효과 =====
const ELECTROCUTE_EFFECTS = {
  ARTS_DAMAGE_TAKEN: [12, 16, 20, 24],  // 받는 아츠 피해 증가 % (등급 1~4)
  DURATION: [12, 18, 24, 30]             // 지속 시간 (초)
};

// ===== 부식 추가 효과 =====
const CORROSION_EFFECTS = {
  INITIAL_RES_REDUCTION: [3.6, 4.8, 6, 7.2],      // 초기 저항 감소 (포인트)
  PER_SECOND_REDUCTION: [0.84, 1.12, 1.4, 1.68],  // 매초 저항 감소 (포인트)
  MAX_RES_REDUCTION: [12, 16, 20, 24],            // 최대 저항 감소 (포인트)
  DURATION: 15                                     // 지속 시간 (초)
};

// ===== 연소 효과 =====
const BURN_EFFECTS = {
  DURATION: 10  // 지속 시간 (초)
};

// ===== 동결 효과 =====
const FREEZE_EFFECTS = {
  DURATION: [6, 7, 8, 9]  // 지속 시간 (초, 등급 1~4)
};

// ===== 연타 (Link Buff) =====
const LINK_BUFF = {
  BATTLE_SKILL_STACKS: [30, 45, 60, 75],  // 배틀 스킬 증가량 % (스택 1~4)
  ULTIMATE_STACKS: [20, 30, 40, 50],      // 궁극기 증가량 % (스택 1~4)
  MAX_STACKS: 4,                          // 최대 스택
  CURRENT_MAX: 1                          // 현재 게임에서는 1스택만 가능
};

// ===== 레벨 계수 =====
const LEVEL_COEFFICIENT = {
  NORMAL: 0,              // 일반 대미지 (영향 없음)
  ARTS_ABNORMAL: 196,     // 아츠 이상 & 폭발: (레벨-1)/196
  PHYSICAL_ABNORMAL: 392  // 물리 이상: (레벨-1)/392
};

// ===== 아츠 강도 =====
const ARTS_INTENSITY = {
  DAMAGE_PER_POINT: 1,         // 1포인트당 1% 피해 증가
  BONUS_EFFECT_DIVISOR: 300,   // 부가효과 강화: 2×아츠강도/(아츠강도+300)
  IMBALANCE_PER_POINT: 0.5     // 불균형치 증가 % (넘어뜨리기/띄우기)
};

// ===== 아츠 강도 영향 피해 타입 =====
// 오리지늄 아츠 강도 1당 아래 피해 타입들의 피해 1% 증가
const ARTS_ENHANCE_RATIO = 0.01;  // 1% per 1 아츠 강도

const ARTS_DAMAGE_TYPES = [
  "heavyAttack",      // 강타
  "burn",             // 연소
  "freeze",           // 동결
  "shatter",          // 쇄빙
  "artsExplosion",    // 아츠 폭발
  "armorBreak",       // 갑옷 파괴
  "electrocute",      // 감전
  "corrosion",        // 부식
  "launch",           // 띄우기
  "knockdown"         // 넘어뜨리기
];

// ===== 디버프 타입 매핑 =====
// 스킬에서 appliesDebuff.type과 실제 효과를 연결
const DEBUFF_TYPE_MAPPING = {
  // 취약 디버프
  "physicalVulnerability": {
    effect: "physicalVulnerability",
    category: "vulnerability",
    element: "physical"
  },
  "heatVulnerability": {
    effect: "heatVulnerability",
    category: "vulnerability",
    element: "heat"
  },
  "electricVulnerability": {
    effect: "electricVulnerability",
    category: "vulnerability",
    element: "electric"
  },
  "cryoVulnerability": {
    effect: "cryoVulnerability",
    category: "vulnerability",
    element: "cryo"
  },
  "natureVulnerability": {
    effect: "natureVulnerability",
    category: "vulnerability",
    element: "nature"
  },
  "artsVulnerability": {
    effect: "artsVulnerability",
    category: "vulnerability",
    element: "arts"
  },

  // 저항 감소 디버프
  "resistanceReduction": {
    effect: "resistanceReduction",
    category: "resistance",
    element: "all"
  },
  "heatResistanceReduction": {
    effect: "heatResistanceReduction",
    category: "resistance",
    element: "heat"
  },
  "physicalResistanceReduction": {
    effect: "physicalResistanceReduction",
    category: "resistance",
    element: "physical"
  }
  // 필요시 추가 가능
};

// ===== 무기 3옵 키워드 =====
const WEAPON_KEYWORDS = {
  STRONG_ATTACK: "강공",    // 강공
  SUPPRESS: "억제",         // 억제
  PURSUIT: "추격",          // 추격
  CRUSH: "분쇄",           // 분쇄
  MORALE: "사기",          // 사기
  SKILL: "기예",           // 기예
  CRUEL: "잔혹",           // 잔혹
  PAIN: "고통",            // 고통
  MEDICAL: "의료",         // 의료
  FRACTURE: "골절",        // 골절
  RELEASE: "방출",         // 방출
  DARKNESS: "어둠",        // 어둠
  FLOW: "흐름",            // 흐름
  EFFICIENCY: "효율"       // 효율
};

// ===== 키워드별 기본 스택 규칙 (예시) =====
const KEYWORD_STACK_RULES = {
  "강공": { rule: "stack", maxStacks: 3 },
  "억제": { rule: "unique", maxStacks: 1 },
  "추격": { rule: "stack", maxStacks: 2 },
  "분쇄": { rule: "stack", maxStacks: 3 },
  "사기": { rule: "stack", maxStacks: 4 },
  "기예": { rule: "unique", maxStacks: 1 },
  "잔혹": { rule: "stack", maxStacks: 2 },
  "고통": { rule: "unique", maxStacks: 1 },
  "의료": { rule: "stack", maxStacks: 3 },
  "골절": { rule: "stack", maxStacks: 2 },
  "방출": { rule: "stack", maxStacks: 3 },
  "어둠": { rule: "unique", maxStacks: 1 },
  "흐름": { rule: "stack", maxStacks: 2 },
  "효율": { rule: "stack", maxStacks: 3 }
};


// ===== 유틸리티 스탯 =====
const UTILITY_STATS = {
  ULTIMATE_CHARGE: "ultimateChargeEfficiency",  // 궁극기 충전 효율
  HEAL_EFFICIENCY: "healEfficiency",            // 치유 효율
  HP_INCREASE: "hpIncrease",                    // 생명력 증가
  DAMAGE_REDUCTION: "damageReduction"           // 받는 피해 감소
};

// ===== 데미지 계산 공식 참조 =====
/*
최종 데미지 계산 공식:

일반 데미지 = 기초대미지 × 치명타 × 피해증가 × 증폭 × 취약 × 받는피해증가 
            × 방어 × 저항 × 연타

이상 데미지 = 기초대미지 × 치명타 × 피해증가 × 증폭 × 취약 × 받는피해증가 
            × 방어 × 저항 × 레벨계수 × 아츠강도


세부 계산식:

1. 공격력 = [(오퍼기초공격력 + 무기기초공격력) × (1 + 공격력%보너스/100) + 고정공격력]
           × (1 + 주요스탯 × 0.5 + 보조스탯 × 0.25)

2. 기초대미지 = 공격력 × 스킬배율(%)

3. 치명타 = 1 + 치명타피해(%) [치명타 발생 시]
          = 1 [미발생 시]
   치명타기댓값 = 1 + 치명타확률 × 치명타피해

4. 피해증가 = 1 + Σ(속성피해보너스 + 스킬피해보너스 + 기타피해보너스)

5. 증폭 = 1 + Σ증폭효과
   - 속성별 증폭 (열기 증폭, 물리 증폭 등)
   - 범용 증폭

6. 취약 = 1 + Σ취약효과
   - 속성별 취약 (열기 취약, 물리 취약 등)
   - 범용 취약

7. 받는피해증가 = 1 + Σ받는피해증가량

8. 방어 = 100 / (유효방어 + 100)

9. 저항 = 1 - (저항 - 저항무시 - 저항감소) / 100
   - 속성별 저항 무시 (열기 저항 무시, 물리 저항 무시 등)
   - 속성별 저항 감소 (디버프)

10. 연타 = 1 + 연타피해증가
    - 배틀스킬: [30%, 45%, 60%, 75%] (스택 1~4)
    - 궁극기: [20%, 30%, 40%, 50%] (스택 1~4)

11. 레벨계수 = 1 + (오퍼레이터레벨 - 1) / 196  [아츠 이상 & 폭발]
            = 1 + (오퍼레이터레벨 - 1) / 392  [물리 이상]
            = 1 [일반 데미지]

12. 아츠강도 = 1 + 아츠강도 / 100
    부가효과강화 = 2 × 아츠강도 / (아츠강도 + 300)
*/

// Export (ES6 모듈 방식)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BASE_STATS,
    ATK_MODIFIERS,
    CRIT_STATS,
    DAMAGE_INCREASE,
    RESISTANCE_MODIFIERS,
    COMBAT_EFFECTS,
    SPECIAL_EFFECTS,
    ATTACK_TYPES,
    ELEMENT_TYPES,
    RESISTANCE_TYPES,
    TARGET_TYPES,
    DEFAULT_VALUES,
    WEAPON_TYPES,
    PHYSICAL_DEBUFFS,
    PHYSICAL_DEBUFF_MULTIPLIERS,
    ARMOR_BREAK_EFFECTS,
    ARTS_DEBUFFS,
    ARTS_DEBUFF_MULTIPLIERS,
    ELECTROCUTE_EFFECTS,
    CORROSION_EFFECTS,
    BURN_EFFECTS,
    FREEZE_EFFECTS,
    LINK_BUFF,
    LEVEL_COEFFICIENT,
    ARTS_INTENSITY,
    ARTS_ENHANCE_RATIO,
    ARTS_DAMAGE_TYPES,
    DEBUFF_TYPE_MAPPING,
    WEAPON_KEYWORDS,
    KEYWORD_STACK_RULES,
    UTILITY_STATS
  };
}

// 브라우저용 전역 변수 등록
if (typeof window !== 'undefined') {
  window.BASE_STATS = BASE_STATS;
  window.ATK_MODIFIERS = ATK_MODIFIERS;
  window.CRIT_STATS = CRIT_STATS;
  window.DAMAGE_INCREASE = DAMAGE_INCREASE;
  window.RESISTANCE_MODIFIERS = RESISTANCE_MODIFIERS;
  window.COMBAT_EFFECTS = COMBAT_EFFECTS;
  window.SPECIAL_EFFECTS = SPECIAL_EFFECTS;
  window.ATTACK_TYPES = ATTACK_TYPES;
  window.ELEMENT_TYPES = ELEMENT_TYPES;
  window.RESISTANCE_TYPES = RESISTANCE_TYPES;
  window.TARGET_TYPES = TARGET_TYPES;
  window.DEFAULT_VALUES = DEFAULT_VALUES;
  window.WEAPON_TYPES = WEAPON_TYPES;
  window.PHYSICAL_DEBUFFS = PHYSICAL_DEBUFFS;
  window.PHYSICAL_DEBUFF_MULTIPLIERS = PHYSICAL_DEBUFF_MULTIPLIERS;
  window.ARMOR_BREAK_EFFECTS = ARMOR_BREAK_EFFECTS;
  window.ARTS_DEBUFFS = ARTS_DEBUFFS;
  window.ARTS_DEBUFF_MULTIPLIERS = ARTS_DEBUFF_MULTIPLIERS;
  window.ELECTROCUTE_EFFECTS = ELECTROCUTE_EFFECTS;
  window.CORROSION_EFFECTS = CORROSION_EFFECTS;
  window.BURN_EFFECTS = BURN_EFFECTS;
  window.FREEZE_EFFECTS = FREEZE_EFFECTS;
  window.LINK_BUFF = LINK_BUFF;
  window.LEVEL_COEFFICIENT = LEVEL_COEFFICIENT;
  window.ARTS_INTENSITY = ARTS_INTENSITY;
  window.ARTS_ENHANCE_RATIO = ARTS_ENHANCE_RATIO;
  window.ARTS_DAMAGE_TYPES = ARTS_DAMAGE_TYPES;
  window.DEBUFF_TYPE_MAPPING = DEBUFF_TYPE_MAPPING;
  window.WEAPON_KEYWORDS = WEAPON_KEYWORDS;
  window.KEYWORD_STACK_RULES = KEYWORD_STACK_RULES;
  window.UTILITY_STATS = UTILITY_STATS;
}