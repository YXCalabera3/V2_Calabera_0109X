let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌「𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
---------------------------
┌「NÚMERO DEL CREADOR 」
├❏http://wa.me/51926328073
└────ׂ─ׂ─ׂ─ׂ───
┌「ARCHIVO DEL BOT」
├❏https://www.mediafire.com/file/35ocnr07e0615n0/OFC-HADES-BOT.zip/file
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝙴𝚁𝙼𝚄𝚇」
├❏https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇」
├❏pkg update && pkg upgrade
├❏pkg install git -y
├❏pkg install nodejs -y
├❏pkg install ffmpeg -y
├❏pkg install imagemagick -y
├❏termux-setup-storage
├❏cd storage/downloads/OFC-CHICA
├❏npm install
├❏ls
├❏npm update
├❏npm start
└────ׂ─ׂ─ׂ─ׂ───
┌「☘️Funciona bien esto es temporal hasta que salga una nueva versión de baileys ya que la versión "^4.4.0", aún no funciona para los botones💎
└────ׂ─ׂ─ׂ─ׂ─── 
`
let buttonMessage= {
'document': { url: `https://www.youtube.com/@informaticsecurity5309` },
'mimetype': `application/${document}`,
'fileName': `🍀𝐓𝐇𝐄-CHICA-𝐁𝐎𝐓-𝐌𝐃✨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': '-------------------------------------',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/@informaticsecurity5309' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['termux','script']
export default handler
