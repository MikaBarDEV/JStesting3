module.exports = {
    name: "cb!test", 
    description: "this is a check command!",
    execute(client, message, args, Discord){
      console.log("exec")
      if(message.mentions.members.size < 2) return;
      


    }
}