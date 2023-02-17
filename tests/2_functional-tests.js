const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
const mod1 = require('../modules/mod1');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  /* ------------------------------------------------------------ *
  before(function(done) {
    let arr = [
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
    for (let i = 0; i < arr.length; i++) {
      let obj1 = { thread_id: res1.body._id, text: `reply0${j}`, delete_password: `reply0${j}` };
      chai
        .request(server)
        .post('/api/threads/CDE')
        .send(arr[i])
        .end(function(err1, res1) {
          if (!err1) {
            for (let j = 1; j <= 5; j++) {
              chai
                .request(server)
                .post('/api/replies/CDE')
                .send(opt1)
                .end(function(err2, res2) {
                  if (!err2) {
                    // console.log(`Reply to ${res2.body._id} was added`);
                  } else {
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
        done();
      });
  });
  /* ------------------------------------------------------------ *
  after(function(done) {
    mod1.clearBoard();
    done();
  });
  /* ------------------------------------------------------------ */
});
