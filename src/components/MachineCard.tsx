import React from 'react'
import type { Machine } from '../types'

interface MachineCardProps {
  machine: Machine
  onSelect: (machine: Machine) => void
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine, onSelect }) => {
  return (
    <div className="machine-card" onClick={() => onSelect(machine)}>
      <h3 className="machine-card-title">{machine.name}</h3>

      <div className="machine-summary-box">
        <div className="summary-item">
          <span className="summary-label">🎯 天井</span>
          <span className="summary-val">{machine.ceilingSummary}</span>
        </div>
        <div className="summary-item highlight-stop">
          <span className="summary-label">🛑 ヤメ時</span>
          <span className="summary-val">{machine.yameDokiSummary}</span>
        </div>
      </div>

      <div className="machine-signal-preview">
        <span className="preview-tag">⚡ 注目示唆</span>
        <span className="preview-text">{machine.highlightSignal}</span>
      </div>

      <button className="machine-view-btn">
        示唆・やめどきを見る <span>→</span>
      </button>
    </div>
  )
}
