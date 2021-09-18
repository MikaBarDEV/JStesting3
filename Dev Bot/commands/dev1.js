module.exports = {
    name: 'check',
    description: "this is a ping command!",
    execute(client, message, args, Discord){
      message.channel.send("check command", {tts: true})
    }
}