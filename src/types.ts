export interface SignalItem {
  badge: string
  character?: string
  content: string
  meaning: string
  priority: 'danger' | 'warning' | 'normal'
  action?: string
}

export interface SignalCategory {
  categoryName: string
  items: SignalItem[]
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
  specs: {
    ceiling: string
    coin: string
    bonusProb: string
    payout: string
    pureIncrease: string
  }
  signals: SignalCategory[]
  tenkokuSignals?: {
    danger: string[]   // 即ヤメ厳禁（天国濃厚）
    warning: string[]  // チャンス（様子見）
  }
  yameRules: {
    stopOk: string     // 🟢 ヤメてOK条件
    stopNg: string     // 🔴 ヤメ厳禁条件
    tip?: string
  }
  vipTeaser: {
    title: string
    points: string[]
  }
}
