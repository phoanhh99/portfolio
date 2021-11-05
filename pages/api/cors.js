import Cors from 'cors';
import initMiddleware from 'lib/init-middleware';

const cors = initMiddleware(Cors({
   methods: ['GET', 'POST']
}))

export default async function handlers(req, res) {
   await cors(req, res);
   res.json({ message: 'Your api is working as intended' })
}