let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`:v ??`, m)
}
//handler.help = ['play']
//handler.tags = ['main']
//handler.command = /^(play)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

// global.offbot = [
//   'Sukses!.. Bot telah dimatikan....'
// ]
