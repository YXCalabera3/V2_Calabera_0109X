import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/un_favor.mp3'
conn.sendFile(m.chat, vn, 'un_favor.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /X favor|por favor|x favor|Por favor|un favor|hazme un favor|por favor|Xfavor|xfavor/
handler.command = new RegExp

export default handler

