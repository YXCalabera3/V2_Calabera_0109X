import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/rodrigo_hola.mp3'
conn.sendFile(m.chat, vn, 'rodrigo_hola.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /rodrigo|mano|sobrino|Rodrigo|hermano|rodrigo|hijo|Hijo|hija|Sobrino|rodrigo|Hermano|Mano|mano/
handler.command = new RegExp

export default handler

