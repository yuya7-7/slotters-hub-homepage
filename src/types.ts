export interface SignalItem {
  content: string
  meaning: string
  priority: 'high' | 'mid' | 'low'
  action?: string
}

export interface SignalCategory {
  categoryName: string
  description?: string
  items: SignalItem[]
}

export interface ModeSignalItem {
  title: string
  timing: string
  stars: string
  note?: string
}

export interface Machine {
  id: string
  name: string
  kana: string
  maker: string
  type: string
  tags: string[]
  releaseDate?: string
  specs: {
    ceiling: string
    coin: string
    bonusProb: string
    payout: string
    pureIncrease: string
  }
  signals: SignalCategory[]
  modeSignals?: {
    categoryName: string
    items: ModeSignalItem[]
  }[]
  yameDoki: {
    basic: string
    checkPoints: string[]
    steps: { step: number; title: string; desc: string }[]
  }
  vipTeaser: {
    title: string
    points: string[]
  }
}
