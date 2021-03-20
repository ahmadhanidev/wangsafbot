let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.nufail)}”`, m)
}
handler.help = ['nufail']
handler.tags = ['main']
handler.command = /^(nufail)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

global.nufail = [
  "Siang semuanyahhh",
  "ada memek dimakan hiu...hey bonek, fakyuh",
  "wong sabar kuburane jembar",
  "punk yo punk, tapi ados",
  "life is just stopping to drink",
  "Matamuu asu",
  "off onok fegy bonek anak lonte",
  "kamu tau gak bedanya bebek sama kamu, kalo bebek wek wek wek, kalo kamu punya aku",
  "wahh mainnya hebat..",
  "urip mung sawang sinawang",
  "fegy kakean cangkem",
  "Sabar iku ingaran mustikaning laku.",
  "Wong sabar rejekine jembar, ngalah urip luwih berkah.",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "hidupku seperti kopi, pahit"
]
