let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `π±Hola Te quieres divertir en un juego te invito a descargarte Minecraft Hades Bot creo un servidor para jugar esperemos y entres y te diviertas te dejarΓ© el link y puedes invitar a tus πamigos
βοΈhttp://add.aternos.org/YOVANIBOT`
let buttonMessage= {
'document': { url: `https://www.youtube.com/@informaticsecurity5309` },
'mimetype': `application/${document}`,
'fileName': `ππππ-CALABERA-πππ-ππβ¨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/-------------------',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/@informaticsecurity5309' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['servidor','servidor']
export default handler
