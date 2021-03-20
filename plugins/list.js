let handler = async (m, { conn, command, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  if (text) conn.reply(m.chat, `
⭐ *[ List ]* -- ${text}
\n1. *${pickRandom(global.listNama)}*
2. *${pickRandom(global.listNama)}*
3. *${pickRandom(global.listNama)}*
4. *${pickRandom(global.listNama)}*
5. *${pickRandom(global.listNama)}*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
  else throw 'Masukkan <teks> \nContoh : *#list orang keren*'
}
//(+) Add Random Quotes
handler.help = ['list']
//handler.tags = ['kerang']
handler.command = /^(list)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

global.listNama = [
  'Melvin',
  'Fegy',
  'Azrul',
  'Nufail',
  'Iqbal',
  'Fajar',
  'Taufik',
  'Arin',
  'Iqbal',
  'Pamu',
  'Fegy',
  'Usti',
  'Dhani',
  'Dika',
  'Eva',
  'Sony',
  'Aryoubae',
  'Fegy',
  'Melvin',
  'Hafiza',
  'Sarah',
  'Iqbal',
  'Amel',
  'Terra',
  'Arin',
  'Celsy',
  'Dhani',
  'Pamu',
  'Cintya',
  'Eva',
  'Fegy',
  'Fane',
  'Iqbal',
  'Iqbal',
  'Sony',
  'Kidew',
  'Torry',
  'Usti',
  'Keisha',
  'Wanda',
  'Arin',
  'Amel',
  'Akesa',
  'Dika',
  'Hafiza',
  'Niken',
  'Iqbal',
  'Pamu',
  'Hildan',
  'Eva',
  'Usti',
  'Melvin',
  'Fegy',
  'Sony',
  'Azrul',
  'Mikail',
  'Dhani',
  'Dilla',
  'Sarah',
  'Terra',
  'Fajar',
  'Pamu',
  'Arin',
  'Taufik',
  'Nufail',
  'Iqbal',
  'Dika',
  'Eva',
  'Aryoubae',
  'Usti',
  'Dilla',
  'Sony',
  'Dhani',
  'Sarah',
  'Hafiza',
  'Pamu',
  'Terra',
  'Melvin',
  'Rahmat',
  'Rahmat',
  'Eva',
  'Fegy',
  'Dika',
  'Arin',
  'Azrul',
  'Sardi',
  'Akram',
  'Amel',
  'Eva',
  'Dhani',
  'Iqbal',
  'Sony',
  'Dilla',
  'Nufail',
  'Terra',
  'Celsy',
  'Cintya',
  'Fane',
  'Iqbal',
  'Kidew',
  'Risa',
  'Pamu',
  'Arin',
  'Nufail',
  'Dika',
  'Usti',
  'Keisha',
  'Wanda',
  'Hafiza',
  'Akesa',
  'Niken',
  'Hildan',
  'Melvin',
  'Rahmat',
  'Dilla',
  'Sarah',
  'Amel',
  'Sony',
  'Dhani',
  'Hafiza',
  'Iqbal',
  'Terra',
  'Fajar',
  'Taufik',
  'Arin',
  'Nufail',
  'Dika',
  'Mikail',
  'Usti',
  'Pamu',
  'Aryoubae',
  'Fegy',
  'Sarah',
  'Amel',
  'Celsy',
  'Cintya',
  'Sony',
  'Hafiza',
  'Eva',
  'Fane',
  'Iqbal',
  'Kidew',
  'Risa',
  'Dhani',
  'Arin',
  'Amel',
  'Nufail',
  'Usti',
  'Hafiza',
  'Keisha',
  'Fegy',
  'Wanda',
  'Iqbal',
  'Sony',
  'Pamu',
  'Akesa',
  'Niken',
  'Hildan',
  'Melvin',
  'Arin',
  'Chandra'
]
