 // let handler = async (m, { conn }) => {
 //     global.DATABASE._data.users[m.sender].exp += 5000
 //     m.reply('*Cheat Sukses!* \n\nXP kamu bertambah: +500,000 XP \n\nMama pasti bangga sama kamu 🤫🤫')
 // }

 let handler = async (m, { conn }) => {
     m.reply('*Cheat Off* \n\nUdahan yukk nanti lagiii')
 }

//handler.help = ['deadeye']
//handler.tags = ['xp']
//handler.command = /^(fanecantik2)$/i
//handler.command = /^(deadeye)$/i
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
