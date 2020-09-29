var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_neza',
  password        : '6287',
  database        : 'cs290_neza'
});

module.exports.pool = pool;
