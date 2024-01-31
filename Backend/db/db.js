const mongoose = require('mongoose');
const url = 'mongodb+srv://boffin:boffin12@cluster0.ewpjqrp.mongodb.net/chakr';

async function database_connection(cb) {
  try {
    await mongoose.connect(url);
    console.log('database connected successfully');
    cb();
  } catch (error) {
    console.log(error);
  }
}

module.exports = database_connection;
