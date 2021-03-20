let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*[Kocok Dadu]* 🎲
\nAngka Dadu Anda : *${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12'])}*
Angka Dadu Bot : *${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12'])}*

*Siapakah pemenangnya?*
`.trim(), m)
}
//handler.help = ['dadu']
//handler.tags = ['game']

// JIKA DADU KITA MEMANG, MAKA KITA DAPAT TAMBAHAN XP
handler.command = /^dadu/i
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
