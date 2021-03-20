let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.autis)}”`, m)
}
handler.help = ['autis']
//handler.tags = ['quotes']
handler.command = /^(autis)$/i
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
global.autis = [
  'Coming Soon...',
  'Nanti tunggu update'
]
