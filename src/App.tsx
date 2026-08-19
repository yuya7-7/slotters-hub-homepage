import { useState, useMemo } from 'react'
import { MACHINES_DATA } from './data/machines'
import type { Machine } from './types'
import { MachineCard } from './components/MachineCard'
import { MachineModal } from './components/MachineModal'
import { SearchBar } from './components/SearchBar'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null)

  // Filter machines purely based on search term
  const filteredMachines = useMemo(() => {
    if (!searchTerm.trim()) return MACHINES_DATA
    const term = searchTerm.toLowerCase().trim()
    return MACHINES_DATA.filter((machine) => {
      return (
        machine.name.toLowerCase().includes(term) ||
        machine.kana.includes(term) ||
        machine.maker.toLowerCase().includes(term)
      )
    })
  }, [searchTerm])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo-group">
            <div className="logo-text">Slotter's Hub</div>
            <span className="logo-badge">広告ゼロ</span>
          </div>
          <nav className="nav-links">
            <a href="#features" className="nav-link">特徴</a>
            <a href="#plans" className="nav-link">VIPプラン</a>
            <a href="#machines" className="nav-link">機種一覧</a>
          </nav>
          <a href="#plans" className="btn btn-primary header-cta">
            🔒 VIPプラン (月額¥500)
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content container">
        {/* 1. Community 4 Features Section (Slotter's Hubの特徴) */}
        <section id="features" className="features-section">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <span>Slotter's Hub（VIPコミュニティ）の特徴</span>
            </h2>
            <p className="section-subtitle">
              無料の示唆まとめに加え、プロ基準の期待値ボーダーと稼働中サポートを完備。
            </p>
          </div>
          <div className="features-grid">
            <div className="card feature-card">
              <div className="feature-icon">🔒</div>
              <h3>106%思考停止ボーダー</h3>
              <p>
                スロラボ等の大量実戦値をベースに、差枚優遇・冷遇・リセット短縮を網羅した迷わないプロ基準の立ち回りを提供。
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🚨</div>
              <h3>稼働中SOS・即レス相談部屋</h3>
              <p>
                「今この終了画面が出たけどツッパ？」「この差枚で打てる？」など、ホールからのリアルタイムな質問に即回答。
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🤝</div>
              <h3>ノリ打ち・パートナー募集</h3>
              <p>
                特日や設定狙いの日に軍資金・リスクを分散するノリ打ち仲間募集フォーラムを完備。
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">📱</div>
              <h3>ノリ打ち共有メモ＆現場Q&A</h3>
              <p>
                LINEやDiscordでそのままパートナーにコピペして指示出しできる共有メモと、現場の疑問に即答するケーススタディ集。
              </p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <hr className="section-divider" />

        {/* 2. VIP Pricing Section (VIPメンバーシップ参加プラン) */}
        <section id="plans" className="plans-section">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <span>VIPメンバーシップ参加プラン</span>
            </h2>
            <p className="section-subtitle">
              すべての攻略ノート（全25機種以上）・差枚優遇ボーダー・SOS相談部屋が月額500円で使い放題。
            </p>
          </div>
          <div className="plans-grid" style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div className="card plan-card featured-plan">
              <div className="plan-badge">人気No.1・現場特化型</div>
              <h3 className="plan-name">Slotter's Hub VIP会員</h3>
              <div className="plan-price">
                <span className="currency">¥</span>500
                <span className="period"> / 月</span>
              </div>
              <ul className="plan-benefits">
                <li>🔥 全25機種以上の完全攻略ノート（106%思考停止ボーダー）</li>
                <li>📊 差枚優遇・冷遇・15G天国刈りマニュアル見放題</li>
                <li>🚨 ホール稼働中SOS・即レス相談部屋（Discord）利用権</li>
                <li>📱 ノリ打ち・パートナー共有用コピペメモ利用</li>
                <li>🤝 ノリ打ち仲間募集・ホール状況共有フォーラムの参加権</li>
              </ul>
              <a
                href="https://mosh.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta plan-btn"
              >
                VIPに参加してプロボーダーを見る →
              </a>
              <div className="plan-footer-note">
                ※ いつでもワンクリックで解約可能です。安心してお試しください。
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <hr className="section-divider" />

        {/* 3. Machines Section (機種検索 ＆ 無料攻略ポータル) */}
        <section id="machines" className="machines-section">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <span>機種一覧（示唆・やめ時・狙い目）</span>
            </h2>
            <p className="section-subtitle">
              気になる機種をタップすると、3大アクション（狙い目・やめ時・設定示唆）が即座に確認できます。
            </p>
          </div>

          {/* Search Bar */}
          <div className="search-wrapper">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          {filteredMachines.length > 0 ? (
            <div className="machines-grid">
              {filteredMachines.map((machine) => (
                <MachineCard
                  key={machine.id}
                  machine={machine}
                  onSelect={(m) => setSelectedMachine(m)}
                />
              ))}
            </div>
          ) : (
            <div className="no-results card">
              <p>「{searchTerm}」に一致する機種が見つかりませんでした。</p>
              <button
                className="btn btn-primary"
                style={{ marginTop: '10px' }}
                onClick={() => setSearchTerm('')}
              >
                検索をリセット
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p className="copyright">© 2026 Slotter's Hub. All rights reserved.</p>
        </div>
      </footer>

      {/* Machine Detail Modal */}
      <MachineModal
        machine={selectedMachine}
        onClose={() => setSelectedMachine(null)}
      />
    </div>
  )
}

export default App
