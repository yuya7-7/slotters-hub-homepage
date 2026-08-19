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
    specs: {
      ceiling: '1268G ＋ 前兆（設定変更時は800Gに短縮）',
      coin: '約34.7G / 50枚',
      bonusProb: '1/383.4（設定1）〜 1/235.1（設定6）',
      payout: '98.0%（設定1）〜 113.0%（設定6）',
      pureIncrease: '約4.1枚'
    },
    signals: [
      {
        categoryName: '🗣️ BB終了時 サブ液晶ボイス',
        items: [
          { badge: '設定5以上濃厚', character: 'ユリア', content: '「まちつづけるのがわたしの宿命…」', meaning: '設定5以上濃厚', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上濃厚', character: 'ケンシロウ', content: '「戦うのが北斗神拳伝承者としての宿命だ!!」', meaning: '設定4以上濃厚', priority: 'danger', action: '終日ツッパ' },
          { badge: '1G連濃厚', character: 'ケンシロウ', content: '「おまえは もう死んでいる！」', meaning: 'AT 1G連濃厚', priority: 'danger', action: '即レバーオン' },
          { badge: '高設定示唆 [強]', character: 'アミバ', content: '「ふむ… この秘孔ではないらしい…」', meaning: '高設定示唆（強）', priority: 'warning', action: '様子見' },
          { badge: '高設定示唆 [中]', character: 'ジャギ', content: '「ケンシロウ おれの名を言ってみろ！」', meaning: '高設定示唆（中）', priority: 'warning' },
          { badge: '高設定示唆 [弱]', character: 'シン / サウザー', content: '「おまえが思っているほど…」「退かぬ！媚びぬ！」', meaning: '高設定示唆（弱）', priority: 'normal' },
          { badge: 'デフォルト', character: 'リン / バット', content: '「ケン、会いたかった」「おいおい置いてかないで〜」', meaning: '奇数 / 偶数示唆', priority: 'normal' }
        ]
      }
    ],
    tenkokuSignals: {
      danger: [
        'ステチェン「稲妻（大）」',
        '雑魚に「北斗百裂拳」',
        '青雑魚に「奥義」',
        '第3停止リプレイで「見渡し/振り向き」',
        '入賞ランプ色矛盾（白点灯でリプ等）',
        'ケンシロウ「青オーラ（大）」',
        'マミヤ「あれがリンだな〜」',
        '断末魔「ヘブン！」「あぢぢ〜」',
        '老婆演出でレア役否定'
      ],
      warning: [
        'リン「つまづく / 転ぶ」',
        'バット「白缶/青缶3つ」「赤リンゴ3個」',
        '第3停止「見渡し/振り向き」（リプ以外）'
      ]
    },
    yameRules: {
      stopOk: 'AT終了後、サブ液晶ボイス確認 ＋ 高確演出なし ➔ 即ヤメ（0G）',
      stopNg: '天国濃厚演出（百裂拳・稲妻大・リプ見渡し等）や高設定ボイスが出ている台',
      tip: '差枚マイナス台は15〜30Gまで天国確認するのがプロの立ち回り。'
    },
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
    specs: {
      ceiling: '795G ＋ 前兆（周期天井 最大6周期）',
      coin: '約32G / 50枚',
      bonusProb: '1/299.8（設定1）〜 1/222.9（設定6）',
      payout: '97.9%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約2.5枚 / 上位約4.0枚'
    },
    signals: [
      {
        categoryName: '🪖 ヘルメットロゴ示唆',
        items: [
          { badge: '天国確定 (1周期目)', character: 'ヘルメット', content: '「ロゴ ＋ Ｖ」', meaning: '次回天国（1周期当選）確定！', priority: 'danger', action: '1周期目までツッパ' },
          { badge: 'モードB以上濃厚', character: 'ヘルメット', content: '「ロゴ ＋ キラキラ」', meaning: '次回モードB以上濃厚！', priority: 'danger', action: '次回当選までツッパ' },
          { badge: '通常B期待度UP', character: 'ヘルメット', content: '「ロゴあり」', meaning: '通常B期待度アップ', priority: 'warning' },
          { badge: 'デフォルト', character: 'ヘルメット', content: '「ロゴなし」', meaning: '通常示唆', priority: 'normal' }
        ]
      },
      {
        categoryName: '🏆 AT終了画面・トロフィー',
        items: [
          { badge: '設定6確定', character: 'トロフィー', content: '虹トロフィー', meaning: '設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '設定4以上確定', character: 'トロフィー', content: '金トロフィー / 青島＆波多野（私服）', meaning: '設定4以上確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      }
    ],
    tenkokuSignals: {
      danger: ['ヘルメット「ロゴ＋V」', '即優出モード（1G目からの前兆）'],
      warning: ['ヘルメット「ロゴ＋キラキラ」', '足合わせステージ移行']
    },
    yameRules: {
      stopOk: 'ヘルメットが「ロゴなし」または「通常ロゴ」で即前兆なし ➔ 即ヤメ（0G）',
      stopNg: 'ヘルメット「ロゴ＋V」「ロゴ＋キラキラ」や即優出が発生した台',
      tip: '天国示唆がない場合は1周期目のゾーン追いは厳禁（期待値マイナス）。'
    },
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
    specs: {
      ceiling: '1100G（CZスルー回数 最大7回）',
      coin: '約31G / 50枚',
      bonusProb: '1/361.3（設定1）〜 1/298.6（設定6）',
      payout: '97.7%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約9.0枚（超高純増）'
    },
    signals: [
      {
        categoryName: '📸 アイキャッチ ＆ 終了画面',
        items: [
          { badge: '天井短縮濃厚', character: 'アイキャッチ', content: '「赤背景」', meaning: '規定チャンス目天井短縮濃厚！', priority: 'danger', action: '次回CZまでツッパ' },
          { badge: '設定4以上濃厚', character: '終了画面', content: '金枠 / 虹枠画面', meaning: '設定4以上 / 設定6確定！', priority: 'danger', action: '終日ツッパ' },
          { badge: '規定回数示唆', character: 'アイキャッチ', content: '「青背景 / 緑背景」', meaning: 'チャンス目規定回数示唆', priority: 'warning' }
        ]
      }
    ],
    yameRules: {
      stopOk: 'ボーナス・EXTRA後、130Gの引き戻し前兆否定でヤメ',
      stopNg: '裏REG後・超BIGループ後・アイキャッチ赤背景が出現した台',
      tip: '超BIGループ後は引き戻し期待度が大幅UPするため130Gまで必ずフォロー。'
    },
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
    specs: {
      ceiling: '1200G ＋ 前兆（CZスルー天井 最大4回）',
      coin: '約32.9G / 50枚',
      bonusProb: '1/564（設定1）〜 1/447（設定6）',
      payout: '97.5%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約2.8枚 / 上位約7.6枚'
    },
    signals: [
      {
        categoryName: '🎭 終了画面・セリフ示唆',
        items: [
          { badge: '天国濃厚', character: 'CZ終了画面', content: '「勝＆鳴海（銀枠 / 金枠）」', meaning: '次回天国濃厚！', priority: 'danger', action: '天国当選までツッパ' },
          { badge: 'AT直撃濃厚', character: 'PUSH示唆', content: 'フェイスレス（紫）', meaning: '次回CZ成功でAT直撃濃厚！', priority: 'danger', action: '次回CZまでツッパ' },
          { badge: '天国期待度UP', character: 'CZ終了時ボイス', content: '「背中を守る盾は頼もしい…」', meaning: '天国期待度アップ', priority: 'warning' }
        ]
      }
    ],
    yameRules: {
      stopOk: 'CZ失敗時・AT終了後、液晶100G前兆否定でヤメ（差枚マイナス時）',
      stopNg: 'CZ 3スルー・4スルー台、銀枠・金枠画面が出現した台',
      tip: 'CZスルー回数はデータ機ではなく液晶メニュー画面で必ず確認。'
    },
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
    specs: {
      ceiling: '液晶1500G（実約1000G）/ CZスルー 最大7回',
      coin: '約31.3G / 50枚',
      bonusProb: '1/519（設定1）〜 1/405（設定6）',
      payout: '97.3%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約7.2枚（超高純増）'
    },
    signals: [
      {
        categoryName: '🤖 終了画面・決戦スルー示唆',
        items: [
          { badge: '革命優遇！', character: '履歴', content: '決戦ボーナス 3連続スルー', meaning: '次回革命ボーナス優遇！', priority: 'danger', action: '次回ボーナスまでツッパ' },
          { badge: '設定4以上確定', character: '終了画面', content: '紫枠 / 金枠 / 虹枠', meaning: '設定4以上 / 設定6確定！', priority: 'danger', action: '終日ツッパ' }
        ]
      }
    ],
    yameRules: {
      stopOk: 'ボーナス・AT終了後、実ゲーム数66G＋前兆否定で即ヤメ',
      stopNg: '決戦ボーナス3スルー以上、ハラキリDRIVE頻発台',
      tip: '引き戻しゾーンは液晶ゲーム数ではなく「実ゲーム数66G」なので注意。'
    },
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
    specs: {
      ceiling: '999G ＋ 前兆（設定変更時は350Gに短縮）',
      coin: '約31.4G / 50枚',
      bonusProb: '1/319.4（設定1）〜 1/214.2（設定6）',
      payout: '97.5%（設定1）〜 114.9%（設定6）',
      pureIncrease: '約3.0枚 / 上位約4.5枚'
    },
    signals: [
      {
        categoryName: '🌺 ハイビスカス点滅 ＆ チェリー',
        items: [
          { badge: '天国以上濃厚', character: '点滅パターン', content: '「右のみ点滅」「高速点滅」', meaning: '次回天国以上濃厚！', priority: 'danger', action: '32Gまで必ず続行' },
          { badge: '通常B濃厚！', character: 'チェリー', content: '単チェリー出現（スベリなし）', meaning: '通常B以上濃厚！', priority: 'danger', action: '天国当選までツッパ' }
        ]
      }
    ],
    yameRules: {
      stopOk: 'ボーナス終了後、32G回して光らなければ即ヤメ',
      stopNg: '単チェリー出現台、リミットレス15連後台',
      tip: '余計なチェリー追いはせず32Gでスパッとヤメるのがプロの鉄則。'
    },
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
