import followsModel from "./follows-model.js";

export const followUser = (follow) =>
    followsModel.create(follow)

export const findFollowers = (followed)=>
    followsModel.find({followed})
                .populate('follower')
                .exec()

export const findFollowing = (follower)=>
    followsModel.find({follower})
                .populate('followed')
                .exec()

export const unfollow = async (follow) => {
  const deletedFollow = await followsModel.deleteOne(follow);
  return deletedFollow;
};