let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  conn.reply(m.chat, `
${text} test : @62895366019821 *${pickRandom(global.testbot)}*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//(+) Add Random Quotes
handler.help = ['testbot']
//handler.tags = ['kerang']
handler.command = /^(testbot666)$/i
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

global.testbot = [
  "Sabar"
]
