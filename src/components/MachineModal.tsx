import React, { useState } from 'react'
import type { Machine } from '../types'

interface MachineModalProps {
  machine: Machine | null
  onClose: () => void
}

export const MachineModal: React.FC<MachineModalProps> = ({ machine, onClose }) => {
  const [activeTab, setActiveTab] = useState<'aim' | 'yamedoki' | 'settings'>('aim')

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

        {/* 3 Core Tab Navigation: 狙い目 / やめ時 / 設定示唆 */}
        <div className="modal-nav-tabs">
          <button
            className={`nav-tab-btn ${activeTab === 'aim' ? 'active' : ''}`}
            onClick={() => setActiveTab('aim')}
          >
            🎯 狙い目
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'yamedoki' ? 'active' : ''}`}
            onClick={() => setActiveTab('yamedoki')}
          >
            🛑 やめ時
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            🏆 設定示唆
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="modal-scroll-area">
          {/* TAB 1: 🎯 狙い目 & 動画要約 */}
          {activeTab === 'aim' && (
            <div className="tab-pane">
              {/* プロ動画要約 */}
              <div className="aim-block video-summary-box">
                <div className="block-label">🎥 プロ解説動画・実戦検証の要約</div>
                <ul className="video-summary-list">
                  {machine.aimPoints.videoSummary.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 打つべき示唆・パターン */}
              <div className="aim-block triggers-box">
                <div className="block-label">🔥 見つけたら打つべきモード示唆</div>
                <div className="trigger-chips">
                  {machine.aimPoints.triggerSignals.map((sig, i) => (
                    <div key={i} className="trigger-chip-item">
                      <span className="bullet">▶</span> {sig}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 🛑 やめ時（信号機カラー） */}
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

          {/* TAB 3: 🏆 設定示唆 */}
          {activeTab === 'settings' && (
            <div className="tab-pane">
              {machine.settingSignals.map((cat, idx) => (
                <div key={idx} className="category-block">
                  <h3 className="category-heading">{cat.categoryName}</h3>
                  <div className="signal-stack">
                    {cat.items.map((item, i) => (
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
            </div>
          )}

          {/* 🔒 VIP Teaser */}
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
