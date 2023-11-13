import { readFile } from 'node:fs';

readFile('./youtube/text.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});