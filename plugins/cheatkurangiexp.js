let handler = async (m, { conn }) => {
    global.DATABASE._data.users[m.sender].exp -= 350000
    m.reply('*Cheat Sukses!* \n\nXP kamu bertambah: *200.000 XP* \n\nMama pasti bangga sama kamu 😎')
}
handler.help = ['prankcheat']
//handler.tags = ['xp']
//handler.command = /^(sonyganteng)$/i
//handler.command = /^(deadeye)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
