export async function all(m) {
  const greetings = [
    'Hello', 'Hi', 'Mambo', 'Oy', 'Niaje', 'kaka', // English
    'Hola', 'Salut', 'Bonjour', // French
    'مرحبا', 'أهلاً', // Arabic
    'Selamat', 'Halo', // Indonesian
    'Kamusta', 'Mabuhay', 'Magandang', // Filipino
    '你好', '嗨', '您好', // Chinese
    'Mhoro', 'Mhoroi', // Shona (Zimbabwe)
    'Salibonani', 'Lumkela', // Ndebele (Zimbabwe)
    // More African greetings
    'Jambo', 'Habari', // Swahili
    'Sawubona', // Zulu
    'Dumela', 'Kgotso', // Sotho
    'Kedu', 'Nnoo', // Igbo (Nigeria)
    'Bawo ni', 'Ek’aaro', // Yoruba (Nigeria)
    'Muli bwanji', // Chichewa (Malawi)
    'Tere', // Estonian
    'Hei', 'Moi', // Finnish
    'Privet', // Russian
    'Hallo', 'Guten Tag', // German
    'Ciao', // Italian
    'Hej', 'Hallå', // Swedish
    'Olá', 'Oi', // Portuguese
    'Salut', // Romanian
  ];

  if (
    greetings.some(greeting => m.text.startsWith(greeting)) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    this.sendButton(
      m.chat, 
      `*WELCOME IT'S BOT JUST REPLYING*
      Morning or Evening @${m.sender.split('@')[0]}
      I May Be Offline Or May Be Slow To Respond You
      
      *What We Offer*
      1. Pure Love
      2. Bot Deployment Tutorials
      3. Free Bot Script
      
      > click the buttons to see more`.trim(),
      igfg,
      null, 
      [['OWNER HELP', '.mrcs'], ['GET TEXT', '.repo']], 
      m,
      { mentions: [m.sender] }
    );
    m.react('');
  }
  return !0;
}
