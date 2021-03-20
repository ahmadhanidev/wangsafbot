let handler = async m => m.reply(`
Maafin aku yaa pliss.... 🥺🥺🥺🥺
`.trim())
handler.help = ['maaf']
//handler.tags = ['info']
handler.command = /^(maaf)$/i

module.exports = handler
