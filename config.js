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

global.botNumber = '923051391007'; // Put your number here for pairing directly
global.mods = ['923444844060'];
global.prems = ['923444844060'];
global.allowed = ['923444844060'];
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124'];
global.keysxxx = keysZens[Math.floor(Math.random() * keysZens.length)];

global.keysxteammm = [
  '29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb',
  '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'
];
global.keysxteam = keysxteammm[Math.floor(Math.random() * keysxteammm.length)];

global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(Math.random() * keysneoxrrr.length)];

global.lolkeysapi = ['GataDios'];
global.canal = 'https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07';

global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
};

// Sticker WM
global.botname = 'GLOBAL-MD';
global.premium = 'true';
global.packname = 'GLOBAL BOT';
global.author = 'GlobalTechInfo';
global.igfg = 'https://instagram.com/global.techinc';
global.fgsc = 'https://github.com/GlobalTechInfo/GLOBAL-MD';
global.fgyt = 'https://youtube.com/@GlobalTechInfo';
global.fgpyp = 'https://youtube.com/@GlobalTechInfo';
global.fglog = 'https://i.ibb.co/GVS5Dy9/Ephoto360-com-167054c3328030-2.jpg';
global.thumb = fs.readFileSync('./assets/qasim.jpg');
global.wait = 'Loading........';
global.rwait = '⌛';
global.dmoji = '';
global.done = '✅';
global.error = '❌';
global.xmoji = '';
global.multiplier = 69;
global.maxwarn = '3';

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
