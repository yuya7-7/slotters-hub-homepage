import React, { useState } from 'react'
import type { Machine } from '../types'
import { generateNoteMarkdown, copyToClipboard } from '../utils/copyNote'

interface MachineCardProps {
  machine: Machine
  onSelect: (machine: Machine) => void
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine, onSelect }) => {
  const [copied, setCopied] = useState(false)

  const handleQuickCopy = async (e: React.MouseEvent) => {
    e.stopPropagation() // モーダルが開かないようにバブリング停止
    const markdown = generateNoteMarkdown(machine)
    const success = await copyToClipboard(markdown)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="machine-card" onClick={() => onSelect(machine)}>
      <div className="machine-card-top-row">
        <h3 className="machine-card-title">{machine.name}</h3>
        <button
          type="button"
          className={`btn-card-quick-copy ${copied ? 'copied' : ''}`}
          onClick={handleQuickCopy}
          title="この機種の攻略ノートをクリップボードにコピー"
        >
          {copied ? '✅ コピー済' : '📋 コピー'}
        </button>
      </div>

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
