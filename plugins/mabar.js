let handler = async (m, { conn, text }) => {

  text2 = 'Mabarrrrrrr ' + '@' + 6289657856407 + ' @' + 6289502012673

  if (!text2) throw 'Test..'
  m.reply(text2, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text2, text)
    }
  })
}
handler.help = ['mabar']
//Script buat taufik
//handler.tags = ['tools']

handler.command = /^(mabar)$/i

module.exports = handler
