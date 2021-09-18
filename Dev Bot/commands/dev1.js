module.exports = {
    name: 'dev!check',
    description: "this is a dev command!",
    execute(client, message, args, Discord){
      message.channel.send("check command", {tts: true})
    }
}