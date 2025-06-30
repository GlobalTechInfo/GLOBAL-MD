

require('../settings');
const { sleep, clockString } = require('./function')

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const gameSlot = async (conn, m, db) => {
	if (db[m.sender].limit < 1) return m.reply(global.mess.endLimit)
	const sotoy = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍐','🍑','🍒','🍓','🫐','🥝','🥥','🥑']
	const slot1 = pickRandom(sotoy)
	const slot2 = pickRandom(sotoy)
	const slot3 = pickRandom(sotoy)
	const listSlot1 = `${pickRandom(sotoy)} : ${pickRandom(sotoy)} : ${pickRandom(sotoy)}`
	const listSlot2 = `${slot1} : ${slot2} : ${slot3}`
	const listSlot3 = `${pickRandom(sotoy)} : ${pickRandom(sotoy)} : ${pickRandom(sotoy)}`
	const randomLimit = Math.floor(Math.random() * 8)
	try {
		if (slot1 === slot2 && slot2 === slot3) {
			db[m.sender].limit -= 1
			global.bot.limit += 1
			let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n${listSlot1}\n${listSlot2} <=====\n${listSlot3}\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_You Win🎉_ <=====Limit + ${randomLimit}`
			conn.sendMessage(m.chat, { text: sloth }, { quoted: m })
			db[m.sender].limit += randomLimit
		} else {
			db[m.sender].limit -= 1
			global.bot.limit += 1
			let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n${listSlot1}\n${listSlot2} <=====\n${listSlot3}\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_You Lose_ <=====\nLimit - 1`
			conn.sendMessage(m.chat, { text: sloth }, { quoted: m })
		}
	} catch (e) {
		console.log(e)
		m.reply('Error!')
	}
}

const gameCasinoSolo = async (conn, m, prefix, db) => {
   try {
      let buatall = 1
      let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
      let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
      let Aku = (randomaku * 1)
      let Kamu = (randomkamu * 1)
      let count = m.args[0]
      if (isNaN(count)) return m.reply('How much money you wanna bet?\n\nFor Example:\n' + prefix + 'casino 10')
      count = count ? /all/i.test(count) ? Math.floor(db[m.sender].uang / buatall) : parseInt(count) : m.args[0] ? parseInt(m.args[0]) : 1
      count = Math.max(1, count)
      if (m.args.length < 1) return m.reply(prefix + 'casino <amount>\n' + prefix + 'casino 1000')
      if (db[m.sender].uang >= count * 1) {
         db[m.sender].uang -= count * 1
         global.bot.uang += count * 1
         if (Aku > Kamu) {
            m.reply(`💰 Casino 💰\n*You:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nYou lost ${count} Money`.trim())
         } else if (Aku < Kamu) {
            db[m.sender].uang += count * 2
            m.reply(`💰 Casino 💰\n*You:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nYou get ${count * 2} Money`.trim())
         } else {
            db[m.sender].uang += count * 1
            m.reply(`💰 Casino 💰\n*You:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERIES*\nYou get ${count * 1} Money`.trim())
         }
      } else { 
          m.reply(`You don't have enough money for the Casino, please *collect* first!`)
     }
   } catch (e) {
   	console.log(e)
      m.reply('Error!!')
   }
}

const gameMerampok = async (m, db) => {
   let dapat = (Math.floor(Math.random() * 10000))
   let who
   if (m.isGroup) who = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.mentionedJid[0]
   else who = m.chat
   if (!who) return m.reply('Tag a person\n\nFor Example:\nplaybomb @xeon')
   let __timers = (new Date - db[m.sender].lastrampok)
   let _timers = (3600000 - __timers)
   let timers = clockString(_timers)
   if (new Date - db[m.sender].lastrampok > 3600000) {
      if (10000 > db[who].uang) return m.reply('The target is poor bro🗿')
      db[who].uang -= dapat
      db[m.sender].uang += dapat
      db[m.sender].lastrampok = new Date * 1
      m.reply(`Successfully robbed the target of money amounting to ${dapat}`)
   } else {
      m.reply(`You've robbed and managed to hide, wait ${timers} to rob again`)
   }
}

