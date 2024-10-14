export async function all(m) {
  const greetings = [
    'Hello', 'Hi', 'Mambo', 'Oy', 'Niaje', 'kaka',
    'Hola', 'Salut', 'Bonjour', 'مرحبا', 'أهلاً', 
    'Selamat', 'Halo', 'Kamusta', 'Mabuhay', 'Magandang', 
    '你好', '嗨', '您好', 'Mhoro', 'Mhoroi', 'Salibonani', 
    'Lumkela', 'Jambo', 'Habari', 'Sawubona', 'Dumela', 
    'Kgotso', 'Kedu', 'Nnoo', 'Bawo ni', 'Ek’aaro', 
    'Muli bwanji', 'Tere', 'Hei', 'Moi', 'Privet', 
    'Hallo', 'Guten Tag', 'Ciao', 'Hej', 'Hallå', 'Olá', 'Oi', 'Salut'
  ];

  if (
    greetings.some(greeting => m.text.startsWith(greeting)) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    this.sendButton(
      m.chat, 
      `*WELCOME, IT'S BOT JUST REPLYING*
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
