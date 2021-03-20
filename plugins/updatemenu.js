let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*Update menu berhasil !*
\n\nSilahkan cek di *#menu* untuk melihat menu.`, m)
}
handler.help = ['onbot']
//handler.tags = ['main']
//handler.command = /^(updatemenu)$/i
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
