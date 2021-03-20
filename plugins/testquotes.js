// // let handler = (m, { text }) => {
// //   let user = global.DATABASE.data.users[m.sender]
// //   m.reply(`
// // ${text} Hallo gua ${conn.getName(m.sender)}, disini gw cuma mau bilang siapapun lo, i just wanna let u know ur a amazing person ❤, sehat terus yaaa.. Jangan insecure inget, masih banyak yang pengen rasain jadi lo. Oh iya, jangan sering-sering begadang yaa gabaik buat kesehatan, jangan lupa jaga pola makan. U deserve more love, jangan galau terus yaa! Tapi please kalo lo lagi sedih/ngerasa useless don't do the stupid things or anything.
// // `.trim(), m, m.mentionedJid ? {
// //     contextInfo: {
// //       mentionedJid: m.mentionedJid
// //     }
// //   } : {})
// // }
// // handler.help = ['testquote']
// // //handler.tags = ['main']
// // handler.command = /^testquote$/i
// //
// // module.exports = handler
//
// let handler = async (m, { conn, command, text }) => {
//   let user = global.DATABASE.data.users[m.sender]
//   conn.reply(m.chat, `
// *Semangat dari:* ${conn.getName(m.sender)}
// *Untuk :* ${text}
// \nHallo gua ${conn.getName(m.sender)}, ${pickRandom(global.pesan)}
// `.trim(), m, m.mentionedJid ? {
//     contextInfo: {
//       mentionedJid: m.mentionedJid
//     }
//   } : {})
// }
// handler.help = ['testquote']
// //handler.tags = ['kerang']
// handler.command = /^(testquote)$/i
// handler.owner = false
// handler.mods = false
// handler.premium = false
// handler.group = false
// handler.private = false
//
// handler.admin = false
// handler.botAdmin = false
//
// handler.fail = null
//
// module.exports = handler
//
// function pickRandom(list) {
//   return list[Math.floor(Math.random() * list.length)]
// }
//
// global.pesan = [
//   "disini gw cuma mau bilang siapapun lo, i just wanna let u know ur a amazing person ❤, sehat terus yaaa.. Jangan insecure inget, masih banyak yang pengen rasain jadi lo. Oh iya, jangan sering-sering begadang yaa gabaik buat kesehatan, jangan lupa jaga pola makan. U deserve more love, jangan galau terus yaa! Tapi please kalo lo lagi sedih/ngerasa useless don't do the stupid things or anything.",
//   "aku tau kita gapernah ketemu atau tak saling kenal, tapi aku cuma pengen bilang makasih banyak udah berjuang sampai saat ini yaa, aku gatau latar belakang kamu apa, apa masalah kamu dan apa kondisi kamu saat ini tapi aku tau itu semua berat untuk dijalani, aku memang bukan seorang psikolog, tapi aku bisa mengerti dan aku tau caranya menyemangati seseorang, Tuhan selalu ada kok disisi kamu, dunia emang ga berputar buat kita doang, tapi disaat kamu lagi cape dan pengen banget berhenti buat     berjuang itu juga ga masalah kok, yang penting disaat kamu udah siap kamu bisa untuk jalanin lagi, gausah buru-buru melangkah, hidup kamu bukan kompetisi kok."
// ]
