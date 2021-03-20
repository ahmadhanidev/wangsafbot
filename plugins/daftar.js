let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  conn.reply(m.chat, `
${pickRandom(global.listDaftar)}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//(+) Add Random Quotes
handler.help = ['daftar']
//handler.tags = ['kerang']
handler.command = /^(daftar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

global.listDaftar = [
  'nggak usah daftar daftar dah'
]
