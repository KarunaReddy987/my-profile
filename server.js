const express = require('express');
const app = express();

app.use(express.static(_dirname + '/dist'));
app.listen(process.env.PORT || 8080);

