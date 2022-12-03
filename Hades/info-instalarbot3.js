let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌「𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
├❏ ๖ۣ☘️𝐇𝐨𝐥𝐚😀 este este tutorial de explica cómo tener un bot activo🍁 24/7👌 en acidicnodes🍃 Si te ha gustado el video No olvides suscribirte dejar tu like🌱
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢 :」
├❏https://www.youtube.com/@informaticsecurity5309
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
├❏http://wa.me/51926328073
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙶𝙸𝚃 𝙲𝙻𝙾𝙽𝙴」
├❏Contacte con mi creador del bot Calabera
└────ׂ─ 
*🍁Para más información puedes entrar al grupo oficial de acidicnodes
http://whatsapp.acidicnodes.com
└────ׂ─  
`
let buttonMessage= {
'document': { url: `https://www.youtube.com/@informaticsecurity5309` },
'mimetype': `application/${document}`,
'fileName': `🍀𝐓𝐇𝐄-Chica-𝐁𝐎𝐓-𝐌𝐃✨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/-------------------',
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
handler.command = ['acidicnodes','acidicnodes']
export default handler

