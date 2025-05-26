let express = require('express');
let app = express();

app.get('/api', (req, res) => {
  res.send({
    message: 'Hello World!'
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
