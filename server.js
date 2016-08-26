var express = require('express');
var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function (req, res) {

    url = 'http://www.imdb.com/title/tt1663202/';

    request(url, function (error, response, html) {

        if (!error) {

            var $ = cheerio.load(html);

            var title, year, rating;
            var json = {
                title   :   "",
                release :   "",
                rating  :   ""
            };

            $('.title_wrapper').filter(function () {
                var data = $(this);
                title = data.children().first().text();
                json.title = title;

                release = data.children().first().children().first().text();
                json.release = release;
            });

            $('.ratingValue').filter(function () {
                var data = $(this);
                rating = data.children().first().text();
                json.rating = rating;
            });

            fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {
                console.log("data scrapped from the website! Check for the output.json file!");
            });

        }

        res.send("Check you're console!");

    })
});

app.listen(8081);
console.log("Open Browser and visit http://localhost:8081/scrape");
exports = module.exports = app;