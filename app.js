const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const vendorRoutes = require('./routes/vendors');
const eventRoutes = require('./routes/events');
const deliveryRoutes = require('./routes/deliveries');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/deliveries', deliveryRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Campus Vendor Tracker API' });
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = app;
