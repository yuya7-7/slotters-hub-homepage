import React from 'react'
import type { Machine } from '../types'

interface MachineCardProps {
  machine: Machine
  onSelect: (machine: Machine) => void
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine, onSelect }) => {
  return (
    <div className="machine-card" onClick={() => onSelect(machine)}>
      <div className="machine-header">
        <div className="machine-maker-tag">{machine.maker}</div>
        <div className="machine-type-tag">{machine.type}</div>
      </div>
      <h3 className="machine-name">{machine.name}</h3>
      <div className="machine-quick-specs">
        <div className="spec-badge">
          <span className="spec-label">天井</span>
          <span className="spec-value">{machine.specs.ceiling.split('（')[0]}</span>
        </div>
        <div className="spec-badge">
          <span className="spec-label">機械割</span>
          <span className="spec-value">{machine.specs.payout}</span>
        </div>
      </div>
      <div className="machine-features">
        <span className="feature-pill">👀 示唆 {machine.signals.reduce((acc, cat) => acc + cat.items.length, 0)}種</span>
        <span className="feature-pill">🛑 やめどきガイド</span>
        <span className="feature-pill vip-pill">🔒 VIP限定ボーダー</span>
      </div>
      <button className="machine-open-btn">
        無料攻略を見る <span className="arrow">→</span>
      </button>
    </div>
  )
}
