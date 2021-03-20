let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`Jodoh *Dilla* adalah : “${pickRandom(global.dilla2)}”`, m)
}
//handler.help = ['bucin']
//handler.tags = ['quotes']
handler.command = /^(jodohdilla)$/i
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

global.dilla2 = [
  "Melvin",
  "Fegy",
  "Azrul",
  "Fajar",
  "Taufik",
  "Nufail",
  "Dika",
  "Mikail",
  "Aryoubae",
  "Melvin",
  "Fegy",
  "Azrul",
  "Fajar",
  "Taufik",
  "Nufail",
  "Dika",
  "Mikail",
  "Aryoubae",
  "Melvin",
  "Fegy",
  "Azrul",
  "Fajar",
  "Taufik",
  "Nufail",
  "Dika",
  "Mikail",
  "Aryoubae",
  "Chandra",
  "Dhani"
]
