let handler = async (m, { conn, text }) => {

  text2 = 'Bot math dimatikan.' + '\n\nSilahkan ngamuk ke ' + '@' + 6281384012735 + '\n\nOff dulu.'

  if (!text2) throw 'Bot math dimatikan.' + '\n\nSilahkan ngamuk ke ' + '@' + 6281384012735 + '\n\nOff dulu.'
  m.reply(text2, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text2)
    }
  })
}
//handler.help = ['mathoff']
//handler.tags = ['tools']

//handler.command = /^math$/i

module.exports = handler
