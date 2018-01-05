const express = require('express');
const app = express();

exports.connect = () => {
    app.listen(87, function() {
        console.log('[WEBSITE]: rembot.xyz is now listening to port 87! Were live bitches');
    });
}

app.get('/', (res) => {
    res.sendFile('./public/index.html');
});

this.connect();
