// Import Module
const mongoose = require('mongoose');

// Schema
const replySchema = new mongoose.Schema({
  text:            { type: String },
  created_on:      { type: Date, default: Date.now },
  delete_password: { type: String },
  reported:        { type: Boolean, default: false },
});

// Schema
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

// New Thread
const newThread = function(req) {
  return new Promise(function(resolve, reject) {
    
    // Board Instance
    let entry = new Board();
    entry.board = req.body.board;
    entry.text = req.body.text;
    entry.delete_password = req.body.delete_password;
    
    entry.save(function(err, doc) {
      if (!err) {
        resolve(doc);
      } else {
        reject(err);
      }
    });
  });
}

// New Reply
const newReply = function(req) {
  return new Promise(function(resolve, reject) {

    // Reply Instance
    let entry = new Reply();
    entry.text = req.body.text;
    entry.delete_password = req.body.delete_password;

    // Options
    let opt1 = { _id: req.body.thread_id };
    let opt2 = { $set: { bumped_on: Date.now() }, $push: { replies: entry } };
    let opt3 = { new: true, upsert: false };
    
    Board
      .findOneAndUpdate(opt1, opt2, opt3)
      .exec(function(err, doc) {
        if (!err) {
          resolve(doc);
        } else {
          reject(err);
        }
      });
  });
}

// Get Thread
const getThread = function(req) {
  return new Promise(function(resolve, reject) {
    
    // Options
    let opt1 = { board: req.params.board };
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
            for (let i = 0; i < temp1; i++) {
              temp3.push(temp2[i]);
            }
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

/*
// Get Stock likes from MongoDB Collection
const getStockLikes = function(name) {
  let opt1 = { like: name };
  let opt2 = { _id: 0, __v: 0 };
  return new Promise(function(resolve, reject) {
    Likes
      .find(opt1)
      .select(opt2)
      .exec(function(err, doc) {
        if (!err) {
          resolve(doc.length);
        } else {
          reject(err);
        }
      });
  });
}
*/

/*
// Set a combination of IP address and stock name in MongoDB collection
const setStockLikes = function(addr, name) {
  return new Promise(function(resolve, reject) {
    let entry = new Likes();
    entry.addr = bcrypt.hashSync(addr, 6);  // saltRounds(6)
    entry.like = name;
    entry.save(function(err, doc) {
      if (!err) {
        resolve(doc);
      } else {
        reject(err);
      }
    });
  });
}
*/

/*
// Check if a combination of IP address and stock name exists
const chkAddrStockPairs = function(addr, name) {
  let flg = false;
  let opt1 = { like: name };
  let opt2 = { _id: 0, __v: 0 };
  return new Promise(function(resolve, reject) {
    Likes
      .find(opt1)
      .select(opt2)
      .exec(function(err, doc) {
        if (!err) {
          for (let i = 0; i < doc.length; i++) {
            if (bcrypt.compareSync(addr, doc[i].addr) === true) {
              flg = true;
              break;
            }
          }
          resolve(flg);
        } else {
          reject(err);
        }
      });
  });
}
*/

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
exports.newThread = newThread;
exports.newReply = newReply;
exports.getThread = getThread;
//exports.getStockLikes = getStockLikes;
//exports.setStockLikes = setStockLikes;
//exports.chkAddrStockPairs = chkAddrStockPairs;
exports.clearBoard = clearBoard;