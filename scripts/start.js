//browser-sync start --server --files \"*.html, css/*.css\"
//amok index.js --browser chrome --hot

var browserSync  = require("browser-sync").create();
var htmlInjector = require("bs-html-injector");
var spawn        = require('child_process').spawn;
var which        = require('which');
var amok         = which.sync('amok');

browserSync.use(htmlInjector, {
    // Files to watch that will trigger the injection 
    files: "*.html" 
});

browserSync.init({
  open: false,
  server: {
    baseDir: './'
  },
  files: ['css/**/*.css']
});

var amok = spawn(amok, [
  '--hot',
  '--browser',
  'chrome',
  'http://localhost:3000/',
  'js/index.js',
]);
amok.stdout.on('data', function (data) {
  console.log('Amok: ' + data.toString('utf8'));
});
amok.stderr.on('data', function (data) {
  console.log('Amok: ' + data.toString('utf8'));
});
amok.on('close', console.log.bind(console, 'Amok exited with code:'));
