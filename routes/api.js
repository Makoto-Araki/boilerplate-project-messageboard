'use strict';

// Import Module
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mod1 = require('../modules/mod1');

// Secrets Config
dotenv.config();

// Secrets
const user = process.env['user'];
const pass = process.env['pass'];
const cluster = process.env['cluster'];
const database = process.env['database'];
const option = process.env['option'];

// Constant for Mongo Database
const mongouri = `mongodb+srv://${user}:${pass}@${cluster}/${database}?${option}`;

// MongoDB Connect Config
mongoose.set('strictQuery', false);

// MongoDB Connect
mongoose
  .connect(mongouri)
  .then(function() {
    console.log('MongoDB connected');
  })
  .catch(function(error) {
    console.log(error);
  });

// Post Thread
const postThread = async function(req) {
  return await mod1.postThread(req.params.board, req.body.text, req.body.delete_password);
}

// Post Reply
const postReply = async function(req) {
  return await mod1.postReply(req.params.board, req.body.thread_id, req.body.text, req.body.delete_password);
}

// Get Thread
const getThread = async function(req) {
  return await mod1.getThread(req.params.board);
}

// Get Reply
const getReply = async function(req) {
  return await mod1.getReply(req.params.board, req.query.thread_id);
}

module.exports = function (app) {
  
  app.route('/api/threads/:board')
    .get(function(req, res) {
      getThread(req)
        .then(function(result) {
          res.json(result);
        });
    })
    .post(function(req, res) {
      postThread(req)
        .then(function(result) {
          res.send(result);
        });
    })
    .put(function(req, res) {
      // { board: 'AAA', thread_id: 'AAA-id' }
    })
    .delete(function(req, res) {
      // { board: 'AAA', thread_id: 'AAA-id', delete_password: 'AAA-pass' }
    });
  
  app.route('/api/replies/:board')
    .get(function(req, res) {
      getReply(req)
        .then(function(result) {
          res.json(result);
        });
    })
    .post(function(req, res) {
      postReply(req)
        .then(function(result) {
          res.send(result);
        })
    })
    .put(function(req, res) {
      //
    })
    .delete(function(req, res) {
      //
    });

};
