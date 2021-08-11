const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const Database = require("easy.database");

function presence(){
    client.user.setPresence({
        status:"dnd",
        activity:{
            name: " Warn Command",
            type: "WATCHING"
        }
    })
}
client.on("ready", () => {
    console.log("Listo Warn Command!!");
    presence();
});
let prefix = config.prefijo;
client.on("message", (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content.startsWith(prefix+'warn')){ 
        let razon = args.slice(2).join(' ');
        const moderacionDB = new Database(`Moderacion`, `Advertencia`);
        let usuario = message.mentions.members.first();
        if(!message.member.hasPermission("MANAGE_GUILD")){ 
            message.channel.send("❌ No puedes usar este commando!")
        }else if(!usuario){
            message.channel.send("❌ No mencionaste a un usuario!")
        }else if(!razon){
            message.channel.send("❌ No colocaste una razon para una Advertencia!")
        }else{
            if(!moderacionDB.get(`${usuario.user.id}`)){ moderacionDB.set(`${usuario.user.id}`, 5) } else
            if(moderacionDB.get(`${usuario.user.id}`) === 3){ message.channel.send("❌ <@"+usuario.user.id+"> Lleva 3 Advertencias!! Necesita un ban") } else {
            message.channel.send(`> **❗ ${usuario.user.username} ha sido advertido!!** \n Razon: ${razon} \n Moderador: <@${message.author.id}>`)
            moderacionDB.substract(`${usuario.user.id}`, `1`)
            }
        }
    }
})

client.login(config.token);