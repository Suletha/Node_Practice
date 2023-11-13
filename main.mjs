import { readFile } from 'node:fs';

readFile('./youtube/text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});