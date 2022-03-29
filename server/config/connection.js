const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/alvandi-books-copy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;