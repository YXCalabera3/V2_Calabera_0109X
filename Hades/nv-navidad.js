import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/navidad.mp3'
conn.sendFile(m.chat, vn, 'navidad.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Feliz navidad|feliz navidad|Feli Navidad|feliz navidad hijo|Feliz navidad hijo|feliz navidad amigo|Feliz navidad amigo/
handler.command = new RegExp

export default handler

