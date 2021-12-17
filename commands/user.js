const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with Hei guth!'),
	async execute(interaction) {
		await interaction.reply(`Hei! Kordan går det ${interaction.user.tag}?`);
	},
};

//