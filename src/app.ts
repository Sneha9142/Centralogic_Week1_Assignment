// app.ts

import express, { Request, Response } from 'express';
import { splitString } from './logic';
import { isLeapYear } from './logic'; 
import { secretHandshake } from './logic';

const app = express();
const port = 8000;

app.get('/split/:stringToSplit', (req: Request, res: Response) => {
    const stringToSplit = req.params.stringToSplit;
    const revisedString = splitString(stringToSplit);

    res.json({ revisedString });
});
app.get('/concatenate/:param1/:param2', (req: Request, res: Response) => {
    const param1 = req.params.param1;
    const param2 = req.params.param2;
    const revisedString = param1 + param2;

    res.json({ revisedString });
});

app.get('/leap-year/:year', (req: Request, res: Response) => {
    const year = parseInt(req.params.year);

    if (isNaN(year)) {
        return res.status(400).json({ error: 'Invalid year. Please provide a valid year.' });
    }

    const isLeap = isLeapYear(year);

    res.json({ year, isLeap });
});

app.get('/secret-handshake/:number', (req: Request, res: Response) => {
    const num = parseInt(req.params.number);

    if (isNaN(num) || num < 1 || num > 31) {
        return res.status(400).json({ error: 'Invalid number. Please provide a number between 1 and 31.' });
    }

    const handshakeSequence = secretHandshake(num);

    res.json({ num, handshakeSequence });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
