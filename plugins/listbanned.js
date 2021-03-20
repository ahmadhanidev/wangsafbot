let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  let userBanned == global.listBanned
  if (userBanned)
  conn.reply(m.chat, `
Test 123
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//(+) Add Random Quotes
handler.help = ['banned']
//handler.tags = ['kerang']
handler.command = /^(banned)$/i
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

global.listBanned = ['~pnear']
