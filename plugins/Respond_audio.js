let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let name = conn.getName(m.sender)
  let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
  let av = `./assets/mp3/${pickRandom(['global', 'qasim', 'qasim1', 'qasim2'])}.mp3`
conn.sendButton(m.chat, text.replace(), author, pp, [['BOT MENU 🤖', '.botmenu'], ['OWNER MENU 🦉', '.ownermenu'], ['FUN MENU 😂', '.funmenu'], ['BOT SPEED 🛫', '.ping']], null, [['SOCIAL 📶', .groups]], m)
    
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|global)$/i
handler.command = new RegExp()

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
