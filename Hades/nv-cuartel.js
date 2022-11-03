import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/cuartel.mp3'
conn.sendFile(m.chat, vn, 'cuartel.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /cuartel|Cuartel|al cuartel|Al cuartel|Atención recluta|atencion recluta|atención recluta|Atención recluta/
handler.command = new RegExp

export default handler

