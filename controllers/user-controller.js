import people from './users/users.js';    // import the array of users
let users = people;

const userController = (app) => {       // use express instance app to declare HTTP GET
app.get('/api/users', findAllUsers);   // request pattern /api/users to call a function
app.get('/api/users/:uid', findUserById);
app.post('/api/users', createUser);
app.delete('/api/users/:uid', deleteUser);
app.put('/api/users/:uid', updateUser);

}

const findAllUsers = (req, res) => {
 const type = req.query.type;
 if(type) {
   res.json(findUsersByType(type));
   return;
 }
 res.json(users);
}

const findUsersByType = (type) => {
 const user = users.filter(u => u.type === type);
 return user;
}

const findUserById = (req, res) => {
 const userId = req.params.uid;
 const user = users.find(u => u._id === userId);
 res.json(user);
}

const createUser = (req, res) => {
 const newUser = req.body;
 newUser._id = (new Date()).getTime() + '';
 users.push(newUser);
 res.json(newUser);
}

const deleteUser = (req, res) => {
 const userId = req.params['uid'];
 users = users.filter(usr =>
   usr._id !== userId);
 res.sendStatus(200);
}

const updateUser = (req, res) => {
 const userId = req.params['uid'];
 const updatedUser = req.body;
 users = users.map(usr =>
   usr._id === userId ?
   updatedUser :
   usr);
 res.sendStatus(200);
}


export default userController;







