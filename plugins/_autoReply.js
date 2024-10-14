export async function all(m) {
  // when someone sends a group link to the bot's DM
  if (
    (m.mtype === 'groupInviteMessage' || 
     m.text.startsWith('https://chat') || 
     m.text.startsWith('open this link')) && 
    !m.isBaileys && 
    !m.isGroup
  ) {
    this.sendButton(
      m.chat, 
      `*Invite bot to a group* 
      Hallo @${m.sender.split('@')[0]} 
      You can rent the bot to join a group or contact the owner for more info. Click on the button`.trim(),
      igfg,
      null, 
      [['GROUP HELP', '.grp']], 
      m, 
      { mentions: [m.sender] }
    );
    m.react('');
  }
  return !0;
}
