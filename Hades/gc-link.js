import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐ป๐ธ๐ฝ๐บ ๐ณ๐ด๐ป ๐ถ๐๐๐ฟ๐พ',
body: '๐ึผ แน๐CALABERA๐!sโนโทโปโน๐นโแตแตแตโปแดนแดฐ',         
previewType: 0, thumbnail: fs.readFileSync("./src/Menu2.jpg"),
sourceUrl: `https://github.com/--------`}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
