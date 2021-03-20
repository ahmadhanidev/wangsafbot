// let handler = async m => m.reply(`
// fegy nyocotttttt`)
// handler.help = ['mulai']
// //handler.tags = ['info']
// handler.command = /^(mulai)$/i
//
// module.exports = handler

let handler = async (m, { conn, text }) => {

  text2 = '@' + 6285156356548 + '\n\nfegy nyocotttttt'

  //if (!text2) throw '@' + 6285156356548 + '\n\nfegy nyocotttttt'
  m.reply(text2, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text2)
    }
  })
}
handler.help = ['mulai']
//handler.tags = ['tools']

handler.command = /^mulai$/i

module.exports = handler
