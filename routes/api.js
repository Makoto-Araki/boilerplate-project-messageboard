'use strict';

module.exports = function (app) {
  
  app.route('/api/threads/:board')
    .post(function(req, res) {
      console.dir(req);
    })
    .put(function(req, res) {
      console.dir(req);
    })
    .delete(function(req, res) {
      console.dir(req);
    });
  
  app.route('/api/replies/:board')
    .post(function(req, res) {
      console.dir(req);
    })
    .put(function(req, res) {
      console.dir(req);
    })
    .delete(function(req, res) {
      console.dir(req);
    });

};