const gameTangkapOr = async (conn, m, db) => {
	let user = db[m.sender]
    let __timers = (new Date - user.lasttkpor)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers)
	const randomUang = Math.floor(Math.random() * 10001)
	let random = [{teks: 'Player Successfully Escaped!', no: 0},{teks: 'Player Escape!', no: 0},{teks: 'Player Hiding', no: 0},{teks: 'Player Suicide', no: 0},{teks: 'Player Successfully Caught', no: 2},{teks: 'Player Not Found!', no: 0},{teks: 'Players Stronger Than You!', no: 1},{teks: 'Players Use Cheats', no: 1},{teks: 'Player Caught!', no: 2},{teks: 'Players Surrender', no: 2}]
	let teksnya = await pickRandom(random);
	if (new Date - user.lasttkpor > 3600000) {
		let { key } = await conn.sendMessage(m.chat, { text: 'Currently Looking for Players...' })
		await sleep(2000)
		if (teksnya.no === 0) {
			await conn.sendMessage(m.chat, { text: teksnya.teks, edit: key })
			await conn.sendMessage(m.chat, { text: 'Failed to Search for Players, Please Try Again' }, { quoted: m })
		} else if (teksnya.no === 1) {
			await conn.sendMessage(m.chat, { text: teksnya.teks, edit: key })
			await conn.sendMessage(m.chat, { text: `You were killed by a player\nYour money will be taken in the amount of *${randomUang}*` }, { quoted: m })
			db[m.sender].uang -= randomUang
		} else {
			await conn.sendMessage(m.chat, { text: teksnya.teks, edit: key })
			await conn.sendMessage(m.chat, { text: `Successfully Earned Money : *${randomUang}*` }, { quoted: m })
			db[m.sender].uang += randomUang
			db[m.sender].lasttkpor = new Date * 1
		}
	} else {
		conn.sendMessage(m.chat, { text: `Please wait *⏱️${timers}* again to be able to play again` }, { quoted: m })
	}
}

const daily = async (conn, m, db) => {
   let user = db[m.sender]
   let __timers = (new Date - user.lastclaim)
   let _timers = (86400000 - __timers)
   let timers = clockString(_timers)
   if (new Date - user.lastclaim > 86400000) {
   	conn.sendMessage(m.chat, { text: `*Daily Claim*\n_Successful Claim_\n- limit : 100\n- Money : 10000\n\n_Claim Reset_` }, { quoted: m })
   	db[m.sender].limit += 10
   	db[m.sender].uang += 10000
   	db[m.sender].lastclaim = new Date * 1
   } else {
   	conn.sendMessage(m.chat, { text: `Please wait *⏱️${timers}* again to be able to claim again` }, { quoted: m })
   }
}

const transferLimit = async (conn, m, args, db) => {
	if (isNaN(args[0])) {
		return m.reply('How much you wanna transfer?\n\nExample:\ntransferlimit 10 @Xeon')
	} else {
	  let count = args[0] && args[0].length > 0 ? Math.min(9999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
	  let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[1] ? (args[1] + '@s.whatsapp.net') : false
	  if (!who) return m.reply('Who do you wanna transfer?\n\nExample:\ntransferlimit 10 @Xeon')
	  if (db[m.sender].limit >= count * 1) {
		  try {
            db[m.sender].limit -= count * 1
            db[who].limit += count * 1
            conn.sendMessage(m.chat, { text: `Successfully transferred limit of ${count}, to @${who.split('@')[0]}`, mentions: [who] }, { quoted : m }) 
          } catch (e) {
            db[m.sender].limit += count * 1
            m.reply('Failed to Transfer')
          }
      } else {
    	  m.reply(`Insufficient limit!!\nYour limit remains : *${db[m.sender].limit}*`)
      }
   }
}

const transferUang = async (conn, m, args, db) => {
	if (isNaN(args[0])) {
		return m.reply('How much you wanna transfer?\n\nExample:\ntransfermoney 10 @Xeon')
	} else {
	  let count = args[0] && args[0].length > 0 ? Math.min(9999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
	  let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[1] ? (args[1] + '@s.whatsapp.net') : false
	  if (!who) return m.reply('Who do you wanna transfer?\n\nExample:\ntransfermoney 10 @Xeon')
	  if (db[m.sender].uang >= count * 1) {
		  try {
            db[m.sender].uang -= count * 1
            db[who].uang += count * 1
            conn.sendMessage(m.chat, { text: `Successfully transferred money amounting to ${count}, to @${who.split('@')[0]}`, mentions: [who] }, { quoted : m }) 
          } catch (e) {
            db[m.sender].uang += count * 1
            m.reply('Failed to Transfer')
          }
      } else {
    	  m.reply(`Insufficient money!!\nYou have the remaining money of : *${db[m.sender].uang}*`)
      }
   }
}

const buy = async (m, args, db) => {
	if (args[0] === 'limit') {
		if (!args[1]) return m.reply(`Enter the nominal!\nExample : ${m.prefix + m.command} limit 10`);
		if (db.users[m.sender].uang >= args[1] * 1) {
			db.users[m.sender].limit += args[1] * 1
			db.users[m.sender].uang -= args[1] * 500
			m.reply(`Successfully Purchased Limit Amount ${args[1] * 1} with price ${args[1] * 500}`);
		} else {
			m.reply(`You don't have enough money to buy a limit!\nYour Money Left : ${db.users[m.sender].uang}\nPrice ${args[1]} Limit : ${args[1] * 500}`);
		}
	} else {
		m.reply(`Limit Price: Quantity x 500\n• 1 limit = 500\n• 2 limit = 1000\n\nExample : .buy limit 3`);
	}
}

const setLimit = (m, db) => db.users[m.sender].limit -= 1

const setUang = (m, db) => db.users[m.sender].uang -= 1000

module.exports = { gameSlot, gameCasinoSolo, gameMerampok, gameTangkapOr, daily, transferLimit, transferUang, buy, setLimit, setUang }