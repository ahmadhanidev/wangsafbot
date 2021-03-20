let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*SLOT GAME*

${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} <===
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}
\n*XP Bertambah* : +(1000 XP)
\nCoba Lagi!
`.trim(), m)
    global.DATABASE._data.users[m.sender].exp += 1000
}
//handler.help = ['slot']
//handler.tags = ['game']
handler.command = /^slot/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
