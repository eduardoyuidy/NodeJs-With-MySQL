const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '<host>',
	port: '<port>',
	user: '<user>',
	password: '<password>', 
	database: '<database>'
});

connection.connect(function(err){
	if(err) return console.log(err);
	console.log('Connected!');
});

connection.query('select * from <table>', function(error, results, fields){
	if(error) throw error;
	console.log('Results', results[0]);	
})

connection.end();
