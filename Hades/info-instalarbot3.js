let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
ββ ΰΉΫ£βοΈππ¨π₯ππ este este tutorial de explica cΓ³mo tener un bot activoπ 24/7π en acidicnodesπ Si te ha gustado el video No olvides suscribirte dejar tu likeπ±
βββββΧβΧβΧβΧβββ
βγππππππππ: ππππ’ :γ
ββhttps://www.youtube.com/@informaticsecurity5309
βββββΧβΧβΧβΧβββ
βγπ½ππΌπ΄ππΎ π³π΄π πΌπΈ π²ππ΄π°π³πΎπγ
ββhttp://wa.me/51926328073
βββββΧβΧβΧβΧβββ
βγπΆπΈπ π²π»πΎπ½π΄γ
ββContacte con mi creador del bot Calabera
βββββΧβ 
*πPara mΓ‘s informaciΓ³n puedes entrar al grupo oficial de acidicnodes
http://whatsapp.acidicnodes.com
βββββΧβ  
`
let buttonMessage= {
'document': { url: `https://www.youtube.com/@informaticsecurity5309` },
'mimetype': `application/${document}`,
'fileName': `ππππ-Chica-πππ-ππβ¨`,
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
handler.command = ['acidicnodes','acidicnodes']
export default handler

