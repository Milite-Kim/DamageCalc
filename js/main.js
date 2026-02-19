//DamageCalc\js\main.js

// ===== 전역 데이터 구조 =====
const teamComposition = {
    main: {
        operator: null,
        level: 90,
        potentialLevel: 5,
        skillLevels: {
            basicAttack: '9',
            battleSkill: '9',
            linkedSkill: '9',
            ultimate: 'M3'
        },
        weapon: {
            data: null,
            option1Level: 9,
            option2Level: 9,
            option3Level: 9,
            conditions: {}
        },
        equipment: {
            armor: { data: null, forgeLevels: [3, 3, 3] },
            gloves: { data: null, forgeLevels: [3, 3, 3] },
            kit1: { data: null, forgeLevels: [3, 3] },
            kit2: { data: null, forgeLevels: [3, 3] }
        },
        setConditions: {}
    },
    team: [
        {
            operator: null,
            potentialLevel: 5,
            weapon: { data: null, option3Level: 9, conditions: {} },
            equipment: {
                armor: null,
                gloves: null,
                kit1: null,
                kit2: null
            },
            setConditions: {}
        },
        {
            operator: null,
            potentialLevel: 5,
            weapon: { data: null, option3Level: 9, conditions: {} },
            equipment: {
                armor: null,
                gloves: null,
                kit1: null,
                kit2: null
            },
            setConditions: {}
        },
        {
            operator: null,
            potentialLevel: 5,
            weapon: { data: null, option3Level: 9, conditions: {} },
            equipment: {
                armor: null,
                gloves: null,
                kit1: null,
                kit2: null
            },
            setConditions: {}
        }
    ]
};

// 계산 설정
const calculationSettings = {
    skillType: null,
    cycleMode: 'default',  // 사이클 모드 (예: 'normal' / 'ultimate')
    skillConditions: {},    // 스킬 레벨 조건 상태 (예: { frozenEnemy: true })
    enemyDefense: 100,
    enemyResistance: 0,
    enemyStatus: {
        type: 'none',    // 'none' | 'defenseless' | 'heat' | 'cryo' | 'electric' | 'nature'
        stacks: 0        // 0-4
    },
    critMode: 'expected',  // 'expected' | 'noCrit' | 'alwaysCrit'
    critRate: 5,           // 크리티컬 확률 (%) - 기본 5%
    critDamage: 50         // 크리티컬 피해 (%) - 기본 50% (크리 시 1.5배)
};

// 오퍼레이터 데이터
const OPERATORS = {
    endministrator: window.EndministratorData,
    laevatain: window.LaevatainData,
    akekuri: window.AkekuriData,
    lifeng: window.LifengData,
    alesh: window.AleshData,
    antal: window.AntalData,
    catcher: window.CatcherData,
    chenqianyu: window.ChenQianyuData,
    dapan: window.DapanData,
    ember: window.EmberData,
    estella: window.EstellaData
};

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', function () {
    console.log('=== 데이터 로드 확인 ===');
    console.log('OPERATORS:', OPERATORS);
    console.log('WEAPONS_BY_TYPE:', window.WEAPONS_BY_TYPE);
    console.log('EQUIPMENT_BY_TYPE:', window.EQUIPMENT_BY_TYPE);

    initializeSelects();
    setupEventListeners();
});

// ===== 선택 옵션 초기화 =====
function initializeSelects() {
    // 메인 오퍼레이터
    const mainOperatorSelect = document.getElementById('mainOperatorSelect');
    Object.values(OPERATORS).forEach(op => {
        if (op && op.id) {
            const option = document.createElement('option');
            option.value = op.id;
            option.textContent = op.name;
            mainOperatorSelect.appendChild(option);
        }
    });

    // 팀 오퍼레이터
    for (let i = 1; i <= 3; i++) {
        const teamSelect = document.getElementById(`team${i}OperatorSelect`);
        Object.values(OPERATORS).forEach(op => {
            if (op && op.id) {
                const option = document.createElement('option');
                option.value = op.id;
                option.textContent = op.name;
                teamSelect.appendChild(option);
            }
        });
    }

    // 장비 초기화 (메인)
    initializeEquipmentSelects('main');

    // 장비 초기화 (팀)
    for (let i = 1; i <= 3; i++) {
        initializeEquipmentSelects(`team${i}`);
    }
}

// ===== 장비 선택 초기화 =====
function initializeEquipmentSelects(prefix) {
    if (!window.EQUIPMENT_BY_TYPE) {
        console.error('EQUIPMENT_BY_TYPE not loaded');
        return;
    }

    // 방어구
    const armorSelect = document.getElementById(`${prefix}ArmorSelect`);
    const armors = window.EQUIPMENT_BY_TYPE.armor || [];
    armors.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        armorSelect.appendChild(option);
    });

    // 장갑
    const glovesSelect = document.getElementById(`${prefix}GlovesSelect`);
    const gloves = window.EQUIPMENT_BY_TYPE.gloves || [];
    gloves.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        glovesSelect.appendChild(option);
    });

    // 부품
    const kits = window.EQUIPMENT_BY_TYPE.kit || [];
    [`${prefix}Kit1Select`, `${prefix}Kit2Select`].forEach(selectId => {
        const select = document.getElementById(selectId);
        kits.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            select.appendChild(option);
        });
    });
}

// ===== 이벤트 리스너 설정 =====
function setupEventListeners() {
    // 메인 오퍼레이터
    document.getElementById('mainOperatorSelect').addEventListener('change', onMainOperatorChange);
    document.getElementById('mainOperatorLevel').addEventListener('change', updateMainOperatorLevel);
    document.getElementById('mainPotentialLevel').addEventListener('change', updateMainPotentialLevel);

    // 메인 스킬 레벨
    document.getElementById('mainBasicAttackLevel').addEventListener('change', updateMainSkillLevel);
    document.getElementById('mainBattleSkillLevel').addEventListener('change', updateMainSkillLevel);
    document.getElementById('mainLinkedSkillLevel').addEventListener('change', updateMainSkillLevel);
    document.getElementById('mainUltimateLevel').addEventListener('change', updateMainSkillLevel);

    // 메인 무기
    document.getElementById('mainWeaponSelect').addEventListener('change', onMainWeaponChange);
    document.getElementById('mainWeaponOpt1Level').addEventListener('change', updateMainWeaponOptions);
    document.getElementById('mainWeaponOpt2Level').addEventListener('change', updateMainWeaponOptions);
    document.getElementById('mainWeaponOpt3Level').addEventListener('change', updateMainWeaponOptions);

    // 메인 장비
    ['Armor', 'Gloves', 'Kit1', 'Kit2'].forEach((type, index) => {
        document.getElementById(`main${type}Select`).addEventListener('change', () => onMainEquipmentChange(type, index));
    });

    // 팀 오퍼레이터
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`team${i}OperatorSelect`).addEventListener('change', (e) => onTeamOperatorChange(i - 1, e));
        document.getElementById(`team${i}PotentialLevel`).addEventListener('change', (e) => updateTeamPotentialLevel(i - 1, e));
        document.getElementById(`team${i}WeaponSelect`).addEventListener('change', (e) => onTeamWeaponChange(i - 1, e));
        document.getElementById(`team${i}WeaponOpt3Level`).addEventListener('change', (e) => updateTeamWeaponOption(i - 1, e));

        // 팀 장비
        ['Armor', 'Gloves', 'Kit1', 'Kit2'].forEach(type => {
            document.getElementById(`team${i}${type}Select`).addEventListener('change', (e) => onTeamEquipmentChange(i - 1, type, e));
        });
    }

    // 계산 설정
    document.getElementById('calcSkillType').addEventListener('change', onCalcSkillTypeChange);
    document.getElementById('enemyDefense').addEventListener('change', updateEnemyStats);
    document.getElementById('enemyResistance').addEventListener('change', updateEnemyStats);
    document.getElementById('enemyStatusType').addEventListener('change', (e) => {
        calculationSettings.enemyStatus.type = e.target.value;
    });
    document.getElementById('enemyStatusStacks').addEventListener('change', (e) => {
        calculationSettings.enemyStatus.stacks = parseInt(e.target.value);
    });

    // 크리티컬 설정
    document.getElementById('critMode').addEventListener('change', (e) => {
        calculationSettings.critMode = e.target.value;
    });
    document.getElementById('critRate').addEventListener('change', (e) => {
        calculationSettings.critRate = parseFloat(e.target.value) || 0;
    });
    document.getElementById('critDamage').addEventListener('change', (e) => {
        calculationSettings.critDamage = parseFloat(e.target.value) || 0;
    });

    // 계산 버튼
    document.getElementById('calculateBtn').addEventListener('click', calculateDamage);
}

