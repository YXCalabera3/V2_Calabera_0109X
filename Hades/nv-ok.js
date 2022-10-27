import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/ok.mp3'
conn.sendFile(m.chat, vn, 'ok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ok|ok|OK|Ok|okey|Okey|okey|ok mi amor|Ok mi amor|amor|mi amor|ok amigo|ok hijo|Ok hijo|Ok amigo|ok sobrino/
handler.command = new RegExp

export default handler

