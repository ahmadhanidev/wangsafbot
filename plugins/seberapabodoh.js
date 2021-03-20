let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*♦ [Tingkat Kegoblokan]* - ${text} : *${Math.floor(Math.random() * 99)}* %
\nOrang pintar maunya cepat berhasil, padahal semua orang tahu itu impossible! Orang goblok cuma punya satu harapan, yaitu hari ini bisa makan.
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//handler.help = ['siapakah <pertanyaan> --userGroup', 'siapa <pertanyaan> --userGroup']
//handler.tags = ['kerang']
handler.command = /^(seberapabodoh|seberapagoblok|seberapatolol)$/i
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
