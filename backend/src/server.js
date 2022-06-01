const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST, PORT } = process.env;

const port = PORT || 5000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running. Use our API on port: ${port}`);
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
