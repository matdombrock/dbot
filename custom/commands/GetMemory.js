module.exports = {
  info: {
    name: 'Get Memory',
    description: 'Test the memory system.',
    usage: 'getmemory <key>',
  },
  fn: async (dPack, reply) =>{
    const key = dPack.parsed.args[0] || 'blank';
    const Main = dPack.modelList.mMap.get('Main');
    const result = await Main.findOne(
        {
          key,
        },
    );
    reply.send(result.dataValues.value);
  },
};
