const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
app.get('/', function (req, res) {
	res.render('index.ejs', {});
});
app.get('/albums', function (req, res) {
	res.render('albums.ejs', {});
});
app.get('/songs', function (req, res) {
	res.render('songs.ejs', {});
});
