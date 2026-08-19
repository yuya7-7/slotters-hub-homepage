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
          <div className="hero-badge">⚡ ホール現場で迷わない 3秒判別ポータル</div>
          <h1 className="hero-title">
            広告ゼロ・爆速検索。<br />
            現場で3秒でわかるスロット攻略
          </h1>
          <p className="hero-desc">
            終了画面・ボイス・やめどきを完全テキスト化して無料公開。<br />
            重い広告サイトを開くストレスなく、ホールで最速で判断できます。
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
            <span>人気機種 示唆・やめどきデータベース</span>
          </h2>
          <p className="section-subtitle">
            気になる機種をタップすると、見るべき示唆演出とやめどき手順が即座に確認できます。
          </p>
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
              <span>Slotter's Hub（VIPコミュニティ）が選ばれる理由</span>
            </h2>
            <p className="section-subtitle">
              無料の示唆まとめに加え、プロ基準の期待値ボーダーと稼働中サポートを完備。
            </p>
          </div>
          <div className="features-grid">
            <div className="card feature-card">
              <div className="feature-icon">🔒</div>
              <h3>出玉率106%以上・思考停止ボーダー</h3>
              <p>
                スロラボ等の大量実戦値をベースに、差枚優遇・冷遇・リセット短縮を網羅した「このG数から打ってここでヤメる」という迷わないプロボーダーを提供。
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🚨</div>
              <h3>稼働中SOS・即レス相談部屋</h3>
              <p>
                「今この終了画面が出たけどツッパすべき？」「この差枚で打てる？」など、ホールからのリアルタイムな質問に運営・熟練者が即レスで回答。
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🤝</div>
              <h3>ノリ打ち・パートナー募集掲示板</h3>
              <p>
                特日や設定狙いの日に軍資金・リスクを分散するノリ打ち仲間の募集フォーラムを完備。安心・安全な連携環境を整備しています。
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">📱</div>
              <h3>ノリ打ち共有メモ＆現場Q&A</h3>
              <p>
                LINEやDiscordでそのままパートナーにコピペして指示出しできる共有メモと、現場のリアルな疑問に即答するケーススタディ集を全機種掲載。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / VIP Membership Section */}
      <section id="plans" className="plans-section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <span>VIPメンバーシップ参加プラン</span>
            </h2>
            <p className="section-subtitle">
              すべての攻略ノート（全25機種以上）・差枚優遇ボーダー・SOS相談部屋が月額500円で使い放題。
            </p>
          </div>
          <div className="plans-grid" style={{ maxWidth: '520px', margin: '0 auto' }}>
            <div className="card plan-card featured-plan">
              <div className="plan-badge">人気No.1・圧倒的コストパフォーマンス</div>
              <h3 className="plan-name">Slotter's Hub VIP会員</h3>
              <div className="plan-price">
                <span className="currency">¥</span>500
                <span className="period"> / 月</span>
              </div>
              <p className="plan-desc">
                期待値稼働1回で数ヶ月分の会費を回収できる、現場特化型サブスクリプション。
              </p>
              <ul className="plan-benefits">
                <li>🔥 全25機種以上の完全攻略ノート（106%思考停止ボーダー）閲覧権</li>
                <li>📊 差枚優遇・冷遇・15G潜伏天国刈りマニュアル見放題</li>
                <li>🚨 ホール稼働中SOS・即レス相談部屋（Discord）の無制限利用</li>
                <li>📱 ノリ打ち・パートナー共有用コピペメモ利用</li>
                <li>🤝 ノリ打ち仲間募集・ホール状況共有フォーラムの参加権</li>
              </ul>
              <a
                href="https://mosh.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta plan-btn"
              >
                今すぐVIPに参加してプロボーダーを見る →
              </a>
              <div className="plan-footer-note">
                ※ いつでもワンクリックで解約可能です。安心してお試しください。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">Slotter's Hub</div>
          <p className="footer-tagline">
            広告ゼロ・現場特化型スロット攻略ポータル ＆ プロコミュニティ
          </p>
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
