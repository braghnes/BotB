//importerer slashcommandbuilder for discord
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Pong!', ephemeral: true});
		await interaction.followUp({ content: 'Pong again!', ephemeral: true });
	},
};
