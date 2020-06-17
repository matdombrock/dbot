module.exports = {
  info: {
    name: 'Set Memory',
    description: 'Test the memory system.',
    usage: 'setmemory <key> <value>',
  },
  fn: async (dPack, reply) =>{
    const key = dPack.parsed.args[0] || 'blank';
    const value = dPack.parsed.args[1] || 'blank';
    const Main = dPack.modelList.mMap.get('Main');
    await Main.create(
        {
          key,
          value,
        },
    );
    reply.send(`Set: ${key}: ${value}`);
  },
};
