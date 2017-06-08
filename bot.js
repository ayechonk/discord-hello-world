var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();


client.connect({
    token: 'MzIyMjAwOTI4NDQ4OTM3OTk1.DBpNqg.ogsJoMWQUj7O3nkqLE0bmjzm8OM'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    var message = e.message.content;
    if (message == 'PING') {
        e.message.channel.sendMessage('PONG');
    }
    if (e.message.author.id == client.User.id) {
        console.log('its me!');
    } else {
        if (message.startsWith("//")) {
            var command = message.substring(2);
            var resp = "```md\r\n";
            switch (command) {
                case "help":
                    resp += "its md";
                    break;
            }
            resp += "\r\n```";
            e.message.channel.sendMessage(resp);
        }
    }
});