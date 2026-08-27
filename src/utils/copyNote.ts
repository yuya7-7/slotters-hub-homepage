import type { Machine } from '../types'

/**
 * note規程・LINE・Discordに完全準拠した攻略ノートテキストを動的生成
 */
export const generateNoteMarkdown = (machine: Machine): string => {
  const videoSummaries = machine.aimPoints.videoSummary.map((item) => `・${item}`).join('\n')
  const triggers = machine.aimPoints.triggerSignals.map((sig) => `▶ ${sig}`).join('\n')

  let signalsText = ''
  machine.settingSignals.forEach((cat) => {
    signalsText += `\n【${cat.categoryName}】\n`
    cat.items.forEach((item) => {
      const charPart = item.character ? `${item.character}: ` : ''
      const actionPart = item.action ? ` (${item.action})` : ''
      signalsText += `・${charPart}「${item.content}」 ➔ ${item.badge}${actionPart}\n`
    })
  })

  return `# 【攻略ノート】${machine.name}

🎰 **【スロッター共闘ラウンジ『Slotter's Hub』公式Discord】**
全国のスロッターが集まるコミュニティ！現場での立ち回り相談・最新の仮説検証・ノリ打ち募集などを無料開放中🔥
👉 https://discord.gg/ky6Capbbdn

---

## 🎯 1. 狙い目 ＆ 要点

【💡 要点！】
${videoSummaries}

【⚡ 狙い目トリガー】
${triggers}

---

## 🛑 2. やめ時ルール

🟢【ヤメてOK】
${machine.yameRules.stopOk}

🔴【ヤメ厳禁】
${machine.yameRules.stopNg}

${machine.yameRules.tip ? `💡【プロの現場メモ】\n${machine.yameRules.tip}\n` : ''}
---

## 🏆 3. 設定示唆・注目演出
${signalsText.trim()}

---

👑 **【公式リンク一覧】**
🌐 公式ホームページ（25機種攻略早見表）: https://yuya7-7.github.io/slotters-hub-homepage/
💬 公式Discordサーバー（プレオープン無料開放中）: https://discord.gg/ky6Capbbdn
`
}

/**
 * クリップボードへの安全なテキストコピー（モバイル・PC対応）
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      return successful
    }
  } catch (err) {
    console.error('Failed to copy: ', err)
    return false
  }
}
