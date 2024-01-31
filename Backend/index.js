const express = require('express');
const cors = require('cors');
const database_connection = require('./db/db');
const profitPercentage = require('./component/data');
const app = express();
app.use(express.json());
app.use(cors());
const port = 4004;
app.get('/data', profitPercentage);

function server() {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
}

database_connection(server);