// ===== 메인 오퍼레이터 변경 =====
function onMainOperatorChange(e) {
    const operatorId = e.target.value;
    if (!operatorId) {
        teamComposition.main.operator = null;
        document.getElementById('mainWeaponSelect').innerHTML = '<option value="">-- 오퍼레이터를 먼저 선택하세요 --</option>';
        return;
    }

    teamComposition.main.operator = OPERATORS[operatorId];
    console.log('메인 오퍼레이터 선택:', teamComposition.main.operator.name);

    // 무기 목록 로드
    loadWeaponsForOperator('main', teamComposition.main.operator);
}

function updateMainOperatorLevel(e) {
    teamComposition.main.level = parseInt(e.target.value);
}

function updateMainPotentialLevel(e) {
    teamComposition.main.potentialLevel = parseInt(e.target.value);
}

function updateMainSkillLevel(e) {
    const skillType = e.target.id.replace('main', '').replace('Level', '');
    const skillKey = skillType.charAt(0).toLowerCase() + skillType.slice(1);
    teamComposition.main.skillLevels[skillKey] = e.target.value;
}

// ===== 무기 로드 =====
function loadWeaponsForOperator(prefix, operator) {
    const weaponSelect = document.getElementById(`${prefix}WeaponSelect`);
    weaponSelect.innerHTML = '<option value="">-- 선택하세요 --</option>';

    if (!window.WEAPONS_BY_TYPE) {
        console.error('WEAPONS_BY_TYPE not loaded');
        return;
    }

    const weaponType = operator.weaponType;
    const weapons = window.WEAPONS_BY_TYPE[weaponType] || {};

    Object.values(weapons).forEach(weapon => {
        if (weapon && weapon.id) {
            const option = document.createElement('option');
            option.value = weapon.id;
            option.textContent = `${weapon.name} (${weapon.weaponAtk})`;
            weaponSelect.appendChild(option);
        }
    });
}

// ===== 메인 무기 변경 =====
function onMainWeaponChange(e) {
    const weaponId = e.target.value;
    if (!weaponId) {
        teamComposition.main.weapon.data = null;
        document.getElementById('mainWeaponOptions').style.display = 'none';
        return;
    }

    const weaponType = teamComposition.main.operator.weaponType;
    const weapon = window.WEAPONS_BY_TYPE[weaponType][weaponId];
    teamComposition.main.weapon.data = weapon;

    displayMainWeaponOptions(weapon);
}

function displayMainWeaponOptions(weapon) {
    // 옵션 이름 표시
    const opt1 = window.OPTION1_POOL[weapon.option1];
    const opt2 = window.OPTION2_POOL[weapon.option2];

    document.getElementById('mainWeaponOpt1Name').textContent = opt1 ? opt1.name : '';
    document.getElementById('mainWeaponOpt2Name').textContent = opt2 ? opt2.name : '';
    document.getElementById('mainWeaponOpt3Name').textContent = weapon.option3.name;

    // 조건부 효과 체크박스
    displayWeaponConditions('main', weapon);

    document.getElementById('mainWeaponOptions').style.display = 'block';
}

