
global.users = [];
  // =======>createUser<=======
const createUser = async (req, res) => {   
    const { id , name, email} = req.body;
    const newUser = { id , name, email };
    users.push(newUser);
    res.status(201).json(newUser); 
  };

// =======>getUser<=======
  const getUser = async (req, res) => {   
    res.json(users);
  };

// =======>deleteUser<=======
const deleteUser = async (req, res) => {   
    const { id } = req.params; 
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
  }
}
module.exports = {getUser , createUser , deleteUser};
  