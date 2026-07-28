import React from 'react'

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
            Slotter's Hubは、パチスロで安定して勝ち続けたい一般プレイヤーと、
            軍団運営・事業化を目指す「外部班長」のための完全有料クローズドコミュニティです。
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
            <h3>🤝 ノリ打ち＆打ち子マッチング</h3>
            <p>アツい日に軍資金を出し合ってリスクを分散する「ノリ打ち」相手の募集や、稼ぎたいプレイヤーと人手が欲しい事業主（班長）を繋ぐマッチング掲示板を完備しています。</p>
          </div>
          <div className="card feature-card">
            <h3>🔰 打ち子育成「完全丸投げ」マニュアル</h3>
            <p>外部班長向け。新人を雇った際に「これを見せるだけ」で目押しからマナー、報告ルールまで全てを教育できるパッケージを利用できます。</p>
          </div>
        </div>
      </section>

      <section id="plans" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title"><span>料金プラン</span></h2>
          </div>
          <div className="plans-grid">
            <div className="card plan-card">
              <h3>一般VIPメンバー</h3>
              <div className="plan-price">¥500<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/月</span></div>
              <ul>
                <li>すべての攻略ノート・期待値まとめ閲覧</li>
                <li>稼働中SOS・即レス相談部屋の利用</li>
                <li>収支報告・愚痴スレッドの利用</li>
                <li>ノリ打ち相手募集フォーラムの参加権</li>
              </ul>
              <a href="#" className="btn btn-primary" style={{ width: '100%' }}>VIPに参加する</a>
            </div>
            
            <div className="card plan-card" style={{ border: '2px solid var(--primary)' }}>
              <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4px 0', margin: '-24px -24px 20px -24px', borderRadius: '6px 6px 0 0', fontWeight: 'bold' }}>
                事業主・軍団向け
              </div>
              <h3>外部班長プラン</h3>
              <div className="plan-price">¥5,000<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/月</span></div>
              <ul>
                <li>一般VIPメンバーの全機能</li>
                <li>打ち子育成「完全丸投げ」マニュアル利用権</li>
                <li>打ち子・雇い主マッチングへの求人掲載権</li>
                <li>トラブルシューティング事例集の閲覧</li>
                <li>給与・歩合設定など運営ノウハウの共有</li>
              </ul>
              <a href="#" className="btn btn-cta" style={{ width: '100%' }}>班長プランに参加する</a>
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
