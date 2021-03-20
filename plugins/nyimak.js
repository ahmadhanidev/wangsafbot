let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.nyimak = + new Date
  user.nyimakReason = text
  m.reply(`
${conn.getName(m.sender)} sedang *nyimak*${text ? ': ' + text : ''}
`)
}
// handler.help = ['nyimak']
// handler.tags = ['main']
handler.command = /^nyimak$/i

module.exports = handler
