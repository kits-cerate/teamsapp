const sqlite3 = require("sqlite3").verbose();
const dbPath = "./server/db/database.sqlite3";

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
        res.json(err);
      } else {
        res.json(row);
      }
    });
  });
  db.close;
};

exports.insert = async (req, res) => {
  let db = openDB();
  db.serialize(() => {
    db.run(
      `INSERT
          INTO events(groupid, eventname, startdatetime, enddatetime)
          values (
              $groupid
              , $eventname
              , $startdatetime
              , $enddatetime
          )`,
      {
        $groupid: req.body.groupid,
        $eventname: req.body.eventname,
        $startdatetime: req.body.startdatetime,
        $enddatetime: req.body.enddatetime,
      },
      (err, row) => {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json({ message: "The event was created correctly" });
        }
      }
    );
  });
  db.close();
};

exports.delete = async (req, res) => {
  let db = openDB();
  db.serialize(function () {
    db.all(
      `DELETE
      FROM
          events 
      WHERE
          id IS NOT NULL`,
      (err, row) => {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json({ message: "The event was deleted correctly" });
        }
      }
    );
  });
  db.close();
};

exports.update = async (req, res) => {
  let db = openDB();
  db.serialize(function () {
    db.all(
      `update events 
      set
          $groupid
          , $eventname
          , $startdatetime
          , $enddatetime
      where
          id = $id`,
      {
        $id: req.body.id,
        $groupid: req.body.groupid,
        $eventname: req.body.eventname,
        $startdatetime: req.body.startdatetime,
        $enddatetime: req.body.enddatetime,
      },
      (err, row) => {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json({ message: "The event was updated correctly" });
        }
      }
    );
  });

  db.close();
};
