import { useState, useMemo } from 'react'
import { MACHINES_DATA } from './data/machines'
import type { Machine } from './types'
import { MachineCard } from './components/MachineCard'
import { MachineModal } from './components/MachineModal'
import { SearchBar } from './components/SearchBar'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null)

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    MACHINES_DATA.forEach((m) => {
      m.tags.forEach((t) => tagSet.add(t))
    })
    return Array.from(tagSet)
  }, [])

  // Filter machines based on search term and selected tag
  const filteredMachines = useMemo(() => {
    return MACHINES_DATA.filter((machine) => {
      const matchesSearch =
        machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        machine.kana.includes(searchTerm) ||
        machine.maker.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTag =
        selectedTag === 'all' || machine.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [searchTerm, selectedTag])

  return (
    <div className="app">
      {/* Sticky Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo-group">
            <span className="logo-badge">広告ゼロ</span>
            <div className="logo-text">Slotter's Hub</div>
          </div>
          <nav className="nav-links">
            <a href="#machines" className="nav-link">機種一覧</a>
            <a href="#about" className="nav-link">特徴</a>
            <a href="#plans" className="nav-link">VIPプラン</a>
          </nav>
          <a href="#plans" className="btn btn-primary header-cta">
            VIPメンバー登録
          </a>
        </div>
      </header>

      {/* Hero & Search Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">⚡ 3秒判別スロット攻略</div>
          <h1 className="hero-title">
            広告ゼロ・爆速検索。<br />
            ホールで迷わない示唆＆やめどき
          </h1>
          <p className="hero-desc">
            終了画面・ボイス・やめどきを完全テキスト化。<br />
            重い広告サイトを開くことなく、片手で最速チェック。
          </p>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
            tags={allTags}
            totalCount={MACHINES_DATA.length}
          />
        </div>
      </section>

      {/* Machine Directory Section */}
      <section id="machines" className="machines-section container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <span>人気機種 示唆・やめどき</span>
          </h2>
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
              style={{ marginTop: '12px' }}
              onClick={() => {
                setSearchTerm('')
                setSelectedTag('all')
              }}
            >
              検索条件をリセット
            </button>
          </div>
        )}
      </section>

      {/* Community Features Section */}
      <section id="about" className="features-section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <span>VIPコミュニティの強み</span>
            </h2>
          </div>
          <div className="features-grid">
            <div className="card feature-card">
              <div className="feature-icon">🔒</div>
              <h3>106%思考停止ボーダー</h3>
              <p>差枚優遇・冷遇・短縮を網羅した迷わないプロ基準の立ち回り。</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🚨</div>
              <h3>稼働中SOS・即レス相談</h3>
              <p>「この演出出たけどツッパ？」などホールからの質問に即回答。</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🤝</div>
              <h3>ノリ打ち・仲間募集</h3>
              <p>特日や設定狙いで軍資金・リスクを分散する募集フォーラム。</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">📱</div>
              <h3>共有メモ＆現場Q&A</h3>
              <p>パートナーにそのまま送れるコピペメモと現場疑問集。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / VIP Membership Section */}
      <section id="plans" className="plans-section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <span>VIPメンバーシップ</span>
            </h2>
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
                <li>📱 ノリ打ち・パートナー共有用コピペメモ</li>
                <li>🤝 ノリ打ち仲間募集・ホール状況共有フォーラム</li>
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
                ※ いつでもワンクリックで解約可能です。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">Slotter's Hub</div>
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
