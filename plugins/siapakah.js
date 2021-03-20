let handler = async (m, { conn, command, text }) => {
  if (text) conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['Melvin',
'Fegy',
'Azrul',
'Eva',
'Nufail',
'Iqbal',
'Fajar',
'Taufik',
'Iqbal',
'Usti',
'Dhani',
'Dika',
'Eva',
'Aryoubae',
'Melvin',
'Sarah',
'Iqbal',
'Amel',
'Terra',
'Celsy',
'Dhani',
'Cintya',
'Eva',
'Fane',
'Iqbal',
'Iqbal',
'Kidew',
'Torry',
'Usti',
'Keisha',
'Wanda',
'Amel',
'Akesa',
'Nufail',
'Niken',
'Iqbal',
'Hildan',
'Eva',
'Usti',
'Melvin',
'Fegy',
'Azrul',
'Mikail',
'Dhani',
'Dilla',
'Sarah',
'Terra',
'Fajar',
'Taufik',
'Nufail',
'Iqbal',
'Dika',
'Eva',
'Aryoubae',
'Usti',
'Dilla',
'Dhani',
'Sarah',
'Terra',
'Melvin',
'Rahmat',
'Rahmat',
'Eva',
'Fegy',
'Azrul',
'Sardi',
'Akram',
'Amel',
'Eva',
'Dhani',
'Iqbal',
'Dilla',
'Nufail',
'Terra',
'Celsy',
'Cintya',
'Eva',
'Fane',
'Iqbal',
'Kidew',
'Risa',
'Nufail',
'Usti',
'Keisha',
'Wanda',
'Akesa',
'Niken',
'Hildan',
'Melvin',
'Rahmat',
'Dilla',
'Sarah',
'Amel',
'Dhani',
'Eva',
'Iqbal',
'Terra',
'Fajar',
'Taufik',
'Nufail',
'Dika',
'Mikail',
'Usti',
'Aryoubae',
'Sarah',
'Amel',
'Celsy',
'Cintya',
'Eva',
'Fane',
'Iqbal',
'Kidew',
'Risa',
'Dhani',
'Amel',
'Nufail',
'Usti',
'Keisha',
'Wanda',
'Iqbal',
'Akesa',
'Niken',
'Hildan',
'Melvin',
'Chandra'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
  else throw 'Masukkan <pertanyaan> \nContoh : *#siapakah jodohku?*'
}
handler.help = ['siapakah <pertanyaan>', 'siapa <pertanyaan>']
//handler.tags = ['kerang']
handler.command = /^(siapakah|siapa)$/i
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
