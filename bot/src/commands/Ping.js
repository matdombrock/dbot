// Pong command
module.exports = {
  info: {
    name: 'Ping',
    description: `Respond with "PONG!". 
    A simple test to see if the bot is working.`,
    usage: 'ping',
  },
  fn: (dPack, reply)=>{
    reply.send('PONG!');
  },
};
