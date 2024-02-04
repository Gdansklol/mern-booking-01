const express = require('express');

const app = express();

const port = process.env.port || 5200;

app.listen ( ()=> console.log(`Server is starting port ${port}`))