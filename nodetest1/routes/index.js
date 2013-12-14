
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello, World!' });
};
/*
exports.temperature = function(db) {
    return function(req, res) {
        var collection = db.get('temperature');
        collection.find({},{},function(e,docs){
            res.render('temperature', {
                "temperature" : docs
            });
        });
    };
};
*/

var temp;
var lastTemp;


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('temperature');
db.each("SELECT time, value FROM temperature WHERE time = (SELECT MAX(time) from temperature)",function(err, row){
	lastTemp = row.value;
	console.log("last temperature entered is : "+ lastTemp);
});

db.all("SELECT time, value FROM temperature", function(err, rows){
	temp = rows;
	console.dir(temp);
});
//console.dir(temp);
db.close();

exports.temperature = function(req, res){
  res.render('temp-theme', { temperature : temp, currentTemperature : lastTemp });
};
