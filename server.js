var express = require('express'),
    cors = require('cors'),
    app = express(),
    faker = require('faker');

app.set('port', process.env.PORT || 3500);
app.use(cors());

app.get('/api', (req, res) => {
  res.json(Array.from(Array(1000), (_, i) => faker.helpers.createCard()))
});

app.listen(app.get('port'), () => {
  console.log('Server up: http://localhost:' + app.get('port'));
});