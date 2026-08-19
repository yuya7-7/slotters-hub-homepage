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
      {/* Minimal Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo-group">
            <div className="logo-text">Slotter's Hub</div>
            <span className="logo-badge">広告ゼロ</span>
          </div>
          <a href="#plans" className="btn btn-primary header-cta">
            🔒 VIPプラン (月額¥500)
          </a>
        </div>
      </header>

      {/* Main Search & Tool Area (Clean & Instant) */}
      <main className="main-content container">
        <div className="search-wrapper">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
            tags={allTags}
            totalCount={MACHINES_DATA.length}
          />
        </div>

        {/* Machine Cards */}
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
              onClick={() => {
                setSearchTerm('')
                setSelectedTag('all')
              }}
            >
              検索をリセット
            </button>
          </div>
        )}

        {/* Compact VIP Banner at Bottom */}
        <section id="plans" className="vip-bottom-banner">
          <div className="vip-banner-content">
            <div className="vip-badge-sm">🔒 クローズドコミュニティ</div>
            <h3 className="vip-banner-title">
              差枚優遇ボーダー ＆ 稼働SOSはVIP限定
            </h3>
            <p className="vip-banner-desc">
              出玉率106%以上の思考停止ボーダー・15G天国刈り・Discord即レス相談部屋が使い放題。
            </p>
          </div>
          <div className="vip-banner-action">
            <div className="vip-price-tag">月額 <strong>¥500</strong></div>
            <a
              href="https://mosh.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta"
            >
              VIPに参加する →
            </a>
          </div>
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
