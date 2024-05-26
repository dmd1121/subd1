const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('openapi.yaml');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/L1', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const customersRouter = require('./routes/customers');
const medsRouter = require('./routes/meds');
const ordersRouter = require('./routes/orders');
app.use('/api/customers', customersRouter);
app.use('/api/meds', medsRouter);
app.use('/api/orders', ordersRouter);

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
