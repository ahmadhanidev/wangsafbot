let handler = async m => m.reply(`
Hahahahahaha lucu... \nlucu banget wkwkwkwkaa 😅😅
`.trim())
handler.help = ['lucu']
//handler.tags = ['info']
handler.command = /^(lucu)$/i

module.exports = handler
