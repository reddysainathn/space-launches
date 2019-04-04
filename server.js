var connect = require('connect');
var port = process.env.PORT || 1443;
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on 1443...');
});
