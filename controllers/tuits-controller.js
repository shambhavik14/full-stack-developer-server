import posts from "./users/tuits.js";
let tuits = posts;

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
 app.put('/api/tuits/:tid', dislikeTuit);
}

const createTuit = (req, res) => {
 const newTuit = req.body;
 newTuit._id = (new Date()).getTime()+'';
 newTuit.image = "../../images/susie.jpg";
 newTuit.handle = "susieandassociates";
 newTuit.author = "Susie Mayerson";
 newTuit.likes = 0;
 newTuit.dislikes = 5;
 tuits.push(newTuit);
 res.json(newTuit);
}


const findAllTuits = (req, res) => {
 res.json(tuits);
}

const deleteTuit = (req, res) => {
 const tuitdIdToDelete = req.params.tid;
 tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
 res.sendStatus(200);
}


const updateTuit = (req, res) => {
 const tuitdIdToUpdate = req.params.tid;
 const updatedTuit = req.body;
 tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
 res.sendStatus(200);
}

const dislikeTuit = (req, res) => {
 const tuitdIdToDislike = req.params.tid;
 const dislikedTuit = req.body;
 tuits = tuits.map(t => t._id === tuitdIdToDislike ? dislikedTuit : t);
 res.sendStatus(200);
}


