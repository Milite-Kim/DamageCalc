# DamageCalc
명일방주 엔드필드 데미지 계산용

DamageCalc/
├── index.html                           # 메인 HTML 파일
├── css/
│   └── style.css                        # 컴팩트 레이아웃 CSS
└── js/
    ├── main.js                      # 메인 로직
    └── data/
        ├── constants.js                 # 게임 상수 (스탯, 데미지 타입 등)
        ├── operators/                   # 오퍼레이터 데이터
        │   ├── akekuri.js
        │   ├── alesh.js
        │   ├── antal.js
        │   ├── arclight.js
        │   ├── ardelia.js
        │   ├── avywenna.js
        │   ├── catcher.js
        │   ├── chenqianyu.js
        │   ├── dapan.js
        │   ├── ember.js
        │   ├── endministrator.js
        │   ├── estella.js
        │   ├── flourite.js
        │   ├── gilberta.js
        │   ├── laevatain.js
        │   ├── lastrite.js
        │   ├── lifeng.js
        │   ├── perlica.js
        │   ├── pogranichnik.js
        │   ├── snowshine.js
        │   ├── wulfgard.js
        │   ├── xaihi.js
        │   └── yvonne.js
        ├── weapons/
        │   ├── weaponOptions.js         # 무기 옵션 풀 (OPTION1_POOL, OPTION2_POOL)
        │   ├── weaponsIndex.js          # 무기 통합 파일
        │   ├── sword/                   # 한손검
        │   │   ├── aspirant.js
        │   │   ├── eminentRepute.js
        │   │   ├── finchaserV3.js
        │   │   ├── forgebornScathe.js
        │   │   ├── fortmaker.js
        │   │   ├── grandVision.js
        │   │   ├── neverRest.js
        │   │   ├── objEdgeOfLight.js
        │   │   ├── rapidAscent.js
        │   │   ├── sunderingSteel.js
        │   │   ├── thermiteCutter.js
        │   │   ├── twelveQuestions.js
        │   │   ├── umbralTorch.js
        │   │   ├── whiteNightNova.js
        │   │   └── swordIndex.js
        │   ├── greatsword/              # 양손검
        │   │   ├── ancientCanal.js
        │   │   ├── exemplar.js
        │   │   ├── finishingCall.js
        │   │   ├── formerFinery.js
        │   │   ├── khravengger.js
        │   │   ├── objHeavyBurden.js
        │   │   ├── seekerOfDarkLung.js
        │   │   ├── sunderedPrince.js
        │   │   ├── thunderberge.js
        │   │   └── greatswordIndex.js
        │   ├── handcannon/              # 핸드캐논
        │   │   ├── artzyTyrannical.js
        │   │   ├── clannibal.js
        │   │   ├── navigator.js
        │   │   ├── objVelocitous.js
        │   │   ├── opusTheLiving.js
        │   │   ├── rationalFarewell.js
        │   │   ├── wedge.js
        │   │   └── handcannonIndex.js
        │   ├── artsUnit/                # 아츠 유닛
        │   │   ├── chivalricVirtues.js
        │   │   ├── deliveryGuaranteed.js
        │   │   ├── detonationUnit.js
        │   │   ├── dreamsOfTheStarryBeach.js
        │   │   ├── freedomToProselytize.js
        │   │   ├── monaihe.js
        │   │   ├── oblivion.js
        │   │   ├── objArtsIdentifier.js
        │   │   ├── opusEtchFigure.js
        │   │   ├── stanzaOfMemorials.js
        │   │   ├── wildWanderer.js
        │   │   └── artsUnitIndex.js
        │   └── polearm/                 # 장병기
        │       ├── chimericJustice.js
        │       ├── cohesiveTraction.js
        │       ├── jet.js
        │       ├── mountainBearer.js
        │       ├── objRazorhorn.js
        │       ├── valiant.js
        │       └── polearmIndex.js
        └── equipments/
            ├── equipmentsIndex.js       # 장비 통합 파일
            └── sets/                    # 장비 세트
                ├── aethertechSet.js
                ├── bonekrushaSet.js
                ├── eternalXiraniteSet.js
                ├── frontiersSet.js
                ├── hotWorkSet.js
                ├── lynxSet.js
                ├── miSecuritySet.js
                ├── noneSet.js
                ├── pulserLabsSet.js
                ├── swordmancerSet.js
                ├── tideSurgeSet.js
                └── type50YinglungSet.js
    