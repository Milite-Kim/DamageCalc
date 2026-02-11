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
    phase: null,
    enemyDefense: 100,
    enemyResistance: 0
};

// 오퍼레이터 데이터
const OPERATORS = {
    endministrator: window.EndministratorData,
    laevatain: window.LaevatainData,
    akekuri: window.AkekuriData,
    lifeng: window.LifengData,
    alesh: window.AleshData,
    antal: window.AntalData
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
        teamComposition.team[teamIndex].equipment.armor,
        teamComposition.team[teamIndex].equipment.gloves,
        teamComposition.team[teamIndex].equipment.kit1,
        teamComposition.team[teamIndex].equipment.kit2
    ];

    const activeSets = window.checkSetBonus(equippedItems);
    displayTeamSetBonus(teamNum, activeSets, teamIndex);
}

function displayTeamSetBonus(teamNum, activeSets, teamIndex) {
    const setBonusContainer = document.getElementById(`team${teamNum}SetBonus`);
    const conditionsContainer = document.getElementById(`team${teamNum}Conditions`);

    setBonusContainer.innerHTML = '';
    conditionsContainer.innerHTML = '';

    if (Object.keys(activeSets).length === 0) {
        return;
    }

    Object.entries(activeSets).forEach(([setId, setData]) => {
        const setInfo = document.createElement('div');
        setInfo.innerHTML = `<strong>${setData.setName}</strong> 세트 활성`;
        setBonusContainer.appendChild(setInfo);

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

            conditionsContainer.appendChild(checkboxGroup);
        }
    });
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

    displayCalcSkillPhases(skill);
}

function displayCalcSkillPhases(skill) {
    const container = document.getElementById('calcPhaseButtons');
    container.innerHTML = '';

    if (!skill.phases) {
        document.getElementById('calcSkillPhases').style.display = 'none';
        return;
    }

    Object.entries(skill.phases).forEach(([phaseKey, phase]) => {
        const button = document.createElement('button');
        button.className = 'phase-btn';
        button.textContent = phase.name;
        button.onclick = () => selectCalcPhase(phaseKey, button);
        container.appendChild(button);
    });

    document.getElementById('calcSkillPhases').style.display = 'block';
}

