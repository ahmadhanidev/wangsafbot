let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, text }) => {
  text2 = ' @' + 6285156344113
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
🌙 *[ INFO USER ]*\n\n*Nama*: ${username} ${registered ? '(' + name + ') ': ''}${about ? '\n*Status*: ' + about : ''}
\n*Nomor WA*: (${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')})
*Link WA*: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
\n*Total XP*: ${exp}
*Total Limit*: ${limit}
`.trim()
    let mentionedJid = [who]
    if (text2) conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid: conn.parseMention(text2) }})
    if (!text) throw 'Mention user yang ingin di stalk! \nContoh : *#stalk*' + text2
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid: conn.parseMention(text2) }})
  }
}
//handler.help = ['stalk [@user]']
//handler.tags = ['tools']
//handler.command = /^contohspam$/i
handler.owner = false
module.exports = handler
