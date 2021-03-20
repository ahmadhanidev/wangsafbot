let handler = async m => m.reply(`
info cewe yg ga kenal sultam nelvin
`.trim())
handler.help = ['infocewe']
//handler.tags = ['info']
handler.command = /^(infocewe)$/i

module.exports = handler
