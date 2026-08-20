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
            <h3>第1条（適用および利用資格）</h3>
            <p>
              1. 本利用規約（以下「本規約」）は、Slotter's Hub（以下「当コミュニティ」）が提供するすべてのサービス（Webサイト、Discordサーバー、有料攻略ノート、ノリ打ちマッチング機能等）の利用条件を定めるものです。すべての会員・利用者は本規約に同意の上で当サービスをご利用いただきます。
            </p>
            <p>
              2. <strong>【年齢制限・利用資格】</strong> 当コミュニティおよび有料プランは<strong>18歳以上（高校生を除く）</strong>を対象としております。会員登録、有料プランの決済、またはDiscordへの参加手続きを完了した時点で、利用者は18歳以上（高校生でないこと）に該当し、本条に同意・申告したものとみなします。
            </p>
          </section>

          <section className="terms-section highlight-section">
            <h3>第2条（有料プラン・決済・解約・返金ポリシー）</h3>
            <p>
              1. <strong>【料金および自動更新】</strong> 当コミュニティの有料プラン（スタンダード会員 ¥500/月、プレミアム会員 ¥1,900/月）は、加入日を起算日とする1ヶ月ごとの自動更新サブスクリプション方式となります。
            </p>
            <p>
              2. <strong>【解約手続き】</strong> 会員は、決済プラットフォーム（MOSH等）のマイページより、いつでも次回更新のキャンセル・解約手続きを行うことができます。解約手続き完了後も、有効期限終了日までは有料特典を利用可能です。
            </p>
            <p>
              3. <strong>【返金およびキャンセル不可】</strong> デジタルコンテンツ、限定データ配信およびコミュニティサービスの性質上、決済完了後のキャンセル、日割り計算による返金、または過去の月額料金の返金には一切応じられません。あらかじめご了承ください。
            </p>
          </section>

          <section className="terms-section highlight-section">
            <h3>第3条（投稿コンテンツの権利と二次利用）</h3>
            <p>
              1. 会員が当コミュニティ（Discord内の各チャンネル、フォーラム、画像共有部屋等）に投稿した画像、実戦報告データ、考察テキスト等の著作権は、投稿した会員本人に帰属します。
            </p>
            <p>
              2. <strong>【二次利用への許諾】</strong> 会員は、当コミュニティ内に投稿したコンテンツ（ホールでの実践写真、確定演出画像、収支データ、立ち回り考察等）について、当コミュニティ運営者が以下の目的で無償・非独占的に利用（複製・引用・要約・Webサイト掲載・SNSでの紹介等）することをあらかじめ許諾するものとします。
            </p>
            <ul className="terms-list">
              <li>・当ポータルサイト（Slotter's Hub）における機種別示唆・実践データまとめへの掲載</li>
              <li>・攻略ノートおよびコミュニティ向け解説資料の作成・充実</li>
              <li>・公式SNSおよびコミュニティ広報・プロモーションでの紹介</li>
            </ul>
            <p>
              3. <strong>【プライバシー保護と配慮】</strong> 運営者が投稿画像をサイト等で紹介する際は、会員のプライバシー保護を最優先とし、顔写真の写り込みや個人情報、特定を希望しない情報等に対して適切なモザイク処理・トリミング等の加工を行います。（ご希望に応じて「提供: @〇〇さん」のクレジット表記を行います）
            </p>
          </section>

          <section className="terms-section highlight-section">
            <h3>第4条（禁止事項および第三者著作権の保護）</h3>
            <p>1. 会員は、当コミュニティの利用にあたり以下の行為を行ってはならないものとします。</p>
            <ul className="terms-list">
              <li>・<strong>【外部有料コンテンツの無断共有禁止】</strong> 第三者の著作権を侵害する行為（外部の有料note記事、他サロンや他発信者の有料コンテンツ、無断転載禁止データのスクリーンショットやテキストを当コミュニティ内に投稿・共有・リークする行為）</li>
              <li>・<strong>【当コミュニティ情報の流出禁止】</strong> 当コミュニティの有料限定コンテンツ（106%攻略ノート、VIPデータ等）を外部へ無断転載・再配布・流出させる行為</li>
              <li>・他の会員や特定の第三者・店舗に対する誹謗中傷、嫌がらせ、過度なマウント行為</li>
              <li>・ホールにおけるハウスルール違反、違法行為、迷惑行為を助長する投稿</li>
              <li>・当コミュニティ内での無許可の営業活動、宗教・マルチ商法・他サロンへの勧誘行為</li>
            </ul>
            <p>
              2. <strong>【違反投稿への対応および免責】</strong> 会員が第三者の有料note等の著作物を無断で投稿・共有した場合、それにより生じる一切の紛争・損害賠償・法的責任は<strong>投稿した会員本人が単独で負うものとし、当コミュニティおよび運営者は一切の責任を負いません</strong>。また、運営者は権利侵害のおそれがある投稿を発見または通報を受け次第、事前予告なく直ちにメッセージを削除し、投稿者を強制退会処分とします。
            </p>
          </section>

          <section className="terms-section">
            <h3>第5条（会員資格の停止・強制退会）</h3>
            <p>
              会員が第4条の禁止事項に違反した場合、または当コミュニティの秩序を著しく乱すと運営者が判断した場合、運営者は事前の通知なく当該会員のアカウントを強制退会（BAN）または一時利用停止とすることができるものとします。なお、強制退会処分となった場合でも、既にお支払いいただいた月額料金の返金は一切行いません。
            </p>
          </section>

          <section className="terms-section">
            <h3>第6条（ノリ打ち・マッチングに関する自己責任）</h3>
            <p>
              当コミュニティが提供するノリ打ち仲間募集・マッチング機能を利用して行われる会員同士の遊技・金銭清算・合意に関しては、当事者間の自己責任において行うものとし、運営者はノリ打ちに伴うトラブル、損害、損失について一切の責任を負いません。
            </p>
          </section>

          <section className="terms-section">
            <h3>第7条（サービスの変更・中断・免責事項）</h3>
            <p>
              1. 運営者は、システムの保守点検、外部サービス（Discord、MOSH等）の障害、その他やむを得ない事情により、会員への事前通知なくサービスの一部または全部を変更・一時中断することがあります。
            </p>
            <p>
              2. 当サイトおよびコミュニティ内で提供される期待値、ボーダー、演出示唆情報等は、実戦検証および解析値に基づき最善の精度で提供しておりますが、将来の遊技結果や収支を100%保証するものではありません。実際の遊技判断および投資は、利用者ご自身の判断と責任において行ってください。
            </p>
          </section>

          <section className="terms-section">
            <h3>第8条（準拠法および管轄裁判所）</h3>
            <p>
              本規約の解釈および適用にあたっては日本法を準拠法とし、当コミュニティの利用に関して紛争が生じた場合には、運営者の所在地を管轄する地方裁判所または簡易裁判所を第一審の専属的合意管轄裁判所とします。
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
