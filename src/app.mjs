// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';



import dotenv from 'dotenv';
// import middlewares from './middlewares.mjs';
import api from './api/index.mjs';

dotenv.config();

const app = express();

import { notFound, errorHandler } from './middlewares.mjs';

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '✨👋🌎🌍🌏✨',
  });
});



app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);


export default app;


// module.exports = app;




// const morgan = require('morgan');
// const helmet = require('helmet');
// const cors = require('cors');
// import { config } from 'dotenv'

// require('dotenv').config();
// const middlewares = require('./middlewares');
// const api = require('./api');