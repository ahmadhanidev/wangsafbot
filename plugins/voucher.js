let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Masukkan *Kode Voucher*!`, m)
    if (args[0] == 'gratisongkir' || args[0] == 'dhaniowner' || args[0] == 'KodeGift3' || args[0] == 'KodeGift4') {
        global.DATABASE._data.users[m.sender].exp += 100000
        global.DATABASE._data.users[m.sender].limit -= 0
        conn.reply(m.chat, '*Selamat!*, \nVoucher berhasil digunakan.\n\nKamu telah mendapatkan *100,000 XP*!', m)
    } else {
        conn.reply(m.chat, `*[ Kode Voucher - TIDAK VALID! ]*\n\nSilahkan chat *_Dhani_* untuk bertanya mengenai Kode Voucher yang valid.`, m)
    }
}
handler.help = ['voucher <kode> (-1000 limit)']
//handler.tags = ['hadiah']
handler.command = /^(voucher)$/i
handler.group = true
handler.private = false
handler.owner = true

module.exports = handler
