let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  conn.reply(m.chat, `
📣 *[ Panggilan Vengce ]*
\n*Dari:* ${conn.getName(m.sender)}
*Untuk:* ${text}
\n*Pesan:* Vengce sekarang gak lu, vengce gak, gw gak mau tau pokoknya lu harus vengce sekarang juga...
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['vengce']
//handler.tags = ['kerang']
handler.command = /^(vence|vengce|vc|videocall)$/i
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
