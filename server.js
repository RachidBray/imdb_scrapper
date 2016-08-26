var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();


app.get('/scrape', function(req, res){

	// First the url from where we'll scrape the data
	url = 'www.imdb.com/title/tt1663202/';

	// The structure of the request url comes here
	// The first parameter is our url
	// The callback function takes three parameter, an error, response status code, and the html

	request(url, function(error, response, html){

		// First we'll make sure no error occured while making the request

		if (!error) {

			// Now we'll use cheerio library which is the jQuery of the server

			var $ = cheerio.load(html);

			// Finally we'll define the variables we're going to capture

			var title, release, rating;
			var json = {
				title = "",
				release = "",
				rating = ""
			};

		}

	})

})


app.listen('8081');
console.log('Magic happens at port 8081');
exports = module.exports = app;
