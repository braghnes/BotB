const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculate')
		.setDescription('A really simple calculator!')
		.addStringOption(option => 
			option.setName('')
				.setDescription('')),
	async execute(interaction) {
		const user = interaction.options.getUser('');
		return interaction.reply({ content: `{} {} {} = `, ephemeral: true });
	},
};

//importere math.js?
