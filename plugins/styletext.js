import fetch from 'node-fetch'
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  // Split the text into words
  let words = text.split(' ')
  let words = text.split(' ');

  // The first word should be the key, the rest is the text to stylize
  let key = words[0]
  let textToStyle = words.slice(1).join(' ')
  let key = words[0];
  let textToStyle = words.slice(1).join(' ');

  // If no key and text provided, show all styles of a default text
  if (words.length === 0 || !key || !textToStyle) {
    let defaultText = 'GLOBAL BOT'
    let defaultText = 'GLOBAL';
    let styledTexts = await Promise.all(
      [...Array(34).keys()].map(i => stylizeText(defaultText, i + 1))
    )
    conn.reply(m.chat, styledTexts.join`\n\n`, m)
    return
    );
    conn.reply(m.chat, styledTexts.join('\n\n'), m);
    return;
  }

  // Check if the key is a number between 1 and 34
  if (!Number.isInteger(+key) || +key < 1 || +key > 34) {
    throw 'Invalid key. Please provide a number between 1 and 34.'
    throw 'Invalid key. Please provide a number between 1 and 34.';
  }

  // Get the styled text
  let styledText = await stylizeText(textToStyle, key)
  let styledText = await stylizeText(textToStyle, key);

  conn.reply(m.chat, styledText, m)
}
  conn.reply(m.chat, styledText, m);
};

handler.help = ['style'].map(v => v + ' <key> <text>')
handler.tags = ['tools']
handler.command = /^(fancy)$/i
handler.exp = 0
handler.help = ['style'].map(v => v + ' <key> <text>');
handler.tags = ['tools'];
handler.command = /^(fancy)$/i;
handler.exp = 0;

export default handler
export default handler;

async function stylizeText(text, key) {
  let res = await fetch(
    `https://inrl-web-fkns.onrender.com/api/fancy?text=${encodeURIComponent(text)}&key=${key}`
  )
  let data = await res.json()
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

  // Use 'result' field for the styled text.
  return `*Key ${key}*\n${data.result}`
  return `*Key ${key}*\n${data.result}`;
}
