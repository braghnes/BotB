const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('helsing')
		.setDescription('Replies with Hei guth!'),
	async execute(interaction) {
		await interaction.reply({ content: `Hei! Kordan går det ${interaction.user.tag}?`, ephemeral: true});
	},
};