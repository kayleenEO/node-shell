var pwd = require('./pwd')
var ls = require('./ls')

function prompted () {
  process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
      const cmd = data.toString().trim();

    if (cmd === "ls") {
      ls.ls()
    } else if (cmd === 'pwd'){
      pwd.pwd()
    }
    else {
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
    }
  });
}

prompted()
