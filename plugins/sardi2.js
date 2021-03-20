let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let handler = async (m, { conn, args }) => {
  let lang = 'id'
  let text2 = 'Sarkas dan Komedi'
  // let text = args.slice(1).join(' ')
  // if (args[0].length === 2) lang = args[0]
  // else text = args.join(' ')
  // if (!text) text = lang
  let res
  try { res = await tts(text2, lang) }
  catch (e) {
    m.reply(e + '')
    res = await tts(text2)
  } finally {
    conn.sendFile(m.chat, res, 'sardi.opus', null, m, true)
  }
}
handler.command = /^(sardi)$/i
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
