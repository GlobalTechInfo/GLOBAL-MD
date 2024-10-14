let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `
≡ Use these commands without the prefix: *${usedPrefix}*
┌─⊷ *AUDIOS* 
▢ Bot
▢ Good morning
▢ Good afternoon
▢ Good evening
▢ Fine gentlemen
▢ Dont be Sad
└──────────────
`
  let pp = './assets/qasim.jpg';
  conn.sendButton(m.chat, m2, 'GLOBAL-MD', pp, [
    ['⏍ InfoBot', `${usedPrefix}botinfo`],
    ['⌬ Support', `${usedPrefix}groups`]
  ], m, { quoted: m });

  conn.sendFile(m.chat, pp, 'menu.jpg', m2, m);
}

handler.help = ['menu3'];
handler.tags = ['main'];
handler.command = ['menu3', 'audios'];

export default handler;
