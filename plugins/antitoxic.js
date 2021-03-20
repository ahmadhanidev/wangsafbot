let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 TOXIC ALERT 」*
\n*Pengirim* : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
*Pesan* : ${m.text}
\nLo pikir keren ?? 😅
`.trim(), m)
    let mentionedJid = [m.sender]
}
//handler.customPrefix = /memeg|anjing|babi|anjink|peler|penis|tolol|lonte|anak lonte|memek|kontol|goblok|goblog/i
//handler.command = new RegExp

module.exports = handler
