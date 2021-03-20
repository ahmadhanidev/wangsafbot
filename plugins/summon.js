let handler = async (m, { conn, args }) => {
  let user = global.DATABASE.data.users[m.sender]
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(1, sortedExp.length)

  let user1 = global.DATABASE.data.users[m.sender]
  let sortedExp1 = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim1 = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let usersExp1 = sortedExp1.map(v => v[0])
  let usersLim1 = sortedLim1.map(v => v[0])
  let len1 = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(1, sortedExp1.length)

  let text = `
  Coming Soon. ${sortedExp.slice(0, len).map(([user, data]) => '@' + 6285156356548 + '')} ${sortedExp1.slice(0, len1).map(([user1, data]) => '@' + 6285156356548 + '')}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersExp1.slice(0, len1)]
    }
  })
}
//${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + 62895366019821 + ': *' + data.exp + ' Exp*').join`\n`}
handler.help = ['summon']
//handler.tags = ['xp']
//handler.command = /^(summon)$/i
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
