import { version } from '../../package.json';
import { Router } from 'express';

export default ({ config }) => {

  let api = Router();

  api.get('/route', (req, res) => {
		res.json({
      version,
      route:"no route available"
    });
	});

  api.get('/', (req, res) => {
		res.json({ version });
	});

  return api;
}
