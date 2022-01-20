//importerer randompuppy, for bruk av henting av tilfeldige bilder fra nett
const randomPuppy = require("random-puppy")
//importerer slashcommandbuilder for discord
const { SlashCommandBuilder } = require('@discordjs/builders');
//importerer messageembed, til bruk for visning av meme
const { MessageEmbed } = require("discord.js");

//lager ny kommando, med navn og beskrivelse
module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Sends an epic meme!'),
	async execute(interaction) {
        // I dette array, 
        // putter man subreddits som koda velgjer memes fra
        const subReddits = ["funny", "dankmeme", "me_irl", "memes", "MemeEconomy", "ComedyCemetery", "dankmemes"];
        // velgjer ein tilfeldig verdi frå arrayet subReddits
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        // Ein melding frå BraSUI!
        const interact = ["Look at this meme!", "This one is funny af!", "LMAO!", "Sheeeeeee!", "SUUUUIIII!", "Have you seen this one?", "LOL!", "Damn!"]
        const randomint = interact[Math.floor(Math.random() * interact.length)];

        // velgjer eit tilfeldig bilde frå meme
        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`${randomint} I got it from /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            
        //svarer med embedet som er laget over
        interaction.reply({embeds:[embed]});
    },
};

//andre subreddits
//["terriblefacebookmemes", "PrequelMemes", "PewdiepieSubmissions"];
