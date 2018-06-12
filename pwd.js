function prompted () {
  process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
      const cmd = data.toString().trim();

    if (cmd === "pwd") {
      pwd()
    }
    else {
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
    }
  });
}

function pwd(){
  console.log(`Current directory: ${process.cwd()}`);
}

module.exports = {
  prompted: prompted,
  pwd: pwd
}
