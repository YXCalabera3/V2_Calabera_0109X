
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βγπΦΌ αΉπCalaberaπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
ββ¦βπα©­βsi deseas π€apoyarme mejor ayΓΊdame y apΓ³yame en mis cuentas oficiales de πYouTube y en π₯facebook y podrΓ­as regalarme una estrella en mi cuenta de gitπ
ββ¦βπα©­βπ½ππΌπ΄ππΎ π³π΄ πΌπΈ π²ππ΄π°π³πΎπ
ββ¦βπα©­βhttp://wa.me/51926328073 
ββ¦βπα©­βππππππππ: ππππ’
ββ¦βπα©­βSubscribete a mi canal, gracias.
ββ¦βπα©­βhttps://www.youtube.com/@informaticsecurity5309
ββ¦ββοΈα©­βπΆπΈπ π²π»πΎπ½π΄
ββ¦βπα©­βConsulte con el creador calabera bot
ββ¦βπ±α©­βπΆπππΏπΎ π³π΄ π΅π°π²π΄π±πΎπΎπΊ 
ββ¦βπ΄α©­βhttps://www.facebook.com/groups/----------
ββ¦βπα©­βvoy a agradecer βοΈmucho su apoyo π
ββ¦βπ±πππ CALABERAβοΈ 
β°ββββββββββββββ·`
let buttonMessage= {
'document': { url: `https://www.youtube.com/@informaticsecurity5309` },
'mimetype': `application/${document}`,
'fileName': `ππππ-CHICA-πππ-ππβ¨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/---------------',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/@informaticsecurity5309' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'βοΈπΌπ΄π½ππ'}, type: 1}, 
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: 'π±πΆπΈππ·ππ±π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i

export default handler