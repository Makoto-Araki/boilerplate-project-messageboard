const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const mod1 = require('../modules/mod1');

chai.use(chaiHttp);

// Test Data for Threads
const threads = [
  { board: 'CDE', text: 'CDE01', delete_password: 'CDE01' },
  { board: 'CDE', text: 'CDE02', delete_password: 'CDE02' },
  { board: 'CDE', text: 'CDE03', delete_password: 'CDE03' },
  { board: 'CDE', text: 'CDE04', delete_password: 'CDE04' },
  { board: 'CDE', text: 'CDE05', delete_password: 'CDE05' },
  { board: 'CDE', text: 'CDE06', delete_password: 'CDE06' },
  { board: 'CDE', text: 'CDE07', delete_password: 'CDE07' },
  { board: 'CDE', text: 'CDE08', delete_password: 'CDE08' },
  { board: 'CDE', text: 'CDE09', delete_password: 'CDE09' },
  { board: 'CDE', text: 'CDE10', delete_password: 'CDE10' },
];

suite('Functional Tests', function() {
  this.timeout(5000);
  /* ------------------------------------------------------------ *
  before(function(done) {
    //mod1.clearBoard();
    for (let i = 0; i < threads.length; i++) {
      chai
        .request(server)
        .post('/api/threads/CDE')
        .send(threads[i])
        .end(function(err1, res1) {
          if (!err1) {
            for (let j = 1; j <= 5; j++) {
              chai
                .request(server)
                .post('/api/replies/CDE')
                .send({ thread_id: res1.body._id, text: `reply0${j}`, delete_password: `reply0${j}` })
                .end(function(err2, res2) {
                  if (err2) {
                    console.log(err2);
                  }
                });
            }
          } else {
            console.log(err1)
          }
        });
    }
    done();
  });
  /* ------------------------------------------------------------ *
  test('Creating a new thread', function(done) {
    let obj1 = { board: 'CDE', text: 'CDE11', delete_password: 'CDE11' };
    chai
      .request(server)
      .post('/api/threads/CDE')
      .send(obj1)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.equal(res.body.board, 'CDE');
        assert.equal(res.body.text, 'CDE11');
        assert.equal(res.body.delete_password, 'CDE11');
        done();
      });
  });
  /* ------------------------------------------------------------ *
  test('Viewing the 10 most recent threads with 3 replies each', function(done) {
    chai
      .request(server)
      .get('/api/threads/CDE')
      .end(function(err, res) {
        if (!err) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          //assert.equal(res.body[0].text)
          //console.log(res.body);
        } else {
          console.log(err);
        }
        done();
      });
  });
  /* ------------------------------------------------------------ *
  after(function(done) {
    //mod1.clearBoard();
    done();
  });
  /* ------------------------------------------------------------ */
});
