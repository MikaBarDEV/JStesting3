module.exports = (Discord, client) =>{
  console.log(`${client.user.username} ready!`);
  client.channels.cache.get("887415948439605310").send(`${client.user.username} ready!`);
  client.user.setActivity("Main Bot");
  client.channels.cache.get("888778996182032494").edit({ name: "Main Status: Online" })
}