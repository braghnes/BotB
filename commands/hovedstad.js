//importerer slashcommandbuilder for discord
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('hovedstad')
        .setDescription('Finn ut hovedstaden i et land!')
        .addStringOption(option =>
            option.setName('land')
                .setDescription('Skriv inn et land!')
                .setRequired(true)),
    async execute(interaction) {
        const land = interaction.options.getString('land');
        return interaction.reply({ content: `Land: ${land}\nHovedstad: `, ephemeral: true });
    },
};
