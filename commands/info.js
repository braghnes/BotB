//subcommands, 2 kommandoer til 1 kommando i kode
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')),
    async execute(interaction) {
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');

			if (user) {
				await interaction.reply({ content: `Username: ${user.username}\nID: ${user.id}`, ephemeral: true});
			} else {
				await interaction.reply({ content: `Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`, ephemeral: true});
			}
		} else if (interaction.options.getSubcommand() === 'server') {
			await interaction.reply({ content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`, ephemeral: true});
		}
    },
};

