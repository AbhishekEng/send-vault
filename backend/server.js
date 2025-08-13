const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const apiRoutes = require('./routes/file.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error', err));
