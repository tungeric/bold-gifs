const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/gifs', (req, res) => {
  res.send([
    { name: 'Barney happy', url: 'https://media.giphy.com/media/6nuiJjOOQBBn2/giphy.gif' },
    { name: 'Gatsby cheers', url: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif' },
    { name: 'Tina Fey self five', url: 'https://media.giphy.com/media/OcZp0maz6ALok/giphy.gif' },
    { name: 'Minions cheer', url: 'https://media.giphy.com/media/fxsqOYnIMEefC/giphy.gif' },
    { name: 'Office dance', url: 'https://media.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif' },
    { name: 'Sloth smile', url: 'https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif' },
    { name: 'Omg excite', url: 'https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif' },
    { name: 'Birthday kid', url: 'https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif' },
    { name: 'Brad Pitt dance', url: 'https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif' },
    { name: 'Charlie wtf', url: 'https://media.giphy.com/media/qPKdzt3x44wy4/giphy.gif' },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));