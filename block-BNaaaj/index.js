console.log('Welcome to Node.js');

// Use of os
let os = require('os');
// console.log(os);
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());
console.log(os.release());
console.log(os.userInfo());

//Use of fs
let { readFile, unlink } = require('fs');

readFile('./content.md', (err, content) => {
  console.log(content.toString());
});

unlink('./content.md', (err) => {
  if (err) console.log(err);
  else {
    console.log('Deleted file: ./content.md');
  }
});

//Buffers
let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(10);
buff1.write('Welcome to JS class!');
buff2.write('Welcome to Node.js!');
console.log(buff1);
console.log(buff2);
console.log(buff1.toString());
console.log(buff2.toString());

// Blocking Code & Unblocking Code
console.log('First');
console.time('Sync Task');
for (let i = 0; i < 1000000; i++) {
  //  Loop Running
}
console.timeEnd('Sync Task');
console.log('Last');

console.log('First');
console.time('Async Task');
setTimeout(() => {
  console.timeEnd('Async Task');
}, 1000);
console.log('Last');
