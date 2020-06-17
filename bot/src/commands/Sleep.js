module.exports = {
  info: {
    name: 'Sleep',
    description: 'Start snoring.',
    usage: 'sleep',
  },
  fn: (dPack, reply) =>{
    reply.send('Zzz...');
  },
};
