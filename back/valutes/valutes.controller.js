const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// routes
router.get('/:default', getAllValute);
router.post('/exchange', exchange);

module.exports = router;

function getAllValute(req, res) {
    fetch('https://min-api.cryptocompare.com/data/price?fsym='+req.params.default+'&tsyms=BTC,USD,EUR,RUB,AED,AMD,ARS,BDT,BHD,GBP')
    .then(res => res.json(res))
    .then(body => res.json(body));
}

function exchange(req, res) {
    fetch('https://min-api.cryptocompare.com/data/price?fsym='+req.body.fromValute+'&tsyms='+req.body.toValute )
    .then(res => res.json(res))
    .then(body => res.json(body[req.body.toValute]*req.body.quantity));
}



