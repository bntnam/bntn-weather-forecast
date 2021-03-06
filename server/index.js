const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8080;
const API_SERVICE_URL = 'https://www.metaweather.com';

app.use(morgan('dev'));

app.get('/info', (req, res) => {
  res.send('This is a proxy service which proxies to Meta Weather API');
});

app.use(express.static(`${__dirname}/../build`));

app.use(
  '/api',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Starting proxy at ${PORT}`);
});
