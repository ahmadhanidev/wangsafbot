let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.sardi)}”`, m)
}
//handler.help = ['bucin']
//handler.tags = ['quotes']
//handler.command = /^(sardi)$/i
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

// https://jalantikus.com/tips/kata-kata-bucin/
global.sardi = [
  "Sarkas dan Komedi"
]
