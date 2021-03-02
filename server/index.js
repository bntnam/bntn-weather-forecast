const path = require('path');

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();

const HOST = 'localhost';
const PORT = 8080;
const API_SERVICE_URL = 'https://www.metaweather.com';

app.use(morgan('dev'));

app.get('/info', (req, res) => {
  res.send('This is a proxy service which proxies to Meta Weather API');
});

app.use(express.static(`${__dirname}/../build`));

app.get('/weather/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use(
  '/api',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting proxy at ${HOST}:${PORT}`);
});
