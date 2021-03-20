let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  conn.reply(m.chat, `
${text} adalah orang yang memiliki kepribadian: *${pickRandom(global.sifat)}*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//(+) Add Random Quotes
handler.help = ['sifat']
//handler.tags = ['kerang']
handler.command = /^(sifat)$/i
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

global.sifat = [
  "Sabar",
  "Setia",
  "Pemaaf",
  "Murah hati",
  "Sopan",
  "Sombong",
  "Gila dunia",
  "Bodoh",
  "Pintar",
  "Suka marah",
  "Menuruti hawa nafsu",
  "Suka pamer",
  "Meremehkan orang lain",
  "Pendendam",
  "Cari perhatian",
  "Pesimis",
  "Labil",
  "Perfeksionis",
  "Ambisius",
  "Suka memerintah",
  "Pembangkang",
  "Bermuka dua",
  "Sabar",
  "Setia",
  "Pemaaf",
  "Murah hati",
  "Sabar",
  "Setia",
  "Pemaaf",
  "Murah hati",
  "Sopan",
  "Sombong",
  "Gila dunia",
  "Bodoh",
  "Pintar",
  "Suka marah",
  "Menuruti hawa nafsu",
  "Suka pamer",
  "Sabar",
  "Setia",
  "Pemaaf",
  "Murah hati",
  "Meremehkan orang lain",
  "Pendendam",
  "Cari perhatian",
  "Pesimis",
  "Labil",
  "Perfeksionis",
  "Ambisius",
  "Suka memerintah",
  "Pembangkang",
  "Bermuka dua",
  "Sabar",
  "Setia",
  "Sabar",
  "Setia",
  "Pemaaf",
  "Murah hati",
  "Pemaaf",
  "Murah hati",
  "Sopan",
  "Sombong",
  "Gila dunia",
  "Bodoh",
  "Pintar",
  "Suka marah",
  "Menuruti hawa nafsu",
  "Suka pamer",
  "Meremehkan orang lain",
  "Pendendam",
  "Cari perhatian",
  "Pesimis",
  "Labil",
  "Perfeksionis",
  "Ambisius",
  "Sabar",
  "Setia",
  "Pemaaf",
  "Murah hati",
  "Suka memerintah",
  "Pembangkang",
  "Bermuka dua"
]
