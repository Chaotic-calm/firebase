const { db } = require("../config/firebase");

const createUser = async (user) => {
  const newUserRef = db.collection("users").doc(user.email);
  await newUserRef.set(user);
  return user;
};

const getUserByEmail = async (email) => {
  const userDoc = await db.collection("users").doc(email).get();
  return userDoc.exists ? userDoc.data() : null;
};

const updateUser = async (email, updatedData) => {
  await db.collection("users").doc(email).update(updatedData);
  return updatedData;
};

const deleteUser = async (email) => {
  await db.collection("users").doc(email).delete();
};

module.exports = { createUser, getUserByEmail, updateUser, deleteUser };
