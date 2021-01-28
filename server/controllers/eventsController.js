const sqlite3 = require("sqlite3").verbose();

exports.eventsall = async (req, res, next) => {
  let db = new sqlite3.Database(
    "./database.sqlite3",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("The database has opened successfully");
      }
    }
  );

  console.log(db);
  // db.serialize(() => {
  //   db.each("SELECT * FROM events", (err, row) => {
  //     console.log(row);
  //     res.end(row);
  //   });
  // });

  // db.close;
};

exports.create = async (req, res) => {
  db.serialize(function () {
    db.all(
      `INSERT 
        INTO events(groupid, eventname, startdatetime, enddatetime) 
        values ( 
            ${req.body.groupid}
            , ${req.body.eventname}
            , ${req.body.startdatetime}
            , ${req.body.enddatetime}
        )`,
      (err, row) => {
        console.log(row.name + ":" + row.age);
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
