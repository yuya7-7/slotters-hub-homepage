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
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="閉じる">
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-tags">
            <span className="maker-tag">{machine.maker}</span>
            <span className="type-tag">{machine.type}</span>
          </div>
          <h2 className="modal-title">{machine.name}</h2>
        </div>

        {/* Tab Buttons */}
        <div className="modal-tabs">
          <button
            className={`modal-tab ${activeTab === 'signals' ? 'active' : ''}`}
            onClick={() => setActiveTab('signals')}
          >
            👀 見るべき示唆
          </button>
          <button
            className={`modal-tab ${activeTab === 'yamedoki' ? 'active' : ''}`}
            onClick={() => setActiveTab('yamedoki')}
          >
            🛑 やめどき
          </button>
          <button
            className={`modal-tab ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            📊 基本スペック
          </button>
        </div>

        <div className="modal-body">
          {/* Tab 1: Signals */}
          {activeTab === 'signals' && (
            <div className="tab-section">
              <div className="section-note">
                💡 <strong>現場で迷わないテキスト解説:</strong> 終了画面やボイスを即座に確認できます。
              </div>

              {machine.signals.map((category, idx) => (
                <div key={idx} className="signal-group">
                  <h4 className="signal-category-title">{category.categoryName}</h4>
                  {category.description && (
                    <p className="signal-category-desc">{category.description}</p>
                  )}
                  <div className="signal-table-wrapper">
                    <table className="signal-table">
                      <thead>
                        <tr>
                          <th>演出・セリフ</th>
                          <th>示唆内容</th>
                          <th>現場アクション</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, i) => (
                          <tr
                            key={i}
                            className={`signal-row priority-${item.priority}`}
                          >
                            <td className="col-content">
                              <strong>{item.content}</strong>
                            </td>
                            <td className="col-meaning">
                              <span className={`priority-badge ${item.priority}`}>
                                {item.priority === 'high' ? '🔥 激熱' : item.priority === 'mid' ? '✨ チャンス' : '通常'}
                              </span>
                              {item.meaning}
                            </td>
                            <td className="col-action">
                              {item.action ? (
                                <span className="action-tag">{item.action}</span>
                              ) : (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {machine.modeSignals && machine.modeSignals.map((modeCat, idx) => (
                <div key={idx} className="signal-group">
                  <h4 className="signal-category-title">{modeCat.categoryName}</h4>
                  <div className="signal-table-wrapper">
                    <table className="signal-table">
                      <thead>
                        <tr>
                          <th>演出名</th>
                          <th>発生タイミング</th>
                          <th>確信度</th>
                          <th>備考</th>
                        </tr>
                      </thead>
                      <tbody>
                        {modeCat.items.map((item, i) => (
                          <tr key={i} className="signal-row">
                            <td className="col-content"><strong>{item.title}</strong></td>
                            <td>{item.timing}</td>
                            <td><span className="star-rating">{item.stars}</span></td>
                            <td>{item.note || '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Yame-doki */}
          {activeTab === 'yamedoki' && (
            <div className="tab-section">
              <div className="yamedoki-card">
                <div className="yamedoki-basic-header">
                  <span className="yamedoki-icon">🛑</span>
                  <div>
                    <h4>基本のやめどき原則</h4>
                    <p>{machine.yameDoki.basic}</p>
                  </div>
                </div>

                <h4 className="subheading">📋 必ず確認すべきチェックポイント</h4>
                <ul className="check-list">
                  {machine.yameDoki.checkPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>

                <h4 className="subheading">⚡ 迷わない判断ステップ</h4>
                <div className="steps-container">
                  {machine.yameDoki.steps.map((st) => (
                    <div key={st.step} className="step-card">
                      <div className="step-num">Step {st.step}</div>
                      <div className="step-info">
                        <strong>{st.title}</strong>
                        <p>{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Specs */}
          {activeTab === 'specs' && (
            <div className="tab-section">
              <div className="specs-grid">
                <div className="spec-card">
                  <span className="label">天井仕様</span>
                  <span className="value">{machine.specs.ceiling}</span>
                </div>
                <div className="spec-card">
                  <span className="label">コイン持ち</span>
                  <span className="value">{machine.specs.coin}</span>
                </div>
                <div className="spec-card">
                  <span className="label">初当り確率</span>
                  <span className="value">{machine.specs.bonusProb}</span>
                </div>
                <div className="spec-card">
                  <span className="label">出玉率 (機械割)</span>
                  <span className="value">{machine.specs.payout}</span>
                </div>
                <div className="spec-card">
                  <span className="label">純増枚数</span>
                  <span className="value">{machine.specs.pureIncrease}</span>
                </div>
              </div>
            </div>
          )}

          {/* 🔒 VIP Teaser Banner inside modal */}
          <div className="vip-locked-box">
            <div className="vip-badge-ribbon">🔒 VIP限定コミュニティで完全版を公開中</div>
            <h4>{machine.vipTeaser.title}</h4>
            <ul className="vip-points">
              {machine.vipTeaser.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <div className="vip-cta-row">
              <div className="vip-price-tag">月額 <strong>¥500</strong>（すべての機種が見放題）</div>
              <a href="#plans" onClick={onClose} className="btn btn-cta">
                VIPに参加して完全版を見る →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
