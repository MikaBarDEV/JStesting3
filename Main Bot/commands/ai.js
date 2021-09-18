module.exports = {
    name: 'js!ai',
    description: "info on mention",
    execute(client, message, args, Discord){
      let xhr = new XMLHttpRequest();
      xhr.open('get', `https://api.affiliateplus.xyz/api/chatbot?message=${encodeUrl(args)}&botname=AIBOT&ownername=Chat%20Bot&user=${message.author.id}`);
      xhr.send();

      xhr.onload = function() {
          console.log(xhr.response);
      };
    }
}