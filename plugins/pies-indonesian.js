/*import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  let msg = `Indonesia Hot Girl`;
  let endpoint = `https://shizoapi.onrender.com/api/pies/Indonesia?apikey=${shizokeys}`;
  
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'shizo.techie.error.png', msg, m, null, rpig);
    } else {
      throw new Error('Failed to fetch image');
    }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while fetching the image.');
  }
};

handler.tags = ['pies', 'sfw'];
handler.help = handler.command = ['indopie'];

export default handler;
*/
