//
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity("with Rick", {
            type: "STREAMING",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          });
	},
};


//client.user.setPresence({ activities: [{ name: 'Crab Game' }], status: 'online' });
