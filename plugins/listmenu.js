let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
   title: `DyLux  โ แดฎแดผแต`,
rows: [
{title: "๐จโ๐ฌ | ๐๐ซ๐๐๐๐จ๐ซ", description: "", rowId: `${usedPrefix}owner`},
{title: "โ | ๐๐จ๐ง๐๐ซ", description: "", rowId: `${usedPrefix}donar`},
{title: "๐ค | ๐๐จ๐ญ", description: "", rowId: `${usedPrefix}bot`},
{title: "๐จโ๐ฉโ๐งโ๐ฆ | ๐๐ซ๐ฎ๐ฉ๐จ๐ฌ", description: "", rowId: `${usedPrefix}gpdylux`},   
{title: "โ | ๐๐๐ง๐ฎ", description: "", rowId: `${usedPrefix}menu`},    
{title: "โ | ๐๐๐ง๐ฎ๐", description: "", rowId: `${usedPrefix}menu2`},      
{title: "๐พ | ๐๐", description: "", rowId: `${usedPrefix}scrip`},    
{title: "๐  | ๐๐ง๐๐จ", description: "", rowId: `${usedPrefix}info`},
{title: "๐ฒ | ๐๐๐๐จ", description: "", rowId: `${usedPrefix}dado`},
{title: "โ | ๐๐๐", description: "", rowId: `${usedPrefix }ppt`},
{title: "โญ | ๐๐ข๐๐ญ๐๐๐ญ๐จ๐", description: "", rowId: `${usedPrefix}ttt a`},
{title: "๐ฐ | ๐๐ฅ๐จ๐ญ", description: "", rowId: `${usedPrefix}slot`},  
{title: "โ | ๐๐๐ญ๐๐ฌ", description: "", rowId: `${usedPrefix}mates`},
{title: "๐น | ๐๐๐ฏ๐๐ฅ๐ฎ๐ฉ", description: "", rowId: `${usedPrefix}nivel`},
{title: "๐ | ๐๐ข๐๐ฆ๐๐ง๐ญ๐๐ฌ", description: "", rowId: `${usedPrefix}bal`},
{title: "๐ฐ | ๐๐ฅ๐๐ข๐ฆ", description: "", rowId: `${usedPrefix}claim`},
{title: "โ | ๐๐ข๐ง๐๐ซ", description: "", rowId: `${usedPrefix}minar`},
{title: "๐ฅ | ๐๐จ๐ฉ", description: "", rowId: `${usedPrefix}top`},
{title: "๐ธ | ๐๐ฎ๐ฒ", description: "", rowId: `${usedPrefix}buy`},
{title: "๐ฑ | ๐๐ฎ๐ฒ๐๐ฅ๐ฅ", description: "", rowId: `${usedPrefix}buyall`},
{title: "๐ฆ | ๐๐ซ๐๐ง๐ฌ๐๐๐ซ", description: "", rowId: `${usedPrefix}transfer`},
{title: "๐ทโโ๏ธ | ๐๐ซ๐๐๐๐ฃ๐๐ซ", description: "", rowId: `${usedPrefix}w`},
{title: "๐ข | ๐๐ฆ๐จ๐ฃ๐ข๐ฆ๐ข๐ฑ", description: "", rowId: `${usedPrefix}emojimix`},
{title: "๐ข | ๐๐ฆ๐จ๐ฃ๐ข๐ฆ๐ข๐ฑ๐", description: "", rowId: `${usedPrefix}emojimix2`},
{title: "โ | ๐๐ญ๐ญ๐ฉ", description: "", rowId: `${usedPrefix}attp`},
{title: "โ | ๐๐ญ๐ฉ", description: "", rowId: `${usedPrefix}ttp`},
{title: "๐ค | ๐๐๐ญ๐๐ฑ๐ข๐", description: "", rowId: `${usedPrefix}getexif`},
{title: "๐ | ๐๐๐ฌ๐จ", description: "", rowId: `${usedPrefix}kiss`},
{title: "๐ฅบ | ๐๐๐ฅ๐ฆ๐๐๐ข๐ญ๐๐ฌ", description: "", rowId: `${usedPrefix}pat`},
{title: "๐  | ๐๐๐๐๐ญ", description: "", rowId: `${usedPrefix}react`},
{title: "๐  | ๐๐ญ๐ข๐๐ค๐๐ซ", description: "", rowId: `${usedPrefix}s`},
{title: "๐ | ๐๐จ๐ข๐ฆ๐ ", description: "", rowId: `${usedPrefix}toimg`},
{title: "๐ | ๐๐จ๐ข๐ฆ๐ ๐", description: "", rowId: `${usedPrefix}toimg2`},
{title: "๐โโ๏ธ | ๐๐จ๐๐๐ซ", description: "", rowId: `${usedPrefix}wm`},
{title: "๐ | ๐๐ฆ๐๐ ๐๐ง", description: "", rowId: `${usedPrefix}imagen`},
{title: "๐ฟ | ๐๐ข๐ง๐ญ๐๐ซ๐๐ฌ๐ญ", description: "", rowId: `${usedPrefix}pinterest`},
{title: "๐ฉ | ๐๐ข๐ซ๐ฅ", description: "", rowId: `${usedPrefix}girl`},
{title: "๐ผ | ๐๐๐ฅ๐ฅ๐ฉ๐๐ฉ๐๐ซ", description: "", rowId: `${usedPrefix}wallpaper`},
{title: "๐ | ๐๐๐ซ๐๐ข๐ฅ", description: "", rowId: `${usedPrefix}perfil`},
{title: "๐ | ๐๐ข๐ฆ๐ฎ๐ฅ๐๐ซ", description: "", rowId: `${usedPrefix}simular`},
{title: "๐คต | ๐๐ญ๐๐๐", description: "", rowId: `${usedPrefix}staff`},
{title: "๐ | ๐๐๐", description: "", rowId: `${usedPrefix}infogp`},
{title: "โ | ๐๐ง๐๐จ๐ ๐ฉ", description: "", rowId: `${usedPrefix}`},
{title: "๐ฅ | ๐ค๐ข๐๐ค", description: "", rowId: `${usedPrefix}kick`},
{title: "๐ | ๐๐ข๐ง๐ค", description: "", rowId: `${usedPrefix}link`},
{title: "๐ซ | ๐๐ซ๐จ๐ฎ๐ฉ", description: "", rowId: `${usedPrefix}group`},
{title: "โผ | ๐๐๐ ๐๐ฅ๐ฅ", description: "", rowId: `${usedPrefix}tagall`},
{title: "โ | ๐๐ง๐๐๐ฅ๐", description: "", rowId: `${usedPrefix}enable`},
{title: "โ | ๐๐ข๐ฌ๐๐๐ฅ๐", description: "", rowId: `${usedPrefix}disable`},
{title: "โซ | ๐๐จ๐ข๐ง", description: "", rowId: `${usedPrefix}join`},
{title: "๐ | ๐๐ฌ๐ฎ๐ฉ๐๐ง", description: "", rowId: `${usedPrefix}asupan`},
{title: "๐ฅด | ๐๐จ๐ฅ๐ข", description: "", rowId: `${usedPrefix}loli`},
{title: "๐ฅด | ๐๐๐ ๐ฎ๐ฆ๐ข๐ง", description: "", rowId: `${usedPrefix}megumin`},
{title: "๐ฅด | ๐๐๐ค๐จ", description: "", rowId: `${usedPrefix}neko`},
{title: "๐ฅด | ๐๐๐ข๐๐ฎ", description: "", rowId: `${usedPrefix}waifu`},
{title: "๐ | ๐๐ข๐ญ๐๐ฅ๐จ๐ง๐", description: "", rowId: `${usedPrefix}gitclone`},
{title: "๐ท | ๐๐ง๐ฌ๐ญ๐๐ ๐ซ๐๐ฆ", description: "", rowId: `${usedPrefix}instagram`},
{title: "๐ | ๐๐ ๐ฌ๐ญ๐๐ฅ๐ค", description: "", rowId: `${usedPrefix}igstalk`},
{title: "๐ | ๐๐๐๐ข๐๐๐ข๐ซ๐", description: "", rowId: `${usedPrefix}medafire`},
{title: "๐ฝ | ๐ฉ๐ฅ๐๐ฒ", description: "", rowId: `${usedPrefix}play`},
{title: "๐ผ | ๐๐ญ๐ฆ๐ฉ๐", description: "", rowId: `${usedPrefix}ytmp3`},
{title: "๐ฝ | ๐๐ญ๐ฆ๐ฉ๐", description: "", rowId: `${usedPrefix}ytmp4`},
{title: "๐ | ๐๐จ๐จ๐ ๐ฅ๐", description: "", rowId: `${usedPrefix}google`},
{title: "๐ผ | ๐๐ฒ๐ซ๐ข๐๐ฌ", description: "", rowId: `${usedPrefix}lyrics`},
{title: "๐  | ๐๐๐๐จ๐๐", description: "", rowId: `${usedPrefix}qrcode`},
{title: "๐  | ๐ฅ๐๐๐ซ๐ฆ๐๐ฌ", description: "", rowId: `${usedPrefix}leermas`},
{title: "๐  | ๐๐๐๐๐ฏ๐จ", description: "", rowId: `${usedPrefix}readvo`},
{title: "๐ | ๐ญ๐ญ๐ฌ", description: "", rowId: `${usedPrefix}tts`},
{title: "โ | ๐๐๐ฅ", description: "", rowId: `${usedPrefix}cal`},
{title: "โ | ๐๐ซ๐๐", description: "", rowId: `${usedPrefix}trad`},
{title: "๐ | ๐๐ข๐ค๐ข๐ฉ๐๐๐ข๐", description: "", rowId: `${usedPrefix}wikipedia`},
{title: "๐ | ๐๐ญ๐ฌ๐๐๐ซ๐๐ก", description: "", rowId: `${usedPrefix}ytsearch`},
{title: "โ  | ๐๐๐ค", description: "", rowId: `${usedPrefix}afk`},
{title: "๐ง | ๐๐จ๐ฆ๐ฉ๐", description: "", rowId: `${usedPrefix}tomp3`},
{title: "๐  | ๐๐จ๐๐ฏ", description: "", rowId: `${usedPrefix}toav`},
{title: "๐คข | ๐๐๐ฒ", description: "", rowId: `${usedPrefix}gay`},
{title: "๐ค | ๐๐ซ๐๐ ๐ฎ๐ง๐ญ๐", description: "", rowId: `${usedPrefix}pregunta`},
{title: "๐ | ๐ญ๐ฑ๐ญ", description: "", rowId: `${usedPrefix}txt`},
{title: "๐ | ๐ญ๐ฑ๐ญ๐", description: "", rowId: `${usedPrefix}txt2`},
{title: "๐  | ๐๐จ๐ ๐จ๐ฌ", description: "", rowId: `${usedPrefix}logos`},
{title: "โฃ | ๐ฅ๐จ๐ฏ๐", description: "", rowId: `${usedPrefix}`},
{title: "๐ | ๐๐จ๐ซ๐ฆ๐๐ซ๐ฉ๐๐ซ๐๐ฃ๐", description: "", rowId: `${usedPrefix}formarpareja`},
{title: "๐ฅต | ๐๐๐", description: "", rowId: `${usedPrefix}ass`},
{title: "๐ฅต | ๐๐ฅ๐จ๐ฐ๐ฃ๐จ๐", description: "", rowId: `${usedPrefix}blowjob`},
{title: "๐ฅต | ๐๐จ๐จ๐๐ฌ", description: "", rowId: `${usedPrefix}boobs`},
{title: "๐ฅต | ๐๐๐๐ค", description: "", rowId: `${usedPrefix}pack`},
{title: "๐ฅต | ๐๐๐ง๐ญ๐๐ข", description: "", rowId: `${usedPrefix}hentaih`},
{title: "๐ฅต | ๐๐๐ฌ๐๐ข๐๐ง", description: "", rowId: `${usedPrefix}lesbian`},
{title: "๐ฅต | ๐๐ฎ๐ฌ๐ฌ๐ฒ", description: "", rowId: `${usedPrefix}pussy`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `โก Lista de Opciones
โโโท *LISTA*
โข welcome 
โข delete 
โข public 
โข antilink
โข nsfw
โข antidelete
โข autolevelup 
โข detect 
โข document 
โข restrict 
โข autoread 
โข autosticker
โข solopv
โข sologp
โโโโโโโโโโโโโโ
*๐ Ejemplo :*
*${usedPrefix}enable* welcome
*${usedPrefix}disable* welcome
${author}`,
title: null,
buttonText: "๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐ข",
sections }

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    // case 'detect':
    //   if (!m.isGroup) {
    //     if (!isOwner) {
    //       global.dfail('group', m, conn)
    //       throw false
    //     }
    //   } else if (!isAdmin) {
    //     global.dfail('admin', m, conn)
    //     throw false
    //   }
    //   chat.detect = isEnable
    //   break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
    case 'document':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
           }}
    chat.autosticker = isEnable 
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isEnable
    //   break
    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
    case 'escuchar':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
    case 'autoleer':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `๐๏ธ ๐๐๐๐๐๐: ${type} 
๐๏ธ ๐๐๐๐๐๐: ${isEnable ? '๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ' : '๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ'}
๐ฃ ๐๐๐๐: ${isAll ? '๐ด๐๐๐ด ๐ฑ๐พ๐' : isUser ? '' : '๐ด๐๐๐ด ๐ฒ๐ท๐ฐ๐'}`, author, null, [[`${isEnable ? 'โ๏ธ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ โ๏ธ' : 'โ๏ธ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ โ๏ธ'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['๐พ ๐ผ๐ด๐ฝ๐ ๐ฟ๐๐ธ๐ฝ๐ฒ๐ธ๐ฟ๐ฐ๐ป ๐พ', '.menu']],m)}

handler.help = ['menu3']
handler.tags = ['main']
handler.command = ['menu3', 'help3', 'menรบ3'] 
handler.register = false
handler.exp = 3

export default handler
