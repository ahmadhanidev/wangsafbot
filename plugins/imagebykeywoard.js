let limit = 500
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Cari gambar apa?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Gambar tidak ditemukan.'
  let isVideo = /(2)$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
Nih...
`.trim(), m)
  let _thumb = {}
}
//handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
//handler.tags = ['downloader']
handler.command = /^(image)?$/i

handler.exp = 0
handler.limit = false

module.exports = handler
