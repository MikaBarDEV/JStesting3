module.exports = {
    name: 'js!ping',
    description: "this is a ping command!",
    execute(client, message, args, Discord){
        message.delete()
        message.channel.send(`🏓 - Latency is ${Date.now() - message.createdTimestamp}ms.`);
    }
}