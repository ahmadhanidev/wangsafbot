let handler = async (m, { conn }) => {
    global.DATABASE._data.users[m.sender].exp += 30000
    m.reply('*Cheat Sukses!* \n\nXP kamu bertambah: +70,000 XP \n\nJangan kasih tau ke grup yaa kalo kamu pake cheat 🤫🤫')
}
handler.help = ['hesoyam']
//handler.tags = ['xp']
//handler.command = /^(hesoyam)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
