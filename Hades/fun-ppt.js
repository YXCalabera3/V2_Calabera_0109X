import { performance } from 'perf_hooks'
let handler = async (m, { text, usedPrefix, command }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg' 
if (command == 'ppt') {
let salah = `ππππΏππΌ, ππΌπππ, π ππππππΌ\n\nππͺππππ¨ πͺπ¨ππ§ π‘π€π¨ π½ππππππ π₯ππ§π ππͺπππ§ π€ π©ππ’ππππ£ π₯πͺππππ¨ πͺπ¨ππ§ ππ¨π©π€π¨ ππ€π’ππ£ππ€π¨:\n${usedPrefix + command} π₯ππππ§π\n${usedPrefix + command} π₯ππ₯ππ‘\n${usedPrefix + command} π©ππππ§π\n\nππ¨π ππ£ π’ππ£πͺπ¨ππͺπ‘ππ¨\n\n${wm}`
 
conn.sendHydrated(m.chat, wm, salah, pp, md, 'βΝΝ‘β£CHICA_πππ_ππβΝΝ‘β£', null, null, [
['πππππ§π π₯', `${usedPrefix + command} piedra`],
['πππ₯ππ‘ π', `${usedPrefix + command} papel`],
['πππππ§π βοΈ', `${usedPrefix + command} tijera`]
], m,)}
  
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
} 
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 2
 
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππππΌππ! π€
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββββββΧβΧβΧβ
ββπΈ π½π€π£π€: 
ββ$${[money0].getRandom()}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
} else if (text == 'papel') {
if (astro == 'piedra') {
//global.db.data.users[m.sender].uang += 1000
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 100
  
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCHICAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππΌππΌπΏπ! π
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ°ππ§ππ’ππ€: $${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 25
  
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCHICAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππππΏππΏπ! π€‘ 
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ πππ§ππππ: 
ββ$${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
  
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππΌππΌπΏπ! π
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ°ππ§ππ’ππ€: $${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 75
  
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππππΏππΏπ! π€‘ 
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ πππ§ππππ: 
ββ$${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125

conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππΌππΌπΏπ! π
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ°ππ§ππ’ππ€: $${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 90
  
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππππΏππΏπ! π€‘ 
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ πππ§ππππ: 
ββ$${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
}
} else if (text == 'papel') {
if (astro == 'piedra') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 75

conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππΌππΌπΏπ! π
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ°ππ§ππ’ππ€: $${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 240
  
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππππΏππΏπ! π€‘ 
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ πππ§ππππ: 
ββ$${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 300

conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππΌππΌπΏπ! π
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ°ππ§ππ’ππ€: $${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)   
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 210
  
conn.sendHydrated(m.chat, `
βββγπΦΌ αΉπCALABERAπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββππΌ ππππΏππΏπ! π€‘ 
ββ${name} ππ¨π©ππ:
ββββββΧβΧβΧβ
ββ${text}
ββ${astro}
ββπ πππ§ππππ: 
ββ$${[money0].getRandom()}
ββββββΧβΧβΧβ
ββ${vs}
ββββββΧβΧβΧβ
ββπ΅ ππͺ πΏππ£ππ§π€: 
ββ$${money}
βββββΧβΧβΧβΧβββ`, wm, null, yt, 'ππ€πͺππͺππ', null, null, [
['ππππ', '/Menu'],
['οΈππππππ', '/estado'],
], m,)
  
}
} //else {
//throw salah
} //}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

