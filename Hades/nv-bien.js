import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/bien_contestando.mp3'
conn.sendFile(m.chat, vn, 'bien_contestando.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bien|Bien|Byen|bien|Bien|bien y tu|Bien y tu/
handler.command = new RegExp

export default handler

