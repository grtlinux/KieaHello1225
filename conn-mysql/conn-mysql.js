// SSL connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'mysql12171.mysql.database.azure.com',   // ȣ��Ʈ �ּ�
    port     : '3306',                                  // PORT
    user     : 'kiea@mysql12171',                       // mysql user
    password : 'Kang1234!@#$',                          // mysql password
    database : 'db1218',                                // mysql �����ͺ��̽�
    ssl      : true,                                    // SSL
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', 
function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
connection.end();
