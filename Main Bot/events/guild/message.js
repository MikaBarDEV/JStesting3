module.exports = (Discord, client, message) =>{

  const prefix = "js!"

  if(message.content.startsWith(prefix) || message.author.bot){
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd)

    if(command) command.execute(client, message, args, Discord)
    } else {
      
    }
}