let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  conn.reply(m.chat, `
Haii.. ${conn.getName(m.sender)}!, gimana kabarnya hari ini, capek ya?
\nJangan lupa bahagia, semangat yaa. 🌻🌻
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
//handler.help = ['haiKamu']
//handler.tags = ['kerang']
//handler.command = /^(hai|haikamu)$/i
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

global.haiKamu = [
  "disini gw cuma mau bilang siapapun lo, i just wanna let u know ur a amazing person ❤, sehat terus yaaa.. Jangan insecure inget, masih banyak yang pengen rasain jadi lo. Oh iya, jangan sering-sering begadang yaa gabaik buat kesehatan, jangan lupa jaga pola makan. U deserve more love, jangan galau terus yaa! Tapi please kalo lo lagi sedih/ngerasa useless don't do the stupid things or anything.",
  "aku tau kita gapernah ketemu atau tak saling kenal, tapi aku cuma pengen bilang makasih banyak udah berjuang sampai saat ini yaa, aku gatau latar belakang kamu apa, apa masalah kamu dan apa kondisi kamu saat ini tapi aku tau itu semua berat untuk dijalani, aku memang bukan seorang psikolog, tapi aku bisa mengerti dan aku tau caranya menyemangati seseorang, Tuhan selalu ada kok disisi kamu, dunia emang ga berputar buat kita doang, tapi disaat kamu lagi cape dan pengen banget berhenti buat     berjuang itu juga ga masalah kok, yang penting disaat kamu udah siap kamu bisa untuk jalanin lagi, gausah buru-buru melangkah, hidup kamu bukan kompetisi kok.",
  "Satu-satunya batasan untuk meraih mimpi kita adalah keragu-raguan kita akan hari ini. Marilah kita maju dengan keyakinan yang aktif dan kuat",
  "Tujuan hidup kita adalah menjadi bahagia.",
]
