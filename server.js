/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con);
    console.log('Database connected Successfully');
  })
  .catch((err) => console.error('DB Connection Error:', err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
