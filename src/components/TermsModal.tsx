import React from 'react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card terms-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="閉じる">
          ✕
        </button>

        {/* Modal Header */}
        <div className="modal-header-compact">
          <h2 className="modal-name">📜 コミュニティ利用規約 ＆ 投稿ガイドライン</h2>
        </div>

        {/* Modal Scroll Area */}
        <div className="modal-scroll-area terms-content">
          <section className="terms-section">
            <h3>第1条（適用）</h3>
            <p>
              本利用規約（以下「本規約」）は、Slotter's Hub（以下「当コミュニティ」）が提供するすべてのサービス（Webサイト、Discordサーバー、攻略ノート、マッチング掲示板等）の利用条件を定めるものです。すべての会員・利用者は本規約に同意の上で当サービスをご利用いただきます。
            </p>
          </section>

          <section className="terms-section highlight-section">
            <h3>第2条（投稿コンテンツの権利と二次利用）</h3>
            <p>
              1. 会員が当コミュニティ（Discord内の各チャンネル、フォーラム、画像共有部屋等）に投稿した画像、実戦報告データ、考察テキスト等の著作権は、投稿した会員本人に帰属します。
            </p>
            <p>
              2. <strong>【二次利用への許諾】</strong> 会員は、当コミュニティ内に投稿したコンテンツ（ホールでの実践写真、確定演出画像、収支報告、立ち回り考察等）について、当コミュニティ運営者が以下の目的で無償・非独占的に利用（複製・引用・要約・Webサイト掲載・SNSでの紹介等）することをあらかじめ許諾するものとします。
            </p>
            <ul className="terms-list">
              <li>・当ポータルサイト（Slotter's Hub）における機種別示唆・実践データまとめへの掲載</li>
              <li>・攻略ノートおよびコミュニティ向け解説資料の作成・充実</li>
              <li>・公式SNSおよびコミュニティ広報・プロモーションでの紹介</li>
            </ul>
            <p>
              3. <strong>【プライバシーと配慮】</strong> 運営者が投稿画像をサイト等で紹介する際は、会員のプライバシー保護を最優先とし、顔写真の写り込みや個人情報、特定を希望しない情報等に対して適切なモザイク処理・トリミング等の加工を行います。また、ご希望に応じて会員名のクレジット表記（「提供: @〇〇さん」等）を行います。
            </p>
          </section>

          <section className="terms-section">
            <h3>第3条（禁止事項）</h3>
            <p>会員は、当コミュニティの利用にあたり以下の行為を行ってはならないものとします。</p>
            <ul className="terms-list">
              <li>・有料限定コンテンツ（106%攻略ノート、VIPデータ等）の外部への無断転載・再配布・流出行為</li>
              <li>・他の会員や特定の第三者・店舗に対する誹謗中傷、嫌がらせ、過度なマウント行為</li>
              <li>・ホールにおけるハウスルール違反、違法行為、迷惑行為を助長する投稿</li>
              <li>・当コミュニティ内での無許可の営業活動、宗教・マルチ勧誘行為</li>
            </ul>
          </section>

          <section className="terms-section">
            <h3>第4条（ノリ打ち・マッチングに関する自己責任）</h3>
            <p>
              当コミュニティが提供するノリ打ち仲間募集・マッチング機能を利用して行われる会員同士の遊技・金銭清算・合意に関しては、当事者間の自己責任において行うものとし、運営者はノリ打ちに伴うトラブルや損失について一切の責任を負いません。
            </p>
          </section>

          <section className="terms-section">
            <h3>第5条（免責事項）</h3>
            <p>
              当サイトおよびコミュニティ内で提供される期待値、ボーダー、演出示唆情報等は、実戦検証および解析値に基づき最善の精度で提供しておりますが、将来の遊技結果や収支を100%保証するものではありません。実際の遊技判断および投資は、利用者ご自身の判断と責任において行ってください。
            </p>
          </section>

          <div className="terms-footer-action">
            <button className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>
              確認して閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
