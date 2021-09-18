module.exports = {
    name: 'js!purge',
    description: "this is a purge command!",
    execute(client, message, args, Discord){ 
      message.channel.bulkDelete(args[0])
    }
}