let handler = async m => m.reply(`
Anjim, ternyata cuman sarkas....😅😅😅
`.trim())
handler.help = ['sarkas']
//handler.tags = ['info']
handler.command = /^(sarkas)$/i

module.exports = handler
