const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const mod1 = require('../modules/mod1');

chai.use(chaiHttp);

/* ------------------------------------------------------------ */
// Create Data for Functional Test
const createData = async function() {
  let threads = [
    {
      thread_id: await mod1.postThread('CDE', 'CDE01-text', 'CDE01-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE02-text', 'CDE02-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE03-text', 'CDE03-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE04-text', 'CDE04-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE05-text', 'CDE05-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE06-text', 'CDE06-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE07-text', 'CDE07-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE08-text', 'CDE08-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE09-text', 'CDE09-pass'),
      reply_id: []
    },
    {
      thread_id: await mod1.postThread('CDE', 'CDE10-text', 'CDE10-pass'),
      reply_id: []
    },
  ];
  for (let i = 0; i < threads.length; i++) {
    for (let j = 1; j < 5; j++) {
      let text = 'reply0' + j.toString() + '-text';
      let pass = 'reply0' + j.toString() + '-pass';
      let reply = await mod1.postReply('CDE', threads[i].thread_id.toString(), text, pass);
      threads[i].reply_id.push(reply);
    }
  }
  return threads;
}
/* ------------------------------------------------------------ */

suite('Functional Tests', function() {
  // this.timeout(5000);
  /* ------------------------------------------------------------ */
  before(function() {
    createData()
      .then(function() {
        console.log('Test Data was created');
      })
      .catch(function(error) {
        console.log(error);
      });
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
  /* ------------------------------------------------------------ *
  test('Deleting a thread with the incorrect password', function(done) {
    chai
      .request(server)
      .delete('/api/threads/CDE')
      .send({ thread_id: testData[0].thread_id, delete_password: 'CDE01-xxxx' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'incorrect password');
        done();
      });
  });
  /* ------------------------------------------------------------ */
});
