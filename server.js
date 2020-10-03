const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect DB
connectDB();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/currencies', require('./Routes/api/currencies'));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
