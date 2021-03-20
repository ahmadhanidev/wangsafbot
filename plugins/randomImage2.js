//let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  //let pp = '['./src/meme/nufail/nufail1.jpeg', './src/meme/nufail/nufail2.jpeg']'
  let randomWp = `${pickRandom(['https://picsum.photos/640/1280'])}`
  let str = `.
`.trim()

  conn.sendFile(m.chat, randomWp, 'randWp.jpg', str, m, false)
}
//handler.help = ['profile [@user]']
//handler.tags = ['tools']
handler.command = /^wallpaper$/i
handler.owner = false
module.exports = handler
//TOOLS RANDOM IMAGE

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
