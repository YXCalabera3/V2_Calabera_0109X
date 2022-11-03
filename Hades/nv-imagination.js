import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/imagination.mp3'
conn.sendFile(m.chat, vn, 'imagination.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /imagination|Imagination|imaginatio|Imaginatio|imagination|foster|Foster/
handler.command = new RegExp

export default handler

