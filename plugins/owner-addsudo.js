let handler = async (m, { conn, text }) => {
  let who;
  let name;

  if (m.isGroup) {
    who = m.mentionedJid && m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : m.quoted 
        ? m.quoted.sender 
        : text;
  } else {
    who = m.chat;
  }

  if (!who) {
    await conn.reply(m.chat, 'Please tag the person you want to make an Owner or provide a number!', m);
    return;
  }

  try {
    name = await conn.getName(who);
  } catch (error) {
    name = who.split('@')[0];
  }

  if (global.owner.includes(who.split('@')[0])) {
    throw 'This person is already an owner!';
  }

  global.owner.push([who.split('@')[0], name, true]);
  const caption = `Now @${who.split('@')[0]} has been made an Owner!`;
  await conn.reply(m.chat, caption, m, {
    mentions: conn.parseMention(caption),
  });
};

handler.help = ['addowner @user'];
handler.tags = ['owner'];
handler.command = /^(add|give|-)(owner|sudo)$/i;
handler.owner = true;

export default handler
