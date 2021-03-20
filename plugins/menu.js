let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    //let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      //'main': '*Main Menu*',
      //'xp': '*Exp & Limit*',
      //'sticker': '*Sticker*',
      //'kerang': '*Kerang Ajaib*',
      //'quotes': '*Quotes*',
      //'admin': 'Admin',
      //'group': 'Group',
      //'internet': 'Internet',
      //'downloader': 'Downloader',
      //'tools': 'Tools',
      //'fun': 'Fun',
      //'jadibot': 'Jadi Bot',
      //'owner': 'Owner',
      //'host': 'Host',
      //'advanced': 'Advanced',
      //'info': '*Info*',
      //'': 'No Category',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
╭─「 ◢ Poserfriends BOT 2 ◣ 」
│
│ Hai, %name ( ͡❛ ͜ʖ ͡❛)
│
│ *%exp XP*
│ Tersisa *%limit Limit*
│
│ Hari : *%week*
│ Tanggal: *%date*
│ Waktu: *%time*
│
│ Waktu Aktif Bot: *[%uptime]*
╰────
%readmore` +
`
╭─「 ⇒ *Menu Khusus - Poserfriends* 」
│
│ • #request (requestFitur)
│ • #namaKalian (contoh: #nufail)
│ • #agama (@mentionUser) | <nama>
│ • #afk <alasan>
│ • #bucin
│ • #bucinposer
│ • #couple (@mentionUser1 & @mentionUser2)
│ • #iyadah <teks>
│ • #nyimak <alasan>
│ • #stalk (@mentionUuser)
│ • #fitnah <teks> + @mentionUser + <teksReply>
│ • #jawa
│ • #sunda
│ • #jodoh
│ • #sardi
│ • #hatersmelvin
│ • #semangat (@mentionUser)
│ • #sifat (@mentionUser)
│ • #umur (@mentionUser)
│ • #memenufail
│ • #cecan
│ • #image <teks>
│ • #imagebnw (random)
│ • #wallpaper (random)
│ • #kpop
│ • #faktaunik
│ • #cekzodiak
│ • #pantun
╰────
%readmore` +
`
╭─「 ⇒ *Exp & Limit* 」
│
│ • #buy <jumlah limit>
│ • #buyall (beli semua limit dengan XP)
│ • #claim
╰────

╭─「 ⇒ *Kerang Ajaib* 」
│
│ • #apakah <pertanyaan>
│ • #kapankah <pertanyaan>
│ • #siapakah <pertanyaan>
│ • #bisakah <pertanyaan>
│ • #simi <teks>
╰────
%readmore` +
`
╭─「 ⇒ *Menu Seberapa* 」
│
│ • #seberapabodoh
│ • #seberapapinter
│ • #seberapacantik
│ • #seberapaganteng
│ • #seberapajodoh
│ • #seberapagay
│ • #seberapabucin
╰────

╭─「 ⇒ *Group* 」
│
│ • #listonline
│ • #online
╰────
%readmore` +
`
╭─「 ⇒ *Sticker Menu* 」
│
│ • #attp <teks>
│ • #ttp <teks>
│ • #stiker (reply gambarnya)
│ • #stiker <url>
│ • #toimg (reply stickernya)
╰────

╭─「 ⇒ *Mini Game* 」
│
│ • #mtk <option>
│ • #slot
│ • #dadu
│ • #truth
│ • #dare
│ • #tebakgambar --(Coming Soon)
│ • #family100 --(Coming Soon)
╰────

╭─「 ⇒ *Tools & Internet* 」
│
│ • #tts <teks>
│ • #tts <kodeLang> <teks> | cek di #listbahasa untuk <kodeLang>
│ • #brainly <soal> (delay)
│ • #google <searchIndex> (delay)
│ • #ss <link/url> (delay)
│ • #calc <expression>
│ • #play <judulMusic>
│ • #tahta <teks>
│ • #mention <teks>
│ • #nulis <teks>
│ • #profile [@user]
│ • #qrcode <teks>
│ • #readmore <teks>|<teks>
│ • #pastebin <teks>
╰────
`
    let body   = conn.menu.body   || `gemge`
    let footer = conn.menu.footer || '╰────\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\`\`\`\ %npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    conn.reply(m.chat, text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
//handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|poser)$/i
//handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}