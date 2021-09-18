module.exports = {
    name: 'js!sum',
    description: "Sums up agruments",
    execute(client, message, args, Discord){

      function sum(input){          
        if (toString.call(input) !== "[object Array]")
          return false;
      
          var total =  0;
          for(var i=0;i<input.length;i++)
            {                  
              if(isNaN(input[i])){
              continue;
                }
                total += Number(input[i]);
              }
            return total;
        }


      message.channel.send(`I have successfully summed \`${args[0]}\` & \`${args[1]}\` \n \n Result: \`${sum([args[0], args[1]])}\` `)
    
    }
}