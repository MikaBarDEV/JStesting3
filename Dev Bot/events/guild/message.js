module.exports = (Discord, client, message) =>{

  const prefix = "dev!"

  if(!message.content.startsWith(prefix) || message.author.bot) return;
  if("887415948439605310" != message.channel.id) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd)

    if(command) command.execute(client, message, args, Discord)
}