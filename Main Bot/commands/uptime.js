module.exports = {
    name: 'uptime',
    description: "this is a uptime command!",
    execute(client, message, args, Discord){ 
      const milliseconds = client.uptime
      message.delete()
      message.channel.send(`Bot is online for \`${client.uptime}\`ms`);
    }
}