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
âãðÖ¼ á¹ðChicað!sâ¹â·â»â¹ð¹âáµáµáµâ»á´¹á´°ã
ââ à¹Û£ÛÍ¡ÍÛðð¨ð¥ðà¦à§£Í¡Íá·Ö³á· ${taguser}ðâ¨ 
ââ ð ðµð´ð²ð·ð°: ${week}, ${date}
ââ ððð¸ð´ð¼ð¿ð¾ ð°ð²ðð¸ðð¾: ${uptime}
ââ ð ðððð°ðð¸ð¾ð: ${rtotalreg}
âââââ×â×â×â×âââ
âââãð§ððððððãâ
ââð§Noche de paz
ââð»Miau
ââðºBuenos dias
ââð¸La cumbia del tilÃ­n
ââð·buenas noches
ââð¹No pedÃ­ tu opiniÃ³n
ââð¤Senpai
ââð¥esto va a ser Ã©pico
ââð§insulta
ââð»Audio hentai
ââðºTiene la cara
ââð¸Fiesta del admin
ââð·tengo
ââð¹tranquilo
ââð¤Viernes
ââð¥Chica lgante
ââð§No soy pati
ââð»Baneado
ââðºBien pensado woody
ââð¸Homero chino
ââð·El pepe
ââð¹A nadie le importa
ââð¤Sexo
ââð¥nadie te pregunto
ââð§Vete a la vrg
ââð»Hola
ââðºOye Bot te amo
ââð¸Te amo
ââð·Yamete
ââð¹y que agarra y quÃ© me dice
ââð¤Te diagnostico con gay
ââð¥Eres fuerteSu nivel de pendejo
ââð§Que pasa
ââð»cÃ¡llese seÃ±ora
ââðºQuien es tu sempai botsito 7w7
ââð¸BiTCH
ââð·BaÃ±ate
ââð¹cuÃ¡ndo se muera
ââð¤Que rico
ââð¥Feliz jueves
ââð§Lo puede todo
ââð»Gemime
ââðºVivan los novios
ââð¸sigues con vida
ââð·Marica quien
ââð¹Es puto
ââð¤Onichan
ââð¥Feliz cumpleaÃ±os
ââð§O omosa
ââð»Atencion grupo
ââðºOh me vengo
ââð¸Que linda noche
ââð·Te siento mÃ­a
ââð¹hentai2
ââð¤detengase admin
ââð¥Canta2
ââð§Murio el grupo
ââð»Siuuu
ââðºSe enojan
ââð¸Al unico
ââð·Se van a dormir
ââð¹Hare mi rutina
ââð¤Te sabes
ââð¥:c
ââð§Hay el amor
ââð»Orale
ââðºSe rÃ­e
ââð¸Que es eso
ââð·anana
ââð¹No trabajo
ââð¤asen
ââð¥confeti
ââð§flash
ââð»Una pregunta
ââðºpinches bot
ââð¸mmm
ââð·Oxxo
ââð¹Soy nuevo
ââð¤La voz de hombre
ââð¥Picachu
ââð§Pokemon
ââð»Ã±aÃ±a
ââðºyutki
ââð¸Ya basta jovenes
ââð·Verdad que te engaÃ±e
ââð¹Calla maldita puta
ââð¤YoShi
ââð¥Me los voy a coger
ââð§manco
ââð»Me voy
ââðºMÃºsica desamor
ââð¸mitamita
ââð·tuturu
ââð¹woau
ââð¤unga
ââð¥umai
ââð§tututu
ââð»uma
ââðºuff
ââð¸Tara
ââð·uchinchi
ââð¹talcho
ââð¤sss
ââð¥a
ââð§Triste enojada toy
ââð»Bot maricon
ââðºBot puto
ââð¸estÃºpido
ââð·Un pato
ââð¹Nyanpasu
ââð¤El amor no existe
ââð¥Es todo lo que tiene que decir
ââð§Muere por los humanos
ââð»La biblia
ââðºOtaku
ââð¸Hace frÃ­o
ââð·Pikachu
ââð¹Niconi
ââð¤Mimir
ââð¥Beastars
ââð§Manos
ââð»Facha
ââðºSexual
ââð¸Mujer
ââð·Cringe
ââð¹Konede
ââð¤Gambare
ââð¥Pack
ââð§Temon
ââð»Primo
ââðºjaja quiero
ââð¸Kya
ââð·rawr
ââð¹El mundo
ââð¤Nos vale
ââð¥Bot gemine
ââð§Pespes
ââð»Ora
ââðºHades bot
ââð¸Tori
ââð·Oxxo
ââð¹Mi bot es le mejor
ââð¤Bunny
ââð¥cancion hades2
ââð§cancion de hades
ââð»Hades es un Dios
ââðºllamando a seguridad_
ââð¸Atena_
ââð·Que tonta eres_
ââð¹Bts      
ââð¤ara ara
ââð¥La bebecita
ââð§Lol
ââð»Feliz navidad
ââðºRisa diabolica
ââð¸Te pasas
ââð·Darling
ââð¹Elmo
ââð¤La lechuza
ââð¥Ã±i
ââð§Ãxtasis
ââð»no te acerques
ââðºPor que
ââð¸La mamare
ââð·Lala
ââð¹Ya paso
ââð¤UwU
ââð¥bebito fiu fiu
ââð§Gracias bot
âââââ×â×â×â×âââ
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'ðððððð' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: 'ðððððððð±' }, type: 1 }]
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
handler.command = /^(audiosdelbot|audiosdelbot\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
