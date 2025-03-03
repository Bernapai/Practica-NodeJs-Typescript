import express from 'express';
import router from './routes/songRoutes';

const app = express();
const port = 3000;
app.use(express.json())

app.get('/', (_, res) => {
    res.send('Hello World!');
});

app.use('/alumnos', router);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
