let express = require('express');
let app = express();

app.use(express.static('uploads'));

app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/upload.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
