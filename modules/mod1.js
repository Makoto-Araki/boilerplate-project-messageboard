// Import Module
const mongoose = require('mongoose');

// Schema
const replySchema = new mongoose.Schema({
  text: { type: String },
  created_on: { type: Date, default: Date.now },
  delete_password: { type: String },
  reported: { type: Boolean },
});

// Schema
const threadSchema = new mongoose.Schema({
  text: { type: String },
  created_on: { type: Date, default: Date.now },
  bumped_on: { type: Date, default: Date.now },
  delete_password: { type: String },
  reported: { type: Boolean },
  replies: { type: [replySchema] },
});

// Model is made from schema
const Thread = mongoose.model('Thread', threadSchema);

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

/*
// Clear all documents in MongoDB collection
const clearLikes = function() {
  let opt1 = {};
  return new Promise(function(resolve, reject) {
    Likes
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
*/

// Exports
//exports.getStockLikes = getStockLikes;
//exports.setStockLikes = setStockLikes;
//exports.chkAddrStockPairs = chkAddrStockPairs;
//exports.clearLikes = clearLikes;