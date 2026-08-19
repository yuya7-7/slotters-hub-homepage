import React, { useState } from 'react'
import type { Machine } from '../types'

interface MachineModalProps {
  machine: Machine | null
  onClose: () => void
}

export const MachineModal: React.FC<MachineModalProps> = ({ machine, onClose }) => {
  const [activeTab, setActiveTab] = useState<'signals' | 'yamedoki' | 'specs'>('signals')

  if (!machine) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="閉じる">
          ✕
        </button>

        {/* Modal Top Header */}
        <div className="modal-header-compact">
          <h2 className="modal-name">{machine.name}</h2>
        </div>

        {/* 3 Tab Navigation */}
        <div className="modal-nav-tabs">
          <button
            className={`nav-tab-btn ${activeTab === 'signals' ? 'active' : ''}`}
            onClick={() => setActiveTab('signals')}
          >
            👀 見るべき示唆
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'yamedoki' ? 'active' : ''}`}
            onClick={() => setActiveTab('yamedoki')}
          >
            🛑 やめどき
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            📊 スペック
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-scroll-area">
          {/* TAB 1: Signals (Visual Card Stack) */}
          {activeTab === 'signals' && (
            <div className="tab-pane">
              {machine.signals.map((category, idx) => (
                <div key={idx} className="category-block">
                  <h3 className="category-heading">{category.categoryName}</h3>
                  <div className="signal-stack">
                    {category.items.map((item, i) => (
                      <div key={i} className={`signal-item-card priority-${item.priority}`}>
                        <div className="signal-badge-col">
                          <span className={`status-badge ${item.priority}`}>
                            {item.badge}
                          </span>
                        </div>
                        <div className="signal-body-col">
                          <div className="signal-char-quote">
                            {item.character && <span className="char-name">{item.character}:</span>}
                            <span className="quote-text">{item.content}</span>
                          </div>
                        </div>
                        {item.action && (
                          <div className="signal-action-col">
                            <span className="action-pill">{item.action}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Tenkoku Quick Chips */}
              {machine.tenkokuSignals && (
                <div className="category-block">
                  <h3 className="category-heading">⚡ 通常時の天国（高確）示唆</h3>
                  
                  <div className="tenkoku-group danger-group">
                    <div className="tenkoku-group-title">🔥 即ヤメ厳禁（天国濃厚・ツッパ）</div>
                    <div className="chip-cloud">
                      {machine.tenkokuSignals.danger.map((sig, i) => (
                        <span key={i} className="signal-chip danger-chip">
                          {sig}
                        </span>
                      ))}
                    </div>
                  </div>

                  {machine.tenkokuSignals.warning.length > 0 && (
                    <div className="tenkoku-group warning-group">
                      <div className="tenkoku-group-title">✨ チャンス（様子見）</div>
                      <div className="chip-cloud">
                        {machine.tenkokuSignals.warning.map((sig, i) => (
                          <span key={i} className="signal-chip warning-chip">
                            {sig}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Yame-doki (Traffic Light Red/Green Cards) */}
          {activeTab === 'yamedoki' && (
            <div className="tab-pane">
              <div className="yame-traffic-box green-box">
                <div className="traffic-icon">🟢</div>
                <div className="traffic-info">
                  <h4>【ヤメてOK】</h4>
                  <p>{machine.yameRules.stopOk}</p>
                </div>
              </div>

              <div className="yame-traffic-box red-box">
                <div className="traffic-icon">🔴</div>
                <div className="traffic-info">
                  <h4>【ヤメ厳禁】</h4>
                  <p>{machine.yameRules.stopNg}</p>
                </div>
              </div>

              {machine.yameRules.tip && (
                <div className="yame-pro-tip">
                  <span className="tip-badge">💡 プロの現場メモ</span>
                  <p>{machine.yameRules.tip}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Specs (Compact Specs Grid) */}
          {activeTab === 'specs' && (
            <div className="tab-pane">
              <div className="specs-compact-grid">
                <div className="spec-row">
                  <span className="spec-name">天井仕様</span>
                  <span className="spec-data">{machine.specs.ceiling}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">初当り確率</span>
                  <span className="spec-data">{machine.specs.bonusProb}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">機械割</span>
                  <span className="spec-data">{machine.specs.payout}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">純増</span>
                  <span className="spec-data">{machine.specs.pureIncrease}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">コイン持ち</span>
                  <span className="spec-data">{machine.specs.coin}</span>
                </div>
              </div>
            </div>
          )}

          {/* 🔒 VIP Teaser (Gold Compact Ribbon) */}
          <div className="vip-teaser-compact">
            <div className="vip-ribbon">🔒 VIP限定コミュニティで公開中</div>
            <h4 className="vip-teaser-title">{machine.vipTeaser.title}</h4>
            <ul className="vip-teaser-list">
              {machine.vipTeaser.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <div className="vip-teaser-action">
              <span className="price-label">月額 <strong>¥500</strong></span>
              <a href="#plans" onClick={onClose} className="btn btn-cta btn-compact">
                VIPでプロボーダーを見る →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
