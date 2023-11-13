const fs = require('fs');
fs.mkdir('./new_dir', (err) => {
    if (err) throw err
    console.log("Directory Created")
})
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Perform any necessary cleanup or logging
    process.exit(1); // Exit the process with a non-zero status code
  });
  