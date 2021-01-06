import express from 'express'; // ts
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

if (process.env.NODE_ENV !== 'production') {
	app.use(cors());
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('server works');
});

app.post('/api/register', async (req, res) => {
	console.log(req.body);
	res.json({ status: 'okkkkk' });
});

app.listen(8050);
