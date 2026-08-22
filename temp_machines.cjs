import type { Machine } from '../types'

module.exports = [
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
          { badge: '設定6確定', character: 'トロフィー', content: '虹トロフィー出現', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'キリン柄トロフィー出現', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー', content: '金トロフィー出現', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定3以上確定', character: 'トロフィー', content: '銀トロフィー出現', meaning: '設定3以上確定', priority: 'warning' },
          { badge: '設定2以上確定', character: 'トロフィー', content: '銅トロフィー出現', meaning: '設定2以上確定', priority: 'normal' }
        ]
      },
      {
        categoryName: '⚡ 通常時・天国＆前兆確定演出（即ヤメ厳禁）',
        items: [
          { badge: '天国濃厚', character: '演出', content: 'ステチェン時の稲妻演出（大）発生', meaning: '内部天国以上濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '天国濃厚', character: '演出', content: '青雑魚に北斗奥義 / 雑魚に百裂拳', meaning: '内部天国濃厚！', priority: 'danger', action: 'ツッパ' },
          { badge: '天国濃厚', character: '演出', content: '第3停止時に「見渡し / 振り向き」＋リプレイ', meaning: '天国以上濃厚！', priority: 'danger', action: 'ツッパ' },
          { badge: '天国濃厚', character: 'ランプ', content: '入賞時バックライト白点灯＋リプレイ（ランプ矛盾）', meaning: '天国濃厚！', priority: 'danger', action: 'ツッパ' },
          { badge: '天国濃厚', character: '断末魔', content: '雑魚の断末魔「ヘブン！」', meaning: '天国濃厚！', priority: 'danger', action: 'ツッパ' }
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
          { badge: '設定5示唆 [強]', character: '終了画面', content: '薫＆マチ子（赤枠）', meaning: '設定5示唆（強）', priority: 'warning', action: '様子見' },
          { badge: '高モード示唆', character: '終了画面', content: '富士山（夕方 / 夜）', meaning: '押忍モード（149G）フォロー推奨', priority: 'normal', action: '149Gまで' }
        ]
      },
      {
        categoryName: '🥋 轟オーラ ＆ モード示唆（特訓前）',
        items: [
          { badge: '天国濃厚', character: 'オーラ', content: '轟オーラ「紫」', meaning: '次回天国モード濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '押忍モード濃厚', character: 'オーラ', content: '轟オーラ「赤」', meaning: '押忍モード（149G天井）濃厚！', priority: 'danger', action: '149Gまでツッパ' },
          { badge: '通常モード', character: 'オーラ', content: '轟オーラ「青 / 黄」', meaning: 'デフォルト示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🥊 宗次郎ポイント蓄積示唆',
        items: [
          { badge: '宗次郎特訓間近', character: 'エフェクト', content: '宗次郎メーター「赤発光 / 赤エフェクト大」', meaning: '宗次郎特訓（AT期待度大）発動間近！', priority: 'danger', action: '発動までツッパ' }
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
        categoryName: '🖼️ AT終了画面（設定示唆）',
        items: [
          { badge: '設定4以上濃厚', character: '終了画面', content: '金木＆霧島（タキシード＆ドレス）', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定2以上濃厚', character: '終了画面', content: '神代利世（単独）', meaning: '設定2以上濃厚', priority: 'normal' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '四方＆イトリ＆ウタ', meaning: '高設定示唆（強）', priority: 'warning', action: '様子見' },
          { badge: '高設定示唆 [弱]', character: '終了画面', content: '笛口親子（雛実＆涼子）', meaning: '高設定示唆（弱）', priority: 'normal' },
          { badge: '偶数設定示唆', character: '終了画面', content: '鈴屋＆篠原', meaning: '偶数設定示唆', priority: 'normal' },
          { badge: '奇数設定示唆', character: '終了画面', content: '亜門＆真戸', meaning: '奇数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🎨 CZ失敗時 一枚絵示唆（設定＆モード）',
        items: [
          { badge: '設定6濃厚', character: '一枚絵', content: '有馬貴将（虹背景）', meaning: '設定6濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: '一枚絵', content: '梟（金背景）', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定濃厚', character: '一枚絵', content: '鈴屋什造（赤背景）', meaning: '偶数設定濃厚！', priority: 'warning' },
          { badge: '天国準備濃厚', character: '一枚絵', content: '月山習（赤背景）', meaning: '天国準備モード以上濃厚！', priority: 'danger', action: '当選までツッパ' },
          { badge: 'チャンスモード濃厚', character: '一枚絵', content: '金木研喰種 / 霧島菫香喰種（緑背景）', meaning: 'チャンスモード以上濃厚！', priority: 'warning', action: 'ゾーンまで' },
          { badge: 'モードC濃厚', character: '一枚絵', content: '真戸呉緒（黄背景）', meaning: 'モードC以上濃厚！', priority: 'warning' },
          { badge: 'モードB濃厚', character: '一枚絵', content: '亜門鋼太朗（黄背景）', meaning: 'モードB以上濃厚', priority: 'normal' }
        ]
      },
      {
        categoryName: '🗣️ 通常時 セリフ演出（設定示唆＆天井示唆）',
        items: [
          { badge: '設定6濃厚', character: 'セリフ', content: '「特別な夜を楽しもうじゃないか」', meaning: '設定6濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: 'セリフ', content: '「存分に楽しもうじゃないか」', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4否定', character: 'セリフ', content: '「僕としたことがすまない」', meaning: '設定4を否定', priority: 'normal' },
          { badge: '設定3否定', character: 'セリフ', content: '「本は良いよね…」', meaning: '設定3を否定', priority: 'normal' },
          { badge: '設定2否定', character: 'セリフ', content: '「君はなかなかの活字中毒らしいね」', meaning: '設定2を否定', priority: 'normal' },
          { badge: '設定1否定', character: 'セリフ', content: '「不思議な香りだ」', meaning: '設定1を否定', priority: 'normal' },
          { badge: '300G以内当選濃厚', character: 'セリフ', content: '「3時までに僕のもとにきてくれ」', meaning: '残り300G以内の当選濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '600G天井否定', character: 'セリフ', content: '「心配しなくとも最悪の事態には…」', meaning: '最深天井600Gを否定', priority: 'normal' }
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
    id: 'kaguya',
    name: 'Lパチスロ かぐや様は告らせたい',
    kana: 'えるぱちすろかぐやさまはこくらせたい',
    maker: 'SANKYO',
    type: 'スマスロ (AT)',
    tags: ['高純増', 'SANKYO', 'スマスロ'],
    ceilingSummary: '最大1100G（REG後900G）/ CZ最大7スルー',
    yameDokiSummary: '130G引き戻し抜けヤメ',
    highlightSignal: 'アイキャッチ赤=天井短縮 / 金枠=設定4↑',
    aimPoints: {
      videoSummary: [
        '【REG後天井短縮】REG単発後は天井が液晶900G＋αに短縮。',
        '【130G引き戻し仕様】ボーナス・EXTRA終了後は130G付近まで引き戻し高確率。特に「超BIGループ後」や「裏REG後」は引き戻し率が大幅UP。',
        '【アイキャッチ赤の法則】ステージチェンジ時のアイキャッチが赤背景なら、規定チャンス目天井が大幅短縮濃厚。'
      ],
      triggerSignals: [
        'アイキャッチ「赤背景」 ➔ 規定チャンス目短縮濃厚（次回CZまでツッパ）',
        'REG後 ハマリ台 ➔ 900G短縮天井狙い',
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
          { badge: '高設定示唆 [強]', character: '終了画面', content: '藤原千花（水着 / パジャマ画面）', meaning: '高設定示唆（強）', priority: 'warning' },
          { badge: '偶数設定示唆', character: '終了画面', content: '早坂愛（私服画面）', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🎨 アイキャッチ ＆ 時計示唆（モード・規定数）',
        items: [
          { badge: '天国濃厚', character: 'アイキャッチ', content: 'ステージチェンジ時「紫背景アイキャッチ」', meaning: '天国モード（130G以内当選）濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '規定数大幅短縮', character: 'アイキャッチ', content: 'ステージチェンジ時「赤背景アイキャッチ」', meaning: '規定チャンス目天井が大幅短縮濃厚！', priority: 'warning', action: '次回CZまでツッパ' },
          { badge: 'チャンス目近し', character: '時計', content: '時計演出で長針・短針が「夜」を指す', meaning: '規定チャンス目回数到達が近い！', priority: 'normal' }
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
        categoryName: '🎭 CZ・AT終了画面（設定＆モード示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '劇団全員集合（虹枠画面）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'フランシーヌ（赤枠画面）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: 'しろがね＆あるるかん（金枠画面）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '天国濃厚＋高設定', character: 'CZ終了画面', content: '勝＆鳴海（金枠画面）', meaning: '次回天国濃厚＋高設定期待度大！', priority: 'danger', action: '次回当選までツッパ' },
          { badge: '天国濃厚', character: 'CZ終了画面', content: '勝＆鳴海（銀枠画面）', meaning: '次回天国モード濃厚！', priority: 'danger', action: '次回当選までツッパ' }
        ]
      },
      {
        categoryName: '🗣️ フェイスレスPUSH ＆ 幕引き示唆',
        items: [
          { badge: 'AT直撃濃厚', character: 'PUSHボイス', content: 'フェイスレスPUSH示唆（紫文字セリフ）', meaning: '次回CZ成功でAT直撃濃厚！', priority: 'danger', action: '次回CZまでツッパ' },
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
          { badge: '設定6確定', character: 'スタンプ', content: '極スタンプ（虹）出現', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'スタンプ', content: '優スタンプ（金）出現', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'スタンプ', content: '良スタンプ（銀）出現', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: 'モトチカ・ソウリン・モトナリ集合画面', meaning: '高設定示唆（強）', priority: 'warning' }
        ]
      },
      {
        categoryName: '🌸 ゴエモン依頼ポイント蓄積示唆',
        items: [
          { badge: 'CZ突入間近', character: 'エフェクト', content: '家紋エフェクト「大」が液晶上部に吸い込まれる', meaning: 'ゴエモン依頼ポイントMAX（CZ突入）間近！', priority: 'danger', action: 'CZ発動までツッパ' },
          { badge: '蓄積示唆', character: 'エフェクト', content: '家紋エフェクト「中」出現', meaning: 'ポイント蓄積中', priority: 'normal' }
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
          { badge: '設定6確定', character: 'トロフィー', content: '虹トロフィー出現', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'ケロット柄トロフィー出現', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー / 終了画面', content: '金トロフィー / 青島＆波多野（私服画面）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '青島（ドレス姿画面）', meaning: '高設定示唆（強）', priority: 'warning', action: '様子見' },
          { badge: '偶数設定示唆', character: '終了画面', content: '波多野一家 / 女性キャラ集合画面', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '⛑️ ヘルメット示唆（モード＆天国判別）',
        items: [
          { badge: '天国確定', character: 'ヘルメット', content: 'ヘルメット「ロゴ ＋ Ｖ」', meaning: '天国（第1周期）当選確定！', priority: 'danger', action: '1周期目ツッパ' },
          { badge: 'モードB以上濃厚', character: 'ヘルメット', content: 'ヘルメット「ロゴ ＋ キラキラエフェクト」', meaning: 'モードB以上濃厚！次回当選までツッパ！', priority: 'danger', action: '次回当選までツッパ' },
          { badge: 'モード示唆なし', character: 'ヘルメット', content: 'ヘルメット「ロゴなし」または「通常ロゴ」', meaning: 'デフォルト示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🚤 ライバルモード示唆（特殊優遇）',
        items: [
          { badge: '青島優遇', character: 'ライバル', content: '青島優出・青島ヘルメット出現', meaning: '青島VS波多野（上位ST）突入期待度UP！', priority: 'warning' },
          { badge: '榎木モード', character: 'ライバル', content: '榎木ヘルメット / 榎木優出', meaning: '優出モード突破期待度UP', priority: 'normal' },
          { badge: '蒲生モード', character: 'ライバル', content: '蒲生ヘルメット / 蒲生優出', meaning: '超抜チャレンジ当選率UP', priority: 'normal' }
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
          { badge: '設定6確定', character: '終了画面', content: 'アテナ（単独画面）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'カノン（幽閉画面）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '星矢＆沙織（2ショット画面）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定2以上確定', character: '終了画面', content: '貴鬼（単独画面）', meaning: '設定2以上確定', priority: 'normal' },
          { badge: '偶数設定示唆', character: '終了画面', content: '海将軍全員集合画面', meaning: '偶数設定示唆', priority: 'normal' },
          { badge: '奇数設定示唆', character: '終了画面', content: '青銅聖闘士5人集合画面', meaning: '奇数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🔥 GB終了時 火時計ボタンPUSH（GBレベル示唆）',
        items: [
          { badge: 'GBレベル5濃厚', character: '火時計', content: '火時計ボタン「紫点灯」', meaning: '次回GB勝率100%（AT直撃）濃厚！', priority: 'danger', action: 'AT当選までツッパ' },
          { badge: 'GBレベル4濃厚', character: '火時計', content: '火時計ボタン「赤点灯」', meaning: '次回GB勝率80%以上濃厚！', priority: 'danger', action: 'AT当選までツッパ' },
          { badge: 'GBレベル3濃厚', character: '火時計', content: '火時計ボタン「緑点灯」', meaning: '次回GB勝率70%以上濃厚！', priority: 'warning', action: 'ツッパ推奨' },
          { badge: 'GBレベル2示唆', character: '火時計', content: '火時計ボタン「黄点灯」', meaning: '次回GB勝率60%以上示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '⚡ 不屈ポイント蓄積 ＆ アイキャッチ示唆',
        items: [
          { badge: '不屈MAX確定', character: '不屈', content: '不屈オーラ「大（液晶全体を覆う）」', meaning: '不屈50pt到達！次回GBでRUSH確定！', priority: 'danger', action: '次回GBまでツッパ' },
          { badge: '不屈45pt以上', character: '不屈', content: '不屈オーラ「中」', meaning: '不屈45pt以上濃厚！', priority: 'warning', action: '解放までツッパ視野' },
          { badge: '本前兆濃厚', character: 'アイキャッチ', content: 'レディース画面 / クマノミ柄ペガサス', meaning: 'GBまたは聖闘士RUSH本前兆濃厚！', priority: 'danger', action: '当否までツッパ' }
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
    id: 'enen',
    name: 'Lパチスロ 炎炎ノ消防隊',
    kana: 'えるえんえんのしょうぼうたい',
    maker: 'SANKYO',
    type: 'スマスロ (AT)',
    tags: ['大人気', 'SANKYO', 'スマスロ'],
    ceilingSummary: '最大850G（リセ時 650G短縮）/ 伝道者5スルー',
    yameDokiSummary: '炎炎激闘（ST）抜け 即ヤメ',
    highlightSignal: '黒枠=高設定 / 伝道者5スルー=SPエピボ濃厚',
    aimPoints: {
      videoSummary: [
        '【伝道者の罠スルー天井】ST非当選のREG（伝道者の罠）が5連続した台は、次回6回目のボーナスが「SPエピソードボーナス」濃厚。',
        '【ST間天井】炎炎激闘（ST）間2000G（リセット時1500G）消化で天井到達となりSPエピソードボーナス当選。',
        '【リセット短縮】朝イチ設定変更時はボーナス間天井が650G＋αに短縮。'
      ],
      triggerSignals: [
        '伝道者の罠 4スルー・5スルー台 ➔ SPエピソードボーナスまでツッパ',
        'ST間ハマリ（通常時1500G以上）台 ➔ ST間天井（2000G）狙い',
        'リセット台（朝イチ） ➔ 650G短縮天井狙い'
      ]
    },
    yameRules: {
      stopOk: '炎炎激闘（ST）終了後、潜伏前兆（約30G）を否定して即ヤメ',
      stopNg: '伝道者の罠 4スルー以上、ST間1400G以上ハマリ台',
      tip: '浅いREG履歴は初当りとST中の見極めが必要（データ機確認）。'
    },
    settingSignals: [
      {
        categoryName: '🖼️ ボーナス終了画面（設定示唆）',
        items: [
          { badge: '設定6濃厚', character: '終了画面', content: '紅丸＆ジョーカー（金枠）', meaning: '設定6濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: '終了画面', content: 'シンラ＆アーサー（赤枠）', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '第8特殊消防隊（黒枠）', meaning: '高設定示唆（強）', priority: 'warning' },
          { badge: '偶数設定示唆', character: '終了画面', content: '環古達＆火華（紫枠）', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '👥 REG中 キャラ紹介シナリオ（設定示唆）',
        items: [
          { badge: '高設定示唆 [強]', character: 'シナリオ', content: '白装束シナリオ（ハウメア・カロン等）', meaning: '高設定期待度大幅アップ！', priority: 'warning', action: '様子見' },
          { badge: '偶数設定示唆', character: 'シナリオ', content: '灰島重工シナリオ（黒野・優一郎等）', meaning: '偶数設定示唆', priority: 'normal' },
          { badge: '基本シナリオ', character: 'シナリオ', content: '第8特殊消防隊シナリオ', meaning: 'デフォルト示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🚨 アイキャッチ ＆ モード示唆',
        items: [
          { badge: '伝道者の罠高確', character: 'アイキャッチ', content: '伝道者アイキャッチ出現', meaning: '伝道者の罠高確率状態滞在濃厚！', priority: 'warning' },
          { badge: '本前兆濃厚', character: 'アイキャッチ', content: '第8全員集合アイキャッチ', meaning: '初当りボーナス本前兆濃厚！', priority: 'danger', action: '当否までツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lパチスロ 炎炎ノ消防隊 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】ST間天井（2000G）・伝道者スルー回数別ボーダー',
        '裏炎炎激闘 ＆ 有利切断アドラバースト突入条件',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'mhrise',
    name: 'スマスロ モンスターハンターライズ',
    kana: 'すますろもんすたーはんたーらいず',
    maker: 'アデリオン',
    type: 'スマスロ (AT)',
    tags: ['大人気', 'アデリオン', 'スマスロ'],
    ceilingSummary: '最大999G / クエスト最大6スルー',
    yameDokiSummary: 'ボーナス後 カムラpt確認後ヤメ',
    highlightSignal: 'Lala&ミランダ=設定56示唆強 / 虹トロフィー=設定6',
    aimPoints: {
      videoSummary: [
        '【クエストスルー回数天井】クエスト6回連続失敗後の7回目クエストでボーナス確定。',
        '【風車回転（カムラポイント示唆）】液晶右下の風車が多く回るほど次回クエストまでの規定ポイントが近いサイン。',
        '【マガイマガドモード】液晶に紫の炎が浮かび上がるとマガイマガドモード（討伐で上位恩恵）滞在のチャンス。'
      ],
      triggerSignals: [
        'クエスト 4スルー・5スルー台 ➔ スルー天井（最大7回）狙い',
        'マガイマガド紫炎エフェクト頻発 ➔ マガイマガド討伐までツッパ',
        'リプレイ40回 アイルーセリフ「大チャンス」 ➔ CZ突入まで'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス・AT終了後、カムラポイントゾーン前兆否定で即ヤメ',
      stopNg: 'クエスト4スルー以上、マガイマガドモード示唆台',
      tip: 'エンタトロフィーは特定タイミング以外でも出現するため毎ゲーム注視。'
    },
    settingSignals: [
      {
        categoryName: '🏆 ボーナス終了画面 ＆ トロフィー（設定示唆）',
        items: [
          { badge: '設定6確定', character: 'トロフィー / 終了画面', content: '虹トロフィー / 全員集合画面', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'もみじ柄トロフィー', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー', content: '金トロフィー', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定56示唆 [強]', character: '終了画面', content: 'Lala＆ミランダ＆隊長画面', meaning: '設定5・6示唆（強・実戦上頻出！）', priority: 'warning', action: '終日ツッパ視野' },
          { badge: '偶数設定示唆', character: '終了画面', content: 'オトモアイルー＆ガルク集合画面', meaning: '偶数設定示唆', priority: 'normal' },
          { badge: '高設定示唆 [弱]', character: '終了画面', content: 'ヒノエ＆ミノト画面', meaning: '高設定示唆（弱）', priority: 'normal' }
        ]
      },
      {
        categoryName: '🌪️ 規定カムラpt ＆ マガイマガドモード示唆',
        items: [
          { badge: 'マガイマガド濃厚', character: 'エフェクト', content: '液晶に紫の炎が浮かび上がる演出', meaning: 'マガイマガドモード滞在の期待大！', priority: 'warning', action: '次回ボーナスまで' },
          { badge: '規定pt到達間近', character: '液晶役物', content: '風車が複数個回転する演出', meaning: '次回クエスト規定カムラpt到達が近い！', priority: 'normal' }
        ]
      },
      {
        categoryName: '🐱 アイルーセリフ（リプレイ40回時）',
        items: [
          { badge: 'CZ本前兆濃厚', character: 'セリフ', content: 'アイルー「大チャンスニャ！」', meaning: 'アイルーだるま落としCZ本前兆濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '前兆示唆', character: 'セリフ', content: 'アイルー「何か気配がするニャ」', meaning: 'CZ前兆示唆', priority: 'normal' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スマスロ モンハンライズ 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】クエストスルー回数・規定カムラpt思考停止ボーダー',
        '百竜夜行 ＆ 気焔万丈有利切断マニュアル',
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
          { badge: '高設定示唆', character: 'ソーマ', content: '「思い出ってのは、悪いことばかりでも…」', meaning: '高設定示唆', priority: 'normal' },
          { badge: 'デフォルト', character: 'ユウ / コウタ', content: '「いくぞ！」「まかせてよ！」', meaning: '奇数 / 偶数デフォルト', priority: 'normal' }
        ]
      },
      {
        categoryName: '🏆 AT終了画面 ＆ トロフィー（設定確定）',
        items: [
          { badge: '設定6確定', character: '終了画面 / トロフィー', content: 'こたつ画面 / 全員集合（赤背景）/ 虹トロフィー', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'ケロット柄トロフィー', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面 / トロフィー', content: 'シオ（単独画面）/ 金トロフィー', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定3以上確定', character: '終了画面', content: 'リンドウ（単独画面）', meaning: '設定3以上確定！', priority: 'danger', action: 'ツッパ視野' }
        ]
      },
      {
        categoryName: '💬 通常時 高確・前兆示唆セリフ',
        items: [
          { badge: '本前兆濃厚', character: 'セリフ', content: '液晶セリフ演出「赤文字」発生', meaning: 'ボーナス本前兆濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '高確滞在濃厚', character: 'セリフ', content: 'ハズレ・リプレイ時に「その調子です！」', meaning: '内部高確濃厚！', priority: 'normal' }
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
          { badge: '設定6確定', character: 'スタンプ', content: '極スタンプ（虹）出現', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'スタンプ', content: '優スタンプ（金）出現', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'スタンプ', content: '良スタンプ（銀）出現', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定3以上確定', character: 'スタンプ', content: '吉スタンプ（銅）出現', meaning: '設定3以上確定', priority: 'warning' },
          { badge: '設定5期待度UP', character: '終了画面', content: 'メア（単独画面）', meaning: '設定5期待度大幅UP！', priority: 'warning', action: '様子見' },
          { badge: '偶数設定示唆', character: '終了画面', content: 'ヤミ＆芽亜（水着画面）', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🎨 アイキャッチ ＆ モード示唆',
        items: [
          { badge: '次回当選濃厚', character: 'アイキャッチ', content: 'ステージチェンジ「金背景アイキャッチ」', meaning: '次回CZ/ボーナス当選濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '規定pt短縮濃厚', character: 'アイキャッチ', content: 'ステージチェンジ「赤背景アイキャッチ」', meaning: '規定ポイント天井短縮濃厚！', priority: 'warning', action: '次回CZまで' }
        ]
      },
      {
        categoryName: '💖 どきどきポイント蓄積示唆',
        items: [
          { badge: '愛すラッシュ間近', character: 'エフェクト', content: 'どきどきポイント「蓄積エフェクト大」', meaning: 'どきどきポイントMAX（上位特化恩恵）間近！', priority: 'danger', action: '解放までツッパ' }
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
          { badge: '設定6確定', character: '終了画面', content: 'パイロット全員集合（虹枠画面）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'ハルト＆エルエルフ（赤枠画面）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: 'アキラ＆サキ＆ショーコ（金枠画面）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定示唆', character: '終了画面', content: '女性キャラ集合画面（紫枠）', meaning: '偶数設定示唆', priority: 'normal' },
          { badge: 'デフォルト', character: '終了画面', content: 'ハルト単独 / エルエルフ単独（白枠）', meaning: 'デフォルト示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '⚡ 革命分岐 ＆ マリエ覚醒示唆',
        items: [
          { badge: 'マリエ覚醒濃厚', character: 'セリフ', content: '通常時 マリエの赤セリフ頻発', meaning: '次回革命ボーナス時マリエ覚醒（AT直撃）濃厚！', priority: 'danger', action: 'ボーナスまでツッパ' },
          { badge: '超革命優遇', character: '履歴', content: '決戦ボーナス 3連続以上スルー', meaning: '次回ボーナスが「革命ボーナス」に超優遇！', priority: 'warning', action: 'ツッパ' }
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
          { badge: '設定6確定', character: 'ボイス', content: 'アンちゃん「具志堅用高です！」/ 虹ランプ点灯', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'ボイス', content: 'アンちゃん「めんそーれ！（プレミアムボイス）」', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'ボイス', content: 'アンちゃん「はいさい！（特殊ボイス）」', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      },
      {
        categoryName: '🌺 ハイビスカス点滅パターン（モード示唆）',
        items: [
          { badge: '天国確定', character: 'ランプ', content: 'ハイビスカス「右のみ点滅」', meaning: '次回天国モード以上濃厚！', priority: 'danger', action: '32Gまでツッパ' },
          { badge: '超天国確定', character: 'ランプ', content: 'ハイビスカス「高速点滅 / スロー点滅」', meaning: '次回超天国以上濃厚！', priority: 'danger', action: '32Gまでツッパ' },
          { badge: '通常B以上濃厚', character: 'ランプ', content: 'ハイビスカス「同時点滅」', meaning: '通常Bモード以上濃厚！', priority: 'warning', action: '天国までツッパ視野' }
        ]
      },
      {
        categoryName: '🍒 チェリー停止形 示唆',
        items: [
          { badge: '通常B以上濃厚', character: '小役', content: '単チェリー（中段BAR停止）出現', meaning: '通常B以上濃厚！次回天国移行率UP！', priority: 'warning', action: 'ツッパ視野' },
          { badge: '本前兆濃厚', character: '小役', content: 'チェリー頻発（チェリー前兆）', meaning: 'ボーナス本前兆濃厚！', priority: 'danger', action: '当否まで' }
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
    id: 'kabaneri2',
    name: 'スマスロ 甲鉄城のカバネリ 海門決戦',
    kana: 'すますろこうてつじょうのかばねりかいもんけっせん',
    maker: 'サミー',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', 'サミー', 'スマスロ'],
    ceilingSummary: '最大996G（短縮時 596G / 4周期）',
    yameDokiSummary: 'ST終了後 即ヤメ（短縮時は次回考慮）',
    highlightSignal: '生駒＆無名（虹）=設定6 / 菖蒲（金）=設定4↑',
    aimPoints: {
      videoSummary: [
        '【短縮天井596G】設定変更時や美馬ST後、上位ST後は天井が596G＋α（最大4周期）に短縮。',
        '【ボーナス中ボイス】カバネリボーナス中の逆押し成功時ボイスで「景之（かげゆき）」発生時は高設定示唆。',
        '【黒煙ポイント】液晶左下の黒煙エフェクト（大）出現時は裏美馬ST直撃濃厚のため解放までツッパ。'
      ],
      triggerSignals: [
        '黒煙エフェクト「大」出現 ➔ 裏美馬ST解放までツッパ',
        'リセット台 / 美馬ST後 ➔ 596G短縮天井狙い',
        'サブ液晶 規定ポイント赤点灯 ➔ 周期到達までツッパ'
      ]
    },
    yameRules: {
      stopOk: 'ST終了後、通常ステージ戻りで即ヤメ（※短縮条件該当時はG数確認）',
      stopNg: '黒煙大確認台、設定4以上確定画面出現台',
      tip: '美馬ST後は天井が短縮されるため即ヤメ厳禁（状況に応じてツッパ）。'
    },
    settingSignals: [
      {
        categoryName: '🏆 ST終了画面 ＆ サミートロフィー（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面 / トロフィー', content: '生駒＆無名（虹枠画面）/ 虹トロフィー', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面 / トロフィー', content: '美馬＆無名（赤枠画面）/ キリン柄トロフィー', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面 / トロフィー', content: '菖蒲（金枠画面）/ 金トロフィー', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '無名（夕方画面）', meaning: '高設定示唆（強）', priority: 'warning' }
        ]
      },
      {
        categoryName: '🗣️ ボーナス中 逆押し成功時ボイス（設定示唆）',
        items: [
          { badge: '高設定示唆 [強]', character: 'ボイス', content: '景之（かげゆき）ボイス発生', meaning: '高設定示唆（強・合算10〜17%）', priority: 'warning', action: '様子見' },
          { badge: '奇数設定示唆', character: 'ボイス', content: '男性キャラボイス（生駒・逞生等）', meaning: '奇数設定示唆', priority: 'normal' },
          { badge: '偶数設定示唆', character: 'ボイス', content: '女性キャラボイス（無名・菖蒲等）', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '💨 黒煙ポイント（裏美馬ST示唆）',
        items: [
          { badge: '裏美馬解放濃厚', character: '黒煙', content: '黒煙エフェクト「大（画面全体を覆う）」', meaning: '黒煙MAX！次回初当りで裏美馬ST濃厚！', priority: 'danger', action: '次回初当りまでツッパ' },
          { badge: '黒煙蓄積大', character: '黒煙', content: '黒煙エフェクト「中」', meaning: '黒煙ポイント大幅蓄積！', priority: 'warning', action: '解放までツッパ視野' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スマスロ カバネリ海門決戦 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時（596G）・美馬ST後短縮思考停止ボーダー',
        '黒煙ポイント狙い ＆ 裏美馬ST突入条件の完全把握',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'onimusha3',
    name: 'スマスロ 新鬼武者3',
    kana: 'すますろしんおにむしゃすりー',
    maker: 'アデリオン',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', 'アデリオン', 'スマスロ'],
    ceilingSummary: '最大1000G / 6周期（リセ時 4周期短縮）',
    yameDokiSummary: 'AT後 1周期目抜け即ヤメ',
    highlightSignal: '覚醒鬼武者=高確C / 秀吉失敗後=1周期短縮',
    aimPoints: {
      videoSummary: [
        '【周期天井短縮】設定変更時は最大4周期に短縮。さらに「秀吉最終決戦失敗後」は次回1周期目に短縮。',
        '【鬼カウンター色変化】襖ウィンドウのセリフで鬼カウンターの色変化（紫・赤）が発生すれば大チャンス。'
      ],
      triggerSignals: [
        '秀吉最終決戦 失敗後台 ➔ 次回1周期目当選までツッパ',
        'リセット台 ➔ 4周期短縮天井狙い',
        '4周期・5周期ハマリ台 ➔ 周期天井（最大6周期）狙い'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、1周期目抜け（前兆否定）で即ヤメ',
      stopNg: '秀吉最終決戦失敗後、鬼カウンター赤点灯台',
      tip: '秀吉失敗後の1周期短縮は一般客の見落としが多い超お宝パターン。'
    },
    settingSignals: [
      {
        categoryName: '🏆 AT終了画面 ＆ トロフィー（設定示唆）',
        items: [
          { badge: '設定6確定', character: 'トロフィー', content: '虹トロフィー出現', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'もみじ柄トロフィー出現', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー', content: '金トロフィー出現', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高確C以上濃厚', character: 'ボーナス終了画面', content: '覚醒鬼武者画面', meaning: 'リーチ目高確C以上滞在濃厚！', priority: 'warning' }
        ]
      },
      {
        categoryName: '👹 鬼カウンター ＆ 襖セリフ示唆',
        items: [
          { badge: '本前兆濃厚', character: 'セリフ', content: '襖ウィンドウ「赤セリフ」出現', meaning: '周期到達時のボーナス本前兆濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '鬼カウンター赤変化', character: '演出', content: '鬼カウンターが赤く発光', meaning: '周期突破率大幅アップ！', priority: 'warning' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スマスロ 新鬼武者3 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】周期別（秀吉後1周期・短縮4周期）思考停止ボーダー',
        '極限覚醒ラッシュ ＆ 差枚数切断トリガー狙い手順',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'eva-shin',
    name: 'Lシン・エヴァンゲリオン',
    kana: 'えるしんえゔぁんげりおん',
    maker: 'ビスティ',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', 'ビスティ', 'スマスロ'],
    ceilingSummary: '最大1000G ＋ 前兆（リセ時 600G短縮）',
    yameDokiSummary: 'AT後 100G前兆否定でヤメ',
    highlightSignal: 'カヲル=設定6確定 / マリ＆アスカ=設定4↑',
    aimPoints: {
      videoSummary: [
        '【リセット短縮天井】設定変更時は最大600G＋前兆に天井短縮。',
        '【使徒バトル敗北時示唆】使徒バトル終了時のアイキャッチやボイスで次回CZ当選期待度を示唆。'
      ],
      triggerSignals: [
        'リセット台 ➔ 600G短縮天井狙い',
        'CZ 3スルー以上台 ➔ スルー天井狙い',
        'アイキャッチ「赤背景」 ➔ 当選までツッパ'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス・AT終了後、100Gゾーン前兆否定で即ヤメ',
      stopNg: 'カヲル画面、CZ 3スルー以上台',
      tip: '100GゾーンでのCZ当選率をチェックしてヤメる。'
    },
    settingSignals: [
      {
        categoryName: '🏆 ボーナス・AT終了画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '渚カヲル（単独・虹画面）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'シンジ＆カヲル（赤画面）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: 'マリ＆アスカ（金画面）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: '終了画面', content: '碇ゲンドウ＆冬月画面', meaning: '高設定示唆（強）', priority: 'warning' },
          { badge: '偶数設定示唆', character: '終了画面', content: '綾波レイ（プラグスーツ画面）', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '👁️ 使徒バトル終了時 アイキャッチ（モード示唆）',
        items: [
          { badge: '次回CZ濃厚', character: 'アイキャッチ', content: '使徒バトル終了時「赤背景アイキャッチ」', meaning: '次回CZ当選濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '高確示唆', character: 'アイキャッチ', content: '使徒バトル終了時「紫背景アイキャッチ」', meaning: '高確滞在示唆', priority: 'normal' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lシン・エヴァンゲリオン 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時・CZスルー回数別思考停止ボーダー',
        '暴走モード突入条件 ＆ 有利切断恩恵マニュアル',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'index2',
    name: 'スマスロ とある魔術の禁書目録2',
    kana: 'すますろとあるまじゅつのいんでっくすつー',
    maker: 'JFJ',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', 'JFJ', 'スマスロ'],
    ceilingSummary: '最大999G ＋ 前兆（CZ天井最大6回）',
    yameDokiSummary: 'AT後 即ヤメ（モード確認後）',
    highlightSignal: '当麻＆インデックス=設定6 / 麦野=設定4↑',
    aimPoints: {
      videoSummary: [
        '【CZスルー回数天井】CZ最大6スルー（7回目CZ）でAT直撃。',
        '【異能キャラ獲得】通常時のレア役で強力な異能キャラ（麦野・一方通行など）を獲得した台はCZ当選までツッパ推奨。'
      ],
      triggerSignals: [
        'CZ 4スルー・5スルー台 ➔ AT当選までツッパ',
        '強力な異能キャラ所持台 ➔ CZ当選まで',
        'リセット台 ➔ 天井短縮狙い'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、異能キャラ非所持 ＋ 前兆なしで即ヤメ',
      stopNg: 'CZ 4スルー以上、一方通行等の強キャラ所持台',
      tip: '異能キャラの組み合わせによる期待値を把握。'
    },
    settingSignals: [
      {
        categoryName: '🏆 AT終了画面 ＆ 藤丸コイン（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面 / コイン', content: '当麻＆インデックス（虹）/ 虹コイン出現', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: '御坂美琴＆食蜂操祈（赤）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面 / コイン', content: '麦野沈利（金）/ 金コイン出現', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定示唆', character: '終了画面', content: 'ヒロイン全員集合画面', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '⚡ 異能キャラ ＆ アイキャッチ示唆',
        items: [
          { badge: 'CZ本前兆濃厚', character: 'アイキャッチ', content: 'ステージチェンジ「赤枠アイキャッチ」', meaning: 'CZ本前兆濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '一方通行獲得', character: '異能キャラ', content: '液晶左下「一方通行（アクセラレータ）」獲得', meaning: 'CZ突破期待度激高！', priority: 'warning', action: 'CZ突入までツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スマスロ 禁書目録2 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】CZスルー回数・異能キャラ所持別ボーダー',
        'ULTIMATE BREAK ＆ 有利切断条件の完全把握',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'zenigata5',
    name: 'L主役は銭形5',
    kana: 'えるしゅやくはぜにがたふぁいぶ',
    maker: '平和',
    type: 'スマスロ (AT)',
    tags: ['大人気シリーズ', '平和', 'スマスロ'],
    ceilingSummary: '最大1399ガッツ（短縮時 899ガッツ）',
    yameDokiSummary: 'ゼニガタイム前兆否定 即ヤメ',
    highlightSignal: '銭形＆ルパン金枠=設定6 / 不二子=設定4↑',
    aimPoints: {
      videoSummary: [
        '【執念ポイント解放】CZ失敗やハマリで蓄積する執念ポイントがMAXになると次回AT当選時にビッグゲーム確定。',
        '【短縮天井】設定変更時や特定条件で最大899ガッツに短縮。'
      ],
      triggerSignals: [
        '執念ポイント「蓄積大（紫エフェクト）」 ➔ 解放までツッパ',
        'ゼニガダッシュ高確滞在台 ➔ ガッツ大量加算狙い',
        'ハマリ台（900ガッツ以上） ➔ 天井ツッパ'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、ゼニガタイム前兆（約30G）を否定して即ヤメ',
      stopNg: '執念ポイント大、高ガッツ到達台',
      tip: '実ゲーム数ではなく液晶ガッツ数で判断。'
    },
    settingSignals: [
      {
        categoryName: '🏆 AT終了画面 スタンプ（設定確定）',
        items: [
          { badge: '設定6確定', character: '終了画面 / スタンプ', content: '銭形＆ルパン（金枠）/ 極スタンプ（虹）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面 / スタンプ', content: 'ルパン一味集合（赤枠）/ 優スタンプ（金）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面 / スタンプ', content: '峰不二子（金枠）/ 良スタンプ（銀）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定示唆', character: '終了画面', content: '次元＆五ェ門画面', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '💜 執念ポイント蓄積示唆',
        items: [
          { badge: '執念MAX濃厚', character: 'エフェクト', content: '液晶に「紫エフェクト大」が吸い込まれる', meaning: '執念ポイント100pt到達！次回BIG確定！', priority: 'danger', action: 'AT当選までツッパ' },
          { badge: '執念蓄積大', character: 'エフェクト', content: '液晶に「紫エフェクト中」出現', meaning: '執念ポイント蓄積大！', priority: 'warning', action: '解放までツッパ視野' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L主役は銭形5 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】液晶ガッツ数・短縮ガッツ別思考停止ボーダー',
        '執念ポイント狙い ＆ 超逮捕ラッシュ有利切断術',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'nango-sp',
    name: 'L南国育ち SPECIAL',
    kana: 'えるなんごくそだちすぺしゃる',
    maker: '平和',
    type: 'スマスロ (沖スロ)',
    tags: ['沖スロ', '平和', 'スマスロ'],
    ceilingSummary: '最大999G（リセ時 333G短縮）',
    yameDokiSummary: 'ときめきゾーン（32G）抜け 即ヤメ',
    highlightSignal: 'プリメロボイス=設定4↑ / 虹蝶ランプ=設定6',
    aimPoints: {
      videoSummary: [
        '【朝イチ333G短縮】設定変更時は天井が333Gに短縮。さらに通常B以上スタート率が優遇。',
        '【遅れチェリー】レバーオン時の遅れ＋チェリー否定はボーナス濃厚。'
      ],
      triggerSignals: [
        'リセット台（朝イチ0G〜） ➔ 333G短縮天井狙い',
        '単発連続ハマリ台 ➔ 飛翔モード（天国）移行までツッパ'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス終了後、ときめきゾーン（32G）抜けて即ヤメ',
      stopNg: '初代モード示唆台、高設定確定ボイス台',
      tip: '連チャン抜け32Gでスパッとヤメるのが鉄則。'
    },
    settingSignals: [
      {
        categoryName: '🌺 ボーナス終了時ボイス ＆ 告知ランプ（設定示唆）',
        items: [
          { badge: '設定6確定', character: '告知ランプ', content: '虹蝶ランプ点灯', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'ボイス', content: 'プリメロ「ちゅらさん！（特殊ボイス）」', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定示唆', character: 'ボイス', content: '「ハイサイ！」ボイス発生', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🦋 飛翔モード ＆ 遅れ示唆',
        items: [
          { badge: '飛翔モード濃厚', character: '告知演出', content: 'バタフライランプ「赤発光 / 特殊点滅」', meaning: '超飛翔モード移行濃厚！', priority: 'danger', action: '連チャン終了まで' },
          { badge: 'ボーナス濃厚', character: '演出', content: 'レバーオン時「遅れ発生」＋チェリー否定', meaning: 'ボーナス本前兆濃厚！', priority: 'danger', action: '即ボーナス' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L南国育ち SPECIAL 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】リセット時（333G）・飛翔スルー回数別ボーダー',
        '超バタフライモード ＆ 有利切断ループ条件',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'sao2',
    name: 'スロット ソードアート・オンライン2',
    kana: 'すろっとそーどあーとおんらいんつー',
    maker: '大都技研',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', '大都技研', 'スマスロ'],
    ceilingSummary: '最大999G ＋ 前兆 / CZ最大6スルー',
    yameDokiSummary: 'ボスバトル敗北・AT後 即ヤメ',
    highlightSignal: 'キリト＆アスナ金枠=設定6 / アリス=設定4↑',
    aimPoints: {
      videoSummary: [
        '【ボスバトル初回勝利優遇】リセット時や特定条件で1戦目ボスバトルの勝利期待度が大幅UP。',
        '【CZスルー回数天井】CZ最大6スルー（7回目CZ）でAT直撃確定。'
      ],
      triggerSignals: [
        'CZ 4スルー・5スルー台 ➔ スルー天井（AT直撃）までツッパ',
        'おうちモード移行台 ➔ CZ突入まで',
        'リセット台 ➔ 短縮天井・1戦目優遇狙い'
      ]
    },
    yameRules: {
      stopOk: 'ボスバトル敗北時・AT終了後、前兆否定で即ヤメ',
      stopNg: 'CZ 4スルー以上、設定4以上確定画面出現台',
      tip: 'ミニキャラのアクションで高確・前兆を見極める。'
    },
    settingSignals: [
      {
        categoryName: '🏆 ボーナス・AT終了画面（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: 'キリト＆アスナ（ウェディング・金枠）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: 'シノン＆リーファ（赤枠）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: 'アリス＆ユージオ（金枠）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定示唆', character: '終了画面', content: 'ヒロイン水着集合画面', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '⚔️ おうちモード ＆ ボスバトル示唆',
        items: [
          { badge: 'CZ本前兆濃厚', character: 'ステージ', content: '「おうちモード」移行', meaning: 'CZ本前兆濃厚！', priority: 'danger', action: 'CZ突入まで' },
          { badge: '高確滞在濃厚', character: 'ミニキャラ', content: 'アスナ「頑張ってね」セリフ発生', meaning: '内部高確濃厚！', priority: 'normal' }
        ]
      }
    ],
    vipTeaser: {
      title: 'スロット SAO2 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】CZスルー回数・リセット短縮思考停止ボーダー',
        'ALfheim Online ＆ 有利切断トリガー攻略',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'sencole6',
    name: '戦国コレクション6',
    kana: 'せんごくこれくしょんしっくす',
    maker: 'コナミ',
    type: 'スマスロ (AT)',
    tags: ['人気シリーズ', 'コナミ', 'スマスロ'],
    ceilingSummary: '最大1280コレ（短縮時 400コレ）',
    yameDokiSummary: '128コレ前兆否定 即ヤメ',
    highlightSignal: '信長＆秀吉=設定6 / ステージ赤=天国期待',
    aimPoints: {
      videoSummary: [
        '【128コレ天国ゾーン】AT終了後の128コレ以内当選率は約35%〜高設定で優遇。',
        '【裏天国モード】裏天国移行時は128コレ以内当選＋上位AT確定。'
      ],
      triggerSignals: [
        'ステージ背景「赤」 ➔ 天国またはモードB濃厚（ツッパ）',
        '修羅モード「赤文字」 ➔ 本前兆濃厚',
        '短縮台（400コレ天井） ➔ 天井ツッパ'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、128コレ前兆（修羅モード）否定で即ヤメ',
      stopNg: 'ステージ背景赤、コレ丸ランプ赤点灯台',
      tip: '鬼ヶ島バカンスでのコレ数加算を見ながら攻める。'
    },
    settingSignals: [
      {
        categoryName: '🏆 AT終了画面 ＆ コナミコマンド（設定示唆）',
        items: [
          { badge: '設定6確定', character: '終了画面', content: '信長＆秀吉（虹枠画面）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: '終了画面', content: '家康＆三成（赤枠画面）', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '織田信長（単独・金枠画面）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '偶数設定示唆', character: '終了画面', content: '女性武将集合画面', meaning: '偶数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🏯 ステージ背景 ＆ 修羅モード示唆',
        items: [
          { badge: '天国・モードB濃厚', character: 'ステージ', content: 'ステージ背景「赤色エフェクト」', meaning: '天国またはモードB滞在濃厚！', priority: 'danger', action: '当否までツッパ' },
          { badge: '本前兆濃厚', character: '演出', content: '修羅モード中の「赤文字タイトル」', meaning: 'AT本前兆濃厚！', priority: 'danger', action: 'ツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: '戦国コレクション6 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】規定コレ数・リセット短縮思考停止ボーダー',
        '裏天国 ＆ 有利切断Super異世界制覇ラッシュ手順',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'sf6',
    name: 'Lストリートファイター6',
    kana: 'えるすとりーとふぁいたーしっくす',
    maker: 'エンターライズ',
    type: 'スマスロ (AT)',
    tags: ['格闘ゲーム', 'エンターライズ', 'スマスロ'],
    ceilingSummary: '最大999G ＋ 前兆 / 規定pt到達',
    yameDokiSummary: 'ST・ボーナス後 前兆否定で即ヤメ',
    highlightSignal: 'ボイス「456」=設定4↑ / 虹トロフィー=設定6',
    aimPoints: {
      videoSummary: [
        '【ドライブチャンス後ボイス】ドライブチャンス終了画面でPUSHボタンを押すと設定示唆ボイスが発生。',
        '【エンタトロフィー】ST終了画面でエンタトロフィーが出現すれば設定2以上濃厚。'
      ],
      triggerSignals: [
        'リセット台 ➔ 短縮天井狙い',
        'ハマリ台（700G以上） ➔ 天井ツッパ'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス・ST終了後、前兆否定で即ヤメ',
      stopNg: 'ボイス「456」、金トロフィー以上出現台',
      tip: '連チャン後の高確移行率をチェック。'
    },
    settingSignals: [
      {
        categoryName: '🗣️ ドライブチャンス終了時 PUSHボイス（設定示唆）',
        items: [
          { badge: '設定4以上濃厚', character: 'ボイス', content: '「456（フォー・ファイブ・シックス）」', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆 [強]', character: 'ボイス', content: '「It’s so cool」', meaning: '高設定示唆（強）', priority: 'warning', action: '様子見' },
          { badge: '偶数設定示唆', character: 'ボイス', content: '「Put your hands up」', meaning: '偶数設定示唆', priority: 'normal' },
          { badge: '奇数設定示唆', character: 'ボイス', content: '「check it out」', meaning: '奇数設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🏆 エンタトロフィー（設定確定）',
        items: [
          { badge: '設定6確定', character: 'トロフィー', content: '虹トロフィー出現', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定5以上確定', character: 'トロフィー', content: 'もみじ柄トロフィー出現', meaning: '設定5以上確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー', content: '金トロフィー出現', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lストリートファイター6 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】天井G数・スルー回数別思考停止ボーダー',
        'パーフェクトKO ＆ 有利切断恩恵マニュアル',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'yabachiba',
    name: 'Lヤバチバ',
    kana: 'えるやばちば',
    maker: 'ネット',
    type: 'スマスロ (沖スロ)',
    tags: ['沖スロ', 'ネット', 'スマスロ'],
    ceilingSummary: '最大999G / チェリー最大40回（リセ時30回）',
    yameDokiSummary: '虹7後 32G回して即ヤメ',
    highlightSignal: '大滑りチェリー=虹7濃厚 / 単チェリー=本前兆',
    aimPoints: {
      videoSummary: [
        '【大滑りチェリーの破壊力】3リール大滑りチェリーは「虹7ボーナス濃厚」。2リール大滑りはBIG以上。',
        '【チェリー回数天井】チェリー最大40回（リセット時30回）でボーナス当選。'
      ],
      triggerSignals: [
        '大滑りチェリー出現 ➔ 虹7ボーナス当選までツッパ',
        '単チェリー出現 ➔ 本前兆またはストック保持濃厚（ツッパ）',
        'チェリー回数ハマリ（25回以上）台 ➔ チェリー天井狙い'
      ]
    },
    yameRules: {
      stopOk: 'ボーナス終了後、32G回して光らなければ即ヤメ',
      stopNg: '大滑りチェリー出現台、ミニ花笠ランプ多灯台',
      tip: '虹7モード後はベル集中移行率が高いため32G抜け後も小役を確認。'
    },
    settingSignals: [
      {
        categoryName: '🌺 1日1回CHANCEボイス ＆ ランプ（設定示唆）',
        items: [
          { badge: '設定6確定', character: 'ボイス', content: '1日1回特殊プレミアムボイス（虹ランプ点灯）', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '高設定示唆', character: 'ボイス', content: 'リール停止時 違和感ボイス発生', meaning: '高設定示唆', priority: 'warning' }
        ]
      },
      {
        categoryName: '🍒 チェリー停止形 示唆（虹7・前兆）',
        items: [
          { badge: '虹7ボーナス濃厚', character: 'チェリー', content: '3リール大滑りチェリー出現', meaning: '最上位「虹7ボーナス」濃厚！', priority: 'danger', action: '即ツッパ' },
          { badge: 'BIG以上濃厚', character: 'チェリー', content: '2リール大滑りチェリー出現', meaning: 'BIGまたは虹7ボーナス濃厚！', priority: 'danger', action: 'ツッパ' },
          { badge: '本前兆濃厚', character: 'チェリー', content: '単チェリー出現', meaning: 'ボーナス前兆またはストック保持濃厚！', priority: 'warning', action: '当否まで' }
        ]
      }
    ],
    vipTeaser: {
      title: 'Lヤバチバ 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】チェリー回数・リセット短縮思考停止ボーダー',
        '虹7モード連チャン ＆ 有利切断ループ手順',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'hokuto-tensei2',
    name: 'L北斗の拳 転生の章2',
    kana: 'えるほくとのけんてんせいのしょうつー',
    maker: 'サミー',
    type: 'スマスロ (AT)',
    tags: ['大注目新台', 'サミー', 'スマスロ'],
    ceilingSummary: '最大1536あべし（リセ時 1280あべし）',
    yameDokiSummary: '128あべし（天国）否定で即ヤメ',
    highlightSignal: '上部中央ランプ金=設定6 / 伝承ロング=ツッパ',
    aimPoints: {
      videoSummary: [
        '【上部中央ランプ示唆】ランプ点灯パターンで「黄緑点滅（設定4以上濃厚）」「金点灯（設定6濃厚）」。',
        '【カサンドラ松明消灯】立ち止まり演出で松明消灯は高確滞在またはAT本前兆濃厚。',
        '【リセット短縮】設定変更時は最大天井が1280あべしに短縮。'
      ],
      triggerSignals: [
        '上部中央ランプ「黄緑点滅 / 金」 ➔ 終日ツッパ',
        '天破の刻ロングループ（伝承ロング）滞在 ➔ 転落までツッパ',
        'リセット台（朝イチ） ➔ 1280あべし短縮天井狙い'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、128あべし抜け ＋ 伝承モード転落で即ヤメ',
      stopNg: '天破の刻高確（伝承モード）滞在中、上部ランプ示唆台',
      tip: '天破の刻ループを捨てないよう伝承モード抜けを見極める。'
    },
    settingSignals: [
      {
        categoryName: '🏆 上部中央ランプ（設定示唆）',
        items: [
          { badge: '設定6濃厚', character: 'ランプ', content: '上部中央ランプ「金点灯」', meaning: '設定6濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: 'ランプ', content: '上部中央ランプ「黄緑点滅」', meaning: '設定4以上濃厚！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定2以上濃厚', character: 'ランプ', content: '上部中央ランプ「黄緑点灯」', meaning: '設定2以上濃厚', priority: 'warning' },
          { badge: '高設定示唆 [強]', character: 'ランプ', content: '上部中央ランプ「水色点滅」', meaning: '高設定示唆（強）', priority: 'warning' },
          { badge: '奇数・偶数示唆', character: 'ランプ', content: '白（設定2/4示唆）/ 白点滅（設定3/5示唆）', meaning: '偶奇設定示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '💡 上部両サイドランプ ＆ サブ液晶（規定あべし示唆）',
        items: [
          { badge: '576あべし以内強', character: 'ランプ', content: '両サイドランプ「水色点滅」', meaning: '576あべし以内の当選期待度大！', priority: 'danger', action: '当否までツッパ' },
          { badge: '896あべし以内強', character: 'ランプ', content: '両サイドランプ「水色＋上へ流れる発光」', meaning: '896あべし以内の当選期待度大！', priority: 'warning' },
          { badge: '規定あべし間近', character: 'サブ液晶', content: 'サブ液晶まわりランプ「金点灯」', meaning: '規定あべし到達目前！', priority: 'danger', action: 'ツッパ' },
          { badge: '高確・本前兆濃厚', character: 'カサンドラ', content: '立ち止まり演出で「松明消灯」', meaning: '高確またはAT本前兆濃厚！', priority: 'danger', action: 'ツッパ' }
        ]
      }
    ],
    vipTeaser: {
      title: 'L北斗転生2 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上】規定あべし数・リセット短縮思考停止ボーダー',
        '伝承モードループ率見極め ＆ SPバトル突入手順',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  }
]