function displayWeaponConditions(prefix, weapon) {
    const container = document.getElementById(`${prefix}WeaponConditions`);
    container.innerHTML = '';

    if (!weapon.option3.keywordEffect || !weapon.option3.keywordEffect.conditions) {
        return;
    }

    const effect = weapon.option3.keywordEffect;
    if (effect.conditions.userToggleable) {
        const div = document.createElement('div');
        div.className = 'checkbox-group';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${prefix}WeaponCondition`;
        checkbox.checked = false;
        checkbox.addEventListener('change', (e) => {
            if (prefix === 'main') {
                teamComposition.main.weapon.conditions.active = e.target.checked;
            } else {
                const teamIndex = parseInt(prefix.replace('team', '')) - 1;
                teamComposition.team[teamIndex].weapon.conditions.active = e.target.checked;
            }
        });

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = effect.description;

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    }
}

function updateMainWeaponOptions() {
    teamComposition.main.weapon.option1Level = parseInt(document.getElementById('mainWeaponOpt1Level').value);
    teamComposition.main.weapon.option2Level = parseInt(document.getElementById('mainWeaponOpt2Level').value);
    teamComposition.main.weapon.option3Level = parseInt(document.getElementById('mainWeaponOpt3Level').value);
}

// ===== 메인 장비 변경 =====
// onMainEquipmentChange 함수 수정 (약 355번 줄)
function onMainEquipmentChange(type, index) {
    const equipmentTypes = ['Armor', 'Gloves', 'Kit1', 'Kit2'];
    const equipmentType = equipmentTypes[index];
    const selectId = `main${equipmentType}Select`;
    const itemId = document.getElementById(selectId).value;

    const key = equipmentType.toLowerCase();

    if (!itemId) {
        teamComposition.main.equipment[key].data = null;
        // 옵션 레벨 초기화
        clearForgeLevels('main', equipmentType);
    } else {
        const equipment = window.getEquipmentById(itemId);
        teamComposition.main.equipment[key].data = equipment;

        // 옵션 개수만큼 forgeLevels 배열 초기화
        const optionCount = equipment.options.length;
        teamComposition.main.equipment[key].forgeLevels = new Array(optionCount).fill(3);

        // 옵션 레벨 UI 동적 생성
        displayForgeLevels('main', equipmentType, equipment);
    }

    checkMainSetBonus();
}

// 새 함수: 옵션 레벨 UI 생성
function displayForgeLevels(prefix, equipmentType, equipment) {
    const container = document.getElementById(`${prefix}${equipmentType}Forge`);
    container.innerHTML = ''; // 초기화

    if (!equipment || !equipment.options) {
        return;
    }

    equipment.options.forEach((option, index) => {
        const item = document.createElement('div');
        item.className = 'forge-level-item';

        const label = document.createElement('span');
        label.className = 'option-name';
        label.textContent = option.description || `옵션${index + 1}`;
        label.title = option.description; // 툴팁

        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.max = '3';
        input.value = '3';
        input.id = `${prefix}${equipmentType}Forge${index}`;

        // 이벤트 리스너 등록
        input.addEventListener('change', (e) => {
            updateForgeLevel(prefix, equipmentType, index, parseInt(e.target.value));
        });

        item.appendChild(label);
        item.appendChild(input);
        container.appendChild(item);
    });
}

// 새 함수: 옵션 레벨 초기화
function clearForgeLevels(prefix, equipmentType) {
    const container = document.getElementById(`${prefix}${equipmentType}Forge`);
    container.innerHTML = '';
}

// 새 함수: forgeLevels 업데이트
function updateForgeLevel(prefix, equipmentType, optionIndex, value) {
    const key = equipmentType.toLowerCase();

    if (prefix === 'main') {
        teamComposition.main.equipment[key].forgeLevels[optionIndex] = value;
    } else {
        // 팀원
        const teamNum = parseInt(prefix.replace('team', ''));
        const teamIndex = teamNum - 1;
        teamComposition.team[teamIndex].equipment[key].forgeLevels[optionIndex] = value;
    }

    console.log(`${prefix} ${equipmentType} 옵션${optionIndex + 1}: ${value}`);
}

function checkMainSetBonus() {
    const equippedItems = [
        teamComposition.main.equipment.armor.data,
        teamComposition.main.equipment.gloves.data,
        teamComposition.main.equipment.kit1.data,
        teamComposition.main.equipment.kit2.data
    ];

    const activeSets = window.checkSetBonus(equippedItems);
    displayMainSetBonus(activeSets);
}

function displayMainSetBonus(activeSets) {
    const container = document.getElementById('mainSetBonusContent');
    const conditionsContainer = document.getElementById('mainSetConditions');

    container.innerHTML = '';
    conditionsContainer.innerHTML = '';

    if (Object.keys(activeSets).length === 0) {
        document.getElementById('mainSetBonus').style.display = 'none';
        return;
    }

    document.getElementById('mainSetBonus').style.display = 'block';

    Object.entries(activeSets).forEach(([setId, setData]) => {
        const setInfo = document.createElement('div');
        setInfo.innerHTML = `<strong>${setData.setName}</strong> (${setData.count}/${setData.required}개)<br>`;
        container.appendChild(setInfo);

        if (setData.conditionalEffects) {
            const checkboxGroup = document.createElement('div');
            checkboxGroup.className = 'checkbox-group';

            setData.conditionalEffects.forEach(effect => {
                const div = document.createElement('div');
                div.className = 'checkbox-item';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `mainSet_${setId}_${effect.id}`;
                checkbox.checked = false;
                checkbox.addEventListener('change', (e) => {
                    if (!teamComposition.main.setConditions[setId]) {
                        teamComposition.main.setConditions[setId] = {};
                    }
                    teamComposition.main.setConditions[setId][effect.id] = e.target.checked;
                });

                const label = document.createElement('label');
                label.htmlFor = checkbox.id;
                label.textContent = effect.description;

                div.appendChild(checkbox);
                div.appendChild(label);
                checkboxGroup.appendChild(div);
            });

            conditionsContainer.appendChild(checkboxGroup);
        }
    });
}

// ===== 팀 오퍼레이터 변경 =====
function onTeamOperatorChange(teamIndex, e) {
    const operatorId = e.target.value;
    const teamNum = teamIndex + 1;

    if (!operatorId) {
        teamComposition.team[teamIndex].operator = null;
        return;
    }

    teamComposition.team[teamIndex].operator = OPERATORS[operatorId];
    console.log(`팀원 ${teamNum} 선택:`, teamComposition.team[teamIndex].operator.name);

    // 무기 로드
    loadWeaponsForOperator(`team${teamNum}`, teamComposition.team[teamIndex].operator);
}

function updateTeamPotentialLevel(teamIndex, e) {
    teamComposition.team[teamIndex].potentialLevel = parseInt(e.target.value);
}

function onTeamWeaponChange(teamIndex, e) {
    const weaponId = e.target.value;
    const teamNum = teamIndex + 1;

    if (!weaponId) {
        teamComposition.team[teamIndex].weapon.data = null;
        document.getElementById(`team${teamNum}WeaponOptions`).style.display = 'none';
        return;
    }

    const weaponType = teamComposition.team[teamIndex].operator.weaponType;
    const weapon = window.WEAPONS_BY_TYPE[weaponType][weaponId];
    teamComposition.team[teamIndex].weapon.data = weapon;

    displayWeaponConditions(`team${teamNum}`, weapon);

    document.getElementById(`team${teamNum}WeaponOptions`).style.display = 'block';
}

function updateTeamWeaponOption(teamIndex, e) {
    teamComposition.team[teamIndex].weapon.option3Level = parseInt(e.target.value);
}

function onTeamEquipmentChange(teamIndex, type, e) {
    const itemId = e.target.value;
    const teamNum = teamIndex + 1;

    const typeMap = {
        'Armor': 'armor',
        'Gloves': 'gloves',
        'Kit1': 'kit1',
        'Kit2': 'kit2'
    };
    const key = typeMap[type];

    if (!itemId) {
        teamComposition.team[teamIndex].equipment[key] = null;
        clearForgeLevels(`team${teamNum}`, type);
    } else {
        const equipment = window.getEquipmentById(itemId);

        // 옵션 개수만큼 forgeLevels 배열 초기화
        const optionCount = equipment.options.length;
        teamComposition.team[teamIndex].equipment[key] = {
            data: equipment,
            forgeLevels: new Array(optionCount).fill(3)
        };

        // 옵션 레벨 UI 동적 생성
        displayForgeLevels(`team${teamNum}`, type, equipment);
    }

    checkTeamSetBonus(teamIndex);
}

function checkTeamSetBonus(teamIndex) {
    const teamNum = teamIndex + 1;
    const equippedItems = [
        teamComposition.team[teamIndex].equipment.armor ? teamComposition.team[teamIndex].equipment.armor.data : null,
        teamComposition.team[teamIndex].equipment.gloves ? teamComposition.team[teamIndex].equipment.gloves.data : null,
        teamComposition.team[teamIndex].equipment.kit1 ? teamComposition.team[teamIndex].equipment.kit1.data : null,
        teamComposition.team[teamIndex].equipment.kit2 ? teamComposition.team[teamIndex].equipment.kit2.data : null
    ];

    const activeSets = window.checkSetBonus(equippedItems);
    displayTeamSetBonus(teamNum, activeSets, teamIndex);
}

function displayTeamSetBonus(teamNum, activeSets, teamIndex) {
    const container = document.getElementById(`team${teamNum}SetBonus`);

    // 헤더만 남기고 내용 초기화 (매번 동적 재생성)
    container.innerHTML = '<h4>세트 효과</h4>';

    if (Object.keys(activeSets).length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';

    Object.entries(activeSets).forEach(([setId, setData]) => {
        const setInfo = document.createElement('div');
        setInfo.innerHTML = `<strong>${setData.setName}</strong> 세트 활성`;
        container.appendChild(setInfo);

        if (setData.conditionalEffects) {
            const checkboxGroup = document.createElement('div');
            checkboxGroup.className = 'checkbox-group';

            setData.conditionalEffects.forEach(effect => {
                // 팀 버프만 표시
                if (effect.target === 'team' || effect.target === 'allies') {
                    const div = document.createElement('div');
                    div.className = 'checkbox-item';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.id = `team${teamNum}Set_${setId}_${effect.id}`;
                    checkbox.checked = false;
                    checkbox.addEventListener('change', (e) => {
                        if (!teamComposition.team[teamIndex].setConditions[setId]) {
                            teamComposition.team[teamIndex].setConditions[setId] = {};
                        }
                        teamComposition.team[teamIndex].setConditions[setId][effect.id] = e.target.checked;
                    });

                    const label = document.createElement('label');
                    label.htmlFor = checkbox.id;
                    label.textContent = effect.description;

                    div.appendChild(checkbox);
                    div.appendChild(label);
                    checkboxGroup.appendChild(div);
                }
            });

            container.appendChild(checkboxGroup);
        }
    });
}

// ===== 사이클 자동 감지 =====
// enhance 접두사 유무로 일반/궁극기 모드를 구분, 특수 페이즈(처형·낙하)는 사이클에서 제외
function detectCycles(skill) {
    if (!skill.phases) return null;

    const SPECIAL_PHASES = ['execute', 'plunging'];
    const phaseKeys = Object.keys(skill.phases);

    const basePhases    = phaseKeys.filter(k => !k.startsWith('enhance') && !SPECIAL_PHASES.includes(k));
    const enhancePhases = phaseKeys.filter(k =>  k.startsWith('enhance'));

    if (basePhases.length > 0 && enhancePhases.length > 0) {
        // 일반 페이즈 + 강화 페이즈가 모두 있으면 → 두 사이클
        return {
            normal:  { label: '일반 상태',   phases: basePhases },
            ultimate: { label: '궁극기 상태', phases: enhancePhases }
        };
    } else {
        // 단일 사이클
        const allPhases = enhancePhases.length > 0 ? enhancePhases : basePhases;
        return {
            default: { label: '사이클', phases: allPhases }
        };
    }
}

// ===== 계산 스킬 선택 =====
function onCalcSkillTypeChange(e) {
    const skillType = e.target.value;
    if (!skillType || !teamComposition.main.operator) {
        document.getElementById('calcSkillPhases').style.display = 'none';
        return;
    }

    calculationSettings.skillType = skillType;
    const skill = teamComposition.main.operator.skills[skillType];
    displayCalcCycleOptions(skill);
}

// 사이클 모드 UI 표시 (단일이면 레이블, 복수이면 드롭다운)
function displayCalcCycleOptions(skill) {
    const wrapper  = document.getElementById('calcSkillPhases');
    const container = document.getElementById('calcCycleMode');
    container.innerHTML = '';

    // 스킬 조건 초기화
    calculationSettings.skillConditions = {};

    if (!skill || !skill.phases) {
        wrapper.style.display = 'none';
        return;
    }

    // 스킬 레벨 조건이 있는 경우 (예: 동결 적 상대)
    if (skill.condition) {
        const cond = skill.condition;
        calculationSettings.skillConditions[cond.id] = false;

        const condDiv = document.createElement('div');
        condDiv.className = 'checkbox-group';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `skillCondition_${cond.id}`;
        checkbox.checked = false;
        checkbox.addEventListener('change', (e) => {
            calculationSettings.skillConditions[cond.id] = e.target.checked;
        });

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = cond.checkboxLabel;

        condDiv.appendChild(checkbox);
        condDiv.appendChild(label);
        container.appendChild(condDiv);

        // 조건 스킬은 조건 체크 여부로 페이즈 결정 → 사이클 모드는 'condition'
        calculationSettings.cycleMode = 'condition';
        wrapper.style.display = 'block';
        return;
    }

    const cycles = detectCycles(skill);
    if (!cycles) {
        wrapper.style.display = 'none';
        return;
    }

    const keys = Object.keys(cycles);

    if (keys.length > 1) {
        // 드롭다운
        const select = document.createElement('select');
        select.id = 'cycleSelect';
        keys.forEach(key => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = cycles[key].label;
            select.appendChild(opt);
        });
        select.addEventListener('change', e => {
            calculationSettings.cycleMode = e.target.value;
        });
        container.appendChild(select);
        calculationSettings.cycleMode = keys[0];
    } else {
        // 단일 사이클 — 페이즈 수 표시
        calculationSettings.cycleMode = keys[0];
        const info = document.createElement('span');
        info.className = 'cycle-info-label';
        info.textContent = `${cycles[keys[0]].phases.length}단계 사이클`;
        container.appendChild(info);
    }

    wrapper.style.display = 'block';
}

function updateEnemyStats(e) {
    const id = e.target.id;
    if (id === 'enemyDefense') {
        calculationSettings.enemyDefense = parseInt(e.target.value);
    } else if (id === 'enemyResistance') {
        calculationSettings.enemyResistance = parseInt(e.target.value);
    }
}

// ===== 피해 증가 유형 필터링 헬퍼 =====
function getApplicableDamageTypes(skillElement, phaseType, isBasicAttack) {
    const types = ['allDamageIncrease'];

    // 스킬 타입별 피해 증가
    if (phaseType) {
        types.push(`${phaseType}DamageIncrease`);
    }

    // 강력한 일격이지만 일반 공격 피해 증가도 적용되는 경우
    if (isBasicAttack && phaseType !== 'basicAttack') {
        types.push('basicAttackDamageIncrease');
    }

    // 속성별 피해 증가 (물리 vs 아츠 계층)
    if (skillElement === 'physical') {
        types.push('physicalDamageIncrease');
    } else {
        // 아츠 하위 속성: 아츠 피해 증가 + 개별 속성 피해 증가
        types.push('artsDamageIncrease');
        if (skillElement !== 'arts') {
            types.push(`${skillElement}DamageIncrease`);
        }
    }

    return types;
}

// ===== 크리티컬 배율 계산 =====
function getCritMultiplier() {
    const mode = calculationSettings.critMode;
    const rate = calculationSettings.critRate;
    const damage = calculationSettings.critDamage;

    switch (mode) {
        case 'noCrit':
            return 1.0;
        case 'alwaysCrit':
            return 1 + damage / 100;
        case 'expected':
        default:
            // 기댓값 = 1 + (확률 × 크리피해)
            return 1 + (rate / 100) * (damage / 100);
    }
}

// ===== 이상 데미지 관련 =====

// 이상 데미지를 발생시키는 디버프 타입
const ABNORMAL_DAMAGE_TYPES = [
    'knockdown', 'launch', 'heavyAttack', 'armorBreak',
    'electrocute', 'corrosion', 'burn', 'freeze', 'shatter', 'artsExplosion'
];

// 스택 소모형 디버프 → 필요한 적 상태 타입 매핑 (물리 이상용)
const PHYSICAL_DEBUFF_REQUIRED_STATUS = {
    heavyAttack: 'defenseless',
    armorBreak: 'defenseless',
    shatter: 'cryo'
};

// 아츠 이상 → 해당 속성 매핑 (같은 속성이면 아츠폭발, 다른 속성이면 이상 반응)
const ARTS_ABNORMAL_ELEMENT = {
    burn: 'heat',
    freeze: 'cryo',
    electrocute: 'electric',
    corrosion: 'nature'
};

// 아츠 속성 목록
const ARTS_STATUS_TYPES = ['heat', 'cryo', 'electric', 'nature'];

// 이상 효과 한글명
function getAbnormalName(debuffType) {
    const names = {
        knockdown: '넘어뜨리기', launch: '띄우기',
        heavyAttack: '강타', armorBreak: '갑옷 파괴',
        electrocute: '감전', corrosion: '부식',
        burn: '연소', freeze: '동결',
        shatter: '쇄빙', artsExplosion: '아츠 폭발'
    };
    return names[debuffType] || debuffType;
}

// 스택 축적형 여부 (등급 무관, 고정 배율)
function isStackBuilding(debuffType) {
    return ['knockdown', 'launch', 'artsExplosion'].includes(debuffType);
}

// 아츠 이상 여부 (레벨 계수 판별용)
function isArtsAbnormal(debuffType) {
    return ['electrocute', 'corrosion', 'burn', 'freeze', 'shatter', 'artsExplosion'].includes(debuffType);
}

// 이상 데미지의 속성
function getAbnormalDamageElement(debuffType, skillElement) {
    const map = {
        knockdown: 'physical', launch: 'physical',
        heavyAttack: 'physical', armorBreak: 'physical', shatter: 'physical',
        electrocute: 'electric', corrosion: 'nature',
        burn: 'heat', freeze: 'cryo'
    };
    return map[debuffType] || skillElement || 'physical';
}

// 이상 데미지 배율 (%)
function getAbnormalMultiplier(debuffType, grade) {
    switch (debuffType) {
        // 스택 축적형 (고정 배율)
        case 'knockdown': case 'launch': return 120;
        case 'artsExplosion': return 160;
        // 스택 소모형 (등급 영향): base% × (1 + 등급)
        case 'heavyAttack': return 150 * (1 + grade);
        case 'armorBreak': return 50 * (1 + grade);
        case 'electrocute': case 'corrosion': case 'burn': return 80 * (1 + grade);
        case 'freeze': return 130; // 고정 (등급은 지속시간에만 영향)
        case 'shatter': return 120 * (1 + grade);
        default: return 0;
    }
}

// 연소 DoT 배율 (%)
function getBurnDotMultiplier(grade) {
    return 12 * (1 + grade);
}

// 레벨 계수
function getLevelCoefficient(level, debuffType) {
    if (isArtsAbnormal(debuffType)) {
        return 1 + (level - 1) / LEVEL_COEFFICIENT.ARTS_ABNORMAL;
    } else {
        return 1 + (level - 1) / LEVEL_COEFFICIENT.PHYSICAL_ABNORMAL;
    }
}

// 단일 이상 효과 데미지 계산
function calculateAbnormalDamage(finalAtk, debuffType, grade, teamBuffs, level, artsEnhance, skillElement) {
    const multiplier = getAbnormalMultiplier(debuffType, grade);
    if (multiplier === 0) return null;

    const abnormalElement = getAbnormalDamageElement(debuffType, skillElement);
    const baseDamage = finalAtk * (multiplier / 100);
    const critMultiplier = getCritMultiplier();

    // 이상 데미지는 속성 피해 증가 + 전체 피해 증가만 적용 (스킬 타입 피해 증가 미적용)
    const damageIncreaseTotal = calculateTotalDamageIncrease(teamBuffs, abnormalElement, null, false);

    const amplifyMultiplier = 1 + (teamBuffs.amplify / 100);
    const vulnerabilityMultiplier = 1 + (teamBuffs.vulnerability / 100);
    const damageTakenMultiplier = 1 + (teamBuffs.damageTakenIncrease / 100);
    const defenseMultiplier = 100 / (calculationSettings.enemyDefense + 100);
    const effectiveResistance = calculationSettings.enemyResistance - teamBuffs.resistanceIgnore - teamBuffs.resistanceReduction;
    const resistanceMultiplier = 1 - (effectiveResistance / 100);
    const levelCoefficient = getLevelCoefficient(level, debuffType);
    const artsIntensityMultiplier = 1 + artsEnhance / 100;

    const totalDamage = Math.floor(
        baseDamage * critMultiplier * (1 + damageIncreaseTotal / 100) *
        amplifyMultiplier * vulnerabilityMultiplier * damageTakenMultiplier *
        defenseMultiplier * resistanceMultiplier * levelCoefficient * artsIntensityMultiplier
    );

    const result = {
        debuffType,
        element: abnormalElement,
        multiplier,
        grade,
        baseDamage: Math.floor(baseDamage),
        totalDamage,
        levelCoefficient,
        artsIntensityMultiplier,
        isStackBuilding: isStackBuilding(debuffType)
    };

    // 연소 DoT 추가 계산
    if (debuffType === 'burn') {
        const dotMult = getBurnDotMultiplier(grade);
        const dotBase = finalAtk * (dotMult / 100);
        result.dotMultiplier = dotMult;
        result.dotDamagePerSecond = Math.floor(
            dotBase * critMultiplier * (1 + damageIncreaseTotal / 100) *
            amplifyMultiplier * vulnerabilityMultiplier * damageTakenMultiplier *
            defenseMultiplier * resistanceMultiplier * levelCoefficient * artsIntensityMultiplier
        );
    }

    return result;
}

// 숫자를 짧은 표기로 (바 차트 내부용)
function formatShort(n) {
    if (n >= 10000) return (n / 1000).toFixed(1) + 'K';
    return n.toLocaleString();
}

// ===== 데미지 계산 =====
function calculateDamage() {
    if (!teamComposition.main.operator) {
        alert('메인 오퍼레이터를 선택하세요.');
        return;
    }
    if (!calculationSettings.skillType) {
        alert('사용할 스킬을 선택하세요.');
        return;
    }

    console.log('=== 데미지 계산 시작 ===');

    // 1. 팀 버프 수집
    const teamBuffs = collectTeamBuffs();
    console.log('수집된 버프:', teamBuffs);

    // 2. 최종 공격력
    const finalAtk = calculateMainOperatorAttack(teamBuffs);
    console.log('최종 공격력:', finalAtk);

    const skill = teamComposition.main.operator.skills[calculationSettings.skillType];
    const skillLevel = teamComposition.main.skillLevels[calculationSettings.skillType];
    const skillElement = skill.element;

    // 3. 현재 사이클의 페이즈 목록 결정
    let phaseKeys;

    if (skill.condition && calculationSettings.cycleMode === 'condition') {
        // 스킬 조건에 따라 페이즈 결정
        const cond = skill.condition;
        const conditionActive = calculationSettings.skillConditions[cond.id] || false;
        phaseKeys = conditionActive ? cond.activePhases : cond.defaultPhases;
    } else {
        const cycles = detectCycles(skill);
        if (!cycles) {
            alert('스킬 단계 정보가 없습니다.');
            return;
        }
        const currentCycle = cycles[calculationSettings.cycleMode] || cycles[Object.keys(cycles)[0]];
        phaseKeys = currentCycle.phases;
    }

    // 4. 공통 배율 (페이즈별로 동일)
    const defenseMultiplier   = 100 / (calculationSettings.enemyDefense + 100);
    const effectiveResistance = calculationSettings.enemyResistance - teamBuffs.resistanceIgnore - teamBuffs.resistanceReduction;
    const resistanceMultiplier = 1 - (effectiveResistance / 100);
    const amplifyMultiplier    = 1 + (teamBuffs.amplify / 100);
    const vulnerabilityMultiplier = 1 + (teamBuffs.vulnerability / 100);
    const damageTakenMultiplier   = 1 + (teamBuffs.damageTakenIncrease / 100);
    const linkBuffMultiplier       = 1 + (teamBuffs.linkBuff / 100);
    const critMultiplier = getCritMultiplier();

    // 5. 페이즈별 데미지 계산
    const phaseResults = [];
    let totalDamage = 0;

    phaseKeys.forEach(phaseKey => {
        const phase = skill.phases[phaseKey];
        const skillMultiplier = phase.multipliers[skillLevel];
        const baseDamage = finalAtk * (skillMultiplier / 100);

        const phaseType = phase.type || skill.type;
        const isBasicAttack = phase.isBasicAttack || false;
        const damageIncreaseTotal = calculateTotalDamageIncrease(teamBuffs, skillElement, phaseType, isBasicAttack);

        const phaseDamage = Math.floor(
            baseDamage * critMultiplier *
            (1 + damageIncreaseTotal / 100) *
            amplifyMultiplier * vulnerabilityMultiplier * damageTakenMultiplier *
            defenseMultiplier * resistanceMultiplier * linkBuffMultiplier
        );

        phaseResults.push({ phaseKey, phaseName: phase.name, skillMultiplier, damageIncreaseTotal, damage: phaseDamage });
        totalDamage += phaseDamage;
    });

    console.log('페이즈별 데미지:', phaseResults);

    // 6. 이상 데미지 계산 + 비이상 appliedEffects 수집
    const abnormalResults = [];
    const appliedDebuffs = []; // 비이상 디버프 정보 표시용
    let artsExplosionTriggered = false; // 같은 속성 재부여로 인한 아츠폭발

    const enemyType = calculationSettings.enemyStatus.type;
    const enemyStacks = calculationSettings.enemyStatus.stacks;

    if (skill.appliedEffects) {
        skill.appliedEffects.forEach(effect => {
            // requireCondition 필터
            if (effect.requireCondition) {
                const conditionActive = calculationSettings.skillConditions[effect.requireCondition] || false;
                if (!conditionActive) return;
            }

            if (effect.type === 'debuff' && ABNORMAL_DAMAGE_TYPES.includes(effect.stat)) {
                let grade;

                if (effect.forced) {
                    // 강제 부여: 항상 등급 1, 적 상태 무관
                    grade = 1;

                } else if (effect.stat === 'knockdown' || effect.stat === 'launch') {
                    // 방어불능 축적형: 적에게 방어불능 스택이 있어야 데미지 발생
                    if (enemyType === 'defenseless' && enemyStacks > 0) {
                        grade = 0; // 고정 배율 120%
                    } else {
                        return; // 0스택 → 데미지 없이 스택만 축적
                    }

                } else if (effect.stat === 'heavyAttack' || effect.stat === 'armorBreak') {
                    // 방어불능 소모형: 방어불능 스택 필요
                    if (enemyType === 'defenseless' && enemyStacks > 0) {
                        grade = enemyStacks;
                    } else {
                        return;
                    }

                } else if (ARTS_ABNORMAL_ELEMENT[effect.stat]) {
                    // 아츠 이상 (감전/부식/연소/동결)
                    const ownElement = ARTS_ABNORMAL_ELEMENT[effect.stat];

                    if (ARTS_STATUS_TYPES.includes(enemyType) && enemyStacks > 0) {
                        if (enemyType === ownElement) {
                            // 같은 속성 → 이 이상은 발동하지 않고, 아츠폭발로 대체
                            artsExplosionTriggered = true;
                            return;
                        } else {
                            // 다른 속성 → 이상 반응 발동, 등급 = 기존 스택
                            grade = enemyStacks;
                        }
                    } else {
                        return; // 아츠 스택 없음
                    }

                } else if (effect.stat === 'shatter') {
                    // 쇄빙: 동결(냉기) 스택 필요
                    if (enemyType === 'cryo' && enemyStacks > 0) {
                        grade = enemyStacks;
                    } else {
                        return;
                    }

                } else if (effect.stat === 'artsExplosion') {
                    // 명시적 아츠폭발 (데이터에 직접 기재된 경우)
                    grade = 0;

                } else {
                    return;
                }

                const abnormalResult = calculateAbnormalDamage(
                    finalAtk, effect.stat, grade, teamBuffs,
                    teamComposition.main.level, teamBuffs.artsEnhance, skillElement
                );
                if (abnormalResult) {
                    abnormalResult.count = effect.count || 1;
                    abnormalResult.totalWithCount = abnormalResult.totalDamage * abnormalResult.count;
                    abnormalResult.forced = effect.forced || false;
                    abnormalResults.push(abnormalResult);
                }
            } else if (effect.type === 'debuff' && !ABNORMAL_DAMAGE_TYPES.includes(effect.stat)) {
                // 비이상 디버프 (물리취약 등) — 정보 표시용
                let effectValue = effect.value;
                if (typeof effectValue === 'object' && effectValue !== null) {
                    effectValue = effectValue[skillLevel] || 0;
                }
                appliedDebuffs.push({
                    stat: effect.stat,
                    value: effectValue,
                    checkboxLabel: effect.checkboxLabel
                });
            }
        });
    }

    // 아츠폭발 자동 판정: 같은 속성 아츠 부착 재부여 시
    if (artsExplosionTriggered) {
        const artsExplosionResult = calculateAbnormalDamage(
            finalAtk, 'artsExplosion', 0, teamBuffs,
            teamComposition.main.level, teamBuffs.artsEnhance, enemyType
        );
        if (artsExplosionResult) {
            artsExplosionResult.count = 1;
            artsExplosionResult.totalWithCount = artsExplosionResult.totalDamage;
            artsExplosionResult.forced = false;
            artsExplosionResult.autoTriggered = true;
            abnormalResults.push(artsExplosionResult);
        }
    }

    console.log('이상 데미지:', abnormalResults);

    // 7. 결과 표시
    displayResult({
        phaseResults,
        totalDamage,
        finalAtk,
        critMultiplier,
        defenseMultiplier,
        resistanceMultiplier,
        abnormalResults,
        appliedDebuffs
    }, teamBuffs);
}

// ===== 버프 수집 (모든 오퍼레이터의 버프를 메인 기준으로 수집) =====
function collectTeamBuffs() {
    const buffs = {
        selfAtkIncrease: 0,      // 메인의 target=self ATK%
        teamAtkIncrease: 0,      // 모든 오퍼의 target=team ATK%
        alliesAtkIncrease: 0,    // 팀원의 target=allies ATK%
        flatAtk: 0,              // 고정 공격력 증가
        damageIncrease: {},      // 피해 증가 (타입별)
        stats: {
            strength: 0,
            agility: 0,
            intellect: 0,
            will: 0
        },
        amplify: 0,
        vulnerability: 0,
        damageTakenIncrease: 0,
        linkBuff: 0,
        resistanceIgnore: 0,
        resistanceReduction: 0,
        artsEnhance: 0           // 오리지늄 아츠 강도
    };

    // 효과를 버프에 적용하는 헬퍼 (메인에게 적용되는 것만)
    function applyEffect(effect, isMain) {
        const target = effect.target || 'self';
        const stat = effect.stat;
        const value = effect.value;

        // 메인에게 적용되는 효과인지 확인
        const appliesToMain =
            (target === 'self' && isMain) ||
            target === 'team' ||
            (target === 'allies' && !isMain);

        if (!appliesToMain) return;

        if (stat === 'atkIncrease') {
            if (target === 'self') buffs.selfAtkIncrease += value;
            else if (target === 'team') buffs.teamAtkIncrease += value;
            else if (target === 'allies') buffs.alliesAtkIncrease += value;
        } else if (stat === 'flatAtk') {
            buffs.flatAtk += value;
        } else if (stat.includes('DamageIncrease') || stat === 'allDamageIncrease') {
            buffs.damageIncrease[stat] = (buffs.damageIncrease[stat] || 0) + value;
        } else if (stat.includes('Amplify') || stat === 'amplify') {
            buffs.amplify += value;
        } else if (stat.includes('Vulnerability') || stat === 'vulnerability') {
            buffs.vulnerability += value;
        } else if (stat === 'damageTakenIncrease') {
            buffs.damageTakenIncrease += value;
        } else if (stat === 'linkBuff') {
            buffs.linkBuff += value;
        } else if (stat.includes('ResistanceIgnore') || stat === 'resistanceIgnore') {
            buffs.resistanceIgnore += value;
        } else if (stat.includes('ResistanceReduction') || stat === 'resistanceReduction') {
            buffs.resistanceReduction += value;
        } else if (stat === 'artsEnhance') {
            buffs.artsEnhance += value;
        } else if (['strength', 'agility', 'intellect', 'will'].includes(stat)) {
            // 팀원 스탯 버프만 (메인 스탯은 calculateMainOperatorAttack에서 처리)
            if (!isMain) {
                buffs.stats[stat] += value;
            }
        }
    }

    // --- 메인 오퍼레이터 처리 ---
    if (teamComposition.main.operator) {
        const main = teamComposition.main;

        // 메인 재능
        main.operator.talents.forEach(talent => {
            if (talent.toggleable || talent.requireActive) {
                // 조건부 재능: setConditions에서 토글 확인
                if (main.setConditions[`talent_${talent.id}`]) {
                    talent.effects.forEach(effect => applyEffect(effect, true));
                }
            } else {
                talent.effects.forEach(effect => applyEffect(effect, true));
            }
        });

        // 메인 잠재 수치
        for (let i = 0; i < main.potentialLevel; i++) {
            const potential = main.operator.potentials[i];
            if (potential.effects) {
                potential.effects.forEach(effect => {
                    if (effect.conditions && effect.conditions.userToggleable) {
                        if (main.setConditions[`potential_${i}_${effect.stat}`]) {
                            applyEffect(effect, true);
                        }
                    } else {
                        applyEffect(effect, true);
                    }
                });
            }
        }

        // 메인 무기 옵션2 (ATK% 증가)
        if (main.weapon.data) {
            const opt2 = window.OPTION2_POOL[main.weapon.data.option2];
            if (opt2 && opt2.stat === 'atkIncrease') {
                buffs.selfAtkIncrease += opt2.values[main.weapon.option2Level];
            }

            // 메인 무기 옵션3
            const opt3 = main.weapon.data.option3;
            if (opt3) {
                if (opt3.personalEffect) {
                    applyEffect({
                        stat: opt3.personalEffect.stat,
                        target: 'self',
                        value: opt3.personalEffect.values[main.weapon.option3Level]
                    }, true);
                }
                if (opt3.keywordEffect && main.weapon.conditions.active) {
                    applyEffect({
                        stat: opt3.keywordEffect.stat,
                        target: opt3.keywordEffect.target || 'self',
                        value: opt3.keywordEffect.values[main.weapon.option3Level]
                    }, true);
                }
            }
        }

        // 메인 장비 옵션 피해 증가
        ['armor', 'gloves', 'kit1', 'kit2'].forEach(key => {
            const equip = main.equipment[key];
            if (!equip || !equip.data) return;
            equip.data.options.forEach((option, optIndex) => {
                const forgeLevel = equip.forgeLevels[optIndex] || 0;
                const value = option.values[forgeLevel];
                if (option.stat.includes('DamageIncrease') || option.stat === 'allDamageIncrease') {
                    buffs.damageIncrease[option.stat] = (buffs.damageIncrease[option.stat] || 0) + value;
                }
            });
        });

        // 메인 장비 세트 보너스
        const mainEquippedItems = [
            main.equipment.armor.data,
            main.equipment.gloves.data,
            main.equipment.kit1.data,
            main.equipment.kit2.data
        ];
        const mainActiveSets = window.checkSetBonus(mainEquippedItems);
        Object.entries(mainActiveSets).forEach(([setId, setData]) => {
            if (setData.baseEffect) {
                applyEffect({
                    stat: setData.baseEffect.stat,
                    target: setData.baseEffect.target || 'self',
                    value: setData.baseEffect.value
                }, true);
            }
            if (setData.conditionalEffects && main.setConditions[setId]) {
                setData.conditionalEffects.forEach(effect => {
                    if (main.setConditions[setId][effect.id]) {
                        applyEffect(effect, true);
                    }
                });
            }
        });
    }

    // --- 팀 오퍼레이터 처리 ---
    teamComposition.team.forEach((member, index) => {
        if (!member.operator) return;

        console.log(`팀원 ${index + 1} 버프 수집:`, member.operator.name);

        // 팀원 재능
        member.operator.talents.forEach(talent => {
            if (!(talent.toggleable || talent.requireActive)) {
                talent.effects.forEach(effect => applyEffect(effect, false));
            }
        });

        // 팀원 잠재 수치
        for (let i = 0; i < member.potentialLevel; i++) {
            const potential = member.operator.potentials[i];
            if (potential.effects) {
                potential.effects.forEach(effect => {
                    if (effect.conditions && effect.conditions.userToggleable) {
                        if (member.setConditions[`potential_${i}_${effect.stat}`]) {
                            applyEffect(effect, false);
                        }
                    } else {
                        applyEffect(effect, false);
                    }
                });
            }
        }

        // 팀원 무기 옵션3 팀 버프
        if (member.weapon.data && member.weapon.data.option3) {
            const opt3 = member.weapon.data.option3;
            if (opt3.keywordEffect && member.weapon.conditions.active) {
                applyEffect({
                    stat: opt3.keywordEffect.stat,
                    target: opt3.keywordEffect.target || 'self',
                    value: opt3.keywordEffect.values[member.weapon.option3Level]
                }, false);
            }
        }

        // 팀원 장비 세트 버프
        const equippedItems = [
            member.equipment.armor ? member.equipment.armor.data : null,
            member.equipment.gloves ? member.equipment.gloves.data : null,
            member.equipment.kit1 ? member.equipment.kit1.data : null,
            member.equipment.kit2 ? member.equipment.kit2.data : null
        ];
        const activeSets = window.checkSetBonus(equippedItems);
        Object.entries(activeSets).forEach(([setId, setData]) => {
            if (setData.conditionalEffects && member.setConditions[setId]) {
                setData.conditionalEffects.forEach(effect => {
                    if (member.setConditions[setId][effect.id]) {
                        applyEffect(effect, false);
                    }
                });
            }
        });
    });

    return buffs;
}

// ===== 메인 오퍼레이터 공격력 계산 =====
function calculateMainOperatorAttack(teamBuffs) {
    // (이전 calculateFinalAttack 함수와 유사하지만 teamBuffs 추가)
    const level = teamComposition.main.level;
    const baseStats = teamComposition.main.operator.stats[level];

    let operatorAtk = baseStats.operatorAtk;
    let strength = baseStats.strength;
    let agility = baseStats.agility;
    let intellect = baseStats.intellect;
    let will = baseStats.will;

    // 재능 스탯
    teamComposition.main.operator.talents.forEach(talent => {
        if (!talent.requireActive) {
            talent.effects.forEach(effect => {
                if (effect.stat === 'strength') strength += effect.value;
                if (effect.stat === 'agility') agility += effect.value;
                if (effect.stat === 'intellect') intellect += effect.value;
                if (effect.stat === 'will') will += effect.value;
            });
        }
    });

    // 잠재 수치 스탯
    for (let i = 0; i < teamComposition.main.potentialLevel; i++) {
        const potential = teamComposition.main.operator.potentials[i];
        if (potential.effects) {
            potential.effects.forEach(effect => {
                if (effect.stat === 'strength') strength += effect.value || 0;
                if (effect.stat === 'agility') agility += effect.value || 0;
                if (effect.stat === 'intellect') intellect += effect.value || 0;
                if (effect.stat === 'will') will += effect.value || 0;
            });
        }
    }

    // 장비 스탯
    const equipmentItems = [
        teamComposition.main.equipment.armor.data,
        teamComposition.main.equipment.gloves.data,
        teamComposition.main.equipment.kit1.data,
        teamComposition.main.equipment.kit2.data
    ];

    const forgeLevels = [
        teamComposition.main.equipment.armor.forgeLevels,
        teamComposition.main.equipment.gloves.forgeLevels,
        teamComposition.main.equipment.kit1.forgeLevels,
        teamComposition.main.equipment.kit2.forgeLevels
    ];

    // 각 장비의 옵션별 단조 레벨 적용
    equipmentItems.forEach((item, index) => {
        if (!item) return;

        item.options.forEach((option, optIndex) => {
            const forgeLevel = forgeLevels[index][optIndex] || 0;
            const value = option.values[forgeLevel];

            if (option.stat === 'strength') strength += value;
            if (option.stat === 'agility') agility += value;
            if (option.stat === 'intellect') intellect += value;
            if (option.stat === 'will') will += value;
        });
    });

    // 무기 스탯
    if (teamComposition.main.weapon.data) {
        const weapon = teamComposition.main.weapon.data;
        const opt1 = window.OPTION1_POOL[weapon.option1];
        const opt2 = window.OPTION2_POOL[weapon.option2];

        // 옵션 1 (스탯)
        if (opt1) {
            let stat = opt1.stat;
            if (stat === 'majorStat') {
                stat = teamComposition.main.operator.majorStat;
            }
            const value = opt1.values[teamComposition.main.weapon.option1Level];
            if (stat === 'strength') strength += value;
            if (stat === 'agility') agility += value;
            if (stat === 'intellect') intellect += value;
            if (stat === 'will') will += value;
        }

        // 옵션 2 (스탯만 - atkIncrease는 collectTeamBuffs에서 처리)
        if (opt2 && opt2.stat !== 'atkIncrease') {
            const value = opt2.values[teamComposition.main.weapon.option2Level];
            if (opt2.stat === 'strength') strength += value;
            if (opt2.stat === 'agility') agility += value;
            if (opt2.stat === 'intellect') intellect += value;
            if (opt2.stat === 'will') will += value;
        }
    }

    // 팀 버프 스탯
    strength += teamBuffs.stats.strength;
    agility += teamBuffs.stats.agility;
    intellect += teamBuffs.stats.intellect;
    will += teamBuffs.stats.will;

    // 무기 기초 공격력
    const weaponAtk = teamComposition.main.weapon.data ? teamComposition.main.weapon.data.weaponAtk : 0;

    // 공격력 % 증가 (collectTeamBuffs에서 수집된 self/team/allies 합산)
    const atkIncreasePercent = teamBuffs.selfAtkIncrease + teamBuffs.teamAtkIncrease + teamBuffs.alliesAtkIncrease;

    // 주/부 스탯
    const majorStat = teamComposition.main.operator.majorStat;
    const minorStat = teamComposition.main.operator.minorStat;

    const majorStatValue =
        majorStat === 'strength' ? strength :
            majorStat === 'agility' ? agility :
                majorStat === 'intellect' ? intellect : will;

    const minorStatValue =
        minorStat === 'strength' ? strength :
            minorStat === 'agility' ? agility :
                minorStat === 'intellect' ? intellect : will;

    // 최종 공격력: ((오퍼ATK + 무기ATK) × (1 + ATK%) + 고정ATK) × (1 + 주스탯×0.005 + 부스탯×0.0025)
    const finalAtk = (
        (operatorAtk + weaponAtk) * (1 + atkIncreasePercent / 100) + teamBuffs.flatAtk
    ) * (1 + majorStatValue * 0.005 + minorStatValue * 0.0025);

    return Math.floor(finalAtk);
}

// ===== 총 피해 증가 계산 (스킬 타입/속성별 필터링) =====
function calculateTotalDamageIncrease(teamBuffs, skillElement, phaseType, isBasicAttack) {
    const applicableTypes = getApplicableDamageTypes(skillElement, phaseType, isBasicAttack);
    let totalIncrease = 0;

    // collectTeamBuffs에서 수집된 모든 피해 증가 중 해당되는 것만 합산
    Object.entries(teamBuffs.damageIncrease).forEach(([stat, value]) => {
        if (applicableTypes.includes(stat)) {
            totalIncrease += value;
        }
    });

    return totalIncrease;
}

// ===== 결과 표시 =====
function displayResult(result, teamBuffs) {
    // 팀 버프 요약
    const teamBuffsSummary = document.getElementById('teamBuffsSummary');
    teamBuffsSummary.innerHTML = '';

    let hasBuffs = false;
    const totalAtkIncrease = teamBuffs.selfAtkIncrease + teamBuffs.teamAtkIncrease + teamBuffs.alliesAtkIncrease;
    if (totalAtkIncrease > 0) {
        const div = document.createElement('div');
        div.textContent = `공격력 증가: +${totalAtkIncrease}% (자신:${teamBuffs.selfAtkIncrease}% 팀:${teamBuffs.teamAtkIncrease}% 아군:${teamBuffs.alliesAtkIncrease}%)`;
        teamBuffsSummary.appendChild(div);
        hasBuffs = true;
    }
    Object.entries(teamBuffs.damageIncrease).forEach(([stat, value]) => {
        const div = document.createElement('div');
        div.textContent = `${stat}: +${value}%`;
        teamBuffsSummary.appendChild(div);
        hasBuffs = true;
    });
    if (!hasBuffs) {
        teamBuffsSummary.textContent = '활성화된 팀 버프가 없습니다.';
    }

    // 한 사이클 총 데미지
    document.getElementById('finalDamage').textContent = result.totalDamage.toLocaleString();

    // 사이클 바 차트 + 페이즈 목록
    const COLORS = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336', '#00BCD4', '#FF5722', '#607D8B'];
    const breakdownEl = document.getElementById('cycleBreakdown');
    breakdownEl.innerHTML = '';

    if (result.phaseResults && result.phaseResults.length > 0) {
        // 비례 바
        const bar = document.createElement('div');
        bar.className = 'cycle-bar';

        result.phaseResults.forEach((phase, idx) => {
            const pct = result.totalDamage > 0 ? (phase.damage / result.totalDamage) * 100 : 0;
            const color = COLORS[idx % COLORS.length];

            const seg = document.createElement('div');
            seg.className = 'cycle-segment';
            seg.style.width = Math.max(pct, 2) + '%';  // 최소 2% 너비 보장
            seg.style.backgroundColor = color;
            seg.title = `${phase.phaseName}\n${phase.damage.toLocaleString()} (${pct.toFixed(1)}%)`;

            seg.innerHTML =
                `<span class="seg-idx">${idx + 1}</span>` +
                `<span class="seg-dmg">${formatShort(phase.damage)}</span>`;

            bar.appendChild(seg);
        });
        breakdownEl.appendChild(bar);

        // 페이즈별 상세 목록
        const list = document.createElement('div');
        list.className = 'cycle-phase-list';

        result.phaseResults.forEach((phase, idx) => {
            const pct = result.totalDamage > 0 ? (phase.damage / result.totalDamage) * 100 : 0;
            const color = COLORS[idx % COLORS.length];

            const item = document.createElement('div');
            item.className = 'cycle-phase-item';

            item.innerHTML =
                `<span class="phase-color-dot" style="background:${color}"></span>` +
                `<span class="phase-name">${phase.phaseName}</span>` +
                `<span class="phase-multiplier">${phase.skillMultiplier}%</span>` +
                `<span class="phase-damage">${phase.damage.toLocaleString()}</span>` +
                `<span class="phase-pct">(${pct.toFixed(1)}%)</span>`;

            list.appendChild(item);
        });
        breakdownEl.appendChild(list);
    }

    // 공통 스탯
    document.getElementById('finalAtk').textContent = Math.floor(result.finalAtk).toLocaleString();
    document.getElementById('critMultiplierDisplay').textContent = `×${result.critMultiplier.toFixed(3)}`;
    document.getElementById('defenseMultiplier').textContent = result.defenseMultiplier.toFixed(3);
    document.getElementById('resistanceMultiplier').textContent = result.resistanceMultiplier.toFixed(3);

    // 이상 데미지
    const abnormalSection = document.getElementById('abnormalDamageSection');
    if (abnormalSection) {
        abnormalSection.innerHTML = '';

        if (result.abnormalResults && result.abnormalResults.length > 0) {
            const header = document.createElement('h4');
            header.textContent = '이상 데미지';
            abnormalSection.appendChild(header);

            result.abnormalResults.forEach(ab => {
                const div = document.createElement('div');
                div.className = 'abnormal-damage-item';
                let text = `${getAbnormalName(ab.debuffType)}: ${ab.totalDamage.toLocaleString()}`;
                text += ` (배율: ${ab.multiplier}%`;
                if (!ab.isStackBuilding) text += `, 등급: ${ab.grade}`;
                if (ab.forced) text += ', 강제';
                if (ab.autoTriggered) text += ', 자동';
                text += ')';
                if (ab.count > 1) {
                    text += ` × ${ab.count}회 = ${ab.totalWithCount.toLocaleString()}`;
                }
                div.textContent = text;
                abnormalSection.appendChild(div);

                if (ab.dotDamagePerSecond) {
                    const dotDiv = document.createElement('div');
                    dotDiv.className = 'abnormal-damage-dot';
                    dotDiv.textContent = `  └ 연소 DoT: ${ab.dotDamagePerSecond.toLocaleString()}/초 (배율: ${ab.dotMultiplier}%)`;
                    abnormalSection.appendChild(dotDiv);
                }
            });

            const infoDiv = document.createElement('div');
            infoDiv.className = 'abnormal-info';
            const firstAb = result.abnormalResults[0];
            infoDiv.textContent = `레벨 계수: ${firstAb.levelCoefficient.toFixed(3)}, 아츠 강도 배율: ${firstAb.artsIntensityMultiplier.toFixed(3)}`;
            abnormalSection.appendChild(infoDiv);

            abnormalSection.style.display = 'block';
        } else {
            abnormalSection.style.display = 'none';
        }
    }

    // 적용된 디버프 정보 (물리취약 등)
    if (result.appliedDebuffs && result.appliedDebuffs.length > 0) {
        const abnormalSection2 = document.getElementById('abnormalDamageSection');
        if (abnormalSection2) {
            if (abnormalSection2.style.display === 'none') {
                abnormalSection2.innerHTML = '';
                abnormalSection2.style.display = 'block';
            }
            const debuffHeader = document.createElement('h4');
            debuffHeader.textContent = '적용 디버프';
            abnormalSection2.appendChild(debuffHeader);

            result.appliedDebuffs.forEach(debuff => {
                const div = document.createElement('div');
                div.className = 'abnormal-damage-item';
                const label = debuff.checkboxLabel || debuff.stat;
                div.textContent = typeof debuff.value === 'number'
                    ? `${label}: ${debuff.value}%`
                    : `${label}`;
                abnormalSection2.appendChild(div);
            });
        }
    }

    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}