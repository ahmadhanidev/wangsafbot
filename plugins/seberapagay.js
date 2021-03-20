let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*🌈 [Tingkat Gay]* - ${text} : *${Math.floor(Math.random() * 185)}* %
\nAti ati bool kamu :v
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//handler.help = ['siapakah <pertanyaan> --userGroup', 'siapa <pertanyaan> --userGroup']
//handler.tags = ['kerang']
handler.command = /^(seberapagay|levelgay)$/i
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
