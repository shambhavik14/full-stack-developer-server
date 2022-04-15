import tuitsDao from "../tuits/tuits-dao.js";

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
 app.put('/api/tuits/:tid', dislikeTuit);
}

const createTuit = async (req, res) => {
 const newTuit = req.body;
 const insertedTuit = await tuitsDao.createTuit(newTuit);
 newTuit.image = "../../images/susie.jpg";
 newTuit.handle = "susieandassociates";
 newTuit.author = "Susie Mayerson";
 newTuit.likes = 0;
 newTuit.dislikes = 5;
 res.json(insertedTuit);
}


const findAllTuits = async (req, res) => {
const tuits = await tuitsDao.findAllTuits()
 res.json(tuits);
}

const deleteTuit = async (req, res) => {
 const tuitdIdToDelete = req.params.tid;
 const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
 res.send(status);
}


const updateTuit = async (req, res) => {
 const tuitdIdToUpdate = req.params.tid;
 const updatedTuit = req.body;
 const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
 res.sendStatus(200);
}

const dislikeTuit = (req, res) => {
 const tuitdIdToDislike = req.params.tid;
 const dislikedTuit = req.body;
 tuits = tuits.map(t => t._id === tuitdIdToDislike ? dislikedTuit : t);
 res.sendStatus(200);
}




