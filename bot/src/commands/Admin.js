module.exports = {
  info: {
    name: 'Roles',
    description: 'Show info about user roles.',
    usage: 'roles',
  },
  fn: (dPack, reply) =>{
    if (dPack.isAdmin) {
      reply.append('You have administrator access!');
    } else {
      reply.append('You do not have administrator access!');
    }
    reply.send();
  },
};
