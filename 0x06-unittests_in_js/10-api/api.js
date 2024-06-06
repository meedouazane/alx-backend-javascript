const express = require('express');

const app = express();
const port = 7865;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
    const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
    res.send(obj);
});

app.post('/login', (req, res) => {
    if (req.body) {
        const username = req.body.userName;
        res.send(`Welcome ${username}`);
    }
});

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;

    if (!isNaN(Number(id))) {
        res.send(`Payment methods for cart ${id}`);
    } else {
        res.status(404).send('Not Found');
    }
});
app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
exports.module = app;
