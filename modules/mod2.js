// Import Module
const mongoose = require('mongoose');

// Test Data for Threads
const threads = [
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE01-text',
    delete_password: 'CDE01-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE02-text',
    delete_password: 'CDE02-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE03-text',
    delete_password: 'CDE03-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE04-text',
    delete_password: 'CDE04-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  { 
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE05-text',
    delete_password: 'CDE05-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE06-text',
    delete_password: 'CDE06-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE07-text',
    delete_password: 'CDE07-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE08-text',
    delete_password: 'CDE08-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE09-text',
    delete_password: 'CDE09-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE10-text',
    delete_password: 'CDE10-pass',
    replies: [
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply01-text',
                 delete_password: 'reply01-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply02-text',
                 delete_password: 'reply02-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply03-text',
                 delete_password: 'reply03-pass'
               },
               {
                 _id: new mongoose.Types.ObjectId,
                 text: 'reply04-text',
                 delete_password: 'reply04-pass'
               }
             ]
  },
];

// Exports
exports.threads = threads;
