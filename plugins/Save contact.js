let handler = async (m, { conn, args }) => {
  // Ensure `m.mentionedJid` is an array before using it
  let who = (Array.isArray(m.mentionedJid) && m.mentionedJid[0]) ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let username = conn.getName(who);

  await conn.sendContact(m.chat, [[`${who.split('@')[0]}@s.whatsapp.net`, `${username}`]], m);
};

handler.help = ['savecontact *@tag*'];
handler.tags = ['tools'];
handler.command = ['savecontact', 'save'];

export default handler;
