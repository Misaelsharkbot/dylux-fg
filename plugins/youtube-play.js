import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `â³ï¸ *Ingresa el tÃ­tulo de una canciÃ³n*\n\nðEjemplo *${usedPrefix + command}* Lil Peep hate my life `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'â³ï¸ VÃ­deo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
  â¡ *FG MUSIC*
âââââââââââââââ
â¢ ð  *TÃ­tulo* : ${title}
â¢ ð *Publicado:* ${publishedTime}
â¢ â *DuraciÃ³n:* ${durationH}
â¢ ð *Vistas:* ${viewH}
â¢ ð *Url:* ${url}
âââââââââââââââ
  `.trim(), igfg, thumbnail, 'https://youtube.com/fg98f', 'YouTube', null, null, [
    ['ð¥ MP4 360p', `${usedPrefix}ytv ${url} yes`],
    ['ð¶ MP3', `${usedPrefix}yta ${url} yes`]
  ], m)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid', 'play2'] 

handler.exp = 0
handler.limit = false

export default handler

