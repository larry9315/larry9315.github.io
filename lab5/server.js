const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();




app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/', function(req, res) {
	
		res.sendFile(path.join(__dirname, '/lab5.html'));
	

});

app.get('/getAllData', function(req, res) {
	var users = [];

	fs.readFile("users.json", (error, data)=>{
		console.log(JSON.parse(data));
		if (error) {
			console.log("error");
		} else {
			users = JSON.parse(data);
		}
		res.send(users);
	})
})

app.post('/addUsers', (req, res) => {
	

	let postingData = req.body;
	let jsonObject = {name: postingData.artistName, about: postingData.aboutArtist, img: postingData.imagUrl};
	console.log(jsonObject);

	let users = [];

	fs.readFile("users.json", (error, data)=>{
		console.log(JSON.parse(data));
		if (error) {
			console.log("error");
		} else {
			users = JSON.parse(data);
		}
		users.push(jsonObject);
		fs.writeFile("users.json", JSON.stringify(users), (error)=>{
			if (error) {
				console.log("error");
			} else {
				res.redirect("/");
			}
		});
	})
})

app.delete('/deleteUsers/:index', (req,res)=>{
	let index = req.params.index;
	
	
	console.log("hello world");

	let users = [];

	fs.readFile("users.json", (error, data)=>{
		console.log(JSON.parse(data));
		if (error) {
			console.log("error");
		} else {
			users = JSON.parse(data);
		}
		users.splice(index, 1);
		fs.writeFile("users.json", JSON.stringify(users), (error)=>{
			if (error) {
				console.log("error");
			} else {
				res.redirect("/");
			}
		});
	})
})

app.listen(8000);