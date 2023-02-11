'use strict';

module.exports = function (app) {
  
  app.route('/api/threads/:board')
    .post(function(req, res) {
      // { board: 'AAA', text: 'AAA text', delete_password: 'AAA-pass' }
      console.dir(req.body); 
    })
    .put(function(req, res) {
      console.dir(req.body);
    })
    .delete(function(req, res) {
      console.dir(req.body);
    });
  
  app.route('/api/replies/:board')
    .post(function(req, res) {
      console.dir(req.body);
    })
    .put(function(req, res) {
      console.dir(req.body);
    })
    .delete(function(req, res) {
      console.dir(req.body);
    });

};
