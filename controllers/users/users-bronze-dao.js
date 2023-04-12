import usersBronzeModel from "./users-bronze-model.js";

export const createUser = (user) =>
    usersBronzeModel.create(user)

export const findAllUsers = () =>
    usersBronzeModel.find()

export const findUserById = (uid) =>
    usersBronzeModel.findById(uid)

export const findByUsername = (username) =>
    usersBronzeModel.findOne({username})

export const findByCredentials = (username, password) =>
    usersBronzeModel.findOne({username, password}, {password:false})

export const deleteUser = (uid) =>
    usersBronzeModel.deleteOne({_id: uid})

export const updateUser = (userUpdates) =>
    usersBronzeModel.updateOne({_id: userUpdates._id},
        {$set: userUpdates})

export const welcomeRecentNewUsers = () =>
    usersBronzeModel.find().sort({_id:-1}).limit(4)