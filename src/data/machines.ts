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
        '【15G演出抑制仕様】AT終了後15Gまでは内部的に天国でも演出が発生しにくい。前任者が10G前後で捨てた台を15〜30Gまで回す立ち回りが極めて有効。',
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
    id: 'bancho4',
    name: 'L押忍！番長4',
    kana: 'えるおすばんちょうふぉー',
    maker: '大都技研',
    type: 'スマスロ (AT)',
    tags: ['大人気', '大都技研', 'スマスロ'],
    ceilingSummary: '最大699G（リセ時 6スルー短縮）',
    yameDokiSummary: '引き戻し特訓抜け 即ヤメ',
    highlightSignal: '操＆雫=設定4↑ / パンダ金枠=設定6',
    aimPoints: {
      videoSummary: [
        '【ATスルー天井短縮】リセット時は最大6スルー（7回目ボーナス）でAT当選。3スルー以上は0Gからでも激熱。',
        '【押忍モード（149G）】設定変更時やAT終了後は149G天井の押忍モード移行率優遇。',
        '【宗次郎ポイント】液晶右下の宗次郎メーター赤発光・赤エフェクト時は宗次郎特訓（AT直撃期待度大）までツッパ。'
      ],
      triggerSignals: [
        'ATスルー回数 4スルー以上（リセ時3スルー以上） ➔ AT当選までツッパ',
        '特訓前 轟「赤オーラ / 紫オーラ」 ➔ 押忍モード・天国濃厚（当否までツッパ）',
        '宗次郎ポイント「蓄積大（赤）」 ➔ 宗次郎特訓発動までツッパ'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、引き戻し特訓否定（または敗北）で即ヤメ',
      stopNg: 'AT 4スルー以上台、轟赤オーラ台、宗次郎ポイント赤蓄積台',
      tip: '差枚＋1500枚前後の台は有利切断（頂RISE UP）目前のため続行視野。'
    },
    settingSignals: [
      {
        categoryName: '🖼️ ボーナス・AT終了画面（設定示唆）',
        items: [
          { badge: '設定6濃厚', character: '終了画面', content: 'パンダ＆コパンダ（金枠）', meaning: '設定6濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: '終了画面', content: '操＆雫（銀枠）', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5示唆 [強]', character: '終了画面', content: '薫＆マチ子（赤枠）', meaning: '設定5示唆（強）', priority: 'warning', action: '様子見' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L押忍！番長4 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】スルー回数別（0〜4スルー）・ボーナス間思考停止ボーダー',
        '宗次郎特訓 ＆ 差枚＋1500枚有利切断狙い手順',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
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
    id: 'tokyoghoul',
    name: 'Lパチスロ 東京喰種',
    kana: 'えるぱちすろとうきょうぐーる',
    maker: 'フィールズ',
    type: 'スマスロ (AT)',
    tags: ['大注目新台', 'フィールズ', 'スマスロ'],
    ceilingSummary: '最大1000G / CZ最大6スルー',
    yameDokiSummary: 'AT後 100G前兆否定でヤメ',
    highlightSignal: '梟(金)=設定4↑ / 有馬(虹)=設定6確定',
    aimPoints: {
      videoSummary: [
        '【一枚絵によるモード示唆】通常時の一枚絵で「月山習（赤）」は天国準備以上、「金木/菫香喰種（緑）」はチャンスモード以上濃厚。',
        '【リゼボイス】東京上空ステージ中のリゼボイス発生はCZ「大喰いの利世」以上が当選濃厚。'
      ],
      triggerSignals: [
        '一枚絵「月山習（赤）」 ➔ 天国準備以上濃厚（当選までツッパ）',
        '一枚絵「梟（金）」 ➔ 設定4以上濃厚（終日ツッパ）',
        '一枚絵「有馬貴将（虹）」 ➔ 設定6濃厚（終日ツッパ）',
        'CZ 4スルー以上 ➔ スルー天井（最大6回）狙い'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、100Gのゾーン前兆否定で即ヤメ',
      stopNg: '一枚絵赤以上、CZ 4スルー以上台',
      tip: '差枚数と天国移行率を見て押し引きを判断。'
    },
    settingSignals: [
      {
        categoryName: '🖼️ AT終了画面 ＆ 一枚絵（設定示唆）',
        items: [
          { badge: '設定6濃厚', character: '一枚絵', content: '有馬貴将（虹）', meaning: '設定6濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: '一枚絵', content: '梟（金）', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定濃厚', character: '一枚絵', content: '鈴屋什造（赤）', meaning: '偶数設定濃厚！', priority: 'warning' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '四方＆イトリ＆ウタ', meaning: '高設定示唆（強）', priority: 'warning' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L東京喰種 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】CZスルー回数・規定G数別思考停止ボーダー',
        '喰種ポイント蓄積狙い ＆ 有利切断恩恵マニュアル',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'seiya',
    name: 'L聖闘士星矢 海皇覚醒 CUSTOM EDITION',
    kana: 'えるせいんとせいやかいおうかくせい',
    maker: '三洋',
    type: 'スマスロ (AT)',
    tags: ['万枚特化', 'SANYO', 'スマスロ'],
    ceilingSummary: '最大999G / GB最大9スルー',
    yameDokiSummary: 'GB後 火時計色確認後ヤメ',
    highlightSignal: '不屈大=次回解放ツッパ / 火時計赤=GBレベル4↑',
    aimPoints: {
      videoSummary: [
        '【不屈ポイント蓄積】不屈「小（40pt以上）」「中（45pt以上）」「大（50ptMAX）」を確認。大出現時は次回GBで聖闘士RUSH確定のため解放までツッパ。',
        '【GB終了時の火時計ボタン】GB終了画面で火時計PUSH。「緑（GBレベル3/70%↑）」「赤（レベル4/80%↑）」「紫（レベル5/100%）」はRUSH当選までツッパ。'
      ],
      triggerSignals: [
        '不屈ポイント「中 / 大」確認 ➔ RUSH突入までツッパ',
        'GB終了時 火時計「緑 / 赤 / 紫」 ➔ RUSH突入までツッパ',
        'アイキャッチ「レディース / クマノミ」 ➔ GBまたはRUSH本前兆濃厚'
      ]
    },
    yameRules: {
      stopOk: 'GB・AT終了後、火時計色確認（白/青/黄）＋不屈示唆なし ➔ 即ヤメ',
      stopNg: '不屈中以上、火時計緑以上、GB 6スルー以上台',
      tip: 'リセット台はGBレベル・不屈ポイントが大幅優遇されるため早いゲーム数から攻める。'
    },
    settingSignals: [
      {
        categoryName: '🏆 GB・AT終了画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: 'アテナ単独画面', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'カノン幽閉画面', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '星矢＆沙織画面', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定2以上確定', character: '終了画面', content: '貴鬼（単独）', meaning: '設定2以上確定', priority: 'normal' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L聖闘士星矢 海皇覚醒 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時・GBスルー回数・GBレベル別思考停止ボーダー',
        '不屈ポイント狙い ＆ ビッグバンチャレンジ有利切断術',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'godeater',
    name: 'Lパチスロ ゴッドイーター リザレクション',
    kana: 'えるぱちすろごっどいーたーりざれくしょん',
    maker: '山佐',
    type: 'スマスロ (AT)',
    tags: ['人気急上昇', '山佐', 'スマスロ'],
    ceilingSummary: '最大1000G ＋ 前兆（リセ時 600G短縮）',
    yameDokiSummary: 'AT後 即ヤメ（天国前兆否定）',
    highlightSignal: 'シオ=設定4↑ / コタツ=設定6確定',
    aimPoints: {
      videoSummary: [
        '【朝イチ・短縮天井】リセット時は最大600G＋前兆に短縮。100G・300Gのゾーン当選率も優遇。',
        '【ストーリー終了ボイス】ストーリーパート終了画面でサブ液晶をタッチすると設定示唆ボイスが発生。'
      ],
      triggerSignals: [
        '液晶セリフ演出「赤文字」 ➔ 本前兆期待度特大（ツッパ）',
        '非レア役時の「その調子です！」 ➔ 高確滞在濃厚',
        'リセット台 ➔ 600G短縮天井狙い'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、サブ液晶タッチボイス確認 ＋ 100G前兆否定で即ヤメ',
      stopNg: 'シオ（設定4以上）、サクヤ（高設定示唆強）、セリフ赤出現台',
      tip: '差枚プラス時は即ヤメ推奨。'
    },
    settingSignals: [
      {
        categoryName: '🗣️ ストーリー終了時 サブ液晶ボイス（設定示唆）',
        items: [
          { badge: '設定6確定', character: 'シオ', content: '「いただきま〜す」', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'エリナ', content: '「私、大きくなったら…」', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: 'レン', content: '「あなたはそのアラガミを…」', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数示唆 [強]', character: 'サクヤ', content: '「私は、私のやるべきことを…」', meaning: '偶数設定示唆（強）', priority: 'warning' },
          { badge: '高設定示唆', character: 'ソーマ', content: '「思い出ってのは、悪いことばかりでも…」', meaning: '高設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🏆 AT終了画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '全員集合（赤背景）/ こたつ画面', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: 'シオ（単独）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定3以上確定', character: '終了画面', content: 'リンドウ（単独）', meaning: '設定3以上確定！', priority: 'danger', action: 'ツッパ視野' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lゴッドイーター リザレクション 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時（600G短縮）・ゾーン狙い（100G/300G）思考停止ボーダー',
        '漆黒の捕食者・有利切断条件の完全把握',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'tolove',
    name: 'L ToLOVEるダークネス',
    kana: 'えるとらぶるだーくねす',
    maker: 'オリンピア',
    type: 'スマスロ (AT)',
    tags: ['人気急上昇', '平和', 'スマスロ'],
    ceilingSummary: '最大999G ＋ 前兆（リセ時 650G短縮）',
    yameDokiSummary: 'ST抜け即ヤメ（引き戻し確認後）',
    highlightSignal: '良スタンプ=設定4↑ / 優スタンプ=設定5↑',
    aimPoints: {
      videoSummary: [
        '【リセット短縮恩恵】設定変更時は天井が650G＋前兆に短縮。さらに初当り時のボーナス枚数優遇。',
        '【STスルー天井】ST駆け抜けが連続している台は次回優遇措置あり。'
      ],
      triggerSignals: [
        'アイキャッチ「赤背景」 ➔ 規定pt短縮濃厚（ツッパ）',
        'リセット台 ➔ 650G短縮天井狙い'
      ]
    },
    yameRules: {
      stopOk: 'ST終了後、示唆スタンプ確認 ＋ 前兆なしで即ヤメ',
      stopNg: '良スタンプ（設定4以上）、優スタンプ（設定5以上）、極スタンプ（設定6確定）出現台',
      tip: '差枚数と連チャン状況に応じてヤメどきを厳格に守る。'
    },
    settingSignals: [
      {
        categoryName: '🏆 ST終了画面 スタンプ（設定確定）',
        items: [
          { badge: '設定6確定', character: 'スタンプ', content: '極スタンプ（虹）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'スタンプ', content: '優スタンプ（金）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'スタンプ', content: '良スタンプ（銀）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定3以上確定', character: 'スタンプ', content: '吉スタンプ（銅）', meaning: '設定3以上確定', priority: 'warning' },
          { badge: '設定5期待度UP', character: '終了画面', content: 'メア（単独画面）', meaning: '設定5期待度大幅UP！', priority: 'warning', action: '様子見' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L ToLOVEるダークネス 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時（650G短縮）・STスルー回数別ボーダー',
        '愛すラッシュ・ハーレムモード移行条件のプロ見極め術',
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
        categoryName: '🤖 ボーナス・AT終了画面（設定示唆）',
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
  },
  {
    id: 'otome5',
    name: 'L戦国乙女5 業火を穿つ宿焔の双刃',
    kana: 'えるせんごくおとめふぁいぶ',
    maker: 'オリンピア',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', '平和', 'スマスロ'],
    ceilingSummary: '最大799G ＋ 前兆（リセ時 600G短縮）',
    yameDokiSummary: 'AT後 乙女アタック・前兆否定でヤメ',
    highlightSignal: '金スタンプ=設定4↑ / 虹スタンプ=設定6',
    aimPoints: {
      videoSummary: [
        '【ゴエモン依頼ポイント】液晶右上の家紋エフェクト大出現時はポイントMAX（CZ突入）間近。',
        '【朝イチ恩恵】設定変更時は天井が600Gに短縮＋モード優遇。'
      ],
      triggerSignals: [
        'ゴエモン依頼ポイント「蓄積大」 ➔ CZ突入までツッパ',
        'リセット台（朝イチ0G〜） ➔ 600G短縮天井狙い',
        '巫女カウンタ減算狙い ➔ 規定pt到達まで'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、乙女アタック前兆否定（約30G）で即ヤメ',
      stopNg: 'ゴエモンポイント大、金スタンプ以上出現台',
      tip: '前兆ステージ（軍師ステージ等）抜けをしっかり見極める。'
    },
    settingSignals: [
      {
        categoryName: '🏆 AT終了画面 スタンプ（設定確定）',
        items: [
          { badge: '設定6確定', character: 'スタンプ', content: '極スタンプ（虹）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'スタンプ', content: '優スタンプ（金）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'スタンプ', content: '良スタンプ（銀）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L戦国乙女5 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時・ゾーン狙い・短縮天井ボーダー',
        'ゴエモンポイント狙い ＆ 有利切断恩恵マニュアル',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'kabaneri2',
    name: 'スマスロ 甲鉄城のカバネリ 海門決戦',
    kana: 'すますろこうてつじょうのかばねりかいもんけっせん',
    maker: 'サミー',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', 'サミー', 'スマスロ'],
    ceilingSummary: '最大1000G ＋ 前兆（リセ時 650G短縮）',
    yameDokiSummary: 'ST終了後 即ヤメ（短縮時は次回考慮）',
    highlightSignal: '生駒＆無名（虹）=設定6 / 菖蒲（金）=設定4↑',
    aimPoints: {
      videoSummary: [
        '【リセット短縮天井】設定変更時は天井が650G＋前兆に短縮。さらに美馬ST後・上位ST後も650G天井に短縮。',
        '【黒煙ポイント】液晶左下の黒煙エフェクト（大）出現時は裏美馬ST直撃濃厚のため解放までツッパ。'
      ],
      triggerSignals: [
        '黒煙エフェクト「大」出現 ➔ 裏美馬ST解放までツッパ',
        'リセット台 / 美馬ST後 ➔ 650G短縮天井狙い',
        'カバネリポイント蓄積MAX間近台 ➔ CZ発動までツッパ'
      ]
    },
    yameRules: {
      stopOk: 'ST終了後、通常ステージ戻りで即ヤメ（※短縮条件該当時はG数確認）',
      stopNg: '黒煙大確認台、設定4以上確定画面出現台',
      tip: '美馬ST後は天井が短縮されるため即ヤメ厳禁（状況に応じてツッパ）。'
    },
    settingSignals: [
      {
        categoryName: '🏆 ST終了画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '生駒＆無名（虹枠）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: '美馬＆無名（赤枠）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '菖蒲（金枠）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '無名（単独・夕方）', meaning: '高設定示唆（強）', priority: 'warning' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スマスロ カバネリ海門決戦 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時（650G）・美馬ST後短縮思考停止ボーダー',
        '黒煙ポイント狙い ＆ 裏美馬ST突入条件の完全把握',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'ga-rei',
    name: 'Lパチスロ 喰霊-零-Re',
    kana: 'えるぱちすろがれいぜろあーるいー',
    maker: 'JFJ',
    type: 'スマスロ (AT)',
    tags: ['最新台', 'JFJ', 'スマスロ'],
    ceilingSummary: '最大999G ＋ 前兆（無限ART当選）',
    yameDokiSummary: 'ボーナス・ART後 前兆否定で即ヤメ',
    highlightSignal: '殺生石役物=高確示唆 / 妖力穢れ蓄積',
    aimPoints: {
      videoSummary: [
        '【999G天井恩恵の破壊力】通常時999G到達時は「無限ART」当選が濃厚となり、次回ボーナス当選までARTが継続する最強恩恵。',
        '【妖力ポイント（穢れ）】CZ失敗時やハマリで蓄積する妖力ポイントがMAXになると上位CZ突入。'
      ],
      triggerSignals: [
        '液晶左上「殺生石役物」発光 ➔ 高確・超高確滞在濃厚（ツッパ）',
        '妖力エフェクト「大」出現 ➔ 妖力解放までツッパ'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス・ART終了後、殺生石役物消灯 ＋ 前兆否定で即ヤメ',
      stopNg: '妖力エフェクト大、殺生石役物点滅中の台',
      tip: '天井恩恵が無限ARTのため、深いハマリ台は最優先で確保。'
    },
    settingSignals: [
      {
        categoryName: '🖼️ ボーナス・ART終了画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '黄泉＆神楽（ウェディング・虹）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: '対策室メンバー集合（赤）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '黄泉＆神楽（私服・金）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lパチスロ 喰霊-零-Re 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】無限ART天井（999G）・思考停止ボーダー',
        '妖力穢れポイント蓄積狙い ＆ 殺生石高確見極め手順',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  }
]
