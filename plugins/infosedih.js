let handler = async m => m.reply(`
Telah meninggal akun Bot pertama, semoga amal ibadahnya diterima di sisiNya 🙏 \n\n~ *[ Poserfriends BOT 2 ]*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['infobot']
//handler.tags = ['info']
handler.command = /^(infobot)$/i

module.exports = handler
