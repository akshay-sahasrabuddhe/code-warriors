const mongoCollections = require("../config/mongoCollections");
const requests = mongoCollections.friendrequests;
let { ObjectId } = require("mongodb");
const e = require("express");

async function sendReq(sender, receiver) {
  try {
    let requestdata1 = {
      sender: sender,
      receiver: receiver,
      sent: true,
    };
    let requestdata2 = {
      sender: receiver,
      receiver: sender,
      sent: false,
    };

    let requestCollection = await requests();

    let reqData1 = await requestCollection.insertOne(requestdata1);

    if (reqData1.insertedCount === 0) {
      throw "500";
    } else {
      let reqData2 = await requestCollection.insertOne(requestdata2);
      if (reqData2.insertedCount === 0) {
        throw "500";
      }
    }
    return { request: true };
  } catch (e) {
    throw e;
  }
}
async function searchReq(logUser, visUser) {
  let requestCollection = await requests();

  let searchdata1 = await requestCollection.findOne({
    sender: logUser,
    receiver: visUser,
    sent: true,
  });
  let searchdata2 = await requestCollection.findOne({
    sender: visUser,
    receiver: logUser,
    sent: true,
  });

  if (searchdata1 === null) {
    if (searchdata2 === null) {
      return { request: true, result: null };
    } else {
      console.log(searchdata2);
      return { request: true, result: searchdata2 };
    }
  } else {
    console.log(searchdata1);
    return { request: true, result: searchdata1 };
  }
}

async function canReq(sender, receiver) {
  try {
    let requestCollection = await requests();
    const deletereq1 = await requestCollection.deleteOne({
      sender: sender,
      receiver: receiver,
    });
    if (deletereq1.deletedCount === 0) {
      return { status: false };
    } else {
      const deletereq2 = await requestCollection.deleteOne({
        sender: receiver,
        receiver: sender,
      });
      if (deletereq1.deletedCount === 0) {
        return { status: false };
      } else {
        return { status: true };
      }
    }
  } catch (e) {
    throw e;
  }
}

async function getfriendReqById(userId) {
  if (!userId.trim()) {
    throw "400";
  }

  let requestCollection = await requests();
  let searchdata1 = await requestCollection
    .find({
      receiver: userId,
      sent: true,
    })
    .toArray();
  if (searchdata1.length == 0) {
    return { status: false };
  } else {
    return { status: true, d: searchdata1 };
  }
}
module.exports = {
  sendReq,
  searchReq,
  canReq,
  getfriendReqById,
};
