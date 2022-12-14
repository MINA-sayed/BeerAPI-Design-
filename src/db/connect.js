const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beer-tap-dispenser', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

module.exports = db;
