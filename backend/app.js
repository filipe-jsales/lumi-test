const express = require('express');
const app = express();
const db = require('./models');
const routes = require('./config/router');

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
