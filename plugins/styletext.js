import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  let words = text.split(' ');

  let key = words[0];
  let textToStyle = words.slice(1).join(' ');

  if (words.length === 0 || !key || !textToStyle) {
    let defaultText = 'GLOBAL BOT';
    let styledTexts = await Promise.all(
      [...Array(34).keys()].map(i => stylizeText(defaultText, i + 1))
    );
    conn.reply(m.chat, styledTexts.join('\n\n'), m);
    return;
  }

  if (!Number.isInteger(+key) || +key < 1 || +key > 34) {
    throw 'Invalid key. Please provide a number between 1 and 34.';
  }

  let styledText = await stylizeText(textToStyle, key);
  conn.reply(m.chat, styledText, m);
};

handler.help = ['style'].map(v => v + ' <key> <text>');
handler.tags = ['tools'];
handler.command = /^(fancy)$/i;
handler.exp = 0;

export default handler;

async function stylizeText(text, key) {
  let res = await fetch(
    `https://inrl-web-fkns.onrender.com/api/fancy?text=${encodeURIComponent(text)}&key=${key}`
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  let resultText = await res.text();
  let data;

  try {
    data = JSON.parse(resultText);
  } catch (e) {
    throw new Error(`Unexpected response format: ${resultText}`);
  }

  return `*Key ${key}*\n${data.result}`;
}
