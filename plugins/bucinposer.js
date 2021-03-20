let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin2)}”`, m)
}
handler.help = ['bucinposer']
handler.tags = ['quotes']
handler.command = /^(bucinposer)$/i
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

global.bucin2 = [
  "kalaupun akhirnya kita ga jodoh, aku ga pernah nyesel udah ketemu kamu, karna kamu pernah jadi alasan aku bahagia, walaupun ga selamanya.",
  "aku pengen bisa kasih dunia ke kamu, tapi sayangnya aku gabisa karena terlalu luas. jadi aku kasih duniaku aja yang paling berharga buat kamu.",
  "kamu udh ngasih yang terbaik, aku juga bakal terus ada disamping kamu kok.. kita lewatin semuanya bareng bareng ya sayang.",
  "kedepannya kita gabakal tau hal-hal besar apa yg bakal kita hadapin, kamu harus terus senyum ya, itu sumber semangat aku..",
  "jangan takut aku pergi,jangan pergi aku takut.",
  "bagaimana bisa aku terbang ke lain hati, disaat sayapku telah patah karenamu.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "makin dewasa makin mikir kalo beli barang harus apa yg kita butuhin, bukan apa yg kita ngga punya",
  "Nyoba main telegram dan pura pura jadi cowok. Ternyata jadi cowok itu gak gampang, harus nyusun semua pertanyaan walaupun balesan ceweknya singkat, harus mikirin topik yang menarik juga biar pembahasan nya jadi ga monoton",
  "saya selalu merasa memiliki kamu dan saya selalu menyayangi kamu, bahkan saat kamu sudah tertimpa jutaan butir tanah merah yang basah karena hujan semalam.",
  "boleh ngga si senyum kamu buat aku aja, soalnya aku marah kalo orang lain liat senyum kamu dan bakal jatuh cinta,bcs im in love when u smile."
]
