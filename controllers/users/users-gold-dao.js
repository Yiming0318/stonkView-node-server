import usersGoldModel from "./users-gold-model.js";

export const createUser = (user) =>
    usersGoldModel.create(user)

export const findAllUsers = () =>
    usersGoldModel.find()

export const findUserById = (uid) =>
    usersGoldModel.findById(uid)

export const findByUsername = (username) =>
    usersGoldModel.findOne({username})

export const findByCredentials = (username, password) =>
    usersGoldModel.findOne({username, password}, {password:false})

export const deleteUser = (uid) =>
    usersGoldModel.deleteOne({_id: uid})

export const updateUser = (userUpdates) =>
    usersGoldModel.updateOne({_id: userUpdates._id},
        {$set: userUpdates})