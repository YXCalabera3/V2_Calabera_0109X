import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './src/Me.jpg'
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
βγπΦΌ αΉπCHICAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· ${taguser}πβ¨ 
ββ π π΅π΄π²π·π°: ${week}, ${date}
ββ πππΈπ΄πΌπΏπΎ π°π²ππΈππΎ: ${uptime}
ββ π ππππ°ππΈπΎπ: ${rtotalreg}
βββββΧβΧβΧβΧβββ
βββγβ©οΈππππππγβ
ββπ${usedPrefix}hades
ββπ${usedPrefix}cristianoronaldo
ββπ${usedPrefix}messi
ββπ${usedPrefix}meme
βββͺ${usedPrefix}itzy
ββπ°${usedPrefix}blackpink
ββπ${usedPrefix}kpop
ββπ${usedPrefix}lolivid
βββ©οΈ${usedPrefix}loli
ββπ${usedPrefix}navidad
ββπ${usedPrefix}ppcouple
ββπ${usedPrefix}neko
βββͺ${usedPrefix}waifu
ββπ°${usedPrefix}akira
ββπ${usedPrefix}akiyama
ββπ${usedPrefix}anna
βββ©οΈ${usedPrefix}asuna
ββπ${usedPrefix}ayuzawa
ββπ${usedPrefix}boruto
ββπ${usedPrefix}chiho
βββͺ${usedPrefix}chitoge
ββπ°${usedPrefix}deidara
ββπ${usedPrefix}erza
ββπ${usedPrefix}elaina
βββ©οΈ${usedPrefix}eba
ββπ${usedPrefix}emilia
ββπ${usedPrefix}hestia
ββπ${usedPrefix}hinata
βββͺ${usedPrefix}inori
ββπ°${usedPrefix}isuzu
ββπ${usedPrefix}itachi
ββπ${usedPrefix}itori
βββ©οΈ${usedPrefix}kaga
ββπ${usedPrefix}kagura
ββπ${usedPrefix}kaori
ββπ${usedPrefix}keneki
βββͺ${usedPrefix}kotori
ββπ°${usedPrefix}kurumi
ββπ${usedPrefix}madara
ββπ${usedPrefix}mikasa
βββ©οΈ${usedPrefix}miku
ββπ${usedPrefix}minato
ββπ${usedPrefix}naruto
ββπ${usedPrefix}nezuko
βββͺ${usedPrefix}sagiri
βββͺ${usedPrefix}sasuke
ββπ${usedPrefix}sakura
ββπ${usedPrefix}cosplay
ββπ${usedPrefix}helaila
βββͺ${usedPrefix}gawrgura
βββββΧβΧβΧβΧβββ
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'ππππππ' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: 'ππππππππ±' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
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
title: 'ππππ-CHICA-πππ-ππβ¨',
body: null,
thumbnail: img,
sourceUrl: `https://www.youtube.com/@informaticsecurity5309`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.command = /^(animesdelbot|animesdelbot\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}