let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.jawa)}”`, m)
}
//handler.help = ['bucin']
//handler.tags = ['quotes']
handler.command = /^(jawa|jawir|chandra)$/i
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

global.jawa = [
  "Sabar iku ingaran mustikaning laku.",
  "Wong sabar rejekine jembar, ngalah urip luwih berkah.",
  "Sepi ing pamrih, rame ing gawe, banter tan mblancangi, dhuwur tan nungkuli.",
  "Ngeluruk tanpa bala, menang tanpa ngasorake, sekti tanpa aji-aji, sugih tanpa bhanda.",
  "Nek wes niat kerjo iku ojo golek perkoro, nek wes diniati golek rejeki iku ora usah golek rai.",
  "Akeh manungsa ngrasakake tresna, tapi lali lan ora kenal opo iku hakikate tresno.",
  "Sabar iku ingaran mustikaning laku.",
  "Wong sabar rejekine jembar, ngalah urip luwih berkah.",
  "Sepi ing pamrih, rame ing gawe, banter tan mblancangi, dhuwur tan nungkuli.",
  "Ngeluruk tanpa bala, menang tanpa ngasorake, sekti tanpa aji-aji, sugih tanpa bhanda.",
  "Nek wes niat kerjo iku ojo golek perkoro, nek wes diniati golek rejeki iku ora usah golek rai.",
  "Akeh manungsa ngrasakake tresna, tapi lali lan ora kenal opo iku hakikate tresno.",
  "Sabar iku ingaran mustikaning laku.",
  "Wong sabar rejekine jembar, ngalah urip luwih berkah.",
  "Sepi ing pamrih, rame ing gawe, banter tan mblancangi, dhuwur tan nungkuli.",
  "Ngeluruk tanpa bala, menang tanpa ngasorake, sekti tanpa aji-aji, sugih tanpa bhanda.",
  "Nek wes niat kerjo iku ojo golek perkoro, nek wes diniati golek rejeki iku ora usah golek rai.",
  "Akeh manungsa ngrasakake tresna, tapi lali lan ora kenal opo iku hakikate tresno.",
  "Uwong duwe pacar iku kudu sabar ambek pasangane. Opo maneh seng gak duwe.",
  "Sing paling tak wedeni urip ning dunyo udu kelangan koe, tapi wedi nek koe kelangan kebahagiaanne sampean.",
  "Koe kuwi koyo bintang, sing indah didelok tapi susah untuk digapai.",
  "Mergo sing gaene ngekeki cokelat bakal kalah karo seng ngewehi seperangkat alat sholat karo nyanyi lagu akad.",
  "Uwong duwe pacar iku kudu sabar ambek pasangane. Opo maneh seng gak duwe.",
  "Sing paling tak wedeni urip ning dunyo udu kelangan koe, tapi wedi nek koe kelangan kebahagiaanne sampean.",
  "Koe kuwi koyo bintang, sing indah didelok tapi susah untuk digapai.",
  "Mergo sing gaene ngekeki cokelat bakal kalah karo seng ngewehi seperangkat alat sholat karo nyanyi lagu akad."
]
