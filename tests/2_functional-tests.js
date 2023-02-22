const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const mongoose = require('mongoose');
const mod1 = require('../modules/mod1');

chai.use(chaiHttp);

// Model is made from schema
const Reply = mongoose.model('Reply', mod1.replySchema);
const Board = mongoose.model('Board', mod1.boardSchema);

// Test Data for 10 Functional Tests
const database = [
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE02',
    delete_password: 'CDE02',
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE03',
    delete_password: 'CDE03',
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE04',
    delete_password: 'CDE04',
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
      },
    ]
  },
  { 
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE05',
    delete_password: 'CDE05',
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE06',
    delete_password: 'CDE06',
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE07',
    delete_password: 'CDE07',
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE08',
    delete_password: 'CDE08',
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE09',
    delete_password: 'CDE09',
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
      },
    ]
  },
  {
    _id: new mongoose.Types.ObjectId,
    board: 'CDE',
    text: 'CDE10',
    delete_password: 'CDE10',
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
      },
    ]
  },
];

// Make Thread for 10 Functional Tests
const makeThread = function(id, name, text, pass) {
  return new Promise(function(resolve, reject) {
    let flag = true;
    let entry = new Board();
    entry._id = database[i]._id;
    entry.board = database[i].board;
    entry.text = database[i].text;
    entry.delete_password = database[i].delete_password;
    entry.save(function(err, doc) {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
  });
}

// Make Test Data
const makeData = async function() {
  let result = true;
  for (let i = 0; i < database.length; i++) {
    result = await makeThread(
      database[i]._id, 
      database[i].board,
      database[i].text,
      database[i].pass
    );
  }
  return result;
}

let result = makeData();

suite('Functional Tests', function() {
  this.timeout(5000);
  /* ------------------------------------------------------------ *
  test('Creating a new thread', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Viewing the 10 most recent threads with 3 replies each', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Deleting a thread with the incorrect password', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Deleting a thread with the correct password', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Reporting a thread', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Creating a new reply', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Viewing a single thread with all replies', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Deleting a reply with the incorrect password', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Deleting a reply with the correct password', function(done) {
    //
  });
  /* ------------------------------------------------------------ *
  test('Reporting a reply', function(done) {
    //
  });
  /* ------------------------------------------------------------ */
});
