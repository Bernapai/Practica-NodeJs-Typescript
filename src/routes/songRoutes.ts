import express from 'express';

const router = express.Router();


router.get('/', (_req, res) => {
    res.send('Fetching data from database...');
});

router.post('/', (_req, res) => {
    res.send('Creating new record...');
});

export default router;