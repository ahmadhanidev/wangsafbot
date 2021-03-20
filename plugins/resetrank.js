let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`
*Reset rank sukses.*
\n\n[Poserfriends BOT 2]`, m)
}
handler.help = ['resetrank']
//handler.tags = ['main']
handler.command = /^(resetrank)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// global.offbot = [
//   'Sukses!.. Bot telah dimatikan....'
// ]
