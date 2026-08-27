import React, { useState, useEffect } from 'react'
import type { Machine } from '../types'

interface MachineModalProps {
  machine: Machine | null
  onClose: () => void
}

export const MachineModal: React.FC<MachineModalProps> = ({ machine, onClose }) => {
  const [activeTab, setActiveTab] = useState<'aim' | 'yamedoki' | 'settings'>('aim')
  // Accordion state: default all closed ({})
  const [openCategories, setOpenCategories] = useState<{ [key: number]: boolean }>({})

  // Reset category state when machine changes
  useEffect(() => {
    setOpenCategories({})
  }, [machine?.id])

  if (!machine) return null

  const toggleCategory = (idx: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  const isCategoryOpen = (idx: number) => {
    return Boolean(openCategories[idx])
  }

  const allOpen = machine.settingSignals.length > 0 && machine.settingSignals.every((_, i) => openCategories[i])

  const toggleAllCategories = () => {
    if (allOpen) {
      setOpenCategories({})
    } else {
      const all: { [key: number]: boolean } = {}
      machine.settingSignals.forEach((_, i) => {
        all[i] = true
      })
      setOpenCategories(all)
    }
  }

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

        {/* 3 Core Tab Navigation: 狙い目 / やめ時 / 示唆 */}
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
            🏆 示唆
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="modal-scroll-area">
          {/* TAB 1: 🎯 狙い目 & 動画要約 */}
          {activeTab === 'aim' && (
            <div className="tab-pane">
              {/* 要点！ */}
              <div className="aim-block video-summary-box">
                <div className="block-label">💡 要点！</div>
                <ul className="video-summary-list">
                  {machine.aimPoints.videoSummary.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 狙い目 */}
              <div className="aim-block triggers-box">
                <div className="block-label">🎯 狙い目</div>
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

          {/* TAB 3: 🏆 示唆 (デフォルト閉じた状態・タップで開閉) */}
          {activeTab === 'settings' && (
            <div className="tab-pane">
              <div className="accordion-control-bar">
                <span className="accordion-guide-text">題名をタップして詳細を表示</span>
                <button
                  type="button"
                  className="accordion-toggle-all-btn"
                  onClick={toggleAllCategories}
                >
                  {allOpen ? 'すべて閉じる' : 'すべて開く'}
                </button>
              </div>

              {machine.settingSignals.map((cat, idx) => {
                const isOpen = isCategoryOpen(idx)
                return (
                  <div key={idx} className="category-block accordion-block">
                    <button
                      className={`category-accordion-btn ${isOpen ? 'open' : 'closed'}`}
                      onClick={() => toggleCategory(idx)}
                      type="button"
                    >
                      <div className="accordion-title-group">
                        <span className="accordion-title-text">{cat.categoryName}</span>
                        <span className="accordion-count-badge">({cat.items.length}件)</span>
                      </div>
                      <span className={`accordion-arrow ${isOpen ? 'arrow-up' : 'arrow-down'}`}>
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="signal-stack accordion-content">
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
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* 🔒 VIP Teaser (Pre-Open Free Access) */}
          <div className="vip-teaser-compact">
            <div className="vip-ribbon">🎉 プレオープン中！完全攻略ノートを無料開放中</div>
            <h4 className="vip-teaser-title">{machine.vipTeaser.title}</h4>
            <ul className="vip-teaser-list">
              {machine.vipTeaser.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <div className="vip-teaser-action">
              <span className="price-label">プレオープン <strong>完全無料（0円）</strong></span>
              <a
                href="https://discord.gg/ky6Capbbdn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="btn btn-cta btn-compact"
              >
                今すぐDiscordで無料体験する →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
