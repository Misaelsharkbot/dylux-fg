import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
  var {age} = db.data.users[m.sender] 
   
    let pw = ["https://api.waifu.pics/nsfw/blowjob", "https://api.waifu.pics/nsfw/neko", "https://api.waifu.pics/nsfw/waifu"] 
     let nk = pw[Math.floor(Math.random() * pw.length)]
    let res = await fetch(nk)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, '✅ Aquí tienes', igfg, json.url, [['▷▷ Siguiente', `${usedPrefix + command }`]], m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = ['hentai']
handler.limit = true
handler.register = false



export default handler
