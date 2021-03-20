let handler = async (m, { conn, text }) => {

  text2 = 'Coming Soon.'

  if (!text2) throw 'Coming Soon.'
  m.reply(text2, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text2)
    }
  })
}
handler.help = ['kenapa']
//handler.tags = ['tools']

handler.command = /^kenapa|kenapakah$/i

module.exports = handler
