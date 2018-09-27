# Sample of a connection to MySQL database from Node Js

This is a sample of a connection to MySQL database from Node Js using [npm mysql](https://github.com/mysqljs/mysql) - Thanks guys!! ;).

## Table of Contents

- [Install](#install)
- [Introduction](#introduction)

## Install

This is a [Node.js] project so you can download the project in your computer. 

You will need Node.js installed, so you can [download and install Node.js](https://nodejs.org/en/download/).

Once the installation is done [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

This command will install all dependecies for our project. 

```
$ npm install
```

## Introduction

Open the file **create-table.js** and edit the MySQL informations:

```js
const connection = mysql.createConnection({
	host: '<host>',
	port: '<port>',
	user: '<user>',
	password: '<password>', 
	database: '<database>'
});
```
You also need to set your MySQL command in this part <table>: 

```js
connection.query('select * from <table>', function(error, results, fields){
	if(error) throw error;
	console.log('Results', results[0]);	
})
``` 
Then in your terminal go to your folder project and execute [`node create-table.js` command]

```sh
C:\TempY\node4mysql\nodemysql>node create-table.js
Connected!
Results RowDataPacket {
  id: 1,
  nome: 'Eduardo Yuidy',
  telefone: '12345678',
  endereco: 'Rua Vergueiro' }
```

If the terminal emit this error: 
```sh
Client does not support authentication protocol requested by server; consider upgrading MySQL client
 ```

This error occurs because a difference of the password authentication, so you can fix this error creating a new user for this communication. [Learn More](https://dev.mysql.com/doc/refman/5.5/en/old-client.html)

```
// Mysql - Terminal
CREATE USER 'integration'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
grant select, insert, update, delete, create on	<table>.* to 'integration'@'localhost';
flush privileges;
```