const os = require('os');
module.exports = {
  info: {
    name: 'System Info',
    description: 'Show system information for debugging purposes.',
    usage: 'system',
    restricted: true,
  },
  fn: (dPack, reply) =>{
    reply.append(`Uptime: ${dPack.client.uptime}`);
    reply.append(`Node Version: ${process.version}`);
    reply.append(`Platform: ${process.platform}`);
    reply.append(`OS Type: ${os.type()}`);
    reply.append(`OS Release: ${os.release()}`);
    reply.send();
  },
};
