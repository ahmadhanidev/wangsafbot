//let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  //let pp = '['./src/meme/nufail/nufail1.jpeg', './src/meme/nufail/nufail2.jpeg']'
  let randomImage = `${pickRandom(['https://picsum.photos/700?grayscale'])}`
  let text2 = `Tunggu yaa...`
  let str = `.
`.trim()
  conn.sendFile(m.chat, randomImage, 'randImage.jpg', str, m, false)
}
//handler.help = ['profile [@user]']
//handler.tags = ['tools']
handler.command = /^(imagebnw|imageblack)$/i
handler.owner = false
module.exports = handler
//TOOLS RANDOM IMAGE

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
