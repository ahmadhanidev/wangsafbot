let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*😎 [Tingkat Kegantengan]* - ${text} : *${Math.floor(Math.random() * 99)}* %
\nGanteng doang, jemput cewek depan gang.
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//handler.help = ['siapakah <pertanyaan> --userGroup', 'siapa <pertanyaan> --userGroup']
//handler.tags = ['kerang']
handler.command = /^(seberapaganteng)$/i
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
