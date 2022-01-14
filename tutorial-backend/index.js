const express = require('express');
const app = express();

app.get('/api/:file', (req, res) => {
    if (!req.params.file) {
        return res.sendStatus(400);
    }

    const file = req.params.file;

    try {
        return res.sendFile(`${__dirname}/images/${file}`);
    } catch (exception) {
        console.log(exception);
        return res.sendStatus(404);
    }
})

app.listen(process.env.PORT || 3004, () => {
    console.log(`listening on port ${process.env.PORT || 3004}`);
})