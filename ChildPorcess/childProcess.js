var { spawn, exec } = require('child_process');

// 'node' is an executable command (can be executed without a shell)
// uses streams to transfer data (spawn.stout)
var spawn = spawn('ping', ['google.com']);
spawn.stdout.on('data', function (msg) {
    console.log(msg.toString())
});

// the 'node module.js' runs in the spawned shell
// transfered data is handled in the callback function
var exec = exec('ping google.com', function (err, stdout, stderr) {
    console.log(stdout);
});