let handler = async (m, { conn, args }) => {
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(10, sortedExp.length)
  let text = `
*[ XP Leaderboard - Top ${len} ]*
\nKamu: *Ranking ${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}* orang.

${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' Exp*').join`\n`}

\nPake botnya terus ya, jangan lupa naikin *XP* dan *limit* kamu!.
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len)]
    }
  })
}
//${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + 62895366019821 + ': *' + data.exp + ' Exp*').join`\n`}
handler.help = ['leaderboard']
handler.tags = ['xp']
handler.command = /^(leaderboard|rank)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
