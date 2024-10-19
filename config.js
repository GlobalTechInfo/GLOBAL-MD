import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const ownervb = process.env.OWNERS || "923444844060;Qasim";
const ownerlist = ownervb.split(';');

global.owner = ownerlist.map((owner, i) => ({
  id: ownerlist[i],
  name: ownerlist[i + 1],
  isAdmin: true
}));

console.log(global.owner);

global.botNumber = '923091619697'; // Put your number here for pairing directly
global.mods = ['923091619697'];
global.prems = ['923091619697'];
global.allowed = ['923091619697'];
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124'];
global.keysxxx = keysZens[Math.floor(Math.random() * keysZens.length)];

global.keysxteammm = [
  '29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb',
  '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'
];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = process.env.BOTNAME
global.premium = 'true'
global.packname = 'GLOBAL'
global.author = 'Qasim'
global.menuvid = 'https://i.imgur.com/AjDzGgG.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/global.techinfo\n'
global.dygp = 'https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07'
global.fgsc = 'https://github.com/GlobalTechInfo/GLOBAL-MD'
global.fgyt = 'https://youtube.com/@GlobalTechInfo'
global.fgpyp = 'https://youtube.com/@GlobalTechInfo'
global.fglog = 'https://i.ibb.co/G2dh9cB/qasim.jpg'
global.thumb = fs.readFileSync('./assets/qasim.jpg')

global.wait = '*⌛ _Loading..._*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❎'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
