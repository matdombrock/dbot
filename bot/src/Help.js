class Help {
  constructor() {
    //
  }
  static command(dPack, reply) {
    const infoRaw = dPack.CommandList.cMap.get(dPack.parsed.command).info;
    const info = {
      name: infoRaw.name || 'Unnamed',
      description: infoRaw.description || 'No description yet...',
      usage: infoRaw.usage || 'No Usage Example Specified',
      restricted: infoRaw.restricted || false,
    };
    if (info.restricted) {
      reply.append('**THIS IS A RESTRICTED COMMAND!!**');
      reply.append(`*You must have the **${dPack.config.admin_role}** role to use this command!*`);
    }
    reply.append(`**"${info.name}" Help**`);
    reply.append(`> *${info.description}*`);
    reply.append('**Usage:** ');
    reply.code();
    reply.append(dPack.config.command_prefix + info.usage);
    reply.code();
    reply.send();
  }
  static list(dPack, reply) {
    reply.append('**Commands List**');
    reply.code();
    for (const command of dPack.CommandList.cMap) {
      reply.append(dPack.config.command_prefix+command[0]);
    }
    reply.code();
    reply.append('**More Help**');
    reply.append(`Use "**${dPack.config.help_prefix}**" to get help about a specific command`);
    reply.append('**Example:**');
    reply.code();
    reply.append(`${dPack.config.help_prefix}ping`);
    reply.code();
    reply.append(`**NOTE**: Some commands are restricted to users with the **"${dPack.config.admin_role}"** role.`);
    reply.send();
  }
}
module.exports = Help;
