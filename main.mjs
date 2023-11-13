import { readFile } from 'node:fs';

readFile('./youtube/text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process with a non-zero status code
});
