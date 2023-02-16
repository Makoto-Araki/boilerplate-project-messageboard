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

// New Thread
const newThread = async function(req) {
  return await mod1.newThread(req);
}

// New Reply
const newReply = async function(req) {
  return await mod1.newReply(req);
}

// Get Thread
const getThread = async function(req) {
  return await mod1.getThread(req);
}

module.exports = function (app) {
  
  app.route('/api/threads/:board')
    .get(function(req, res) {
      //
    })
    .post(function(req, res) {
      newThread(req)
        .then(function(result) {
          res.json(result);
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
      //
    })
    .post(function(req, res) {
      newReply(req)
        .then(function(result) {
          res.json(result);
        })
    })
    .put(function(req, res) {
      // { board: 'AAA', thread_id: 'AAA-id', reply_id: 'AAA-01-id' }
      console.log('PUT - /api/replies/:board');
      console.dir(req.body);
    })
    .delete(function(req, res) {
      /*{ 
        board: 'AAA',
        thread_id: 'AAA-id',
        reply_id: 'AAA-01-id',
        delete_password: 'AAA-pass'
      }*/
      console.log('DELETE - /api/replies/:board');
      console.dir(req.body);
    });

};
