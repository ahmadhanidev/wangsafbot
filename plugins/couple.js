let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  conn.reply(m.chat, `
(っ◔◡◔)っ *[ Persentase Jodoh ♥ ]* -- ${text}
\n*Biro Jodoh:* ${conn.getName(m.sender)}
\nSelamat, persentase kecocokan *${text}* sebanyak *${Math.floor(Math.random() * 115)} %*
\n*Quotes:* 𝙶𝚊𝚛𝚒𝚜 𝚓𝚘𝚍𝚘𝚑 𝚜𝚞𝚍𝚊𝚑 𝚍𝚒𝚝𝚎𝚗𝚝𝚞𝚔𝚊𝚗 𝚘𝚕𝚎𝚑 𝚃𝚞𝚑𝚊𝚗 𝚂𝚊𝚗𝚐 𝙿𝚎𝚖𝚒𝚕𝚒𝚔  𝚃𝚊𝚔𝚍𝚒𝚛. 𝚂𝚊𝚊𝚝 𝚓𝚘𝚍𝚘𝚑 𝚒𝚝𝚞 𝚑𝚊𝚍𝚒𝚛, 𝚝𝚒𝚍𝚊𝚔 𝚋𝚞𝚝𝚞𝚑 𝚠𝚊𝚔𝚝𝚞 𝚢𝚊𝚗𝚐 𝚕𝚊𝚖𝚊 𝚞𝚗𝚝𝚞𝚔 𝚖𝚎𝚢𝚊𝚔𝚒𝚗𝚔𝚊𝚗 𝚍𝚒𝚛𝚒 𝚋𝚊𝚑𝚠𝚊 𝚒𝚝𝚞𝚕𝚊𝚑 𝚌𝚒𝚗𝚝𝚊.
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//(+) Add Random Quotes
handler.help = ['couple']
//handler.tags = ['kerang']
handler.command = /^(couple|seberapajodoh|seberapacocok)$/i
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
