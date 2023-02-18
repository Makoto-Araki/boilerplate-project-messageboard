// Import Module
const mongoose = require('mongoose');

// Reply Schema
const replySchema = new mongoose.Schema({
  text:            { type: String },
  created_on:      { type: Date, default: Date.now },
  delete_password: { type: String },
  reported:        { type: Boolean, default: false },
});

// Board Schema
const boardSchema = new mongoose.Schema({
  board:           { type: String },
  text:            { type: String },
  created_on:      { type: Date, default: Date.now },
  bumped_on:       { type: Date, default: Date.now },
  delete_password: { type: String },
  reported:        { type: Boolean, default: false },
  replies:         { type: [replySchema] },
});

// Model is made from schema
const Reply = mongoose.model('Reply', replySchema);
const Board = mongoose.model('Board', boardSchema);

// Post Thread
const postThread = function(board, text, pass) {
  return new Promise(function(resolve, reject) {
    
    // Board Instance
    let entry = new Board();
    entry.board = board;
    entry.text = text;
    entry.delete_password = pass;

    // Document is saved
    entry.save(function(err, doc) {
      if (!err) {
        //console.log(`AAA : ${doc}`);
        resolve(doc);
      } else {
        reject(err);
      }
    });
  });
}

// Post Reply
const postReply = function(board, thread, text, pass) {
  return new Promise(function(resolve, reject) {

    // Reply Instance
    let entry = new Reply();
    entry.text = text;
    entry.delete_password = pass;

    // Options
    let opt1 = { board: board, _id: thread };
    let opt2 = { $set: { bumped_on: Date.now() }, $push: { replies: entry } };
    let opt3 = { new: true, upsert: false };

    // Document is updated
    Board
      .findOneAndUpdate(opt1, opt2, opt3)
      .exec(function(err, doc) {
        if (!err) {
          //console.log(`BBB : ${doc}`);
          resolve(doc);
        } else {
          reject(err);
        }
      });
  });
}

// Get Thread
const getThread = function(board) {
  return new Promise(function(resolve, reject) {
    
    // Options
    let opt1 = { board: board };
    let opt2 = { board: 0, delete_password: 0, reported: 0,  __v: 0 };
    let opt3 = { bumped_on: -1 }
    
    Board
      .find(opt1)
      .select(opt2)
      .sort(opt3)
      .limit(10)
      .exec(function(err, doc) {
        if (!err) {
          let result = [];
          let object = {};
          for (let i = 0; i < doc.length; i++) {
            let temp1 = doc[i].replies.length > 3 ? 3 : doc[i].replies.length;
            let temp2 = doc[i].replies.sort((a, b) => a.created_on - b.created_on);
            let temp3 = [];
            for (let i = 0; i < temp1; i++) temp3.push(temp2[i]);
            object = {};
            object._id = doc[i]._id;
            object.text = doc[i].text;
            object.created_on = doc[i].created_on;
            object.bumped_on = doc[i].bumped_on;
            object.replies = temp3;
            object.replycount = doc[i].replies.length;
            result.push(object);
          }
          resolve(result);
        } else {
          reject(err);
        }
      });
  });
}

// Get Reply
const getReply = function(board, thread) {
  return new Promise(function(resolve, reject) {
    
    // Options
    let opt1 = { board: board, _id: thread };
    let opt2 = { board: 0, delete_password: 0, reported: 0,  __v: 0 };
    let opt3 = { bumped_on: -1 }
    
    Board
      .find(opt1)
      .select(opt2)
      .sort(opt3)
      .exec(function(err, doc) {
        if (!err) {
          //console.log(`CCC : ${doc[0]}`);
          //console.log(`DDD : ${doc[0].replies.length}`);
          //*
          let temp1 = [];
          let temp2 = {};
          for (let i = 0; i < doc[0].replies.length; i++) {
            temp2 = {};
            temp2._id = doc[0].replies[i]._id;
            temp2.text = doc[0].replies[i].text;
            temp2.created_on = doc[0].replies[i].created_on;
            temp1.push(temp2);
          }
          let object = {};
          object._id = doc[0]._id;
          object.text = doc[0].text;
          object.created_on = doc[0].created_on;
          object.bumped_on = doc[0].bumped_on;
          object.replies = temp1;
          object.replycount = doc[0].replies.length;
          resolve(object);
          //*/
          //resolve(doc);
        } else {
          reject(err);
        }
      });
  });
}

// Clear all documents in MongoDB collection
const clearBoard = function() {
  let opt1 = {};
  return new Promise(function(resolve, reject) {
    Board
      .deleteMany(opt1)
      .exec(function(err, doc) {
        if (!err) {
          resolve(doc);
        } else {
          reject(err);
        }
      });
  });
}

// Exports
exports.postThread = postThread;
exports.postReply = postReply;
exports.getThread = getThread;
exports.getReply = getReply;
exports.clearBoard = clearBoard;