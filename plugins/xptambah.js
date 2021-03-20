let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah exp yang akan di tambahkan'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu user!'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  let nomer = '@' + who.split`@`[0]
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  //let pjk = Math.ceil(xp * pajak)
  //exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  exp > users[m.sender].exp
  users[m.sender].exp += 0
  users[who].exp += xp

  m.reply(`*Sukses menambahkan Exp!* \n\nNomor Tujuan: _${nomer}_ \nExp yang ditambahkan : *( ${xp} XP )*`)
  //conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
//handler.help = ['pay @user <amount>']
//handler.tags = ['xp']
handler.command = /^tambahxp$/
handler.owner = true

module.exports = handler
