let handler = async function (m, { conn, text }) {
  const botNumbers = global.owner.map(owner => owner[0]);
  botNumbers.push(global.botNumber); // Include botNumber
  
  const uniqueNumbers = [...new Set([...botNumbers, ...global.mods])];
  const commonNumbers = uniqueNumbers.filter(number => 
    botNumbers.includes(number) && global.mods.includes(number) && global.owner.some(owner => owner[0] === number)
  );

  if (commonNumbers.length > 0) {
    conn.reply(m.chat, `❇️ Here Is The Contact Of My Owner: ${commonNumbers.join(', ')}`, m);
  } else {
    conn.reply(m.chat, `❎ You are not recognized as a bot owner.`, m);
  }
};

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = /^owner$/i;

export default handler;
