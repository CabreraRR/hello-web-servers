const express = require('express');
const app = express();
const path = require('path');
const albums = require('./database/albums.json');
const artists = require('./database/artists.json');
const songs = require('./database/songs.json');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('index.ejs', {
		artists: artists,
		albums: albums
	});
});

app.get('/artist/:artist_id', function (req, res) {
	const artist = artists.filter(function (artist) {
		return artist.id == req.params.artist_id
	})[0]
	res.render('artist.ejs', {
		artists: artists,
		albums: albums,
		songs: songs,
		id: artist.id,
		name: artist.name,
		genre: artist.genre,
	});
});

app.get('/albums', function (req, res) {
	res.render('albums.ejs', {
		albums: albums,
		artists: artists,
		songs: songs
	});
});

app.get('/album/:album_id', function (req, res) {
	const album = albums.filter(function (album) {
		return album.id == req.params.album_id
	})[0]
	res.render('album.ejs', {
		songs: songs,
		artists: artists,
		id: album.id,
		artist: album.artist_id,
		title: album.title,
		year: album.year,
		pic: album.pic
	});
});

app.get('/songs', function (req, res) {
	res.render('songs.ejs', {
		songs: songs,
		artists: artists,
		albums: albums
	});
});

app.listen(3000, function () {
	console.log('Moo-sique Player listening on port 3000!');
});
