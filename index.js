const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GCD and LCM using BigInt for precision
const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));
const lcm = (a, b) => (a === 0n || b === 0n ? 0n : (a * b) / gcd(a, b));

// path
app.get('/azmera9104_gmail_com', (req, res) => {
    const { x, y } = req.query;

    // logic
    const isNatural = (str) => {
        if (!str || !/^\d+$/.test(str)) return false;
        return true;
    };

    if (!isNatural(x) || !isNatural(y)) {
        return res.status(200).send('NaN');
    }

    try {
        const bigX = BigInt(x);
        const bigY = BigInt(y);
        
        // result
        const result = lcm(bigX, bigY);
        
        // result
        res.status(200).send(result.toString());
    } catch (e) {
        res.status(200).send('NaN');
    }
});

app.get('/', (req, res) => res.send('Server is awake!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));