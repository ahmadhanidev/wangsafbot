let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler = async (m, { conn, args, text }) => {
  let lang = 'id'
  let text2 = 'Siap dah lu orang paling' + text
  // let text = args.slice(1).join(' ')
  // if (args[0].length === 2) lang = args[0]
  // else text = args.join(' ')
  // if (!text) text = lang
  let res
  conn.reply(m.chat, `
Siap dah, lu orang *paling ${text}* 😅
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
  try { res = await tts(text2, lang) }
  catch (e) {
    m.reply(e + '')
    res = await tts(text2)
  } finally {
    conn.sendFile(m.chat, res, 'sardi.opus', null, m, true)
  }
}
handler.command = /^(iyadah)$/i
module.exports = handler

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
