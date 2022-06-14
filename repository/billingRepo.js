var sql = require("mssql");

const makeRequest = async () => {
    console.log('REalizando request');
  // config for your database
//   var config = {
//       user: 'sa',
//       password: '1234',
//       server: '4.tcp.ngrok.io', 
//       port:19500,
//       database: 'ELMUCO_DB',
//       synchronize: true,
//       trustServerCertificate: true,
//       connectionTimeout: 60000,
//       requestTimeout: 60000,
//   };

var config = {
    user: 'admin',
    password: '12345678',
    server: 'elmucords2.cw7nnurkc6a0.us-east-2.rds.amazonaws.com', 
    port:1433,
    database: 'ELMUCO_DB',
    synchronize: true,
    trustServerCertificate: true,
    connectionTimeout: 60000,
    requestTimeout: 60000,
};
  // connect to your database
  sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      var request = new sql.Request();
      // query to the database and get the records
      request.query('exec getUsers', function (err, recordset) {
          if (err) console.log(err)
          // send records as a response
         console.log(recordset);
         return recordset;
      });
  });

}

module.exports = {makeRequest};