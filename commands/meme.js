const randomPuppy = require("random-puppy")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Sends an epic meme!'),
	async execute(interaction) {
        // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["dankmeme", "meme", "me_irl", "memes", "MemeEconomy", "ComedyCemetery"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}, via BraSUI`)
            .setURL(`https://reddit.com/r/${random}`);

        interaction.reply({embeds:[embed]});
    },
};

//interaction.channel.send({embeds:[embed]});
