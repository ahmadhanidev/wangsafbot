let handler = async m => m.reply(`
*Daftar Cheat Terbaru* : \n\n#abogoboga \n#deadeye \n#bandit \n#painkiller \n#vinewood \n#hesoyam \n\n*Silahkan gunakan cheat pada private chat di bot.*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['listcheat']
//handler.tags = ['info']
//handler.command = /^(listcheat)$/i

module.exports = handler
