module.exports = {
  info: {
    name: 'question',
    description: 'Asks a question and waits for a response.',
    usage: 'sleep',
  },
  fn: async (dPack, reply) =>{
    reply.send('What is your favorite thing?');
    const resp = await reply.awaitMsg();
    reply.send(`Your favorite thing is ${resp}`);
  },
};
