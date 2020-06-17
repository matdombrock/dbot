module.exports = {
  info: {
    name: 'Adventure',
    description: 'Play a very short adventure game.',
    usage: 'adventure',
  },
  fn: async (dPack, reply) =>{
    reply.append('Welcome to the Adventure!');
    reply.append('What is your name?');
    reply.send();
    const name = await reply.awaitMsg();
    reply.append('Hello **'+name+'**. Welcome to the adventure.');
    reply.append('You find yourself in a large cave system.');
    reply.append('What do you do?');
    reply.send();
    const action = await reply.awaitMsg();
    if (action.toLowerCase()==='escape') {
      reply.append('You Escape!');
    } else if (action.toLowerCase()==='die') {
      reply.append('You attempt to **'+action+'**, but instead you **BIG die!**');
    } else {
      reply.append('You attempt to **'+action+'**, but instead you **die!**');
    }
    reply.append('Game OVER!');
    reply.send();
  },
};
