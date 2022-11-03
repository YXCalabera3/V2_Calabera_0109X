import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/mil horas.mp3'
conn.sendFile(m.chat, vn, 'mil horas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /mil horas|Mil horas|Mil Horas|mil horas|enanitos verdes|Enanitos Verdes/
handler.command = new RegExp

export default handler

