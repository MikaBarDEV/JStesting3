module.exports = (Discord, client) =>{
  console.log(`${client.user.username} ready!`);
  msg = client.channels.cache.get("887415948439605310").send(`${client.user.username} ready!`);
  client.user.setActivity("Dev Bot");
  client.channels.cache.get("888779006537793569").edit({ name: "Dev Status: Online" })
}