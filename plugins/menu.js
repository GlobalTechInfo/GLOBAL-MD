import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
const {
    proto,
    generateWAMessage,
    areJidsSameUser,
    prepareWAMessageMedia
} = (await import('@whiskeysockets/baileys')).default
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'

import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Karachi').format('HH')
let wib = moment.tz('Asia/Karachi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

   let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
//let pp = (thumb)
let user = global.db.data.users[m.sender]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

let str = `
  『 *GLOBAL-MD* 』  
╔┈┈┈┈┈┈┈┈┈┈┈┈┈
╎❒ *CREATOR : QASIM*
╎
╎❒ *PLUGINS : 250 +*
╎
╎❒ *FEATURE : 700 +*
╚┈┈┈┈┈┈┈┈┈┈┈┈┈

© 2024 *GlobalTechInfo*`

let msg = generateWAMessageFromContent(m.chat, {

  viewOnceMessage: {

    message: {

        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },

        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: str
          }),

          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Use The Below Buttons"
          }),

          header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image : { url: 'https://i.ibb.co/GVS5Dy9/Ephoto360-com-167054c3328030-2.jpg'}}, { upload: conn.waUploadToServer})), 
            title: null,
            subtitle: null,
            hasMediaAttachment: false

          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
                                "{\"title\":\"BUTTON MENU\",\"sections\":[{\"title\":\"HERE IS BUTTONS MENU\",\"highlight_label\":\"GLOBAL\",\"rows\":[{\"header\":\"\",\"title\":\"🧲 Bot Menu\",\"description\":\"The Bot's secret control panel.\",\"id\":\".botmenu\"},{\"header\":\"\",\"title\":\"🪅 Owner Menu\",\"description\":\"Yep, that's for you, Boss!\",\"id\":\".ownermenu\"},{\"header\":\"\",\"title\":\"♦️ Group Menu\",\"description\":\"Group shenanigans central!\",\"id\":\".groupmenu\"},{\"header\":\"\",\"title\":\"🗂️ Download Menu\",\"description\":\"'DL' stands for 'Delicious Loot'.\",\"id\":\".dlmenu\"},{\"header\":\"\",\"title\":\"🎭 Fun Menu\",\"description\":\"The bot's party hat. Games, jokes and instant ROFLs.\",\"id\":\".funmenu\"},{\"header\":\"\",\"title\":\"💰 Economy Menu\",\"description\":\"Your personal vault of virtual economy.\",\"id\":\".economymenu\"},{\"header\":\"\",\"title\":\"🎮 Game Menu\",\"description\":\"Enter the gaming arena.\",\"id\":\".gamemenu\"},{\"header\":\"\",\"title\":\"🪢 Sticker Menu\",\"description\":\"A rainbow of stickers.\",\"id\":\".stickermenu\"},{\"header\":\"\",\"title\":\"🛠️ Tool Menu\",\"description\":\"Your handy-dandy toolkit.\",\"id\":\".toolmenu\"},{\"header\":\"\",\"title\":\"🐯 Logo Menu\",\"description\":\"Create a logo that screams You.\",\"id\":\".logomenu\"},{\"header\":\"\",\"title\":\"💃 NSFW Menu\",\"description\":\"The After Dark menu.\",\"id\":\".nsfwmenu\"},{\"header\":\"\",\"title\":\"🫐 Anime Menu\",\"description\":\"I Don't Know What To Write Here.\",\"id\":\".animemenu\"}]}]}" 
                },
                 {
                "name": "quick_reply",
                "buttonParamsJson": 
                                "{\"display_text\":\"LIST MENU \",\"id\":\".menu2\"}"
                 },
                  {
                  "name": "cta_url",
                  "buttonParamsJson": "{\"display_text\":\"OWNER 🌟\",\"Url\":\"https://wa.me/message/HA35ZL76JSHJB1\"}"
                  },
                  {
                  "name": "cta_url",
                 "buttonParamsJson": 
                     "{\"display_text\":\"BOT REPO\",\"url\":\"https://github.com/GlobalTechInfo/GLOBAL-MD\",\"merchant_url\":\"https://github.com/GlobalTechInfo\"}"
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {

  messageId: msg.key.id

})


}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help','h','commands'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

    function ucapan() {
      const time = moment.tz('Asia/Karachi').format('HH')
      let res = "Happy early in the morning ☀️"
      if (time >= 4) {
        res = "Good Morning 🥱"
      }
      if (time >= 10) {
        res = "Good Afternoon 🫠"
     }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
       res = "Good Night 🌙"
      }
      return res
    }
