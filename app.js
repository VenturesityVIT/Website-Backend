const express = require('express');
const cors = require('cors');
const rateLimit = require("express-rate-limit");

const hackParticipation = require('./routes/hackParticipation');


const app = express();

app.use(cors());
app.use(express.json());

app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000
});

app.use(limiter);

app.use('/hackathon', hackParticipation);

app.use('*', (req, res, next) => res
    .status(400)
    .json({
        error: {
            msg: "Invalid API endpoint"
        }
    })
);


app.listen('3030', (req, res, next) => console.log('Server rocks on 3030'));