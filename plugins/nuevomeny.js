/*

//PARA USUARIOS DE WHATSAPP BUSSINES
//UTILIZAR EL SEGUNDO MENÚ
//CREADO POR GATA DIOS | HYZER 
//MANTENER LOS CREDITOS POR FAVOR. GRACIAS
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
wm = global.wm
vs = global.vs
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
const defaultMenu = {
  before:`
╭━━「 *𝙋𝙖𝙣𝙚𝙡* 」━━━⬣
┃𓃠 𝐕𝐞𝐫𝐬𝐢ó𝐧 𝐝𝐞 𝐆𝐚𝐭𝐚𝐁𝐨𝐭-𝐌𝐃
┃➺ ${vs}
┃━━━━ 「 𝙃𝙤𝙮」━━━━⬣
┃ღ 𝐅𝐞𝐜𝐡𝐚
┃➺ %week %date
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐓𝐢𝐞𝐦𝐩𝐨
┃➺ %time
╰━━━━━━━━━━━━━━━━⬣
╭━━「 *𝙐𝙨𝙪𝙖𝙧𝙞𝙤(𝙖) 」━━━⬣
┃ღ 𝐍𝐨𝐦𝐛𝐫𝐞:
┃➺ %name
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐄𝐬𝐭𝐚𝐝𝐨: --
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬: %limit
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐃𝐢𝐧𝐞𝐫𝐨: %money
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐄𝐱𝐩: %totalexp
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐍𝐢𝐯𝐞𝐥: %level
┃ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝐑𝐨𝐥: %role
╰━━━━━━━━━━━━━━━━⬣
╭━━━「 *𝐈𝐍𝐅𝐎 𝐂𝐌𝐃* 」━━━━━⬣
┃ *Ⓟ* = Premium
┃ *Ⓛ* = Diamantes
╰━━━━━━━━━━━━━━━━⬣
%readmore`.trimStart(), 
 header: '╭━「 %category 」━⬣',
 body: '┃➺ %cmd %isPremium %islimit',
 footer: '╰━━━━━━━━━━━━━━━━⬣\n',
  after: ``,
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['info', 'all', 'absen', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'info': '𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍',	  
  'main': '𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋',
  'advanced': '𝐀𝐕𝐀𝐍𝐙𝐀𝐃𝐎',
  'absen': '𝐀𝐔𝐒𝐄𝐍𝐂𝐈𝐀',
  'anime': '𝐀𝐍𝐈𝐌𝐄',
  'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑',
  'downloader': '𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒',
  'xp': '𝐍𝐈𝐕𝐄𝐋 & 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀',
  'fun': '𝐅𝐔𝐍',
  'game': '𝐉𝐔𝐄𝐆𝐎𝐒',
  'github': '𝐆𝐈𝐓𝐇𝐔𝐁',
  'group': '𝐆𝐑𝐔𝐏𝐎',
  'image': '𝐈𝐌𝐀𝐆𝐄𝐍',
  'info': '𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍',
  'internet': '𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓',
  'kerang': '𝐁𝐎𝐋𝐀 𝐌𝐀𝐆𝐈𝐂𝐀',
  'maker': '𝐅𝐀𝐁𝐑𝐈𝐂𝐀𝐑',
  'owner': '𝐎𝐖𝐍𝐄𝐑',
  'Pengubah Suara': '𝐅𝐈𝐋𝐓𝐑𝐎𝐒 𝐃𝐄 𝐕𝐎𝐙',
  'premium': '𝐏𝐑𝐄𝐌𝐈𝐔𝐌',
  'quotes' : '*MENU QUOTES*',
  'rpg': '𝐑𝐏𝐆',
  'stalk': '*MENU STALK*',
  'shortlink': '𝐀𝐂𝐎𝐑𝐓𝐀𝐑',
  'tools': '𝐀𝐉𝐔𝐒𝐓𝐄𝐒',
  'vote': '𝐕𝐎𝐓𝐎𝐒',
  }
  if (teks == 'info') tags = {
  'info': '*MENU INFO*',
  }
  if (teks == 'absen') tags = {
    'absen': 'MENU ABSEN',
    'vote': '*MENU VOTING*',
  }
  if (teks == 'anime') tags = {
  'anime': '*MENU ANIME*',
  }
  if (teks == 'sticker') tags = {
  'sticker': '*MENU CONVERT*',
  }
  if (teks == 'downloader') tags = {
  'downloader': '*MENU DOWNLOADER*',
  }
  if (teks == 'xp') tags = {
  'xp': '*MENU EXP*',
  }
  if (teks == 'fun') tags = {
  'fun': '*MENU FUN*',
  }
  if (teks == 'game') tags = {
  'game': '*MENU GAME*',
  }
  if (teks == 'github') tags = {
  'github': '*MENU GITHUB*',
  }
  if (teks == 'group') tags = {
  'group': '*MENU GROUP*',
  }
  if (teks == 'image') tags = {
  'image': '*MENU IMAGE*',
  }
  if (teks == 'internet') tags = {
  'internet': '*INTERNET*',
  }
  if (teks == 'islam') tags = {
  'islam' : '*MENU ISLAMI*',
  }
  if (teks == 'kerang') tags = {
  'kerang': '*MENU KERANG*',
  }
  if (teks == 'maker') tags = {
  'maker': '*MENU MAKER*',
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': '*PENGUBAH SUARA*',
  }
  if (teks == 'premium') tags = {
  'premium': '*PREMIUM MENU*',
  }
  if (teks == 'quotes') tags = {
  'quotes' : '*MENU QUOTES*',
  }
  if (teks == 'rpg') tags = {
  'rpg': '*MENU RPG*',
  }
  if (teks == 'stalk') tags = {
  'stalk': '*MENU STALK*',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': '*SHORT LINK',
  }
  if (teks == 'tools') tags = {
  'tools': '*MENU TOOLS*',
  }

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
let wib = moment.tz('Sudamerica/Quito').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let tulisan = `
${ucapan()} ${name}. Have a great day！
Terimakasih Atas Kunjungan Anda`.trim()
let sangek = `Berikut adalah list Menu Bot. klik pada "Click Here!" untuk melihat list menu.`
let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })
    if (teks == '404') {
   ftrol = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}                        
      const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `╭─────────────────────❀\n│${ucapan()}\n│💖•.¸💝¸.• *${name}* •.¸💝¸.•💖\n╰─────────────────────❀`,
            description: `╭━━━━━━〔 *${wm}* 〕━━━━━━⬣	    
┃✪ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐮𝐚𝐥	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ 𝐀𝐜𝐭𝐢𝐯𝐨 𝐃𝐮𝐫𝐚𝐧𝐭𝐞 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐝𝐞 𝐆𝐚𝐭𝐚𝐁𝐨𝐭-𝐌𝐃
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ 𝐔𝐬𝐮𝐚𝐫𝐢𝐨(𝐬)
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ 𝐌𝐨𝐝𝐨
┃➺ ${global.opts['self'] ? 'Self' : 'publik'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ 𝐆𝐫𝐮𝐩𝐨𝐬 𝐛𝐚𝐧𝐞𝐚𝐝𝐨𝐬
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐛𝐚𝐧𝐞𝐚𝐝𝐨𝐬
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━━━⬣`,
            buttonText: '𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 | 𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐',
            listType: 1,
            footerText: "*PRESIONE ESTE MENSAJE PARA IR AL MENÚ.*",
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `𝐎𝐰𝐧𝐞𝐫`,
                  "description": "Imformacion sobre el creador de *DyLux  ┃ ᴮᴼᵀ*",
                  "rowId": `.owner`
                },{
                  "title": "𝐃𝐨𝐧𝐚𝐫",
                  "description": "Ayuda al creador en su finaza xd",
                  "rowId": `.donar`
                },{
                  "title": "𝐁𝐨𝐭",
                  "description": "Para hablar con el bot",
                  "rowId": `.bot`
                },{
                  "title": "𝐌𝐞𝐧𝐮",
                  "description": "Para ver todo el menu",
                  "rowId": `.menu`
                },{
                  "title": "𝐌𝐞𝐧𝐮2",
                  "description": "Para ver todo el menu2",
                  "rowId": `.menu2`
                },{
                  "title": "𝐈𝐧𝐟𝐨",
                  "description": "Para ver tla imformacion",
                  "rowId": `.info`
                }],	      
                "title": "────  *DyLux  ┃ ᴮᴼᵀ*  ────",
              }, {
                "rows": [{
		  "title": "𝐌𝐚𝐭𝐞𝐬",
                  "description": "Para jugar juegos matematicos",
                  "rowId": `.mates` 
		  }, {
                  "title": `☰ 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤`,
                  "description": "Presentación de todo el Menú.",
                  "rowId": `.allmenu`
                  }, {
                  "title": "☰ 𝘼𝙪𝙨𝙚𝙣𝙩𝙚 & 𝙑𝙤𝙩𝙤",
                  "description": "Mostrando el Menú Ausente.",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "☰ 𝘼𝙣𝙞𝙢𝙚 𝙈𝙚𝙣𝙪.",
                  "description": "Mostrar menú animado.",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "☰ STICKER & CONVERTER",
                  "description": "Menampilkan Menu Sticker",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "☰ DOWNLOADER MENU",
                  "description": "Menampilkan Menu Downloader",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "☰ EXP & LIMIT",
                  "description": "Menampilkan Menu Exp",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "☰ FUN MENU",
                  "description": "Menampilkan Menu Fun",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "☰ GAME MENU",
                  "description": "Menampilkan Menu Game",
                  "rowId": `${_p}? game`
                }, {
                  "title": "☰ GITHUB MENU",
                  "description": "Menampilkan Menu Github",
                  "rowId": `${_p}? github`
                }, {
                  "title": "☰ GROUP MENU",
                  "description": "Menampilkan Menu Group",
                  "rowId": `${_p}? group`
                }, {
                  "title": "☰ IMAGE MENU",
                  "description": "Menampilkan Menu Image",
                  "rowId": `${_p}? image`
                }, {
                  "title": "☰ INTERNET MENU",
                  "description": "Menampilkan Menu Internet",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "☰ ISLAM MENU",
                  "description": "Menampilkan Menu Islam",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "☰ KERANG AJAIB",
                  "description": "Menampilkan Menu Kerang",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "☰ MAKER MENU",
                  "description": "Menampilkan Menu Maker",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "☰ OWNER MENU",
                  "description": "Menampilkan Menu Owner",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "☰ PENGUBAH SUARA",
                  "description": "Menampilkan Menu Voice Changer",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "☰ PREMIUM MENU",
                  "description": "Menampilkan Menu Premium",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "☰ QUOTES MENU",
                  "description": "Menampilkan Menu Quotes",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "☰ RPG MENU",
                  "description": "Menampilkan Menu Rpg",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "☰ STALKER MENU",
                  "description": "Menampilkan Menu Stalker",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "☰ SHORT LINK",
                  "description": "Menampilkan Menu Short Link",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "☰ TOOLS MENU",
                  "description": "Menampilkan Menu Tools",
                  "rowId": `${_p}? tools`
                }
                  ],
                "title": "LIST MENU"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: ftrol });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                  .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
     let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menus/Menuvid1.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
	  /*let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/menus/Menu1.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{*/
            urlButton: {
               displayText: '𝙂𝙞𝙩𝙃𝙪𝙗',
               url: 'https://github.com/GataNina-Li/GataBot-MD'	       
		}
           },
             {
              urlButton: {
               displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
               url: 'https://instagram.com/gata_dios'	           
             }

           },
             {
              quickReplyButton: {
               displayText: '𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤',
               id: '.owner',
             }

           },
           {
             quickReplyButton: {
               displayText: '𝙋𝙚𝙧𝙛𝙞𝙡 | 𝙋𝙧𝙤𝙛𝙞𝙡𝙚',
               id: '.profile',
             }
	   },
           {
             quickReplyButton: {
               displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪',
               id: '.menu',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n*Lo siento, el Menú tiene un error. Informa inmediatamente a mí Creadora para una pronta solución.*\n*Sorry, the Menu has an error. Report immediately to my Creator for a prompt solution.*', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  res = "👋 *BIENVENIDO(A)* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches* 💫"
  }
  return res
}

*/
