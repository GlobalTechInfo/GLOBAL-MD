let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

  let pp = './assets/qasim.jpg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)

  let lkr
  switch (command) {
    case 'list':
      lkr =
        '*Project Has Some Hidden Commands Too,But Choose From Given:*\n\n' +
        '🌅 *' +
        usedPrefix +
        "botmenu* - The Bot's secret control panel.\n\n" +
        '🐯 *' +
        usedPrefix +
        "ownermenu* - Yep, that's for you, Boss!\n\n" +
        '🪅 *' +
        usedPrefix +
        'groupmenu* - Groups to unite people.\n\n' +
        '🗂️ *' +
        usedPrefix +
        "dlmenu* - 'DL' stands for 'Delicious Loot'.\n\n" +
        '🎭 *' +
        usedPrefix +
        "funmenu* - The bot's party hat. Games, jokes and instant ROFLs.\n\n" +
        '💰 *' +
        usedPrefix +
        'economymenu* - Your personal vault of virtual economy.\n\n' +
        '🎮 *' +
        usedPrefix +
        'gamemenu* - Enter the gaming arena.\n\n' +
        '🪢 *' +
        usedPrefix +
        'stickermenu* - A rainbow of stickers.\n\n' +
        '🛠️ *' +
        usedPrefix +
        "toolmenu* - Your handy-dandy toolkit.\n\n" +
        '🧲 *' +
        usedPrefix +
        'logomenu* - Create a logo that screams You.\n\n' +
        '💃 *' +
        usedPrefix +
        "nsfwmenu* - The After Dark menu.\n\n"+
        '🌀 *' +
        usedPrefix +
        'aimenu* - Your Personal Artificial Intelligence Copilots.\n\n'+
        '🥰 *' +
        usedPrefix +
        "animemenu* - Pick If You Like Buddy."
      break

    case 'botmenu':
      lkr = `
┌───『 *Bot* 』─❍
◈ .quran
◈ .bible
◈ .gita
◈ .ping
◈ .uptime
◈ .alive
◈ .anticall
◈ .chatbot
◈ .bot
◈ .owner
◈ .script
◈ .test
◈ .runtime
◈ .infobot
◈ .mrcs
◈ .bebots
◈ .jadibot
◈ .serbot
◈ .donate
◈ .groups
◈ .blocklist
◈ .listprem
◈ © GlobalTechInfo
╰────────❍` // Your bot menu message here
      break
      case 'aimenu':
      lkr=`
 ┌───『 *AI* 』─❍
 ◈ .lexica
 ◈ .chatgpt
 ◈ .gitagpt
 ◈ .gptpro
 ◈ .gpt4
 ◈ .civitai
 ◈ .blackpink
 ◈ .image
 ◈ .dalle
 ◈ .bro
 ◈ .ai
 ╰────────❍` //
 break
    case 'ownermenu':
      lkr = `
┌───『 *Owner* 』─❍
◈ .enable
◈ .disable
◈ .banchat
◈ .unbanchat
◈ .banuser
◈ .unbanuser
◈ .broadcast
◈ .broadcastgc
◈ .join
◈ .setppbot
◈ .setprefix
◈ .resetprefix
◈ .getfile
◈ .getplugin
◈ .listplugin
◈ .installplugin
◈ .savecontact
◈ .save
◈ .autoreply
◈ .autobio
◈ .fakereply
◈ .delcmd
◈ .listcmd
◈ .enable
◈ .disable
◈ .addprem
◈ .delprem
◈ .addsudo
◈ .delsudo
◈ .allvars
◈ .broadcast
◈ .fullpp
◈ .inspect
◈ .cleartmp
◈ .restart
◈ .savefile
◈ .getfile
◈ .logout
◈ .setprivacy
◈ .unban
◈ .ban
◈ .update
╰────────❍` //
      break
    case 'groupmenu':
      lkr = `
┌───『 *Group* 』─❍
◈ .kick
◈ .promote
◈ .demote
◈ .infogroup
◈ .resetlink
◈ .antilink
◈ .link
◈ .setpp
◈ .setname
◈ .setdesc
◈ .setwelcome
◈ .setbye
◈ .hidetag
◈ .warn
◈ .unwarn
◈ .group
◈ .enable
◈ .disable
◈ .toxic
◈ .ship
◈ .register
◈ .unregister
╰────────❍` //
      break
    case 'downloadermenu':
    case 'dlmenu':
      lkr = `
┌───『 *Download* 』─❍
◈ .audio
◈ .video
◈ .play
◈ .play2
◈ .apk
◈ .mega
◈ .song
◈ .yta 
◈ .ytv 
◈ .ytmp3 
◈ .ytmp4 
◈ .gimage
◈ .pinterest
◈ .mediafire 
◈ .gdrive 
◈ .gitclone 
◈ .twitter 
◈ .tiktok 
◈ .tiktokstalk
◈ .instagram 
◈ .spotify
◈ .facebook
◈ .swdl
◈ .dlstatus
╰────────❍` //
      break
    case 'economymenu':
      lkr = `
┌───『 *Economy* 』─❍
◈ .claim/daily
◈ .weekly
◈ .monthly
◈ .leaderboard
◈ .bet
◈ .heal
◈ .craft
◈ .balance
◈ .shop
◈ .sell
◈ .adventure
◈ .opencrate
◈ .mine
◈ .work
◈ .transfer
◈ .todiamond
◈ .tomoney
╰────────❍ ` //
      break
    case 'funmenu':
      lkr = `
┌───『 *Fun* 』─❍
◈ .character
◈ .truth
◈ .dare
◈ .flirt
◈ .gay
◈ .shayeri
◈ .ship
◈ .waste
◈ .simpcard
◈ .hornycard
◈ .ytcomment
◈ .stupid
◈ .lolicon
╰────────❍` //
      break
    case 'animemenu':
      lkr = `
┌───『 *Anime* 』─❍
◈ .waifu
◈ .neko
◈ .loli
◈ .couplepp
◈ .toanime
◈ .naruto
◈ .itachi
◈ .akira
◈ .asuna
◈ .akiyama
◈ .boruto
◈ .hornycard
◈ .ayuzawa
◈ .anna
◈ .chiho
◈ .chitoge
◈ .deidara
◈ .erza
◈ .elaina
◈ .emilia
◈ .hestia
◈ .hinata
◈ .inori
◈ .isuzu
◈ .kagura
◈ .kaori
◈ .keneki
◈ .kurumi
◈ .madara
◈ .mikasa
◈ .miku
◈ .minato
◈ .nezuko
◈ .sagiri
◈ .sasuke
◈ .sakura
◈ .kotori
╰────────❍ ` //
      break
    case 'gamemenu':
      lkr = `
┌───『 *Game* 』─❍
◈ .tictactoe
◈ .delttt
◈ .math
◈ .mathanswer
◈ .ppt
◈ .slot
◈ .casino
◈ .yourmom
◈ .terimummy
╰────────❍` //
      break
    case 'stickermenu':
      lkr = `
┌───『 *Sticker* 』─❍
◈ .sticker
◈ .take
◈ .scircle
◈ .smaker
◈ .sremovebg
◈ .getsticker
◈ .emojimix
◈ .toimg
◈ .tovid
◈ .ttp
◈ .telesticker
◈ .attp
◈ .attp2
◈ .attp3
╰────────❍` //
      break
    case 'toolmenu':
      lkr = `
┌───『 *Tools* 』─❍
◈ .autosticker
◈ .pdf
◈ .whatmusic
◈ .calc
◈ .google
◈ .lyrics
◈ .readmore
◈ .ssweb
◈ .tts
◈ .translate
◈ .tourl
◈ .wikipedia
◈ .nowa
◈ .qrmaker
◈ .readqr
◈ .fancy
◈ .weather
◈ .siri
◈ .alexa
◈ .dalle
◈ .tocartoon
◈ .quote
◈ .technews
◈ .define
◈ .pokedex
◈ .removebg
◈ .apk
◈ .tinyurl/shorturl
◈ .readvo
◈ .truecaller
◈ .true
╰────────❍` //
      break
    case 'nsfwmenu': 
      lkr = `
  ┌───『 *Nsfw* 』─❍
  ◈ .genshin
  ◈ .swimsuit
  ◈ .schoolswimsuit
  ◈ .white
  ◈ .barefoot
  ◈ .touhou
  ◈ .gamecg
  ◈ .hololive
  ◈ .uncensored
  ◈ .sunglasses
  ◈ .glasses
  ◈ .weapon
  ◈ .shirtlift
  ◈ .chain
  ◈ .fingering
  ◈ .flatchest
  ◈ .torncloth
  ◈ .bondage
  ◈ .demon
  ◈ .wet
  ◈ .pantypull
  ◈ .headdress
  ◈ .headphone
  ◈ .tie
  ◈ .anusview
  ◈ .shorts
  ◈ .stokings
  ◈ .topless
  ◈ .beach
  ◈ .bunnygirl
  ◈ .bunnyear
  ◈ .idol
  ◈ .vampire
  ◈ .gun
  ◈ .maid
  ◈ .bra
  ◈ .nobra
  ◈ .bikini
  ◈ .whitehair
  ◈ .blonde
  ◈ .pinkhair
  ◈ .bed
  ◈ .ponytail
  ◈ .nude
  ◈ .dress
  ◈ .underwear
  ◈ .foxgirl
  ◈ .uniform
  ◈ .skirt
  ◈ .sex
  ◈ .sex2
  ◈ .sex3
  ◈ .breast
  ◈ .twintail
  ◈ .spreadpussy
  ◈ .tears
  ◈ .seethrough
  ◈ .breasthold
  ◈ .drunk
  ◈ .fateseries
  ◈ .spreadlegs
  ◈ .openshirt
  ◈ .headband
  ◈ .food
  ◈ .close
  ◈ .tree
  ◈ .nipples
  ◈ .erectnipples
  ◈ .horns
  ◈ .greenhair
  ◈ .wolfgirl
  ◈ .catgirl
  ◈ .nsfw
  ◈ .ass
  ◈ .boobs
  ◈ .lesbian
  ◈ .pussy
  ◈ .pack
  ◈ .xvid
  ◈ .xnxx
  ╰────────❍` //
      break
    case 'logomenu':
      lkr = `
  ┌───『 *Maker* 』─❍
  ◈ .blur
  ◈ .difuminar2
  ◈ .hornycard
  ◈ .hornylicense
  ◈ .gfx1
  ◈ .gfx2
  ◈ .gfx3
  ◈ .gfx4
  ◈ .gfx5
  ◈ .gfx6
  ◈ .gfx7
  ◈ .gfx8
  ◈ .gfx9
  ◈ .gfx10
  ◈ .gfx11
  ◈ .gfx12
  ◈ .simpcard
  ◈ .itssostupid
  ◈ .iss
  ◈ .stupid
  ◈ .tweet <comment>
  ◈ .lolicon
  ◈ .ytcomment <comment>
  ╰────────❍` //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`
  }

  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })

  let done = '👍'
  m.react(done)
}

handler.help = [
  'list',
  'aimenu',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'list',
  'aimenu',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]

export default handler
