const fs = require('fs')

function ls () {
  try {
    fs.readdir('./', 'utf8', (err,files) => {
      if(err) {
        throw err
      } else {
        process.stdout.write(files.join('\n'))
        process.stdout.write("prompt > ");
      }
    })
  } catch(err) {
      console.log(`whoops!`);
  }
}

module.exports = {
  ls: ls
}
