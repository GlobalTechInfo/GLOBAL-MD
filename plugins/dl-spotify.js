import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🍭 Enter the name of a Spotify track.\n\n`Example:`\n' + `> *${usedPrefix + command}* Gemini Aaliyah - If Only`)

let user = global.db.data.users[m.sender]
try {
let { title, artist, album, published, thumbnail, dl_url } = await Scraper.spotify(text)
let txt = `╭─⬣「 *Spotify Download* 」⬣\n`
    txt += `│  ≡◦ *🍭 Name ∙* ${title}\n`
    txt += `│  ≡◦ *🪴 Artist ∙* ${artist}\n`
    txt += `│  ≡◦ *📚 Album ∙* ${album}\n`
    txt += `│  ≡◦ *📅 Publish ∙* ${published}\n`
    txt += `╰─⬣`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp3', `*🍭 Title ∙* ${title}\n*🪴 Artist ∙* ${artist}`, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
} catch {
}}
handler.help = ['spotify <búsqueda>']
handler.tags = ['downloader']
handler.command = ['spotify']
handler.register = true 
export default handler
