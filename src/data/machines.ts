import type { Machine } from '../types'

export const MACHINES_DATA: Machine[] = [
  {
    id: 'hokuto',
    name: 'スマスロ北斗の拳',
    kana: 'すますろほくとのけん',
    maker: 'サミー',
    type: 'スマスロ (AT機)',
    tags: ['人気No.1', 'サミー', 'スマスロ', 'AT'],
    specs: {
      ceiling: '通常時最大 1268G ＋ 前兆（設定変更時は800Gに短縮）',
      coin: '約34.7G / 50枚',
      bonusProb: '1/383.4（設定1）〜 1/235.1（設定6）',
      payout: '98.0%（設定1）〜 113.0%（設定6）',
      pureIncrease: '約4.1枚'
    },
    signals: [
      {
        categoryName: '🗣️ BB終了時サブ液晶タッチボイス',
        description: 'AT終了画面で必ずサブ液晶をタッチしてボイスを確認してください。',
        items: [
          { content: 'ケンシロウ「おまえは もう死んでいる！」', meaning: 'AT 1G連濃厚！', priority: 'high', action: '即レバーオンで回す' },
          { content: 'ユリア「まちつづけるのがわたしの宿命。そしてケンとの約束」', meaning: '設定5以上濃厚！', priority: 'high', action: '終日ツッパ推奨' },
          { content: 'ケンシロウ「戦うのが北斗神拳伝承者としての宿命だ!!」', meaning: '設定4以上濃厚！', priority: 'high', action: '終日ツッパ推奨' },
          { content: 'アミバ「ふむ… この秘孔ではないらしい…」', meaning: '高設定示唆［強］', priority: 'mid', action: 'ホール状況を見て続行判断' },
          { content: 'ジャギ「ケンシロウ おれの名を言ってみろ！」', meaning: '高設定示唆［中］', priority: 'mid', action: '押し引きの判断材料' },
          { content: 'シン「おまえが思っているほど北斗神拳は無敵ではない」', meaning: '高設定示唆［弱］', priority: 'low', action: '単体では追わない' },
          { content: 'サウザー「退かぬ！媚びぬ！省みぬ！」', meaning: '高設定示唆［弱］', priority: 'low', action: '単体では追わない' },
          { content: 'バット「おいおい、置いてかないでくれよ」', meaning: 'デフォルト（偶数示唆）', priority: 'low' },
          { content: 'リン「ケン、会いたかった」', meaning: 'デフォルト（奇数示唆）', priority: 'low' }
        ]
      }
    ],
    modeSignals: [
      {
        categoryName: '⚡ 通常時の天国（高確）示唆演出',
        items: [
          { title: 'ステージチェンジ時「稲妻（大）」', timing: 'ステチェン時', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: '雑魚に「北斗百裂拳」を放つ', timing: 'キャラ登場演出', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: '青雑魚に「奥義（岩山両斬波など）」', timing: '奥義演出', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: '第3停止「見渡し/振り向き」＋成立役リプレイ', timing: 'ケンシロウ動作', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: '入賞ランプ矛盾（白点灯でリプレイ等）', timing: '第3停止後', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: '「青オーラ（大）」発生', timing: 'ケンシロウ動作', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: 'マミヤ「あれがリンだな〜」', timing: 'マミヤ演出', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: '断末魔「ヘブン！」「あぢぢ〜」', timing: '断末魔演出', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: '老婆演出でレア役否定', timing: '老婆横切り', stars: '★★★', note: '即ヤメ厳禁・天国濃厚' },
          { title: 'リン「つまづく」「転ぶ」', timing: '第3停止', stars: '★★☆', note: '大チャンス（様子見）' },
          { title: 'バット「白缶/青缶3つ」「赤リンゴ3個」', timing: '第3停止', stars: '★★☆', note: '大チャンス（様子見）' }
        ]
      }
    ],
    yameDoki: {
      basic: 'AT終了後、サブ液晶ボイスを確認し、高確・前兆がないことを確認してヤメ。',
      checkPoints: [
        'サブ液晶タッチのボイス確認（確定ボイスや1G連を見逃さない）',
        '高確示唆演出（稲妻大・百裂拳・第3停止リプレイ見渡し等）がないか確認',
        '前兆演出が発生していないか確認'
      ],
      steps: [
        { step: 1, title: 'AT終了画面でサブ液晶をタッチ', desc: 'ボイスを確認。「おまえはもう死んでいる」なら1G連、「戦うのが〜」「まちつづけるのが〜」なら高設定確定のため続行。' },
        { step: 2, title: '内部状態（高確・天国）の確認', desc: '天国濃厚演出（稲妻大や百裂拳など）が出ている間は転落まで打ち切る。' },
        { step: 3, title: '示唆が静かになったらヤメ', desc: '高確・前兆演出が確認できなければ即ヤメ。' }
      ]
    },
    vipTeaser: {
      title: 'スマスロ北斗の拳 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上基準】差枚優遇（凹み台）・通常・冷遇（連チャン後）別の思考停止ボーダー',
        '一般客が捨てていく「15G潜伏天国刈り」実戦手順（機械割110%超）',
        '朝イチリセット天井（800G短縮）の等価/現金別プロボーダー',
        'ノリ打ち・パートナー共有用コピペメモ ＆ 現場のリアルQ&A 5選',
        '稼働中に「これ打てる？」を質問できるDiscord即レスSOS部屋'
      ]
    }
  },
  {
    id: 'monkey5',
    name: 'スマスロ モンキーターンV',
    kana: 'すますろもんきーたーんふぁいぶ',
    maker: '山佐',
    type: 'スマスロ (AT機)',
    tags: ['大人気', '山佐', 'スマスロ', 'AT'],
    specs: {
      ceiling: '通常時最大 795G ＋ 前兆（周期天井は最大6周期）',
      coin: '約32G / 50枚',
      bonusProb: '1/299.8（設定1）〜 1/222.9（設定6）',
      payout: '97.9%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約2.5枚（上位AT時 約4.0枚）'
    },
    signals: [
      {
        categoryName: '🪖 ヘルメットロゴ・示唆',
        description: 'AT終了時やステージチェンジ時のヘルメット演出でモードや天国を示唆します。',
        items: [
          { content: 'ヘルメット「ロゴ＋V」', meaning: '次回天国（1周期目当選）確定！', priority: 'high', action: '1周期目当選まで必ず続行' },
          { content: 'ヘルメット「ロゴ＋キラキラ」', meaning: '次回モードB以上濃厚！', priority: 'high', action: '次回当選までツッパ視野' },
          { content: 'ヘルメット「ロゴあり」', meaning: '通常B期待度アップ', priority: 'mid', action: '周期ptと相談' },
          { content: 'ヘルメット「ロゴなし（デフォルト）」', meaning: '通常示唆', priority: 'low' }
        ]
      },
      {
        categoryName: '🏆 AT終了画面・メダル示唆',
        description: 'AT終了画面に出現するキャラやメダルで設定を示唆します。',
        items: [
          { content: '金トロフィー / 虹トロフィー', meaning: '設定4以上 / 設定6確定！', priority: 'high', action: '終日ツッパ' },
          { content: '青島＆波多野（私服）', meaning: '設定4以上濃厚！', priority: 'high', action: '終日ツッパ' },
          { content: '青島（ドレス）', meaning: '高設定示唆［強］', priority: 'mid', action: '様子見' }
        ]
      }
    ],
    yameDoki: {
      basic: 'AT終了後、ヘルメットロゴを確認。ロゴ+Vやロゴ+キラキラでなければ即ヤメ推奨。',
      checkPoints: [
        'ヘルメットのロゴ（V・キラキラの有無）を必ず目視確認',
        '即優出モード（1G目の前兆）が発生していないか確認',
        '天国示唆がない場合は1周期目のゾーン追いは厳禁'
      ],
      steps: [
        { step: 1, title: 'AT終了後のヘルメット確認', desc: '「ロゴ＋V」なら天国当選までツッパ。「ロゴ＋キラキラ」なら次回当選までツッパ。' },
        { step: 2, title: 'ロゴなし・通常ロゴの場合', desc: '即前兆（即優出）がないことを確認して即ヤメ。' }
      ]
    },
    vipTeaser: {
      title: 'スマスロ モンキーターンV 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上基準】リセット時・短縮時（最大495G/4周期）の思考停止ボーダー',
        '青島優遇状態・有利区間切断条件の完全把握マニュアル',
        '激走チャージ後のライバルモード・蒲生/榎木/洞口狙い手順',
        'ノリ打ち・パートナー共有用コピペメモ ＆ 現場Q&A',
        '稼働中に「この周期打てる？」を即座に聞けるDiscord SOS部屋'
      ]
    }
  },
  {
    id: 'kaguya',
    name: 'Lパチスロ かぐや様は告らせたい',
    kana: 'えるぱちすろかぐやさまはこくらせたい',
    maker: 'SANKYO',
    type: 'スマスロ (AT機)',
    tags: ['爆発力', 'SANKYO', 'スマスロ', 'AT'],
    specs: {
      ceiling: '通常時最大 1100G（CZ天井は最大7回スルー）',
      coin: '約31G / 50枚',
      bonusProb: '1/361.3（設定1）〜 1/298.6（設定6）',
      payout: '97.7%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約9.0枚（超高純増！）'
    },
    signals: [
      {
        categoryName: '📸 ボーナス終了画面・アイキャッチ',
        description: 'ボーナス終了時の液晶画面やアイキャッチで設定や次回モードを示唆します。',
        items: [
          { content: '赤枠 / 金枠 / 虹枠画面', meaning: '高設定示唆［強］〜 設定6確定！', priority: 'high', action: '確定画面時は終日ツッパ' },
          { content: 'アイキャッチ「赤背景」', meaning: '次回規定チャンス目天井短縮濃厚！', priority: 'high', action: '次回CZまで続行' },
          { content: 'アイキャッチ「青背景 / 緑背景」', meaning: '規定チャンス目天井示唆', priority: 'mid' }
        ]
      }
    ],
    yameDoki: {
      basic: 'ボーナス・EXTRA終了後、引き戻しゾーン（130G付近）抜けで即ヤメ。',
      checkPoints: [
        'ボーナス後の130G引き戻しゾーンの確認',
        '裏REG後・超BIGループ後は引き戻し期待度大幅UPのため130Gまで必ずフォロー',
        'アイキャッチ赤背景時は次回CZまで続行'
      ],
      steps: [
        { step: 1, title: 'ボーナス終了後のアイキャッチ確認', desc: '赤背景が出たら次回CZ当選までツッパ。' },
        { step: 2, title: '130Gの引き戻しゾーン確認', desc: '130G前後で前兆否定を確認し、当選しなければヤメ。' }
      ]
    },
    vipTeaser: {
      title: 'Lかぐや様は告らせたい 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上基準】CZスルー回数・リセット短縮時の思考停止ボーダー',
        '裏REG後・超BIGループ後・有利切断後の130G引き戻し期待値刈り取り術',
        '時計演出・チャンス目規定回数のプロの見極め方',
        'ノリ打ち共有用メモ ＆ 現場Q&A集',
        'Discordリアルタイム質問部屋'
      ]
    }
  },
  {
    id: 'karakuri',
    name: 'Lパチスロ からくりサーカス',
    kana: 'えるぱちすろからくりさーかす',
    maker: 'SANKYO',
    type: 'スマスロ (AT機)',
    tags: ['万枚特化', 'SANKYO', 'スマスロ', 'AT'],
    specs: {
      ceiling: '通常時最大 1200G ＋ 前兆（CZ間天井）/ CZスルー天井 最大4回',
      coin: '約32.9G / 50枚',
      bonusProb: '1/564（設定1 ※AT初当り）〜 1/447（設定6）',
      payout: '97.5%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約2.8枚（上位AT時 約7.6枚）'
    },
    signals: [
      {
        categoryName: '🎭 幕引き・セリフ・終了画面示唆',
        description: 'CZ終了時やAT終了画面のセリフ・画面で次回モードや設定を示唆します。',
        items: [
          { content: 'CZ終了画面「勝＆鳴海（銀枠 / 金枠）」', meaning: '次回天国濃厚 / 設定4以上濃厚！', priority: 'high', action: '天国確認までツッパ' },
          { content: 'CZ終了時セリフ「背中を守る盾は頼もしい…」', meaning: '次回天国期待度アップ', priority: 'mid' },
          { content: 'フェイスレスPUSH示唆（紫）', meaning: '次回CZ成功でAT直撃濃厚！', priority: 'high', action: '次回CZまでツッパ' }
        ]
      }
    ],
    yameDoki: {
      basic: 'CZ失敗時・AT終了後、天国（液晶100G以内前兆）を確認してヤメ。',
      checkPoints: [
        'CZ終了時のセリフ・画面を必ず確認',
        '前回CZスルー回数（3スルー・4スルーはAT直撃までツッパ）',
        '液晶ゲーム数と実ゲーム数のズレ確認'
      ],
      steps: [
        { step: 1, title: 'CZ・AT終了時のセリフ確認', desc: '天国濃厚セリフや銀枠・金枠が出たら次回当選まで続行。' },
        { step: 2, title: '液晶100G付近の前兆確認', desc: '天国前兆を否定した時点で即ヤメ。' }
      ]
    },
    vipTeaser: {
      title: 'Lからくりサーカス 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上基準】CZスルー回数別（3スルー〜0Gツッパ）・液晶G数狙いボーダー',
        '運命の一劇失敗後・エンディング後の天国刈り取り術',
        'からくりエピソード・からくりレア役高確のハイエナ手順',
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
    type: 'スマスロ (AT機)',
    tags: ['超万枚', 'SANKYO', 'スマスロ', 'AT'],
    specs: {
      ceiling: '液晶ゲーム数最大 1500G（実ゲーム数約1000G） / CZスルー天井 最大7回',
      coin: '約31.3G / 50枚',
      bonusProb: '1/519（設定1 ※革命RUSH）〜 1/405（設定6）',
      payout: '97.3%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約7.2枚（超ハイスピード）'
    },
    signals: [
      {
        categoryName: '🤖 ラウンド開始画面・決戦ボーナススルー',
        description: 'ボーナス終了画面や決戦ボーナススルー回数に注目。',
        items: [
          { content: '決戦ボーナス連続スルー（3連続以上）', meaning: '次回革命ボーナス優遇！', priority: 'high', action: '次回ボーナスまでツッパ推奨' },
          { content: '終了画面「紫枠 / 金枠 / 虹枠」', meaning: '設定4以上 / 設定6確定！', priority: 'high', action: '終日ツッパ' },
          { content: 'ピノ演出・マリエ覚醒示唆', meaning: '裏モード・次回恩恵示唆', priority: 'mid' }
        ]
      }
    ],
    yameDoki: {
      basic: 'ボーナス・AT終了後、引き戻しゾーン（66G＋前兆）を抜けて即ヤメ。',
      checkPoints: [
        'AT終了後の66G引き戻しゾーンは必ず回す（引き戻し率約25%〜上位時約66%）',
        'ミミズモード（出玉が横ばいになる特異グラフ台）の判別',
        '決戦ボナ連続スルー時は革命ボナまで追う価値あり'
      ],
      steps: [
        { step: 1, title: 'ボーナス・AT後66Gまで回す', desc: '引き戻しゾーン（液晶ゲーム数ではなく実G数66G）を回して当選をチェック。' },
        { step: 2, title: '66G＋α前兆否定で即ヤメ', desc: '前兆が静かになったら即ヤメ。' }
      ]
    },
    vipTeaser: {
      title: 'L革命機ヴァルヴレイヴ 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上基準】液晶G数天井・CZスルー回数別の思考停止ボーダー',
        '超ミミズモード判別法 ＆ 差枚数マイナス台の優遇狙いマニュアル',
        '決戦ボーナススルー天井狙い・ハラキリDRIVE優遇区間の見極め',
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
    type: 'スマスロ (沖スロ・AT)',
    tags: ['沖スロ', 'ネット', 'スマスロ', 'AT'],
    specs: {
      ceiling: '通常時最大 999G ＋ 前兆（設定変更時は350Gに短縮）',
      coin: '約31.4G / 50枚',
      bonusProb: '1/319.4（設定1）〜 1/214.2（設定6）',
      payout: '97.5%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約3.0枚 / 上位約4.5枚'
    },
    signals: [
      {
        categoryName: '🌺 ランプ点滅パターン・チェリー示唆',
        description: 'ハイビスカス点滅パターンや単チェリー出現頻度に注目。',
        items: [
          { content: 'ハイビスカス「右のみ点滅」「高速点滅」', meaning: '次回天国以上濃厚！', priority: 'high', action: '32Gまで必ず続行' },
          { content: '単チェリー（スベリなし単チェ）頻発', meaning: '通常B以上滞在期待度特大！', priority: 'high', action: '天国当選までツッパ' },
          { content: 'チェリー回数（10回/15回/20回/25回）', meaning: '規定チェリーゾーン示唆', priority: 'mid' }
        ]
      }
    ],
    yameDoki: {
      basic: 'ボーナス終了後、32Gまで回して点滅がなければ即ヤメ。',
      checkPoints: [
        'ボーナス後32Gは天国ゾーンのため絶対にヤメ厳禁',
        '単チェリー出現時は通常B濃厚のため天国当選までツッパ',
        'リミットレスモード（虹パト）15連後・上位後は引き戻しゾーン確認'
      ],
      steps: [
        { step: 1, title: 'ボーナス終了後32G回す', desc: 'ハイビスカスが光らなければ通常転落。' },
        { step: 2, title: '単チェリー等の示唆がなければ32G即ヤメ', desc: '余計なチェリー追いはせず32Gでスパッとヤメるのがプロの鉄則。' }
      ]
    },
    vipTeaser: {
      title: 'Lチバリヨ2プラス 完全攻略（VIP限定）',
      points: [
        '【出玉率106%以上基準】リセット時（350G短縮）・スルー回数別の思考停止ボーダー',
        'リミットレス（虹パト）15連終了後の0Gツッパ期待値刈り取り術',
        'チャンスB引き継ぎ・2連目8G以内当選台の爆益狙いマニュアル',
        'ノリ打ち共有用メモ ＆ 現場Q&A',
        'Discordリアルタイム質問部屋'
      ]
    }
  }
]
