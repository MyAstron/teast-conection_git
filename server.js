const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


function presence(){
    client.user.setPresence({
        status:"online",
        activity:{
            name: " from what can i help you | FP!help",
            type: "WATCHING"
        }
    })
}
client.on("ready", () => {
    console.log("Apunten.... lanzen... FUEGO!!");
    presence();
});
let prefix = 'FP!';
client.on("message", (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +g/);
    const comand = args.shift();
    let canal = client.channels.cache.get("808404701980262416") 
    const links = ["discord.gg", "discord.me", "discord.io/", "discordapp.com/invite", "https://discord.gg/"]
    if (links.some(word => message.content.toLowerCase().includes(word))) { 
      message.delete()
          message.reply("Hey! no puedes enviar links en este server :angry: ").then((response) => {
      response.delete(6000);
      }); 
      const embedAdvertencia = new Discord.MessageEmbed()
      .setTitle("**"+message.member.displayName+" FUE ADVERTIR**")
      .setDescription(`${message.member.displayName} fue advertido!!!!**\n` +`** Razon = Pro que envio un link o invitcion`)
      .setColor("RANDOM")
      canal.send({embed:embedAdvertencia});
    }else 
    if(message.content.startsWith(prefix+'report')){
        let canal = client.channels.cache.get("808404701980262416");
        let user = message.mentions.users.first();
        const razon = args.slice(1).join(' ') || "Reason not defineda."; 
        if(!user) return message.channel.send(':x: Error | Nesecitas mencionar a alguien')
        const embedAdvertencia = new Discord.MessageEmbed()
            .setTitle("**"+message.mentions.users.first().username+" WAS WARNED!!!!**")
            .setDescription(`**${message.mentions.users.first().username} has been warned!!!!** **\n` +`**Reason = ${razon}**\n` +`**Responsible moderator = ${message.author.username}\n`)
            .setColor("RANDOM")
        canal.send({embed:embedAdvertencia});
        console.log(message.mentions.users.first().username+ " has been warned " + message.member.displayName)
    }else
    if(message.content.startsWith(prefix+'help')){
        const embed = new Discord.MessageEmbed()
            .setTitle('**AYUDA**')
            .setThumbnail(message.author.avatarURL())
            .addField ('Hola :wave:  '+message.member.displayName, 'Gracias por invitarme al servidor')
            .setColor ('7a79ba')
            .addField ('***PREFIX***', '```Mi prefijo es: FP! ```')
            .addField ('***COMANDOS - CATEGORIA***', ':bookmark: `Utilidades`    **|**   :tools: `Moderacion`    **|**   :man_superhero: `Anime` **|**:speech_balloon: `Social`    **|**   :partying_face: `Fun`    **|**   :infinity: `Informacion`')
            .addField ('Para ver los comandos solo pon '+prefix+' [el nombre de la categoria]', 'Pedido por  '+message.member.displayName)
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'utilidades')){
        const embed = new Discord.MessageEmbed()
            .setTitle ('**UTILIDADES**')
            .setThumbnail ('https://media.discordapp.net/attachments/801505633244282891/804072670676647946/unknown.png')
            .setColor ('00ff4d')
            .addField ('Avatar', 'Sirve para ver tu avatar o al que menciones. `'+prefix+'avatar [@user]`')
            .addField ('Say', 'Puedes usar este comando para decir algo en el mismo canal que lo escribas. `'+prefix+'say [texto]`')
            .addField ('Datos', 'Para poder ingresar tus datos y que quedes registrado en el servidor. `'+prefix+'datos`')
            .addField ('Perfil', 'TRABAJANDO EN ELLO. `'+prefix+'profile [@user <opcional>]`')
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'informacion')){
        const embed = new Discord.MessageEmbed()
            .setTitle ('**INFORMACION**')
            .setThumbnail ('https://media.discordapp.net/attachments/804038055312883732/806311443980615730/unknown.png')
            .setColor ('00ff4d')
            .addField ('Informacion del servidor', 'TRABAJANDO EN ELLO. `'+prefix+'server-info`')
            .addField ('Informacion del bot', 'TRABAJANDO EN ELLO. `'+prefix+'bot-info`')
            .addField ('Informacion de un rol', 'Encontraras info importante del rol mencionado. `'+prefix+'rol-info [@rol]`')
            .addField ('Informacion de un canal', 'TRABAJANDO EN ELLO. `'+prefix+'channel-info [#channel]`')
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'moderacion')){
        const embed = new Discord.MessageEmbed()
            .setTitle ('**MODERACION**')
            .setThumbnail ('https://media.discordapp.net/attachments/804038055312883732/806311292519972925/unknown.png')
            .setColor ('00ff4d')
            .addField ('Kick', 'Puedes explusar a algun miembro de tu servidor. `'+prefix+'kick [@user]`')
            .addField ('Ban', 'Este comando te sera util para banear a algun miembro. `'+prefix+'ban [@user]`')
            .addField ('Reportar', 'Con este comando podras reportar a alguna persona que no este cumpliendo con las reglas. `'+prefix+'report [@user]`')
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'anime')){
        const embed = new Discord.MessageEmbed()
            .setTitle ('**ANIME**')
            .setThumbnail ('https://media.discordapp.net/attachments/804038055312883732/806312407668490240/unknown.png')
            .setColor ('00ff4d')
            .addField ('Top serie', 'Te mostra el top 3 de las mejores series de anime junto a una breve descripcion. `'+prefix+'top-serie`')
            .addField ('Top pelicula', 'Podras ver el top 3 de las mejores peliculas de anime junto a una breve descripcion. `'+prefix+'top-peli`')
            .addField ('Pat', 'AwA. Asi es como se soba a un amigo. `'+prefix+'pat [@user]`')
            .addField ('Kill', '0o0. No te creo capaz de ser un asecino como para usar este comando. `'+prefix+'kill [@user]`')
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'avatar')){
        let user = message.mentions.users.first();
        if(user){
        const embed = new Discord.MessageEmbed()
            .setTitle ('Avatar de '+message.mentions.users.first().username)
            .setFooter ('Avatar pedido por:   '+message.member.displayName+'.')
            .setImage (user.displayAvatarURL())
            .setColor ('5ce1e6')
        message.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle ('Mira que wuapo estas   '+message.member.displayName+'.')
                .setImage (message.author.avatarURL())
                .setColor ('5ce1e6')
            message.channel.send(embed);
        }
    }else
    if(message.content.startsWith(prefix+'server-info')){
        const embed = new Discord.MessageEmbed()
            .setColor ('RANDOM')
            .setTitle ('**SERVER INFO**')
            .setDescription ('```Region:'+message.guild.region+'||   Owner:'+message.guild.owner.user.tag+'||   Miembros:'+message.guild.memberCount+'||   Roles:'+message.guild.roles+'.```')
        message.channel.send(embed)
    }else
    if(message.content.startsWith(prefix+'bot-info')){
        const embed = new Discord.MessageEmbed()
            .setTitle ('**BOT INFO**')
            .setColor ('RANDOM')
            .setThumbnail ('https://media.discordapp.net/attachments/804038055312883732/804038216382283786/Screenshot_2021-01-27_3_Pinterest16.png')
            .addField ('NOMBRE', 'Aqui me llamo '+client.user.tag)
            .addField ('SERVER`s', 'Estoy en '+client.guilds.cache.size+' servidores.', true)
            .addField ()
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'role-info')){
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!role) return message.channel.send('Asegurate de mencionar un ROL');
        const embed = new Discord.MessageEmbed()
            .setTitle("***`Informacion del rol "+role.name+'`***')
            .addField(":name_badge: Nombre:", '*'+role.name+'*', true)
            .addField(":pushpin: ID:", '*'+role.id+'*', true)
            .addField(":medal: Miembros con el Rol:", '*'+role.members.size+'*', true)
            .addField(":clipboard: Posición:", '*'+role.rawPosition+'*', true)
            .addField(":paintbrush: HexColor:", '*'+role.hexColor+'*', true)
            .addField(":pencil: ¿Mencionable?:", '*'+role.mentionable+'*', true)
            .addField(":paperclips: ¿Separado?:", '*'+role.hoist+'*', true)
            .addField(":tools: ¿Gestionado por el sistema?:", '*'+role.managed+'*', true)
            .setColor('RANDOM')
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'kick')){
        let canal = client.channels.cache.get("801505633244282891")      
        const kickeado = message.mentions.users.first() || client.users.resolve(args[0]); 
        const razon = args.slice(1).join(' ') || "Razon no definida."; 
        
        if(!kickeado) return message.channel.send("No mencionaste a nadie para expulsar.") 
        
        if(message.author === kickeado) return message.channel.send("No puedes expulsarte tu mismo.") 
        if(message.author === client.user.tag) return message.channel.send("Kha? Como que me quieres sacar?")
        
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No tienes permisos para expulsar personas.") 
        
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("No tengo permisos para expulsar personas.") 
        
        
        message.guild.member(kickeado).kick(razon); 
        const embedkick = new Discord.MessageEmbed() 
        .setTitle("**Alguien ha sido kickeado!**")
        .setDescription(`**${kickeado.username} ha sido kickeado del servidor.**\n` +`**Razón = ${razon}**\n` +`**Moderador responsable = ${message.author.username}\n**`)
        .setColor("RANDOM")
        
        message.channel.send(kickeado.username + " fue kickeado correctamente.") 
        canal.send({embed:embedkick})
        console.log(kickeado.username + " fue expulsado por " + message.author.username)
    }else
    if(message.content.startsWith(prefix+'ban')){
        let canal = client.channels.cache.get("801505633244282891")      
        const baneado = message.mentions.users.first() || client.users.resolve(args[0]); 
        const razon = args.slice(1).join(' ') || "Razon no definida."; 
        
        if(!baneado) return message.channel.send("No mencionaste a nadie para banear.") 
        
        if(message.author === baneado) return message.channel.send("No puedes banearte tu mismo.") 
        if(message.author === client.user.tag) return message.channel.send("Kha? Como que me quieres banear?")
        
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos para banear personas.") 
        
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo permisos para banear personas.") 
        
        
        message.guild.members.ban(baneado, {reason: "String"}); 
        const embedban = new Discord.MessageEmbed() 
        .setTitle("**Alguien ha sido baneado!**")
        .setDescription(`**${baneado.username} ha sido baneado del servidor.**\n` +`**Razón = ${razon}**\n` +`**Moderador responsable = ${message.author.username}\n**`)
        .setColor("RANDOM")
        
        message.channel.send(baneado.username + " fue baneado correctamente.") 
        canal.send({embed:embedban})
        console.log(baneado.username + " fue baneado por " + message.author.username)
    }else
    if(message.content.startsWith(prefix+'say')){
        message.delete();
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let texto = args.join(' ');

        if(!texto) return message.channel.send('Cual es el mensaje?');
        message.channel.send(texto)
    }else
    if(message.content.startsWith(prefix+'kill')){
        const Mensajes = ["https://pa1.narvii.com/6155/2e4532a92f46d7917f78367f0ecaf3a546934bb6_hq.gif", "https://thumbs.gfycat.com/MeekBlindAlpinegoat-size_restricted.gif", "https://pa1.narvii.com/6048/fc3bbdf51d6c542a04af2ce7c80193bdb4e3caa6_00.gif", "https://media.giphy.com/media/XeXnKz41heNGg/giphy.gif", "https://media1.tenor.com/images/acea3135b7976b06f252a0b41a0b0e38/tenor.gif", "https://i.pinimg.com/originals/3b/68/c6/3b68c694c4e39cf0c81d16bbe7c2496e.gif", "https://cdnb.artstation.com/p/assets/images/images/018/364/967/original/alexandre-grenier-marcil-weapontrail.gif", "https://taggbox.com/blog/wp-content/uploads/2019/01/Mortal-Kombat.gif", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmortalkombatshrine.tumblr.com%2Fpost%2F183273883315&psig=AOvVaw37kbgPQWAPtLf8NzWzw-mr&ust=1612479808142000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi2kdORz-4CFQAAAAAdAAAAABBk", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D1731379282&psig=AOvVaw37kbgPQWAPtLf8NzWzw-mr&ust=1612479808142000&source=images&cd=vfe&ved=0CAIQjRxqGAoTCLi2kdORz-4CFQAAAAAdAAAAABCeAQ", "https://img.wattpad.com/aa8618b17f11c2b32ecf758f6eeaa2e74096d44d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4e565a6a665f657a394445705f773d3d2d3739343431333838332e313563643939663539353837393636653734323036323938343236332e676966?s=fit&w=720&h=720"];
        let aleatorio = Math.floor(Math.random()*(Mensajes.length));
        let user = message.mentions.users.first();
        if(!user) return message.channel.send('Menciona a quien quieres **Matar**. :detective: ')
        const embedMensajes = new Discord.MessageEmbed()
            .setTitle('**KILL**')
            .setDescription ('0o0 '+message.member.displayName+' acaba de matar a '+message.mentions.users.first().username+'.  :cry:')
            .setColor('RANDOM')
            .setImage(Mensajes[aleatorio])
        message.channel.send({embed:embedMensajes});
    }else
    if(message.content.startsWith(prefix+'dead-chat')){
        const Mesnsajes = ["https://images-ext-2.discordapp.net/external/WpPcZRKSaWEsOeujziGKHZWZAB7Ph2uSVcG0G7nS_KI/https/media1.tenor.com/images/b0fcc6add60d58dde52a3201f457cef2/tenor.gif", "https://pa1.narvii.com/6566/513a0608964716e814f8d5b9f1bca9356aefdddc_hq.gif", "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fel-chat-se-murio-llamen-auna-ambulancia-el-chat-murio-llamen-gif-14665520&psig=AOvVaw2ekIeZQUJdZDAPI8Wd31fG&ust=1612481030134000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjOvpqWz-4CFQAAAAAdAAAAABAf", "https://pa1.narvii.com/6965/eb75bcc78599776d9d00f8db74e4d62102c38a84r1-320-320_00.gif", "https://pa1.narvii.com/6860/2dda90e1cfad3e95ef13e1437a3cc954774800e5r1-320-320_00.gif", "https://pa1.narvii.com/6566/938937bc4e13b2e4f6359e5dda0b5900b5abc66a_00.gif"];
        let aleatorio = Math.floor(Math.random()*(Mesnsajes.length));
        const embedDeadChat = new Discord.MessageEmbed()
            .setTitle('**DEAD - CHAT**')
            .setColor('RANDOM')
            .setImage(Mesnsajes[aleatorio])
        message.channel.send({embed:embedDeadChat})
    }else
    if(message.content.startsWith(prefix+'photos')){
        const Mesnsajes = ["https://media.discordapp.net/attachments/804038055312883732/804038216382283786/Screenshot_2021-01-27_3_Pinterest16.png", "https://media.discordapp.net/attachments/804038055312883732/804038221083443240/Screenshot_2021-01-27_3_Pinterest15.png", "https://media.discordapp.net/attachments/804038055312883732/804038232613978132/Screenshot_2021-01-27_3_Pinterest14.png", "https://media.discordapp.net/attachments/804038055312883732/804038246497648661/Screenshot_2021-01-27_3_Pinterest12.png", "https://media.discordapp.net/attachments/804038055312883732/804038256281911376/Screenshot_2021-01-27_3_Pinterest10.png", "https://media.discordapp.net/attachments/804038055312883732/804038274565275688/Screenshot_2021-01-27_3_Pinterest6.png", "https://media.discordapp.net/attachments/804038055312883732/804038315363532830/Screenshot_2021-01-27_3_Pinterest.png"];
        let aleatorio = Math.floor(Math.random()*(Mesnsajes.length));
        const embedPhotos = new Discord.MessageEmbed()
            .setTitle('**FOTOS - ME**')
            .setColor('RANDOM')
            .setImage(Mesnsajes[aleatorio])
        message.channel.send({embed:embedPhotos})
    }else
    if(message.content.startsWith(prefix+'datos')){
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let nombre = args[0];
        let edad = args[1];
        let color = args[2];
        let juego = args[3];
        let sexo = args[4];
        
        if(!args.length) return message.channel.send('Recuerda que debes poner: ```1.- Nombre, 2.- Edad, 3.- Color, 4.- Juego fav. 5.- Sexo``` ejemplo:```'+prefix+'datos Carlos 32 morado minecraft hombre.``` ***`PARA CUALQUIER DATO QUE NO PREFIERAS INGRESAR PON UN "-"`*** Y ***`NO PUEDES INGRESAR NINGUN NOMBRE CON ESPACIOS INTERMEDIOS`***')
            const embedDatos = new Discord.MessageEmbed()
                .setTitle ('**TUS DATOS**')
                .addField ('Nombre:', '*'+nombre+'*')
                .addField ('Edad:', '*'+edad+'*', true)
                .addField ('Color:', '*'+color+'*', true)
                .addField ('Juego (fav.)', '*'+juego+'*', true)
                .addField ('Sexo:', '*'+sexo+'*', true)
                .setColor ('RANDOM')
                .setThumbnail (message.author.avatarURL())
            message.channel.send({embed:embedDatos});
    }else
    if(message.content.startsWith(prefix+'top-serie')){
        const embed = new Discord.MessageEmbed()
            .setTitle ('***LISTADO - SERIE***')
            .setColor('0x5E9DE4')
            .setAuthor(message.member.displayName, message.author.avatarURL())
            .addField ('1.Fullmetal Alchemist: Brotherhood', 'Ha conseguido algo que parece casi imposible: La aprobación de prácticamente toda la comunidad otaku. Esta serie ocupa el primer puesto en **IMDb** como ***Anime News Network y My Anime List***')
            .addField ('2.Death Note', 'Para muchos una obra maestra, hay quien pone en duda su puesto en el podio. La razón es por la segunda parte de la trama centrada en Light Yagami pierde bastante con respecto a la primera, algo en lo que coinciden prácticamente todos los seguidores de la ficción. Aun así, se lleva el segundo puesto en *IMDb* y el primero en *Anime Underground*.')
            .addField ('3.Steins;Gate', 'La adaptación a televisión de la novela triunfó como ya lo hizo su versión jugable. La originalidad de su trama conquistó a nivel mundial y **llegó al gran público en 2011**, aunque en los círculos españoles ha tenido una difusión algo menor.')
            .setThumbnail('https://64.media.tumblr.com/ed6cf9cb157f11a2b124437feaab7de0/tumblr_n1z6uhF5DX1rt6u7do1_400.gif')
            .setFooter('E-grafia link: http://www.sensacine.com/noticias/series/noticia-18561848/ ')
        message.channel.send(embed);
    }else
    if(message.content.startsWith(prefix+'top-peli')){
        const embed = new Discord.MessageEmbed()
            .setTitle ('***LISTADO - PELICULA***')
            .setColor('0x5E9DE4')
            .setAuthor(message.member.displayName, message.author.avatarURL())
            .addField ('1.Akira (1988)', 'Género: Acción, Militar, Sci-Fi, Aventura, Terror, Sobrenatural, Seinen. |Estreno: 16 de julio de 1988 |Director: Otomo Katsuhiro')
            .addField ('2.Your Name (2016)', 'Género: Romance, Sobrenatural, Drama, Escolar. |Estreno: 26 de agosto de 2016 |Director: Makoto Shinkai ')
            .addField ('3.El viaje de Chihiro (2001)', 'Género: Drama, Aventura, Sobrenatural. |Estreno: 20 de julio de 2001 |Director: Hayao Miyazaki')
            .setThumbnail('https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fpelicula-gifs&psig=AOvVaw1FMmEJpQ6cBegn-IHYhHCN&ust=1611679280105000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCAvv3rt-4CFQAAAAAdAAAAABAR')
            .setFooter('E-grafia link: https://www.superaficionados.com/mejores-peliculas-anime/ ')
        message.channel.send(embed);
    }else
    if (message.content.startsWith(prefix+"tattoos")) {
        const tatoos = ["https://i.pinimg.com/564x/e6/2b/8c/e62b8cf08b8a4868a0c3ff480bba7b85.jpg", "https://i.pinimg.com/564x/e1/2b/03/e12b036f7e5c077e00f69381140e26ac.jpg", "https://i.pinimg.com/564x/ec/66/07/ec66070f52725cdcd7fbea597742b025.jpg", "https://i.pinimg.com/564x/a4/ea/3e/a4ea3e8b39d4c1b382bbcc18ac3f0724.jpg", "https://www.martaltes.com/wp-content/uploads/2020/09/What-is-Joker-Tattoo.jpg", "https://casaydiseno.com/wp-content/uploads/2019/04/tattoo-mandala-disenos-interpretacion.jpg", "https://cdn1.kaosystem.com/wp-content/uploads/2019/10/05221104/tattoo-mandala-244x300.jpg", "https://apicms.thestar.com.my/uploads/images/2020/09/04/847344.jpg", "https://imgmedia.lbb.in/media/2019/08/5d56ea5ce2f8fb4ec6168899_1565977180924.jpg", "https://d2np4vr8r37sds.cloudfront.net/img/article/livqjpruan-1491893536.jpg", "https://tattoodo-mobile-app.imgix.net/images/posts/20201219_qQrVvrlShsN84G5.jpeg", "https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-223147/8f3fece09b9da0d80e9c84feb456ac32/featured-img-of-post-223147.jpg?fm=jpg&fl=progressive&q=50&w=1200"];
        let aleatorio = Math.floor(Math.random()*(Mensajes.length));
        const embedTatoos = new Discord.MessageEmbed()
            .setTitle('**TATUAJES**')
            .setColor('RANDOM')
            .setImage(tatoos[aleatorio])
            .setFooter('Tegustan los tatuages? '+message.member.displayName)
        message.channel.send({embed:embedTatoos});
    }else
    if(message.content.startsWith(prefix+'pat')){
        const Mensajes = ["https://images-ext-2.discordapp.net/external/GX98v7YDS8JpVhWtzapF2Np7dJNGtxbFKGcIwkTcKQM/https/gifimage.net/wp-content/uploads/2018/10/anime-head-pats-gif-6.gif", "https://images-ext-2.discordapp.net/external/W9Xw8chzCXmzDLX_HmJAldqoDT9BuJWtwSz7Ay2225c/https/i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif", "https://images-ext-1.discordapp.net/external/sCgxr0oL62kQiFQFFVhkr2i6BZ9ByvK9ml1NC_B1G7Q/https/i.pinimg.com/originals/ec/b8/7f/ecb87fb2827a022884d5165046f6608a.gif", "https://images-ext-1.discordapp.net/external/y9YfB_7q4YcvKPCNSFD2g5b1NM6DgnCyeXtWdMrsWCM/https/64.media.tumblr.com/9e3132f441967a3ae85ca3023fc46721/a554c1d94475a560-ed/s500x750/25f6fa6827d4546126667c1601dd9bd1c07b5802.gif", "https://images-ext-1.discordapp.net/external/mLEz4jwvz1z3q7Z-5Yd3ZV9d5ptDOQdG6zwrPbpMMis/https/64.media.tumblr.com/3b72bb8d292b80c37f8a6d64d2ff0cca/tumblr_o9ha9ez6pv1v7p6apo2_400.gif", "https://images-ext-2.discordapp.net/external/np2AptcDVfliS5vfJLZOsBhlyxLJn-IyV9eyoEM9K_k/https/i.kym-cdn.com/photos/images/newsfeed/001/211/282/46f.gif", "https://images-ext-2.discordapp.net/external/zIePoWu6eVvn-rmHa1vAEjogGlYMBPJHOs8cK8aJYO8/https/data.whicdn.com/images/297125550/original.gif", "https://images-ext-2.discordapp.net/external/N5kg7oMXbe-DudWiqWhL76xDcT27VjTOBIu2s0kBrAM/https/64.media.tumblr.com/674a6801821c90f9f6a398df2184f395/tumblr_oun7zbWzBO1tgebsfo1_500.gif", "https://images-ext-1.discordapp.net/external/MLFxgby3aW6Lg-rf9Vu5InDIvVKlGMDCQjd40tBLEhA/https/media1.tenor.com/images/f235d8cda8bfef570dc4471e71f88408/tenor.gif", "https://images-ext-2.discordapp.net/external/U5iWGDKwT9ql5GnJdrMR3xLOem1iqu6QF9s8dnM9cgc/https/media1.tenor.com/images/76d3b063b91ac22600d5604003047c01/tenor.gif", "https://images-ext-1.discordapp.net/external/rbHiSZQazMt3mSWpC_0jQFf9xMjuxj6KeOR_QpE0b2A/https/media1.tenor.com/images/55df4c5fb33f3cd05b2f1ac417e050d9/tenor.gif", "https://images-ext-2.discordapp.net/external/2euvUbfVZSyT2D2Me-GUtYf9BLGhSslypz9b-fCF1VY/https/media1.tenor.com/images/0d2fb6ad9a6d71c3a018c0b37ffca50b/tenor.gif", "https://images-ext-1.discordapp.net/external/Xbd69nIZ1_d9eFIsPGI3Rbl6-vNE4Ww_Z2XQwq1nTlI/https/images-ext-2.discordapp.net/external/W9Xw8chzCXmzDLX_HmJAldqoDT9BuJWtwSz7Ay2225c/https/i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif", "https://images-ext-2.discordapp.net/external/NgWKFCEMvJGnY0cl5UT3Td6MAEFyk6YyYWtzZkySOSw/https/media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif", "https://images-ext-1.discordapp.net/external/QZyQ4iWKXqYwgnM6iKqOFfawC9hJJIs_NrQp1-ot9mg/https/media1.tenor.com/images/003bcc669abda6eb8cd9dee382e29add/tenor.gif", "https://images-ext-1.discordapp.net/external/ANbVQYQtUIC1LGPVGc7mEpJWWnxOMWQs12q5MG-WUDc/https/pa1.narvii.com/6523/b7ef2fa2dc1ba00f7d6c1e0ff1301cf62fe36e2c_hq.gif", "https://images-ext-1.discordapp.net/external/6LqLkETs2ItBNf65GmlvZloZagFaOZfhMaBO9kMp060/https/i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif"];
        let aleatorio = Math.floor(Math.random()*(Mensajes.length));
        let user = message.mentions.users.first();
        if(!user) return message.channel.send('Menciona a quien quieres **SOBAR**. :drooling_face: ')
        const embedMensajes = new Discord.MessageEmbed()
            .setTitle('**PAT**')
            .setDescription ('AwA '+message.member.displayName+' acarició a '+message.mentions.users.first().username+'. ;)')
            .setColor('RANDOM')
            .setImage(Mensajes[aleatorio])
        message.channel.send({embed:embedMensajes});
    }else
    if(message.content.startsWith(prefix+'meme')){
        const Mensajes = ["https://i.pinimg.com/736x/ba/bb/d6/babbd64489daf2dce1af606765da153b.jpg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dopl3r.com%2Fmemes%2Fgraciosos%2Fporque-las-gtas-siempre-encuentran-todo-v-esa-es-una-excelente-pregunta%2F494025&psig=AOvVaw3DlhXQtcMnwatXyJ5xWOQD&ust=1612531339646000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjR-87R0O4CFQAAAAAdAAAAABBJ", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dj4MiINm-K6Y&psig=AOvVaw3DlhXQtcMnwatXyJ5xWOQD&ust=1612531339646000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjR-87R0O4CFQAAAAAdAAAAABBO", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fverne.elpais.com%2Fverne%2F2020%2F09%2F08%2Farticulo%2F1599564224_241757.html&psig=AOvVaw1TgHHtSNBU7h1j8penkpjn&ust=1612488182445000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjRzOywz-4CFQAAAAAdAAAAABAF", "https://www.trecebits.com/wp-content/uploads/2020/12/memes-joker-444x445.jpeg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tuexpertoapps.com%2F2020%2F04%2F06%2Fmejores-memes-gif-semana-santa-compartir-whatsapp%2F&psig=AOvVaw1TgHHtSNBU7h1j8penkpjn&ust=1612488182445000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjRzOywz-4CFQAAAAAdAAAAABAc", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F514114113700357085%2F&psig=AOvVaw1TgHHtSNBU7h1j8penkpjn&ust=1612488182445000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjRzOywz-4CFQAAAAAdAAAAABAs", "https://lh3.googleusercontent.com/proxy/b0naNu-euIV2HTJf-q8-3_dnkg-f48TixgCiwXfmGBQJEdo-sZcgaCZQzfbdFVQGHLq1Qy93CygngYN5VT_wzQ8Qr1zvwcUw_16Hn6NBUFz2-q-E6IU6M5W2fdM5D2QGlDsbvEiQJ4TjpqePKZxc_4kj23g3b-aAXORqbCkcIJjt", "https://i.pinimg.com/564x/e3/1a/4b/e31a4b7e2bd14330ebd22ed1b96e7884.jpg"];
        let aleatorio = Math.floor(Math.random()*(Mensajes.length));
        let user = message.mentions.users.first();
        const embedMensajes = new Discord.MessageEmbed()
            .setTitle('**MEME**')
            .setColor('RANDOM')
            .setImage(Mensajes[aleatorio])
        message.channel.send({embed:embedMensajes});
    }else
    if(message.content.startsWith(prefix+'fuck')){
        const Mensajes = [""];
        let aleatorio = Math.floor(Math.random()*(Mensajes.length));
        let user = message.mentions.users.first();
        if(!message.channel.nsfw) return message.channel.send(":x: `Error | Este canal no es NSFW`")
        if(!user) return message.channel.send('Menciona a quien quieres **FOLLAR**. :no_mouth: ')
        const embedFuck = new Discord.MessageEmbed()
            .setTitle ('D: '+message.member.displayName+'se follo a '+message.mentions.users.first().username+'. ')
            .setColor ('RANDOM')
            .setImage (Mensajes[aleatorio])
        message.channel.send({embed:embedFuck});
    }else
    if(message.content.startsWith(prefix+'marvel')){
        const Mensajes = ["https://i.pinimg.com/236x/cb/b2/57/cbb2573b87126824240236c9ff64b40e.jpg", "https://i.pinimg.com/236x/7c/c1/50/7cc150893d3e9f8b438412bbb53c0199.jpg", "https://i.pinimg.com/236x/ac/f3/c6/acf3c6b393d9fd3e9c969c50925eab11.jpg", "https://i.pinimg.com/236x/a1/f2/6d/a1f26de7071d4396df57b2920da6597c.jpg", "https://i.pinimg.com/236x/13/7f/dd/137fddc1db50321c1ad4f97e516f6f8c.jpg", "https://i.pinimg.com/236x/3c/a3/c8/3ca3c84cd166912c1a77fb30ececc203.jpg", "https://i.pinimg.com/236x/d0/cd/ee/d0cdee53bea5239d43e92fab88f1e039.jpg", "https://i.pinimg.com/236x/ba/a6/bc/baa6bce3329885a541647efb948f7ff1.jpg", "https://i.pinimg.com/236x/e1/87/0e/e1870e9de1b6c393f80d66842714417f.jpg", "https://i.pinimg.com/236x/cc/a5/05/cca505764f09de3f701a0f327c1990ea.jpg", "https://i.pinimg.com/236x/20/d4/23/20d423d4df0e53ca1d08f51a208a4842.jpg", "https://i.pinimg.com/236x/79/80/d6/7980d6ec59af0f680c84b5e7b981c4b0.jpg", "https://i.pinimg.com/236x/e4/5d/43/e45d43d512e13af5846dd3c32171830b.jpg", "https://i.pinimg.com/236x/17/a6/d3/17a6d35909e427fa76d2bb25c3934d3e.jpg", "https://i.pinimg.com/236x/78/5e/59/785e592bafb6206a94e9a66ddb58cefa.jpg", "https://i.pinimg.com/236x/34/4f/17/344f173b2a763e69edff7451d15323bc.jpg", "https://i.pinimg.com/236x/6e/5e/35/6e5e35f171d1e05e7c40c296175df99b.jpg", "https://i.pinimg.com/236x/92/f0/a2/92f0a2108c406d040fecc5e8a901f547.jpg", "https://i.pinimg.com/236x/2f/b7/ab/2fb7ab767dd4c3f9f712e5eb4488c906.jpg", "https://i.pinimg.com/236x/8a/25/be/8a25bef53b98e8f5fd66abc9ad1e5057.jpg", "https://i.pinimg.com/236x/8b/77/61/8b7761d043145773ea67d548876e4899.jpg", "https://i.pinimg.com/236x/10/77/0b/10770bba99eaeb40274ae75b98ab431e.jpg", "https://i.pinimg.com/236x/e8/dd/90/e8dd908e7c85200af5772474cdecf7de.jpg", "https://i.pinimg.com/236x/d1/4b/12/d14b12c8adea0f15e9c1c291f8b2fda7.jpg", "https://i.pinimg.com/236x/cb/fa/9a/cbfa9a7803d46fae8107143a1fcdce7c.jpg", "https://i.pinimg.com/236x/ec/a1/7f/eca17f8f6c5471bc1cacce86e7a12ca0.jpg", "https://i.pinimg.com/236x/51/b9/76/51b976f6bfdad52a1563957e7bbba044.jpg", "https://i.pinimg.com/564x/b6/78/81/b67881a3cdda5e7421ccb037b22ade64.jpg", "https://i.pinimg.com/564x/68/02/08/680208aa70ad2f2b7a4be855209e5699.jpg", "https://i.pinimg.com/564x/db/b0/00/dbb000b214f561f7caffe47484793b8e.jpg", "https://i.pinimg.com/564x/17/11/64/1711646680ef0dcb0ebddfe9adf057df.jpg", "https://i.pinimg.com/236x/72/f0/86/72f086ae845a6af2d6622265e948119f.jpg", "https://i.pinimg.com/236x/b6/51/41/b65141edf1f36df7de26e21c5e9ef709.jpg", "https://i.pinimg.com/236x/1a/a9/d9/1aa9d9cbddcb370ce2b559928183cbc5.jpg", "https://i.pinimg.com/564x/b4/b6/18/b4b618988cb9f1cc9468fb7df5854eb8.jpg", "https://i.pinimg.com/564x/df/7f/18/df7f180d2482f50abd732e86fd98f249.jpg", "https://i.pinimg.com/564x/1b/11/66/1b11662f080843e88516ecb11ff43468.jpg", "https://i.pinimg.com/564x/fc/9e/4a/fc9e4af61f87f647772c42b3e581c028.jpg" ,"https://i.pinimg.com/564x/fc/9e/4a/fc9e4af61f87f647772c42b3e581c028.jpg", "https://i.pinimg.com/564x/ac/bc/be/acbcbe0b4587a0bbf9006f8fa114cb67.jpg"];
        const mensajesContent = ["Que te gusta mas? Marvel o DC?", "Este es tu personage favorito?", "Me encanta esta imagen ♥", "A mi sinceramente me gusta marvel ☺", "Que mamalona esta imagen"];
        let aleatorio = Math.floor(Math.random()*(Mensajes.length));
        let AleatorioContent = Math.floor(Math.random()*(mensajesContent.length));
        const embedMarvel = new Discord.MessageEmbed()
            .setTitle (mensajesContent[AleatorioContent])
            .setColor ('RANDOM')
            .setImage (Mensajes[aleatorio])
        message.channel.send({embed:embedMarvel});
    }else
    if(message.content.startsWith(prefix+'mute')){
    const rol = message.member.guild.roles.cache.get('809104206006059014')
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    if(!user) return message.channel.send('Menciona a quien quieres **MUTEAR**. :zipper_mouth: ')
    const embed = new Discord.MessageEmbed()
        .setTitle ('**ALGUIEN A SIDO MUTEADO**')
        .addField (`Moderator:`, `${message.author.username}`)
        .addField(`Miembro:`, `${user}`)
        .addField(`Razon:`, `In definida`)
        .setColor ('RANDOM')
    message.channel.send(embed);
    user.roles.add(rol);
    }else
    if(message.content.startsWith(prefix+'ppt')){
        const gifs = ["https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87021.gif", "https://i.pinimg.com/originals/3e/bd/99/3ebd999b9a5f4d1efd41b5f378ebf1fc.gif", "https://i.pinimg.com/originals/9c/de/5e/9cde5e0c847b5a0fb668d0b136acbe16.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijeras-87022.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-77525.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87015.gif", "https://media.tenor.com/images/3d7e6eab70fb1181625b9e2f5734f90c/tenor.gif", "https://reygif.com/media/piedra-papel-tijera-64542.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-54767.gif"];
        let aleatorio = Math.floor(Math.random()*(gifs.length));
        const embed = new Discord.MessageEmbed()
            .setTitle('__***`Listo para un reto?`***__')
            .setImage(gifs[aleatorio])
            .setFooter('Solo escribe '+prefix+'[piedra | papel | tijera]')
            .setColor ('RANDOM')
        message.channel.send(embed);
    }else
        if(message.content.startsWith(prefix+'piedra')){
            const gifs = ["https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87021.gif", "https://i.pinimg.com/originals/3e/bd/99/3ebd999b9a5f4d1efd41b5f378ebf1fc.gif", "https://i.pinimg.com/originals/9c/de/5e/9cde5e0c847b5a0fb668d0b136acbe16.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijeras-87022.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-77525.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87015.gif", "https://media.tenor.com/images/3d7e6eab70fb1181625b9e2f5734f90c/tenor.gif", "https://reygif.com/media/piedra-papel-tijera-64542.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-54767.gif"];
        const piedra = ["He ganado! Elegi papel. El papel cubre a la roca.", "Has ganado! Elegi tijera. Las tijeras no pueden cortar rocas.", "Empate. Piedra vs piedra, gana... La piedra!"];
        let aleatorio = Math.floor(Math.random()*(piedra.length))|| Math.floor(Math.random()*(gifs.length));
            const embedPiedra = new Discord.MessageEmbed()
                .setDescription (piedra[aleatorio])
                .setImage (gifs[aleatorio])
                .setColor ('RANDOM')
                .setFooter (message.member.displayName)
            message.channel.send(embedPiedra);
        }else
        if(message.content.startsWith(prefix+'papel')){
            const gifs = ["https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87021.gif", "https://i.pinimg.com/originals/3e/bd/99/3ebd999b9a5f4d1efd41b5f378ebf1fc.gif", "https://i.pinimg.com/originals/9c/de/5e/9cde5e0c847b5a0fb668d0b136acbe16.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijeras-87022.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-77525.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87015.gif", "https://media.tenor.com/images/3d7e6eab70fb1181625b9e2f5734f90c/tenor.gif", "https://reygif.com/media/piedra-papel-tijera-64542.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-54767.gif"];
        const papel = ["He ganado! Elegi tijera. Las tijeras cortan el papel.", "Has ganado! Elegi piedra. El papel cubre a la roca.", "Empate. Papel vs papel, gana... El papel!"];
        let aleatorio = Math.floor(Math.random()*(papel.length))|| Math.floor(Math.random()*(gifs.length));
            const embedPapel = new Discord.MessageEmbed()
                .setDescription (papel[aleatorio])
                .setImage (gifs[aleatorio])
                .setColor ('RANDOM')
                .setFooter (message.member.displayName)
            message.channel.send(embedPapel);
        }else
        if(message.content.startsWith(prefix+'tijeras')){
            const gifs = ["https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87021.gif", "https://i.pinimg.com/originals/3e/bd/99/3ebd999b9a5f4d1efd41b5f378ebf1fc.gif", "https://i.pinimg.com/originals/9c/de/5e/9cde5e0c847b5a0fb668d0b136acbe16.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijeras-87022.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-77525.gif", "https://m.gifmania.com/Gif-Animados-Objetos/Imagenes-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-87015.gif", "https://media.tenor.com/images/3d7e6eab70fb1181625b9e2f5734f90c/tenor.gif", "https://reygif.com/media/piedra-papel-tijera-64542.gif", "https://m.gifanimados.com/Gifs-Objetos/Animaciones-Juguetes/Piedra-Papel-Tijera/Piedra-Papel-Tijera-54767.gif"];
        const tijera = ["He ganado! Elegi piedra. La piedra rompe las tijeras.", "Has ganado! Elegi papel. La tijera corta a el papel.", "Empate. Tijera vs tijera, gana... La tijera!"];
        let aleatorio = Math.floor(Math.random()*(tijera.length))|| Math.floor(Math.random()*(gifs.length));
            const embedTijera = new Discord.MessageEmbed()
                .setDescription (tijera[aleatorio])
                .setImage (gifs[aleatorio])
                .setColor ('RANDOM')
                .setFooter (message.member.displayName)
            message.channel.send(embedTijera);
        }
    
});
client.on("message", async(message) => {
    if(message.content.startsWith(prefix+'prueba')){
        const prueba = new Discord.MessageEmbed()
            .setTitle ('PRUEBA')
            .setFooter (message.member.displayName)
        const mensaje = await message.channel.send(prueba);
        mensaje.react('💯');
    }
});
client.on("guildMemberAdd", (member) => {
    const welcome = new Discord.MessageEmbed()
        .setTitle(`**🥳 ¡¡HAY INGRESADO UN NUEVO USUARIO !! 👌**`) 
        .setColor("RANDOM")
        .addField('¡¡Hola '+member.user.username+' 😃:wave: !!', 'Bienvenido a '+member.guild.name+' pasala bien! 🙃😋')
        .addField('📜 Canal de reglas', `<#819628990460330015> Recuerda leerlas detenidamente para no terminar afuera del servidor.`)
        .addField('✅ Verificacion', `Cuando ya termines de leer las <#819628990460330015> ve a el canal <#819722878479499265> para verificarte y ver el resto del server`)
        .addField('🏅 Auto roles', `Cuando ya estes verificado podas ir a chequear tus roles en <#819668540046573648>`)
        .addField('🎫 Tickets', `Si tienes alguna duda o alguna incomodidad abre un <#819923128507564103>`)
        .setThumbnail('https://media.discordapp.net/attachments/799717676909985842/821014673038114886/Copy_of_Untitled.png')
    client.channels.cache.get("819345993618554890").send(welcome); 
});
client.on("guildMemberRemove", (member) => {
    const welcome = new Discord.MessageEmbed()
        .setTitle(`**😖 ¡¡SE NOS HA IDO USUARIO!! 😥**`)
        .setColor("RANDOM")
        .addField('¡¡Adios '+member.user.username+' 😩:wave: !!', 'Esperemos que regrese. 😪😿')
        .setThumbnail(member.user.avatarURL())
    client.channels.cache.get("819345993618554890").send(welcome);
});
client.login(config.token);