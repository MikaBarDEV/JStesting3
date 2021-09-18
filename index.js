// Require the necessary discord.js classes
const { Client, Intents, Collection, Discord } = require('discord.js');

// Set the required discord.js intents
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING);

// require bot tokens
const { main_token, dev_token } = require('./tokens.json');

// create main_client
const main_client = new Client({ intents: myIntents });


// Opening event 
main_client.commands = new Collection();
 
main_client.events = new Collection();

['command_handler.js', 'event_handler.js'].forEach(handler =>{
  require(`./Main Bot/handlers/${handler}`)(main_client, Discord);
})

// create dev client
const dev_client = new Client({ intents: myIntents });

// Opening event 
dev_client.commands = new Collection();
 
dev_client.events = new Collection();

['command_handler.js', 'event_handler.js'].forEach(handler =>{
  require(`./Dev Bot/handlers/${handler}`)(dev_client, Discord);
})


// login all bots
main_client.login(main_token);
dev_client.login(dev_token);