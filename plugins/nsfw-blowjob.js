import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
  var {age} = db.data.users[m.sender]
  
    let res = await fetch('https://api.waifu.pics/nsfw/blowjob')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, '✅ Aquí tienes', igfg, json.url, [['▷▷ Siguiente', `${usedPrefix + command }`]], m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = ['blowjob']
handler.limit = true
handler.register = false



export default handler
