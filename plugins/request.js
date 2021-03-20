const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan *request*!\n\nContoh: *#request <namaFitur>*', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ REQUEST ]*\n\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('62895366019821@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️Laporan Request Fiturmu telah dikirimkan ke *_Dhani_!*', m)
}
handler.help = ['request <fitur>']
handler.tags = ['info']
handler.command = /^(request)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

//Kasih siapa nama yang request sama waktu requestnya
