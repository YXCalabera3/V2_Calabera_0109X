import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/estúpido.mp3'
conn.sendFile(m.chat, vn, 'estúpido.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /estúpido|estupido|Estúpido|Estupido/
handler.command = new RegExp

export default handler

