import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/comandos.mp3'
conn.sendFile(m.chat, vn, 'comandos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /comandos|Comandos|comando|Comando|los comandos ya se van|Los comandos ya se van/
handler.command = new RegExp

export default handler

