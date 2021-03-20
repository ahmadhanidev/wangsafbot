let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  if (!text) throw 'Masukkan *<nama>* atau mention user! \nContoh : *#semangat @rahmat*'
  conn.reply(m.chat, `
*Semangat dari:* ${conn.getName(m.sender)}
*Untuk :* ${text}
\nHallo kenalin nama gw *${conn.getName(m.sender)}*, gw mau bilang sesuatu.... \n\n${pickRandom(global.semangat1)}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['semangat']
//handler.tags = ['kerang']
handler.command = /^(semangat)$/i
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

global.semangat1 = [
  "Disini gw cuma mau bilang siapapun lo, i just wanna let u know ur a amazing person ❤, sehat terus yaaa.. Jangan insecure inget, masih banyak yang pengen rasain jadi lo. Oh iya, jangan sering-sering begadang yaa gabaik buat kesehatan, jangan lupa jaga pola makan. U deserve more love, jangan galau terus yaa! Tapi please kalo lo lagi sedih/ngerasa useless don't do the stupid things or anything.",
  "Aku tau kita gapernah ketemu atau tak saling kenal, tapi aku cuma pengen bilang makasih banyak udah berjuang sampai saat ini yaa, aku gatau latar belakang kamu apa, apa masalah kamu dan apa kondisi kamu saat ini tapi aku tau itu semua berat untuk dijalani, aku memang bukan seorang psikolog, tapi aku bisa mengerti dan aku tau caranya menyemangati seseorang, Tuhan selalu ada kok disisi kamu, dunia emang ga berputar buat kita doang, tapi disaat kamu lagi cape dan pengen banget berhenti buat     berjuang itu juga ga masalah kok, yang penting disaat kamu udah siap kamu bisa untuk jalanin lagi, gausah buru-buru melangkah, hidup kamu bukan kompetisi kok.",
  "Tujuan hidup manusia adalah menjadi bahagia. Jadi plis jangan sedih2 ya, masih banyak kok temen yang ada disaat lu senang dan sedih. \n\nKalo lu mau curhatin sesuatu, chat aja ya pasti gw dengerin..."
]