function selectCalcPhase(phaseKey, button) {
    calculationSettings.phase = phaseKey;

    document.querySelectorAll('.phase-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

function updateEnemyStats(e) {
    const id = e.target.id;
    if (id === 'enemyDefense') {
        calculationSettings.enemyDefense = parseInt(e.target.value);
    } else if (id === 'enemyResistance') {
        calculationSettings.enemyResistance = parseInt(e.target.value);
    }
}

// ===== 데미지 계산 =====
function calculateDamage() {
    if (!teamComposition.main.operator) {
        alert('메인 오퍼레이터를 선택하세요.');
        return;
    }

    if (!calculationSettings.skillType || !calculationSettings.phase) {
        alert('사용할 스킬과 단계를 선택하세요.');
        return;
    }

    console.log('=== 데미지 계산 시작 ===');
    console.log('팀 구성:', teamComposition);

    // 1. 팀 버프 수집
    const teamBuffs = collectTeamBuffs();
    console.log('팀 버프:', teamBuffs);

    // 2. 메인 오퍼레이터 최종 공격력 계산
    const finalAtk = calculateMainOperatorAttack(teamBuffs);
    console.log('최종 공격력:', finalAtk);

    // 3. 스킬 배율
    const skill = teamComposition.main.operator.skills[calculationSettings.skillType];
    const phase = skill.phases[calculationSettings.phase];
    const skillLevel = teamComposition.main.skillLevels[calculationSettings.skillType];
    const skillMultiplier = phase.multipliers[skillLevel];

    // 4. 기초 데미지
    const baseDamage = finalAtk * (skillMultiplier / 100);

    // 5. 피해 증가
    const damageIncreaseTotal = calculateTotalDamageIncrease(teamBuffs);

    // 6. 방어/저항
    const defenseMultiplier = 100 / (calculationSettings.enemyDefense + 100);
    const resistanceMultiplier = 1 - (calculationSettings.enemyResistance / 100);

    // 7. 치명타 (기본값)
    const critMultiplier = 1.0;

    // 8. 최종 데미지
    const finalDamage = Math.floor(
        baseDamage *
        critMultiplier *
        (1 + damageIncreaseTotal / 100) *
        defenseMultiplier *
        resistanceMultiplier
    );

    // 9. 결과 표시
    displayResult({
        finalDamage,
        finalAtk,
        skillMultiplier,
        baseDamage,
        critMultiplier,
        damageIncreaseTotal,
        defenseMultiplier,
        resistanceMultiplier
    }, teamBuffs);
}

// ===== 팀 버프 수집 =====
function collectTeamBuffs() {
    const buffs = {
        atkIncrease: 0,  // % 증가
        damageIncrease: {},  // 피해 증가 (타입별)
        stats: {
            strength: 0,
            agility: 0,
            intellect: 0,
            will: 0
        }
    };

    teamComposition.team.forEach((member, index) => {
        if (!member.operator) return;

        console.log(`팀원 ${index + 1} 버프 수집:`, member.operator.name);

        // 무기 팀 버프 (테르밋 커터 등)
        if (member.weapon.data && member.weapon.data.option3.keywordEffect) {
            const effect = member.weapon.data.option3.keywordEffect;

            if ((effect.target === 'team' || effect.target === 'allies') &&
                member.weapon.conditions.active) {

                const value = effect.values[member.weapon.option3Level];

                if (effect.stat === 'atkIncrease') {
                    buffs.atkIncrease += value;
                } else if (effect.stat.includes('Damage')) {
                    buffs.damageIncrease[effect.stat] =
                        (buffs.damageIncrease[effect.stat] || 0) + value;
                }

                console.log(`  무기 버프: ${effect.stat} +${value}`);
            }
        }

        // 장비 세트 팀 버프 (식양의 숨결 등)
        const equippedItems = [
            member.equipment.armor,
            member.equipment.gloves,
            member.equipment.kit1,
            member.equipment.kit2
        ];

        const activeSets = window.checkSetBonus(equippedItems);

        Object.entries(activeSets).forEach(([setId, setData]) => {
            if (setData.conditionalEffects && member.setConditions[setId]) {
                setData.conditionalEffects.forEach(effect => {
                    if ((effect.target === 'team' || effect.target === 'allies') &&
                        member.setConditions[setId][effect.id]) {

                        if (effect.stat === 'atkIncrease' || effect.stat === 'allDamageIncrease') {
                            buffs.atkIncrease += effect.value;
                        } else if (effect.stat.includes('Damage')) {
                            buffs.damageIncrease[effect.stat] =
                                (buffs.damageIncrease[effect.stat] || 0) + effect.value;
                        }

                        console.log(`  세트 버프 (${setData.setName}): ${effect.stat} +${effect.value}`);
                    }
                });
            }
        });

        // 잠재 수치 팀 버프 (알레쉬 3잠 등)
        for (let i = 0; i < member.potentialLevel; i++) {
            const potential = member.operator.potentials[i];
            if (potential.effects) {
                potential.effects.forEach(effect => {
                    if (effect.target === 'team' || effect.target === 'allies') {
                        if (effect.stat === 'atkIncrease') {
                            buffs.atkIncrease += effect.value;
                            console.log(`  잠재 수치 버프: ${effect.stat} +${effect.value}`);
                        }
                    }
                });
            }
        }
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

        // 옵션 1
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

        // 옵션 2
        if (opt2) {
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

    // 공격력 % 증가
    let atkIncreasePercent = teamBuffs.atkIncrease;  // 팀 버프

    // 무기 옵션 2
    if (teamComposition.main.weapon.data) {
        const weapon = teamComposition.main.weapon.data;
        const opt2 = window.OPTION2_POOL[weapon.option2];

        if (opt2 && opt2.stat === 'atkIncrease') {
            atkIncreasePercent += opt2.values[teamComposition.main.weapon.option2Level];
        }

        // 무기 옵션 3 personalEffect
        if (weapon.option3.personalEffect && weapon.option3.personalEffect.stat === 'atkIncrease') {
            atkIncreasePercent += weapon.option3.personalEffect.values[teamComposition.main.weapon.option3Level];
        }
    }

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

    // 최종 공격력
    const finalAtk = (operatorAtk + weaponAtk) *
        (1 + atkIncreasePercent / 100) *
        (1 + majorStatValue * 0.005 + minorStatValue * 0.0025);

    return Math.floor(finalAtk);
}

// ===== 총 피해 증가 계산 =====
function calculateTotalDamageIncrease(teamBuffs) {
    let totalIncrease = 0;

    // 팀 버프 피해 증가
    Object.values(teamBuffs.damageIncrease).forEach(value => {
        totalIncrease += value;
    });

    // 메인 오퍼레이터 장비 피해 증가
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

    equipmentItems.forEach((item, index) => {
        if (!item) return;

        item.options.forEach((option, optIndex) => {
            const forgeLevel = forgeLevels[index][optIndex] || 0;
            const value = option.values[forgeLevel];

            if (option.stat.includes('Damage')) {
                totalIncrease += value;
            }
        });
    });

    // 무기 옵션 3
    if (teamComposition.main.weapon.data) {
        const weapon = teamComposition.main.weapon.data;

        // personalEffect
        if (weapon.option3.personalEffect && weapon.option3.personalEffect.stat.includes('Damage')) {
            totalIncrease += weapon.option3.personalEffect.values[teamComposition.main.weapon.option3Level];
        }

        // keywordEffect
        if (weapon.option3.keywordEffect && teamComposition.main.weapon.conditions.active) {
            if (weapon.option3.keywordEffect.stat.includes('Damage')) {
                totalIncrease += weapon.option3.keywordEffect.values[teamComposition.main.weapon.option3Level];
            }
        }
    }

    // 세트 효과
    const mainEquippedItems = [
        teamComposition.main.equipment.armor.data,
        teamComposition.main.equipment.gloves.data,
        teamComposition.main.equipment.kit1.data,
        teamComposition.main.equipment.kit2.data
    ];

    const activeSets = window.checkSetBonus(mainEquippedItems);

    Object.entries(activeSets).forEach(([setId, setData]) => {
        if (setData.conditionalEffects && teamComposition.main.setConditions[setId]) {
            setData.conditionalEffects.forEach(effect => {
                if (teamComposition.main.setConditions[setId][effect.id]) {
                    if (effect.stat.includes('Damage')) {
                        totalIncrease += effect.value;
                    }
                }
            });
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

    if (teamBuffs.atkIncrease > 0) {
        const div = document.createElement('div');
        div.textContent = `공격력 증가: +${teamBuffs.atkIncrease}%`;
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

    // 데미지 결과
    document.getElementById('finalDamage').textContent = result.finalDamage.toLocaleString();
    document.getElementById('finalAtk').textContent = Math.floor(result.finalAtk).toLocaleString();
    document.getElementById('skillMultiplier').textContent = result.skillMultiplier;
    document.getElementById('baseDamage').textContent = Math.floor(result.baseDamage).toLocaleString();
    document.getElementById('critMultiplier').textContent = result.critMultiplier.toFixed(2);
    document.getElementById('damageIncrease').textContent = result.damageIncreaseTotal.toFixed(1);
    document.getElementById('defenseMultiplier').textContent = result.defenseMultiplier.toFixed(3);
    document.getElementById('resistanceMultiplier').textContent = result.resistanceMultiplier.toFixed(3);

    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}