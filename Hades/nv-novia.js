import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/novia.mp3'
conn.sendFile(m.chat, vn, 'novia.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /novia|Novia|enamorada|Enamorada|estas soltero|Estas soltero|tienes enamorada|Tienes enamorada|novia|enamorada|novia|tienes novia|Tienes novia/
handler.command = new RegExp

export default handler

