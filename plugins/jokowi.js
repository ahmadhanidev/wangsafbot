let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.jokowi)}”`, m)
}
handler.help = ['jokowi']
//handler.tags = ['quotes']
handler.command = /^(jokowi)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

global.jokowi = [
  "*Ir. H. Joko Widodo* atau *Jokowi* adalah Presiden ke-7 Indonesia yang mulai menjabat sejak 20 Oktober 2014. \n\nTerpilih dalam Pemilu Presiden 2014, *Jokowi* menjadi Presiden Indonesia pertama sepanjang sejarah yang bukan berasal dari latar belakang elite politik atau militer Indonesia."
]
