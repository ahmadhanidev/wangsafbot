let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.nyimak > -1) {
    m.reply(`
Anda berhenti *nyimak*
`.trim())
    user.nyimak = -1
    user.nyimakReason = ''
  }
  let jids = [...new Set(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let nyimakTime = user.nyimak
    if (!nyimakTime || nyimakTime < 0) continue
    let reason = user.nyimakReason || 'nyimak'
    m.reply(`
Jangan tag dia, dia lagi nyimak ${reason}
Selama ${clockString(new Date - nyimakTime)}
`.trim())
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
