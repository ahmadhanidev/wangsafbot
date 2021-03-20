
let handler = async (m, { conn, text }) => {

  text2 = '\nKomika asal NTT yang karirnya meningkat drastis setelah dibantu oleh komodo.'

  if (!text2) throw '\nKomika asal NTT yang karirnya meningkat drastis setelah dibantu oleh komodo.'
  m.reply(text2, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text2)
    }
  })
}
handler.help = ['aryoubae']
//handler.tags = ['tools']

handler.command = /^aryoubae$/i

module.exports = handler
