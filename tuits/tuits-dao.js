import tuitsModel from './tuits-model.js';

export const findAllTuits = () => tuitsModel.find();
export const createTuit = (tuits) => tuitsModel.create(tuits);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuits) => tuitsModel.updateOne({_id: tid}, {$set: tuits})



