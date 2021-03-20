let handler = async (m, { conn, text }) => {

  text2 = '\nKontol dan Seks.'

  if (!text2) throw '\nKontol dan Seks.'
  m.reply(text2, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text2)
    }
  })
}
handler.help = ['konteks']
//handler.tags = ['tools']

handler.command = /konteks/i

module.exports = handler
