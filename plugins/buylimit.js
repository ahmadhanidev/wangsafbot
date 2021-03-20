const xpperlimit = 50
let handler = async (m, { conn, command, args }) => {
  let limit = global.DATABASE.data.users[m.sender].limit
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `*Harga:* -${xpperlimit * count} XP\n*Bertambah:* + ${count} Limit \n\nKetik *#menu* untuk melihat jumlah limit saat ini.`, m)
  } else conn.reply(m.chat, `XP tidak mencukupi untuk membeli ${count} limit`, m)
}
handler.help = ['buy<jumlah limit>', 'buy <jumlah limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-99]+)|buy|buyall$/i
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
