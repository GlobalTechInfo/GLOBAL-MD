import fg from 'api-dylux';
import yts from 'yt-search';
import fetch from 'node-fetch';
import axios from 'axios';


const imgUrl = 'https://telegra.ph/file/a83d8f5535e6b744986b4.png';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = ["mp3", "yta", "audio", "ytv", "video", "vídeo", "mp4", "mp3doc", "ytadoc", "audiodoc", "mp4doc", "ytvdoc", "videodoc", "vídeodoc"];
    
    let [format, ...keywords] = text.split(" ");
    let searchQuery = keywords.join(" ");
    
    if (!lister.includes(format)) {
        return conn.reply(m.chat, `*💙 𝘌𝘯𝘵𝘦𝘳 𝘵𝘩𝘦 𝘧𝘰𝘳𝘮𝘢𝘵 𝘪𝘯 𝘸𝘩𝘪𝘤𝘩 𝘺𝘰𝘶 𝘸𝘢𝘯𝘵 𝘵𝘰 𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘱𝘭𝘶𝘴 𝘵𝘩𝘦 𝘵𝘪𝘵𝘭𝘦 𝘰𝘧 𝘢 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘷𝘪𝘥𝘦𝘰 𝘰𝘳 𝘮𝘶𝘴𝘪𝘤.*\n\n𝘌𝘹𝘢𝘮𝘱𝘭𝘦: ${usedPrefix + command} *mp3* Connor RK800 - I Am Machine\n\n𝘈𝘷𝘢𝘪𝘭𝘢𝘣𝘭𝘦 𝘍𝘰𝘳𝘮𝘢𝘵𝘴:\n${lister.map(f => `${usedPrefix + command} *${f}*`).join('\n')}`, m);
    }
    
    if (!searchQuery) {
        return conn.reply(m.chat, `*💙 𝘌𝘯𝘵𝘦𝘳 𝘵𝘩𝘦 𝘵𝘪𝘵𝘭𝘦 𝘰𝘧 𝘢 𝘺𝘰𝘶𝘛𝘶𝘣𝘦 𝘷𝘪𝘥𝘦𝘰 𝘰𝘳 𝘮𝘶𝘴𝘪𝘤.*`, m);
    }
    
    try {
        await m.react('⏳');
        
    
        const responseImg = await axios.get(imgUrl, { responseType: 'arraybuffer' });

        let res = await yts(searchQuery);
        let vid = res.videos[0];
        let q = '128kbps';
        
        let txt = `❏ TITLE: ${vid.title}\n`;
        txt += `❏ DURATION: ${vid.timestamp}\n`;
        txt += `❏ VIEWS: ${vid.views}\n`;
        txt += `❏ AUTHOR: ${vid.author.name}\n`;
        txt += `❏ PUBLISHED: ${vid.ago}\n`;
        txt += `❏ URL: https://youtu.be/${vid.videoId}\n\n`;
        txt += `❄ REMEMBER @${m.sender.split('@')[0]}, 𝘘𝘢𝘴𝘪𝘮 𝘪𝘴 𝘮𝘺 𝘰𝘸𝘯𝘦𝘳 𝘪𝘧 𝘺𝘰𝘶 𝘢𝘳𝘦 𝘨𝘰𝘪𝘯𝘨 𝘵𝘰 𝘭𝘰𝘢𝘥 𝘵𝘩𝘦 𝘱𝘭𝘶𝘨𝘪𝘯𝘴 𝘨𝘪𝘷𝘦 𝘤𝘳𝘦𝘥𝘪𝘵𝘴❄`;

        
        await conn.sendFile(m.chat, responseImg.data, "thumbnail.jpg", txt, m, null, rcanal);

        if (format == "mp3" || format == "yta" || format == "audio" || format == "mp3doc" || format == "ytadoc" || format == "audiodoc") {
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (parseFloat(size.split('MB')[0]) >= limit) {
                return conn.reply(m.chat, `The file weighs more than ${limit} 𝙼𝙱, The download was cancelled.`, m);
            }
            
            await conn.sendFile(m.chat, dl_url, 'yt.mp3', `${vid.title}.mp3`, m);
            await m.react('✅');
        } else if (format == "mp4" || format == "ytv" || format == "video" || format == "mp4doc" || format == "ytvdoc" || format == "videodoc" || format == "videodoc") {
            let q = '720p';
            let yt = await fg.ytv(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 500;
            
            if (parseFloat(size.split('MB')[0]) >= limit) {
                return conn.reply(m.chat, `The file weighs more than ${limit} 𝙼𝙱, The download was cancelled..`, m);
            }
            
            await conn.sendFile(m.chat, dl_url, 'yt.mp4', `${vid.title}.mp4`, m);
            await m.react('✅');
        }
    } catch (error) {
        await conn.reply(m.chat, `FFMPEG IS NOT INSTALLED`, m);
        console.error(error);
    }
};

handler.help = ["play3"].map(v => v + " <formato> <búsqueda>");
handler.tags = ["downloader"];
handler.command = ['play3'];
handler.register = true;

export default handler;
