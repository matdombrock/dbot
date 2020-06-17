module.exports = {
  info: {
    name: 'Set Activity',
    description: 'Sets the bots activity.',
    usage: 'activity <playing | watching | listening> <status_text>',
    restricted: true,
  },
  fn: (dPack, reply) =>{
    const activity = dPack.parsed.message.split(' ').slice(1).join(' ');
    const type = dPack.parsed.args[0];
    const confirmMessage = `Setting Activity to ${type } **${activity}**`;
    console.log(confirmMessage);
    try {
      dPack.client.user.setActivity(activity, {type});
      reply.send(confirmMessage);
    } catch (err) {
      reply.send('There was an issue setting that status.');
      console.log(err);
    }
  },
};
