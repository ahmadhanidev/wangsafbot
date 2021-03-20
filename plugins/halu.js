let handler = async (m, { conn, text }) => {
  if (!text) throw '*Format salah!* \n\nFormat: #halu <teks>'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['halu']
//handler.tags = ['tools']

handler.command = /^halu$/i

module.exports = handler
