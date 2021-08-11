const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const Database = require("easy.database");

function presence(){
    client.user.setPresence({
        status:"dnd",
        activity:{
            name: " the World",
            type: "WATCHING"
        }
    })
}
client.on("ready", () => {
    console.log("Im Ready!!");
    presence();
});
let prefix = config.prefijo;
client.on("message", (message) => {
    /*const datosCommando = new Database(`Usuario`, `Servidor`);
    if(message.content.startsWith(prefix+"prueba")){
        datosCommando.set(`${message.member.nickname}>`, `${message.guild.memberCount}`);
        console.log(datosCommando.set(`${message.member.nickname}>`, `${message.guild.memberCount}`));
    }else
    if(message.content.startsWith(prefix+"muestra")){
        console.log(datosCommando.get(`<@${message.member.id}>`))
        message.reply(datosCommando.get(`<@${message.member.id}>`))
    }else
    if(message.content.startsWith(prefix+"resta")){
        datosCommando.substract(`${message.member.nickname}`)
    }*/
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content.startsWith(prefix+'mute')){ 
        const Mutedb = new Database(`Mute`, `muteado`);

        //  Declaramos el "usuario" / "usuario mencionado"
            let usuario = message.mentions.members.first();
            if(!message.member.hasPermission("MANAGE_GUILD")){ // En caso el usuario no pueda editar el servidor
              message.channel.send("❌ No puedes usar este commando!")//    da un "error"
              
            }else if(!usuario){ // En caso no mencione a otro usuario
              message.channel.send("❌ No mencionaste a un usuario!")
              
            /*}else if(usuario !== message.author.username){*/
            }else if(!args.slice(1).join(' ')){ // Si no coloco una razon para mutearlo
            message.channel.send("❌ No colocaste una razon de muteo!")
              
            }else if(usuario.roles.cache.has('809104206006059014')){ // Si el usuario ya tiene el rol o no funcionara el muteo
              message.channel.send("⚠️ No puedo mutear a el usuario!")
              
            }else{ // En caso cumpla con todos los requisitos
              if(!Mutedb.get(`${usuario.user.id}`))return Mutedb.set(`${usuario.user.id}`, `5`);
                if(Mutedb.get(`${usuario.user.id}`) === 2)return message.reply("Lleva 3 muteos necesita un ban")
            usuario.roles.add('809104206006059014'); // Añadir el rol
              message.channel.send(`🤐 ${usuario.user.name} ha sido muteado`)
                Mutedb.substract(`${usuario.user.id}`, `1`)

            }
          }
})

client.login(config.token);