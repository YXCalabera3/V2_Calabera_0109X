import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/mi vicio mortal.mp3'
conn.sendFile(m.chat, vn, 'mi vicio mortal.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /mi vicio mortal|Mi vicio mortal|vicio mortal|Vicio mortal/
handler.command = new RegExp

export default handler

