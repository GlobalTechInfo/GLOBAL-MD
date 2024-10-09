import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {
  let limit = isOwner || isPrems ? 1200 : 100;
  if (!args[0]) throw `✳️ Enter the mediafire link next to the command`;
  if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrect`;
  m.react('⌛');

  let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0];
  let ss = await (await fetch(`https://image.thum.io/get/fullpage/${u}`)).buffer();
  let res = await mediafiredl(args[0]);
  let { url, filename, ext, aploud, filesize, filesizeH } = res;
  
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < filesize;
  let caption = `
  ≡ *MEDIAFIRE*

▢ *Name:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
${isLimit ? `\n▢ The file exceeds the download limit of *${limit} MB*. Upgrade to premium to download larger files.` : ''}`;
  
  await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m);

  if (!isLimit)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true });
  
  m.react('✅');
};

handler.help = ['mediafire <url>']
handler.tags = ['downloader', 'premium']
handler.command = ['mediafire', 'mfire']
handler.credit = true
handler.premium = false

export default handler
