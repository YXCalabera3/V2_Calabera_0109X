import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/feliz año nuevo.mp3'
conn.sendFile(m.chat, vn, 'feliz año nuevo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /feliz año nuevo|feliz año nuevo|Feliz año nuevo|feliz año amigo|Feliz año amigo|feliz año hijo|Feliz año hijo|feliz año nuevo hijo|Feliz año nuevo hijo|Feliz año nuevo rodrigo|feliz año nuevo rodrigo|Feliz año nuevo|Feliz Año Nuevo|Feliz año|feliz año|feliz año nuevo|que viva el año nuevo|feliz año nuevo|Que viva el año nuevo|que viva el año nuevo|feliz año nuevo 2023|feliz año 2023|Feliz año nuevo 2023|y se va el año viejo|y que viva el año nuevo|feliz año 2024|feliz año 2025|feliz año 2026|feliz año nuevo 2027|feliz año/
handler.command = new RegExp

export default handler

