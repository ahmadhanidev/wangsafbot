let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  if (!text) throw 'Masukkan <nama> \nContoh : *#agama rahmat*'
  conn.reply(m.chat, `
Sepertinya agama ${text}, yaitu: *${pickRandom(global.kepercayaan)}*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//(+) Add Random Quotes
handler.help = ['agama']
//handler.tags = ['kerang']
handler.command = /^(agama)$/i
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
  return list[Math.floor(Math.random() * list.length)]
}

global.kepercayaan = [
  "Islam",
  "Konghucu",
  "Kristen",
  "Buddha",
  "Hindu",
  "Atheis",
  "Tidak Beragama",
  "Non Islam",
  "Non Kafir",
  "Penyembah Dewa",
  "Islam",
  "Konghucu",
  "Animisme",
  "Dinamisme",
  "Atheis Stadium 4",
  "Kristen",
  "Buddha",
  "Hindu",
  "Penyembah Dewa",
  "Penyembah Anime",
  "Penyembah Kasur",
  "Atheis",
  "Tidak Beragama",
  "Non Islam",
  "Non Kafir",
  "Penyembah Dewa",
  "Islam",
  "Konghucu",
  "Kristen",
  "Buddha",
  "Hindu",
  "Atheis",
  "Tidak Beragama",
  "Non Islam",
  "Animisme",
  "Dinamisme",
  "Atheis Stadium 4",
  "Non Kafir",
  "Penyembah Dewa",
  "Islam",
  "Konghucu",
  "Kristen",
  "Buddha",
  "Hindu",
  "Atheis",
  "Tidak Beragama",
  "Non Islam",
  "Non Kafir",
  "Penyembah Dewa",
  "Penyembah Anime",
  "Penyembah Kasur"
]
