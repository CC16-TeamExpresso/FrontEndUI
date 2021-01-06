"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ts
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./models/user"));
const app = express_1.default();
mongoose_1.default.connect('mongodb://localhost:27017/peekify');
if (process.env.NODE_ENV !== 'production') {
    app.use(cors_1.default());
}
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('server works');
});
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: 'error', error: 'Invalid email/password' });
    }
    try {
        const user = new user_1.default({ email, password });
        await user.save();
    }
    catch (error) {
        console.log('Error', error);
        res.json({ status: 'error', error: 'there is an error check it from error status code' });
    }
    res.json({ status: 'okkkkk' });
});
app.post('/api/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await user_1.default.findOne({ email, password }).lean();
    if (!user) {
        return res.json({ status: 'error', error: 'User Not Registered' });
    }
    return res.json({ status: 'ok', data: user });
});
app.listen(8050);
