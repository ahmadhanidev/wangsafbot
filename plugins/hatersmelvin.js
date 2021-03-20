let handler = async m => m.reply(`
iyah semua aja buat luh sultan mlelcin 😅
`.trim())
handler.help = ['hatersmelvin']
//handler.tags = ['info']
handler.command = /^(hatersmelvin)$/i

module.exports = handler
