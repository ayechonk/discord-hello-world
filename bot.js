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
    if (e.message.content == 'PING') {
        e.message.channel.sendMessage('PONG');
    }
});