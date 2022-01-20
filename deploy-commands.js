const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

/*
 * Finner og registrer kommandoene du har laget i discord
 */

// Et tomt array som kjem til å inneholde kommandoer
const commands = [];
// Henter alle filene som ender med .js fra commands-mappa til commandFiles
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//Går gjennom alle filene fra commandFiles og legger dem til arrayet commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

//Skjekker om alt er oppe og går, sender error om noko gale skjer
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded all application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();






