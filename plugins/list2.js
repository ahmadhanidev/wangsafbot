let handler = async (m, { conn, text }) => {
  if (!text) throw '*Format salah!* \n\nFormat: #list2 <teks>'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['list2']
//handler.tags = ['tools']

handler.command = /^list2$/i

module.exports = handler
