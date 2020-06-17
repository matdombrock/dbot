// Send the user a link to their avatar
module.exports = {
  info: {
    name: 'Avatar',
    description: 'Send the user a link to their avatar.',
    usage: 'avatar',
    direct: true,
  },
  fn: (dPack, reply) =>{
    const avatarURL = dPack.msg.author.displayAvatarURL();
    reply.send(avatarURL);
  },
};
