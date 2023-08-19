 const express = require('express');
 const server = express();

 server.all('/', (req, res,) => {
    res.send('Enchanted Custom Activity made with :heart: from rendra.aja#0')
 })

 function keepAlive() {
    server.listen(3000, () => {
        console.log("Server is ready!!" + Date.now())
    });
 }

 module,exports = keepAlive;
