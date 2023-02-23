const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const mongoose = require('mongoose');
const mod1 = require('../modules/mod1');
const mod2 = require('../modules/mod2');

chai.use(chaiHttp);

// Model is made from schema
const Reply = mongoose.model('Reply', mod1.replySchema);
const Board = mongoose.model('Board', mod1.boardSchema);

// Function for Making Thread
const makeThread = function(id, board, text, pass) {
  return new Promise(function(resolve, reject) {
    
    let entry = new Board();
    entry._id = id;
    entry.board = board;
    entry.text = text;
    entry.delete_password = pass;
    
    entry.save(function(err, doc) {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

// Function for Making Replies
const makeReplies = function(thread, id, text, pass) {
  return new Promise(function(resolve, reject) {
    
    let entry = new Reply();
    entry._id = id;
    entry.text = text;
    entry.delete_password = pass;

    let opt1 = { _id: thread };
    let opt2 = { $set: { bumped_on: Date.now() }, $push: { replies: entry } };
    let opt3 = { new: true, upsert: false };

    Board
      .findOneAndUpdate(opt1, opt2, opt3)
      .exec(function(err, doc) {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
  });
}

// Function for Clearing Thread
const clearThread = function() {
  return new Promise(function(resolve, reject) {
    Board
      .deleteMany({})
      .exec(function(err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
  });
}

// Async Function for Making Test Data
const makeTestData = async function() {
  await clearThread();
  for (let i = 0; i < mod2.threads.length; i++) {
    await makeThread(
      mod2.threads[i]._id,
      mod2.threads[i].board,
      mod2.threads[i].text,
      mod2.threads[i].delete_password
    );
    for (let j = 0; j < mod2.threads[i].replies.length; j++) {
      await makeReplies(
        mod2.threads[i]._id,
        mod2.threads[i].replies[j]._id,
        mod2.threads[i].replies[j].text,
        mod2.threads[i].replies[j].delete_password
      )
    }
  }
  return 'Test Data was initialized';
}

// Get Thread-ID
const getThreadId = function(board, text) {
  return new Promise(function(resolve, reject) {
    Board
      .find({ $and: [ { board: board }, { text: text } ] })
      .exec(function(err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc[0]._id);
        }
      });
  });
}

// Async Function called before Functional Tests
const BefFunc = async function(board, text) {
  let result = await getThreadId(board, text);
  return result;
}

suite('Functional Tests', function() {
  let thread01;
  let thread02;
  let thread03;
  let thread04;
  this.timeout(5000);
  /* ------------------------------------------------------------ */
  before(function(done) {
    BefFunc('CDE', 'CDE01-text')
      .then(function(result) {
        thread01 = result;
      });
    BefFunc('CDE', 'CDE02-text')
      .then(function(result) {
        thread02 = result;
      });
    BefFunc('CDE', 'CDE03-text')
      .then(function(result) {
        thread03 = result;
      });
    BefFunc('CDE', 'CDE04-text')
      .then(function(result) {
        thread04 = result;
      });
    done();
  });
  /* ------------------------------------------------------------ */
  test('Creating a new thread', function(done) {
    chai
      .request(server)
      .post('/api/threads/EFG')
      .send({ text: 'EFG01-text', delete_password: 'EFG01-pass' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'text/html');
        done();
      });
  });
  /* ------------------------------------------------------------ */
  test('Viewing the 10 most recent threads with 3 replies each', function(done) {
    chai
      .request(server)
      .get('/api/threads/CDE')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.equal(res.body[0].text, 'CDE10-text');
        assert.equal(res.body[0].replies[0].text, 'reply02-text');
        assert.equal(res.body[0].replies[1].text, 'reply03-text');
        assert.equal(res.body[0].replies[2].text, 'reply04-text');
        assert.equal(res.body[0].replycount, 4);
        assert.equal(res.body[1].text, 'CDE09-text');
        assert.equal(res.body[1].replies[0].text, 'reply02-text');
        assert.equal(res.body[1].replies[1].text, 'reply03-text');
        assert.equal(res.body[1].replies[2].text, 'reply04-text');
        assert.equal(res.body[1].replycount, 4);
        assert.equal(res.body[2].text, 'CDE08-text');
        assert.equal(res.body[2].replies[0].text, 'reply02-text');
        assert.equal(res.body[2].replies[1].text, 'reply03-text');
        assert.equal(res.body[2].replies[2].text, 'reply04-text');
        assert.equal(res.body[2].replycount, 4);
        assert.equal(res.body[3].text, 'CDE07-text');
        assert.equal(res.body[3].replies[0].text, 'reply02-text');
        assert.equal(res.body[3].replies[1].text, 'reply03-text');
        assert.equal(res.body[3].replies[2].text, 'reply04-text');
        assert.equal(res.body[3].replycount, 4);
        assert.equal(res.body[4].text, 'CDE06-text');
        assert.equal(res.body[4].replies[0].text, 'reply02-text');
        assert.equal(res.body[4].replies[1].text, 'reply03-text');
        assert.equal(res.body[4].replies[2].text, 'reply04-text');
        assert.equal(res.body[4].replycount, 4);
        assert.equal(res.body[5].text, 'CDE05-text');
        assert.equal(res.body[5].replies[0].text, 'reply02-text');
        assert.equal(res.body[5].replies[1].text, 'reply03-text');
        assert.equal(res.body[5].replies[2].text, 'reply04-text');
        assert.equal(res.body[5].replycount, 4);
        assert.equal(res.body[6].text, 'CDE04-text');
        assert.equal(res.body[6].replies[0].text, 'reply02-text');
        assert.equal(res.body[6].replies[1].text, 'reply03-text');
        assert.equal(res.body[6].replies[2].text, 'reply04-text');
        assert.equal(res.body[6].replycount, 4);
        assert.equal(res.body[7].text, 'CDE03-text');
        assert.equal(res.body[7].replies[0].text, 'reply02-text');
        assert.equal(res.body[7].replies[1].text, 'reply03-text');
        assert.equal(res.body[7].replies[2].text, 'reply04-text');
        assert.equal(res.body[7].replycount, 4);
        assert.equal(res.body[8].text, 'CDE02-text');
        assert.equal(res.body[8].replies[0].text, 'reply02-text');
        assert.equal(res.body[8].replies[1].text, 'reply03-text');
        assert.equal(res.body[8].replies[2].text, 'reply04-text');
        assert.equal(res.body[8].replycount, 4);
        assert.equal(res.body[9].text, 'CDE01-text');
        assert.equal(res.body[9].replies[0].text, 'reply02-text');
        assert.equal(res.body[9].replies[1].text, 'reply03-text');
        assert.equal(res.body[9].replies[2].text, 'reply04-text');
        assert.equal(res.body[9].replycount, 4);
        done();
      });
  });
  /* ------------------------------------------------------------ */
  test('Deleting a thread with the incorrect password', function(done) {
    chai
      .request(server)
      .delete('/api/threads/CDE')
      .send({ thread_id: thread01, delete_password: 'CDE01-abcd' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'incorrect password');
        done();
      });
  });
  /* ------------------------------------------------------------ */
  test('Deleting a thread with the correct password', function(done) {
    chai
      .request(server)
      .delete('/api/threads/CDE')
      .send({ thread_id: thread01, delete_password: 'CDE01-pass' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'success');
        done();
      });
  });
  /* ------------------------------------------------------------ */
  test('Reporting a thread', function(done) {
    chai
      .request(server)
      .put('/api/threads/CDE')
      .send({ thread_id: thread02 })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'reported');
        done();
      });
  });
  /* ------------------------------------------------------------ */
  test('Creating a new reply', function(done) {
    chai
      .request(server)
      .post('/api/threads/CDE')
      .send({ thread_id: thread03, text: 'reply05-text', delete_password: 'reply05-pass' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'text/html');
        done();
      });
  });
  /* ------------------------------------------------------------ */
  test('Viewing a single thread with all replies', function(done) {
    chai
      .request(server)
      .get('/api/replies/CDE')
      .query({ thread_id: thread04.toString() })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.equal(res.body.text, 'CDE04-text');
        assert.equal(res.body.replies[0].text, 'reply01-text');
        assert.equal(res.body.replies[1].text, 'reply02-text');
        assert.equal(res.body.replies[2].text, 'reply03-text');
        assert.equal(res.body.replies[3].text, 'reply04-text');
        done();
      });
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
  after(function(done) {
    makeTestData()
      .then(function(result) {
        console.log(result);
      });
    done();
  });
  /* ------------------------------------------------------------ */
});
