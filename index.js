const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;

// Insecure endpoint (no validation)
app.get('/insecure', (req, res) => {
  const url = req.query.url; // no validation
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => res.status(500).send(err.toString()));
});

// Fake secret usage
const dbPassword = process.env.DB_PASSWORD || "SuperSecret123!";

app.get('/', (req, res) => {
  res.send(`DevSecOps Lab running. DB password (demo only): ${dbPassword}`);
});

app.listen(PORT, () => {
  console.log(`DevSecOps Lab listening on port ${PORT}`);
});
