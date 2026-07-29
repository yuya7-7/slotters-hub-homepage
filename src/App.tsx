function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">Slotter's Hub</div>
          <a href="#plans" className="btn btn-primary">メンバー登録</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>ただのスロット情報局じゃない。<br />プロの「経済圏」へようこそ。</h1>
          <p>
            Slotter's Hubは、プロ目線で「ホールでの実践」に特化した、
            本気で勝ち続けたいプレイヤーのための完全有料クローズドコミュニティです。
          </p>
          <a href="#plans" className="btn btn-cta">今すぐコミュニティに参加する</a>
        </div>
      </section>

      <section id="about" className="container">
        <div className="section-title-wrap">
          <h2 className="section-title"><span>Slotter's Hubが選ばれる理由</span></h2>
        </div>
        <div className="features-grid">
          <div className="card feature-card">
            <h3>💡 噂の最速検証＆期待値まとめ</h3>
            <p>X（Twitter）等で出回る不確定な噂を運営がいち早くホールで検証。思考停止でそのまま使えるレベルまで削ぎ落とした「ハイエナまとめ」を提供します。調べる手間はもう必要ありません。</p>
          </div>
          <div className="card feature-card">
            <h3>🚨 稼働中SOS・即レス相談部屋</h3>
            <p>「今この終了画面が出たけどツッパすべき？」など、ホールからの緊急の質問に運営や熟練メンバーが即レスで回答。初心者の致命的なミス（下振れ）を防ぎます。</p>
          </div>
          <div className="card feature-card">
            <h3>🤝 ノリ打ち・マッチング掲示板</h3>
            <p>アツい日に軍資金を出し合ってリスクを分散する「ノリ打ち」相手の募集や、打ち子・打たせたい人を繋ぐマッチング掲示板を完備しています。</p>
          </div>
          <div className="card feature-card">
            <h3>🎖️ 貢献度・信頼度によるロール（称号）</h3>
            <p>有益な情報の提供者やノリ打ちの評価が高いメンバーには特別なバッジを付与。コミュニティ内の信頼性が一目で分かる安全な環境です。</p>
          </div>
        </div>
      </section>

      <section id="plans" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title"><span>参加プラン</span></h2>
          </div>
          <div className="plans-grid" style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div className="card plan-card" style={{ border: '2px solid var(--primary)' }}>
              <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4px 0', margin: '-24px -24px 20px -24px', borderRadius: '6px 6px 0 0', fontWeight: 'bold' }}>
                VIPメンバーシップ
              </div>
              <h3>Slotter's Hub 会員</h3>
              <div className="plan-price">¥500<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/月</span></div>
              <ul>
                <li>すべての攻略ノート・期待値まとめ閲覧</li>
                <li>稼働中SOS・即レス相談部屋の利用</li>
                <li>収支報告・愚痴スレッドの利用</li>
                <li>ノリ打ち相手募集フォーラムの参加権</li>
                <li>信頼度ロール付与・マッチング機能の利用</li>
              </ul>
              <a href="#" className="btn btn-cta" style={{ width: '100%' }}>今すぐVIPに参加する</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Slotter's Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
