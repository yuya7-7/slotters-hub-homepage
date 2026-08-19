import type { Machine } from '../types'

export const MACHINES_DATA: Machine[] = [
  {
    id: 'hokuto',
    name: 'スマスロ北斗の拳',
    kana: 'すますろほくとのけん',
    maker: 'サミー',
    type: 'スマスロ (AT)',
    tags: ['人気No.1', 'サミー', 'スマスロ'],
    ceilingSummary: '最大1268G（リセ時 800G）',
    yameDokiSummary: 'ボイス確認後 即ヤメ',
    highlightSignal: 'ユリア=設定5↑ / ケンシロウ=設定4↑',
    aimPoints: {
      videoSummary: [
        '【15G演出抑制仕様】AT終了後15Gまでは内部的に天国でも演出が発生しにくい。一般客が10G前後で捨てた台を15〜30Gまで回す立ち回りが極めて有効。',
        '【第3停止リプレイの法則】第3停止時に「見渡し」または「振り向き」でリプレイが揃った場合は「天国以上濃厚（即ヤメ厳禁）」。',
        '【朝イチの恩恵】リセット時は天井が800Gに短縮＋高確スタート抽選も優遇。'
      ],
      triggerSignals: [
        'ステチェン「稲妻（大）」発生 ➔ 天国濃厚（当たるまでツッパ）',
        '雑魚に「北斗百裂拳」/ 青雑魚に「奥義」 ➔ 天国濃厚（ツッパ）',
        '第3停止リプレイで「見渡し / 振り向き」 ➔ 天国濃厚（ツッパ）',
        '入賞ランプ白点灯でリプレイ等の「ランプ矛盾」 ➔ 天国濃厚',
        'ケンシロウ「青オーラ（大）」/ 断末魔「ヘブン！」 ➔ 天国濃厚'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、サブ液晶ボイス確認 ＋ 高確示唆なし ➔ 即ヤメ（0G）',
      stopNg: '天国濃厚演出（百裂拳・稲妻大・リプ見渡し等）や高設定確定ボイスが出現した台',
      tip: '差枚マイナスの凹み台は15〜30Gまで天国確認するのがプロの鉄則。'
    },
    settingSignals: [
      {
        categoryName: '🗣️ BB終了時 サブ液晶ボイス（設定示唆）',
        items: [
          { badge: '設定5以上濃厚', character: 'ユリア', content: '「まちつづけるのがわたしの宿命…」', meaning: '設定5以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: 'ケンシロウ', content: '「戦うのが北斗神拳伝承者としての宿命だ!!」', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '1G連濃厚', character: 'ケンシロウ', content: '「おまえは もう死んでいる！」', meaning: 'AT 1G連濃厚！', priority: 'danger', action: '即レバーオン' },
          { badge: '高設定示唆 [強]', character: 'アミバ', content: '「ふむ… この秘孔ではないらしい…」', meaning: '高設定示唆（強）', priority: 'warning', action: '様子見・続行視野' },
          { badge: '高設定示唆 [中]', character: 'ジャギ', content: '「ケンシロウ おれの名を言ってみろ！」', meaning: '高設定示唆（中）', priority: 'warning' },
          { badge: '高設定示唆 [弱]', character: 'シン / サウザー', content: '「おまえが思っているほど…」「退かぬ！媚びぬ！」', meaning: '高設定示唆（弱）', priority: 'normal' },
          { badge: 'デフォルト', character: 'リン / バット', content: '「ケン、会いたかった」「おいおい置いてかないで〜」', meaning: '奇数示唆 / 偶数示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🏆 サミートロフィー（設定確定）',
        items: [
          { badge: '設定6確定', character: 'トロフィー', content: '虹トロフィー', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'キリン柄トロフィー', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー', content: '金トロフィー', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定3以上確定', character: 'トロフィー', content: '銀トロフィー', meaning: '設定3以上確定', priority: 'warning' },
          { badge: '設定2以上確定', character: 'トロフィー', content: '銅トロフィー', meaning: '設定2以上確定', priority: 'normal' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スマスロ北斗の拳 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】差枚優遇（-500枚以下）・冷遇別の思考停止ボーダー',
        '15G潜伏天国刈り取り実戦手順（機械割110%超）',
        'ノリ打ち共有用メモ ＆ 現場Q&A 5選',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'monkey5',
    name: 'スマスロ モンキーターンV',
    kana: 'すますろもんきーたーんふぁいぶ',
    maker: '山佐',
    type: 'スマスロ (AT)',
    tags: ['大人気', '山佐', 'スマスロ'],
    ceilingSummary: '最大795G / 6周期（短縮時 495G/4周期）',
    yameDokiSummary: 'ヘルメット確認後 即ヤメ',
    highlightSignal: 'ロゴ+V=天国確定 / ロゴ+キラ=モードB↑',
    aimPoints: {
      videoSummary: [
        '【ヘルメット第3停止の確認】AT終了画面で第3停止ボタンを押すとヘルメットロゴが出現。「ロゴ＋V」は天国（1周期）確定、「ロゴ＋キラキラ」はモードB以上濃厚。',
        '【即優出の法則】AT終了後1G目に優出モード（前兆）へ突入した場合は本前兆期待度が激高。',
        '【短縮天井】設定変更時や青島VS波多野敗北後は天井が495G（最大4周期）に短縮。'
      ],
      triggerSignals: [
        'ヘルメット「ロゴ ＋ Ｖ」 ➔ 天国（1周期目）当選確定（即ツッパ）',
        'ヘルメット「ロゴ ＋ キラキラ」 ➔ モードB以上濃厚（次回当選までツッパ）',
        'AT終了後 1G目の即優出モード突入 ➔ 超激熱（ツッパ）',
        'ライバルモード（蒲生・榎木・洞口）示唆 ➔ モードに応じた狙い目'
      ]
    },
    yameRules: {
      stopOk: 'ヘルメットが「ロゴなし」または「通常ロゴ」で即優出なし ➔ 即ヤメ（0G）',
      stopNg: 'ヘルメット「ロゴ＋V」「ロゴ＋キラキラ」や即優出が発生した台',
      tip: '天国示唆がない場合は1周期目のゾーン追いは厳禁（期待値マイナス）。'
    },
    settingSignals: [
      {
        categoryName: '🏆 AT終了画面 ＆ トロフィー（設定示唆）',
        items: [
          { badge: '設定6確定', character: 'トロフィー', content: '虹トロフィー', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'ケロット柄トロフィー', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー / 終了画面', content: '金トロフィー / 青島＆波多野（私服）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '青島（ドレス姿）', meaning: '高設定示唆（強）', priority: 'warning', action: '様子見' },
          { badge: '偶数設定示唆', character: '終了画面', content: '波多野一家 / 女性キャラ集合', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🗣️ ラウンド開始画面・セリフ',
        items: [
          { badge: '設定4以上濃厚', character: '開始画面', content: '青島（水着）/ 澄（ドレス）', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆', character: '開始画面', content: 'ライバル集合画面', meaning: '高設定示唆', priority: 'warning' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スマスロ モンキーターンV 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時・短縮時の思考停止ボーダー',
        '青島優遇状態 ＆ 有利切断条件の完全解説',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'kaguya',
    name: 'Lパチスロ かぐや様は告らせたい',
    kana: 'えるぱちすろかぐやさまはこくらせたい',
    maker: 'SANKYO',
    type: 'スマスロ (AT)',
    tags: ['高純増', 'SANKYO', 'スマスロ'],
    ceilingSummary: '最大1100G / CZ最大7スルー',
    yameDokiSummary: '130G引き戻し抜けヤメ',
    highlightSignal: 'アイキャッチ赤=天井短縮 / 金枠=設定4↑',
    aimPoints: {
      videoSummary: [
        '【130G引き戻し仕様】ボーナス・EXTRA終了後は130G付近まで引き戻し高確率。特に「超BIGループ後」や「裏REG後」は引き戻し率が大幅UP。',
        '【アイキャッチ赤の法則】ステージチェンジ時のアイキャッチが赤背景なら、規定チャンス目天井が大幅短縮濃厚。'
      ],
      triggerSignals: [
        'アイキャッチ「赤背景」 ➔ 規定チャンス目短縮濃厚（次回CZまでツッパ）',
        '時計演出で長針・短針が「夜」を指す ➔ チャンス目規定回数近し',
        'CZ 4スルー以上 ➔ スルー天井（最大7回）狙い'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス後、130Gの引き戻し前兆（マリアージュ等）否定で即ヤメ',
      stopNg: '超BIGループ後、裏REG後、アイキャッチ赤背景が出現した台',
      tip: '超BIGループ後は引き戻し期待度が大幅UPするため130Gまで必ずフォロー。'
    },
    settingSignals: [
      {
        categoryName: '📸 ボーナス終了画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '虹枠画面（かぐや＆白銀ウェディング）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: '赤枠画面（生徒会メンバー集合）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '金枠画面（かぐや＆藤原）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '藤原千花（水着 / パジャマ）', meaning: '高設定示唆（強）', priority: 'warning' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lかぐや様は告らせたい 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】CZスルー回数・リセット短縮時の思考停止ボーダー',
        '裏REG後・超BIGループ後の引き戻し刈り取り術',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'karakuri',
    name: 'Lパチスロ からくりサーカス',
    kana: 'えるぱちすろからくりさーかす',
    maker: 'SANKYO',
    type: 'スマスロ (AT)',
    tags: ['万枚特化', 'SANKYO', 'スマスロ'],
    ceilingSummary: '最大1200G / CZ最大4スルー',
    yameDokiSummary: '天国前兆（100G）否定でヤメ',
    highlightSignal: 'CZ終了画面 銀/金=天国 / 3スルー=ツッパ',
    aimPoints: {
      videoSummary: [
        '【CZ終了画面の枠色】CZ失敗画面で銀枠は次回天国濃厚、金枠は次回天国＋高設定濃厚。',
        '【フェイスレスPUSH】メニュー画面や通常時のPUSHで紫セリフが出たら次回CZ成功でAT直撃濃厚。',
        '【CZスルー天井】最大4スルー（5回目のCZ）でAT直撃確定。3スルー以上はツッパ推奨。'
      ],
      triggerSignals: [
        'CZ終了画面「勝＆鳴海（銀枠 / 金枠）」 ➔ 次回天国濃厚（ツッパ）',
        'フェイスレスPUSH示唆（紫） ➔ 次回CZ成功でAT直撃濃厚（ツッパ）',
        'CZ 3スルー・4スルー台 ➔ AT直撃までツッパ'
      ]
    },
    yameRules: {
      stopOk: 'CZ失敗時・AT終了後、液晶100G前兆否定でヤメ（差枚マイナス時）',
      stopNg: 'CZ 3スルー以上の台、銀枠・金枠画面が出現した台',
      tip: 'CZスルー回数はデータ機ではなく液晶メニュー画面で必ず確認。'
    },
    settingSignals: [
      {
        categoryName: '🎭 終了画面 ＆ セリフ（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '劇団全員集合（虹枠）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'フランシーヌ（赤枠）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: 'しろがね＆あるるかん（金枠）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: 'セリフ', content: '「悪魔め…」「笑顔のために…」', meaning: '高設定示唆（強）', priority: 'warning' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lからくりサーカス 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】CZスルー回数別（3スルー〜0Gツッパ）ボーダー',
        '運命の一劇失敗後・有利切断後の天国刈り取り術',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'vvv',
    name: 'Lパチスロ 革命機ヴァルヴレイヴ',
    kana: 'えるぱちすろかくめいきゔぁるゔれいゔ',
    maker: 'SANKYO',
    type: 'スマスロ (AT)',
    tags: ['超万枚', 'SANKYO', 'スマスロ'],
    ceilingSummary: '液晶1500G（実約1000G）/ CZ最大7スルー',
    yameDokiSummary: '66G引き戻し抜けヤメ',
    highlightSignal: '決戦ボナ3連スルー=革命優遇 / 66G引き戻し',
    aimPoints: {
      videoSummary: [
        '【66G引き戻しゾーン】AT終了後の実ゲーム数66G間は引き戻し超高確率（約25%〜上位時約66%）。',
        '【決戦ボーナス連続スルー】決戦ボーナスが3連続以上スルーしている台は次回ボーナスが「革命ボーナス」に優遇。'
      ],
      triggerSignals: [
        '決戦ボーナス 3連続スルー台 ➔ 次回革命ボーナス優遇（ボーナスまでツッパ）',
        'AT終了後 66G以内の台 ➔ 引き戻しゾーン抜けまでツッパ',
        'CZ 5スルー以上台 ➔ CZ天井（最大7回）狙い'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス・AT終了後、実ゲーム数66G＋前兆否定で即ヤメ',
      stopNg: '決戦ボーナス3スルー以上、ハラキリDRIVE頻発台',
      tip: '引き戻しゾーンは液晶ゲーム数ではなく「実ゲーム数66G」なので注意。'
    },
    settingSignals: [
      {
        categoryName: '🤖 終了画面 ＆ ラウンド開始画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: 'パイロット全員集合（虹枠）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'ハルト＆エルエルフ（赤枠）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '紫枠 / 金枠画面', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L革命機ヴァルヴレイヴ 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】液晶G数・CZスルー別の思考停止ボーダー',
        '超ミミズモード判別法 ＆ 差枚数優遇狙いマニュアル',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'chibariyo2',
    name: 'Lチバリヨ2 / チバリヨ2プラス',
    kana: 'えるちばりよつーぷらす',
    maker: 'ネット',
    type: 'スマスロ (沖スロ)',
    tags: ['沖スロ', 'ネット', 'スマスロ'],
    ceilingSummary: '最大999G（リセ時 350G）',
    yameDokiSummary: '32G回して即ヤメ',
    highlightSignal: '単チェリー=通常B↑ / 右のみ点滅=天国',
    aimPoints: {
      videoSummary: [
        '【単チェリーの停止形】左リール下段チェリー＋右リール中段BAR/ブランクの「単チェリー」が出現すれば通常B以上滞在が濃厚。',
        '【32G連荘ゾーン】ボーナス後32Gは天国ゾーンのため絶対に回し切る。'
      ],
      triggerSignals: [
        '単チェリー（スベリなし）出現 ➔ 通常B以上濃厚（天国当選までツッパ）',
        'ハイビスカス「右のみ点滅」「高速点滅」 ➔ 次回天国以上濃厚（32Gまでツッパ）',
        'リセット台（朝イチ0G〜） ➔ 350G天井短縮'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス終了後、32G回して光らなければ即ヤメ',
      stopNg: '単チェリー出現台、リミットレス15連後台',
      tip: '余計なチェリー追いはせず32Gでスパッとヤメるのがプロの鉄則。'
    },
    settingSignals: [
      {
        categoryName: '🌺 ボーナス終了時ボイス ＆ 告知ランプ（設定示唆）',
        items: [
          { badge: '設定6確定', character: 'ボイス', content: 'アンちゃん「具志堅用高です！」/ 虹ランプ', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'ボイス', content: '「めんそーれ！（プレミアムボイス）」', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'ボイス', content: '「はいさい！（特殊ボイス）」', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lチバリヨ2プラス 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時（350G短縮）・スルー回数別ボーダー',
        'リミットレス（虹パト）15連終了後の0Gツッパ手順',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  }
]
