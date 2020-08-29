// TODO - create server
const express = require('express');
const app = express();

const userRouters = require('./routers/userRouter');
const adminRouters = require('./routers/adminRouter');

// Settings
app.set('port', 4000);

// Middlewares
app.use(express.json());

// Static files
app.use(userRouters);
app.use(adminRouters);

// Start server
app.listen(app.get('port'));
console.log('PORT: ',app.get('port'));
