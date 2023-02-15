'use strict';

module.exports = function (app) {
  
  app.route('/api/threads/:board')
    .get(function(req, res) {
      console.log('GET - /api/threads/:board');
      console.dir(req.body);
    })
    .post(function(req, res) {
      // { board: 'AAA', text: 'AAA text', delete_password: 'AAA-pass' }
      console.log('POST - /api/threads/:board');
      console.dir(req.body); 
    })
    .put(function(req, res) {
      console.log('PUT - /api/threads/:board');
      console.dir(req.body);
    })
    .delete(function(req, res) {
      console.log('DELETE - /api/threads/:board');
      console.dir(req.body);
    });
  
  app.route('/api/replies/:board')
    .get(function(req, res) {
      console.log('GET - /api/replies/:board');
      console.dir(req.body);
    })
    .post(function(req, res) {
      console.log('POST - /api/replies/:board');
      console.dir(req.body);
    })
    .put(function(req, res) {
      console.log('PUT - /api/replies/:board');
      console.dir(req.body);
    })
    .delete(function(req, res) {
      console.log('DELETE - /api/replies/:board');
      console.dir(req.body);
    });

};
