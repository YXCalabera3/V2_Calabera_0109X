import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let res = await fetch("https://api.zacros.my.id/randomtext/fml")
let json = await res.json()
let { result } = json
conn.reply(m.chat, `âãðÖ¼ á¹ðCalaberað!sâ¹â·â»â¹ð¹âáµáµáµâ»á´¹á´°ã\nââð ${result}\nâââââ×`, m)}
handler.command = /^(frasetest)$/i
export default handler