let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.katasemangat1)}”`, m)
}
//handler.help = ['semangat']
//handler.tags = ['kerang']
//handler.command = /^(semangat)$/i
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

global.katasemangat1 = [
  'Hidup itu sederhana, kita yang membuatnya sulit.',
  'Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.',
  'Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.',
  'Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin.',
  'Kenyataannya, ada tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.',
  'Tujuan hidup kita adalah menjadi bahagia.',
  'Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.',
  'Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.'
]
