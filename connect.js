//Setup
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(":memory:");

db.serialize(function(){

  //Create database
  db.run('CREATE TABLE animals(Heads int, Legs int, Name text)');

  //Insert to table
  db.run('INSERT INTO animals(Heads, Legs, Name) VALUES (1, 2, "Human")');
  db.run('INSERT INTO animals(Heads, Legs, Name) VALUES (1, 4, "Dog")');

  //Delete from table
  db.run('DELETE FROM animals WHERE Name = "Human"');

  //Query data
  db.all('SELECT * FROM animals', [], (err, rows) =>{
    if(err) throw(err);
    rows.forEach((row) => {
      console.log(row);
    });});});

db.close();
