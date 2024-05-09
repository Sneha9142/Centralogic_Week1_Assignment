"use strict";
// app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const logic_2 = require("./logic");
const logic_3 = require("./logic");
const app = (0, express_1.default)();
const port = 3000;
app.get('/split/:stringToSplit', (req, res) => {
    const stringToSplit = req.params.stringToSplit;
    const revisedString = (0, logic_1.splitString)(stringToSplit);
    res.json({ revisedString });
});
app.get('/concatenate/:param1/:param2', (req, res) => {
    const param1 = req.params.param1;
    const param2 = req.params.param2;
    const revisedString = param1 + param2;
    res.json({ revisedString });
});
app.get('/leap-year/:year', (req, res) => {
    const year = parseInt(req.params.year);
    if (isNaN(year)) {
        return res.status(400).json({ error: 'Invalid year. Please provide a valid year.' });
    }
    const isLeap = (0, logic_2.isLeapYear)(year);
    res.json({ year, isLeap });
});
app.get('/secret-handshake/:number', (req, res) => {
    const num = parseInt(req.params.number);
    if (isNaN(num) || num < 1 || num > 31) {
        return res.status(400).json({ error: 'Invalid number. Please provide a number between 1 and 31.' });
    }
    const handshakeSequence = (0, logic_3.secretHandshake)(num);
    res.json({ num, handshakeSequence });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map