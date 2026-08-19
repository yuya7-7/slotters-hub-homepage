export interface SettingSignal {
  badge: string
  character?: string
  content: string
  meaning: string
  priority: 'danger' | 'warning' | 'normal'
  action?: string
}

export interface Machine {
  id: string
  name: string
  kana: string
  maker: string
  type: string
  tags: string[]
  ceilingSummary: string
  yameDokiSummary: string
  highlightSignal: string
  // 1. 🎯 狙い目・モード示唆 & 動画要約
  aimPoints: {
    videoSummary: string[]        // 🎥 プロ動画・実戦検証の要約ポイント
    triggerSignals: string[]     // 🔥 見つけたら打つべきモード示唆・お宝パターン
  }
  // 2. 🛑 やめ時（信号機カラー）
  yameRules: {
    stopOk: string               // 🟢 ヤメてOK条件
    stopNg: string               // 🔴 ヤメ厳禁条件
    tip?: string                 // 💡 プロの現場注意点
  }
  // 3. 🏆 設定示唆（確定演出・ボイス・終了画面）
  settingSignals: {
    categoryName: string
    items: SettingSignal[]
  }[]
  vipTeaser: {
    title: string
    points: string[]
  }
}
