import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './src/Menu2.jpg'
let img = await(await fetch('https://imgur.com/ZrOq4nc.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
âãðÖ¼ á¹ðChicað!sâ¹â·â»â¹ð¹âáµáµáµâ»á´¹á´°ã
ââ à¹Û£ÛÍ¡ÍÛðð¨ð¥ðà¦à§£Í¡Íá·Ö³á· ${taguser}ðâ¨ 
ââ ð ðµð´ð²ð·ð°: ${week}, ${date}
ââ ððð¸ð´ð¼ð¿ð¾ ð°ð²ðð¸ðð¾: ${uptime}
ââ ð ðððð°ðð¸ð¾ð: ${rtotalreg}
âââââ×â×â×â×âââ
âââãð¼ðððððãâ
ââð®${usedPrefix}xnxxsearch <texto
ââð${usedPrefix}animeinfo <texto
ââðª${usedPrefix}google <texto
ââð${usedPrefix}letra *<texto>*_
ââð¬${usedPrefix}wikipedia <texto
ââð­${usedPrefix}ytsearch <texto
ââð®${usedPrefix}apkdone <texto
ââð${usedPrefix}apkgoogle <texto
ââðª${usedPrefix}apkmody <texto
ââð¬${usedPrefix}apkshub <texto
ââð­${usedPrefix}happymod <texto
ââð®${usedPrefix}hostapk <texto
ââð${usedPrefix}revdl <texto
ââðª${usedPrefix}toraccino <texto
ââð¬${usedPrefix}uapkpro <texto
âââââ×â×â×â×âââ
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'ðððððð' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: 'ðððððððð±' }, type: 1 }]
let buttonMessage = {
image: imagen1 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'ðððð-CHICA-ððð-ððâ¨',
body: null,
thumbnail: img,
sourceUrl: `https://www.youtube.com/@informaticsecurity5309`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[âððððâ] ð´ð» ð¼ð´ð½ð ðð¸ð´ð½ð´ ðð½ ð´ððð¾ð ð ð½ð¾ ðµðð´ ð¿ð¾ðð¸ð±ð»ð´ ð´ð½ðð¸ð°ðð»ð¾, ðð´ð¿ð¾ððð´ð»ð¾ ð°ð» ð¿ðð¾ð¿ð¸ð´ðð°ðð¸ð¾ ð³ð´ð» ð±ð¾ð*', m)
}}
handler.command = /^(buscadores|buscadores\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
