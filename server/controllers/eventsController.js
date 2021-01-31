const sqlite3 = require("sqlite3").verbose();
const dbPath = "./db/database.sqlite3";
const errorMsg = "Internal Server Error";

const openDB = () => {
  let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The database opened successfully");
    }
  });
  return db;
};

exports.getAll = async (req, res) => {
  let db = openDB();
  db.serialize(() => {
    db.all("SELECT * FROM events", (err, row) => {
      if (err) {
        console.log(err);
        res.status(500).send(errorMsg);
      } else {
        res.send(row);
      }
    });
  });
  db.close;
};

exports.insert = async (req, res) => {
  console.log(req.body);
  let db = openDB();
  db.serialize(() => {
    db.run(
      `INSERT
          INTO events(groupid, eventname, startdatetime, enddatetime)
          values (
              '${req.body.groupid}'
              , '${req.body.eventname}'
              , '${req.body.startdatetime}'
              , '${req.body.enddatetime}'
          )`,
      (err, row) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send();
        }
      }
    );
  });
  db.close();
};

exports.delete = async (req, res) => {
  db.serialize(function () {
    db.all(
      `DELETE 
      FROM
          events 
      WHERE
          id = ${req.body.id}`,
      (err, row) => {
        console.log(row.name + ":" + row.age);
      }
    );
  });

  db.close();
};

exports.update = async (req, res) => {
  db.serialize(function () {
    db.all(
      `update events 
      set
          groupid = ${req.body.groupid}
          , eventname = ${req.body.eventname}
          , startdatetime = ${req.body.startdatetime}
          , enddatetime = ${req.body.enddatetime}
      where
          id = ${req.body.id}`,
      (err, row) => {
        console.log(row.name + ":" + row.age);
      }
    );
  });

  db.close();
};
