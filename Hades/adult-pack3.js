import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = packmen[Math.floor(Math.random() * packmen.length)]
conn.sendButton(m.chat, `_🥵 Pack 3 🥵_`, author, url, [['◀️𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴▶️', `/${command}`]], m)
}
handler.help = ['pack3']
handler.tags = ['internet']
handler.command = /^(pack3)$/i
export default handler

global.packmen = [
  "https://imgur.com/iHc6sZ4.jpg",
  "https://imgur.com/Q8Mmxw6.jpg",
  "https://imgur.com/7mFDe4K.jpg",
  "https://imgur.com/DRl91d8.jpg",
  "https://imgur.com/7XM0WkE.jpg",
  "https://imgur.com/ABSZBYs.jpg",
  "https://imgur.com/tS4sgw1.jpg",
  "https://imgur.com/dQu7k8k.jpg",
  "https://imgur.com/QVeMm0s.jpg",
  "https://imgur.com/lJfW0d2.jpg",
  "https://imgur.com/ChmCKMV.jpg",
  "https://imgur.com/s5r9BGS.jpg",
  "https://imgur.com/PUzgeUI.jpg",
  "https://imgur.com/c4WBAw9.jpg",
  "https://imgur.com/QPjDq0z.jpg",
  "https://imgur.com/KNtxayz.jpg",
  "https://imgur.com/uf1jIxP.jpg",
  "https://imgur.com/aixogRT.jpg",
  "https://imgur.com/Ds1NVNt.jpg",
  "https://imgur.com/yfDjEzr.jpg",
  "https://imgur.com/Ndn91w4.jpg",
  "https://imgur.com/e0M43I1.jpg",
  "https://imgur.com/v1wHsgZ.jpg",
  "https://imgur.com/HQkOapL.jpg",
  "https://imgur.com/kNRXFMJ.jpg",
  "https://imgur.com/jF10gpV.jpg",
  "https://imgur.com/V1Rh6eb.jpg",
  "https://imgur.com/nXmPFsd.jpg",
  "https://imgur.com/TuLGggY.jpg",
  "https://imgur.com/WQ3aQtZ.jpg",
  "https://imgur.com/Cc3AJ1C.jpg",
  "https://imgur.com/gMSN9vI.jpg",
  "https://i.imgur.com/TK0qLAu.jpg",
  "https://i.imgur.com/q8lKT40.jpg",
  "https://i.imgur.com/OwWdL9u.jpg",
  "https://i.imgur.com/Er7WiQo.jpg",
  "https://i.imgur.com/u4y0q4P.jpg",
  "https://i.imgur.com/y8y4PPr.jpg",
  "https://i.imgur.com/qgfLlRY.jpg",
  "https://i.imgur.com/irgyUTD.jpg",
  "https://i.imgur.com/uXrqfBl.jpg",
  "https://i.imgur.com/lgXjetf.jpg",
  "https://i.imgur.com/81QLh8s.jpg",
  "https://i.imgur.com/R3AlYe1.jpg",
  "https://i.imgur.com/a2Myr3F.jpg",
  "https://i.imgur.com/Wp9cgGw.jpg",
  "https://i.imgur.com/ggKUnxt.jpg",
  "https://i.imgur.com/eCJNWBl.jpg",
  "https://i.imgur.com/6lcrBQB.jpg",
  "https://i.imgur.com/eSSbXJ1.jpg",
  "https://i.imgur.com/tNyvzyO.jpg"
]
