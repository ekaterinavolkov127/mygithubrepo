const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api', (req, res) => {
  const { name, age } = req.body;
  
  if (!name || !age) {
    return res.status(400).json({ message: 'Please provide both a name and an age.' });
  }
  
  // Add logic to your application
  console.log(`User with name ${name} and age ${age} has been registered.`);
  
  res.json({ message: 'User added successfully!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
