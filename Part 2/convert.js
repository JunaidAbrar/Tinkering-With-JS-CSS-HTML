const rates = {
    usd: { usd: 1, gbp: 0.49246, cad: 1.01941, eur: 1.41544, aud: 0.88297 },
    gbp: { usd: 2.03032, gbp: 1, cad: 2.03032, eur: 2.87465, aud: 1.79294 },
    cad: { usd: 0.98054, gbp: 0.49221, cad: 1, eur: 1.38814, aud: 0.86613 },
    eur: { usd: 0.70641, gbp: 0.34803, cad: 0.72037, eur: 1, aud: 0.62382 },
    aud: { usd: 1.13262, gbp: 0.56631, cad: 1.15498, eur: 1.60329, aud: 1 }
};

function convertCurrency(source) {
    const amount = parseFloat(document.getElementById(source).value);
    if (isNaN(amount)) return;

    for (let currency in rates[source]) {
        if (currency !== source) {
            document.getElementById(currency).value = (amount * rates[source][currency]).toFixed(4);
        }
    }
}
