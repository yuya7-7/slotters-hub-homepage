import { useState, useMemo } from 'react'
import { MACHINES_DATA } from './data/machines'
import type { Machine } from './types'
import { MachineCard } from './components/MachineCard'
import { MachineModal } from './components/MachineModal'
import { TermsModal } from './components/TermsModal'
import { SearchBar } from './components/SearchBar'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null)
  const [isTermsOpen, setIsTermsOpen] = useState(false)

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
            <a href="#plans" className="nav-link">料金プラン</a>
            <a href="#machines" className="nav-link">機種一覧</a>
          </nav>
          <a href="#plans" className="btn btn-primary header-cta">
            会員登録 (月額¥500〜)
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

        {/* 2. VIP Pricing Section (2段階料金プラン) */}
        <section id="plans" className="plans-section">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <span>メンバーシップ参加プラン</span>
            </h2>
            <p className="section-subtitle">
              ご自身の稼働スタイルに合わせて選べる2つのプランをご用意しています。
            </p>
          </div>

          <div className="plans-grid-two">
            {/* Standard Plan (¥500 - Active Main CTA) */}
            <div className="card plan-card standard-plan featured-standard">
              <div className="plan-type-badge standard-badge">🔥 先行募集中・ワンコイン</div>
              <h3 className="plan-name">スタンダード会員</h3>
              <div className="plan-price">
                <span className="currency">¥</span>500
                <span className="period"> / 月</span>
              </div>
              <p className="plan-target">ノリ打ち仲間を探したい ＆ 全国のホール情報を見たい方向け</p>
              <ul className="plan-benefits">
                <li>🤝 <strong>ノリ打ち募集への「閲覧 ＆ 応募・参加」権</strong></li>
                <li>🚨 <strong>稼働中SOS部屋の「リアルタイム閲覧（過去ログ見放題）」</strong></li>
                <li>📊 <strong>全国のホール生情報・設定状況共有スレッド参加</strong></li>
                <li>💬 メンバー専用Discord（一般・雑談・収支報告）参加権</li>
                <li>📱 トラブル防止！ノリ打ち清算ルール＆収支管理テンプレ</li>
                <li className="benefit-disabled">🔒 全機種106%攻略ノート（プレミアムで近日解禁）</li>
                <li className="benefit-disabled">🔒 稼働中SOSの「直接質問・個別相談」</li>
                <li className="benefit-disabled">🔒 ノリ打ちの「新規募集作成」権</li>
              </ul>
              <a
                href="https://mosh.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta plan-btn"
              >
                スタンダードに参加（¥500/月） →
              </a>
            </div>

            {/* Premium Plan (¥1,900 - Coming Soon Teaser) */}
            <div className="card plan-card premium-plan coming-soon-plan">
              <div className="plan-type-badge coming-soon-badge">🔒 近日解禁予定（Coming Soon）</div>
              <h3 className="plan-name">プレミアム（プロ）会員</h3>
              <div className="plan-price">
                <span className="currency">¥</span>1,900
                <span className="period"> / 月</span>
              </div>
              <p className="plan-target">106%思考停止ボーダー・優先SOSで本気で勝ち越すプロ向け</p>
              <ul className="plan-benefits">
                <li>🔥 <strong>全25機種以上 完全攻略ノート（106%思考停止ボーダー）読み放題</strong></li>
                <li>📊 <strong>差枚優遇・冷遇・15G天国刈りマニュアル見放題</strong></li>
                <li>🚨 <strong>ホール稼働中SOS・即レス相談部屋（優先直接質問）</strong></li>
                <li>⚡ <strong>導入初週の新台最速実戦・未公開データ速報</strong></li>
                <li>🤝 <strong>ノリ打ち仲間マッチング「新規募集・作成」権</strong></li>
                <li>🎖️ <strong>Discord限定 プレミアムプロ認証バッジ付与</strong></li>
                <li>✓ スタンダードの全特典をすべて含む</li>
              </ul>
              <button
                type="button"
                className="btn btn-coming-soon plan-btn"
                disabled
              >
                🔒 近日公開予定（準備中）
              </button>
            </div>
          </div>

          <div className="plans-footer-note">
            ※ いつでもワンクリックでプラン変更・解約が可能です。安心してお試しください。
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
              気になる機種をタップすると、3大アクション（狙い目・やめ時・示唆）が即座に確認できます。
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

      {/* Minimal Footer with Terms Link */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-links">
            <button
              type="button"
              className="footer-link-btn"
              onClick={() => setIsTermsOpen(true)}
            >
              📜 コミュニティ利用規約・投稿ガイドライン
            </button>
          </div>
          <p className="copyright">© 2026 Slotter's Hub. All rights reserved.</p>
        </div>
      </footer>

      {/* Machine Detail Modal */}
      <MachineModal
        machine={selectedMachine}
        onClose={() => setSelectedMachine(null)}
      />

      {/* Community Terms & Guidelines Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  )
}

export default App
