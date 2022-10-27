import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/pago.mp3'
conn.sendFile(m.chat, vn, 'pago.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /yape|Yape|bcp|Bcp|universidad|instituto|Universidad|metodo|metodo de pago|tienes yape|Tienes yape|Instituto|pagar|Pagar|pago|Pago|Uni|uni|en que te pago|En que te pago|transferencia|Transferencia|matricula|Matricula|matrícula/
handler.command = new RegExp

export default handler

