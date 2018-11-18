const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'مشغول لاتجي خاص',
     details: `مشغول لاتجي خاص`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `مشغول لاتجي خاص`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'مشغول لاتجي خاص',
        large_image: `377480353259978752`,
        large_text: `مشغول لاتجي خاص` }

  }
    });
});
اقولها

client.login("NDc1MjMzNDk5NjQxODA2ODQ5.DtKowg.NBRhulJnXbl5QdVAnWw5kYVc7L8");
