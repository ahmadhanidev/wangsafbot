let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`Bot berhasil *dimatikan*.\n\nSelamat malam 😴`, m)
}
handler.help = ['offbot']
//handler.tags = ['main']
handler.command = /^(offbot)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
