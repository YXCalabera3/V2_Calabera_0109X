
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌「𓈃ּ ៹🍏Calabera𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」
│◦➛📔ᩭ✎si deseas 🤝apoyarme mejor ayúdame y apóyame en mis cuentas oficiales de 🌆YouTube y en 👥facebook y podrías regalarme una estrella en mi cuenta de git📈
│◦➛🍀ᩭ✎𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁
│◦➛📚ᩭ✎http://wa.me/51926328073 
│◦➛📔ᩭ✎𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢
│◦➛📔ᩭ✎Subscribete a mi canal, gracias.
│◦➛🍀ᩭ✎https://www.youtube.com/@informaticsecurity5309
│◦➛☃️ᩭ✎𝙶𝙸𝚃 𝙲𝙻𝙾𝙽𝙴
│◦➛📚ᩭ✎Consulte con el creador calabera bot
│◦➛🌱ᩭ✎𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 
│◦➛🌴ᩭ✎https://www.facebook.com/groups/----------
│◦➛📔ᩭ✎voy a agradecer ☘️mucho su apoyo 📚
│◦➛🌱𝐎𝐅𝐂 CALABERA☘️ 
╰────────────┈⊷`
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
'mediaUrl': 'https://github.com/---------------',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/@informaticsecurity5309' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '☃️𝙼𝙴𝙽𝚄🍀'}, type: 1}, 
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: '🌱𝙶𝙸𝚃𝙷𝚄𝙱📚'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i

export default handler