require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../build`));

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
