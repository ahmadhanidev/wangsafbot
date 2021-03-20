//let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = ['./src/meme/nufail/nufail1.jpeg', './src/meme/nufail/nufail2.jpeg']
  let randomImage = `${pickRandom(['./src/meme/nufail/nufail1.jpeg', './src/meme/nufail/nufail2.jpeg'])}`
  let str = `
\nNama : Nufail
`.trim()

  conn.sendFile(m.chat, randomImage, 'pp.jpg', str, m, false)
}
//handler.help = ['profile [@user]']
//handler.tags = ['tools']
handler.command = /^memenufail$/i
handler.owner = false
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
