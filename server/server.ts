import express from 'express'; // ts
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/user';

const app = express();

mongoose.connect('mongodb://localhost:27017/peekify');

if (process.env.NODE_ENV !== 'production') {
	app.use(cors());
}

app.use(bodyParser.json());

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
		const user = new User({ email, password });
		await user.save();
	} catch (error) {
		console.log('Error', error);
		res.json({ status: 'error', error: 'there is an error check it from error status code' });
	}
	res.json({ status: 'okkkkk' });
});

app.post('/api/login', async (req, res) => {
	console.log(req.body);

	const { email, password } = req.body;

	const user = await User.findOne({ email, password }).lean();

	if (!user) {
		return res.json({ status: 'error', error: 'User Not Registered' });
	}

	return res.json({ status: 'ok', data: user });
});

app.listen(8050);
