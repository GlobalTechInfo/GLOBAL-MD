let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;qasim;;\nFN:qasim\nORG:qasim\nTITLE:\nitem1.TEL;waid=255734980103:255734980103\nitem1.X-ABLabel:qasim\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:qasim\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Qasim Ali', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
