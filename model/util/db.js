const mongoose = require('mongoose');
const dbURI = 'mongodb://10.0.0.127:27017/blogging';
// NOTE: only the connection string should be updated if this file is used elsewhere
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbURI);
};

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI)
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(err) {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.once('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});
// For Cloud app termination
process.once('SIGTERM', function() {
  gracefulShutdown('Cloud app shutdown', function() {
    process.exit(0);
  });
});

require('../BlogSchema');

// NOTE: The moral of the story is that the PORT OF THE HOST
// and the PORT OF THE CONTAINER should be
// EXPLICITLY MATCHED FOR THE CONTAINER WHEN RUN!
// (I guess)

// docker run --name mongomain -p 27017:27017 -d mongo