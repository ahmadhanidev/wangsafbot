let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  conn.reply(m.chat, `
📣 *[ Panggilan Mabar - MOBILE LEGEND ]*
\n*Dari:* ${conn.getName(m.sender)}
*Untuk:* ${text}
\n*Pesan:* Loginn sekarang gak lu, login gak, gw gak mau tau pokoknya lu harus login mobile legend sekarang juga...
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['mabarpubg']
//handler.tags = ['kerang']
handler.command = /^(mabarml|mabarmobilelegend|loginml)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
