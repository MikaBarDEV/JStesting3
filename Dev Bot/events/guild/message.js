module.exports = (Discord, client, message) =>{

  const prefix = "dev!"


  if(message.content.startsWith(prefix)){

    if(message.author.id != 787695068306866198){
    message.channel.send(`<@!${message.author.id}>, The bot is unavailable! Please try again later!`)
    return
    }

  }


  if(message.author.bot) return;
    const args = message.content.split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd)

    if(command) command.execute(client, message, args, Discord)
}