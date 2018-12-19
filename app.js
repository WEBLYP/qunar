/**
 * Created by WEB on 2018/8/23.
 */
var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

// fake app

debug('booting %o', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(8080, function(){
  debug('listening');
});

// fake worker of some kind

require('./worker');
