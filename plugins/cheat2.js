let handler = async (m, { conn }) => {
    global.DATABASE._data.users[m.sender].exp += 20000
    m.reply('*Cheat Sukses!* \n\nXP kamu bertambah: +50,000 XP \n\nJangan kasih tau ke grup yaa kalo kamu pake cheat 🤫🤫')
}
handler.help = ['abogoboga']
//handler.tags = ['xp']
//handler.command = /^(abogoboga|painkiller)$/i
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
