//Source https://api.fdci.se/rep.php?gambar=pastel+images

let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('*Sedang mencari...* \n\nTunggu beberapa detik.')
    let items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    let cewe = items[Math.floor(Math.random() * items.length)];
    let keyword = `${text}`
    let url = "https://api.fdci.se/rep.php?gambar=" + keyword
    let str = `
_*Nih ...*_
`.trim()
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let image =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(image) // Path to the image
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64'); // Ta-da

    conn.sendFile(m.chat, buf, 'image.jpg', str, m)
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )

    });
    }
//handler.help = ['cewek']
//handler.tags = ['image']
handler.command = /^(imagesc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
