module.exports = {
  info: {
    name: 'question',
    description: 'Asks a question and waits for a response.',
    usage: 'sleep',
  },
  fn: async (dPack, reply) =>{
    let score = 0;
    reply.send('What is 1+1?');
    let resp = await reply.awaitMsg();
    if (resp === '2') {
      score++;
    }
    reply.send('What is 2+2?');
    resp = await reply.awaitMsg();
    if (resp === '4') {
      score++;
    }
    reply.send('What is the square root of negative 1?');
    resp = await reply.awaitMsg();
    if (resp === 'i') {
      score++;
    }
    reply.send(`You scored ${score}/3`);
  },
};
