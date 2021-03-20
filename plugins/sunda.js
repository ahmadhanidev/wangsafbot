let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.sunda)}”`, m)
}
//handler.help = ['bucin']
//handler.tags = ['quotes']
handler.command = /^(sunda|taufik|topik)$/i
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

global.sunda = [
  'Anjink lu sunda',
  'Sacangreud pageuh sagolek pangkek.',
  'Asih henteu dumasar kana penampilan alus, kaéndahan raray anjeun, kabeungharan anjeun sareng karya anjeun.',
  'Asih henteu dumasar kana penampilan alus, kaéndahan raray anjeun, kabeungharan anjeun sareng karya anjeun.',
  'Gusti moal sare.',
  'Hirupmah heuheuy jeung deudeuh, lamun teu heuheuy nya deudeuh.',
  'Urang miskin lain sabot teu ngagaduhan harta, nanging sabot urang atos kaleungitan mikacinta tina keluargi.',
  'udu silih asih, silih asah jeung silih asuh.',
  'Sagala masalah nu dongkap ayeuna, sanes kanggo ngalabuhkeun anjen, nanging eta kanggo nguji sabaraha kuat anjen tiasa nahana.',
  'Ulah ngarasa nalangsa kusabab ngarasa sorangan. Tingali bulan, anjeunna ogé sorangan nanging anggeur katémbong masihan cahyana.',
  'Tetep seuri sanajan hate nalangsa adalah ciri-ciri jalma anu hebat, kuat tur loba jerawat.',
  'Napsu nyaeta hiji perkawis anu mipiboga sipat samentara nu lewih langkung direseupan, tibatan perkawis-perkawis anu langgeng.',
  'Bisa teh karena biasa, urang moal bisa ngangeuskeun masalah lamun teu biasa keuna masalah.',
  'Sakabeh perjalanan nu teu di hareupkeun pasti bakal sae dina palebah tung-tungna kitu oge lamunmah keur alus milikna.',
  'Ulah waka sombong lamun acan bisa balap motor bari di konci setang mah.',
  'Lamun hirup ulah lempeng-lempeng teuing meni jiga jidar.'
]
