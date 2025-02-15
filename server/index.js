import express from 'express';
import cors from 'cors';
import fileCreation from './fileCreation.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/data', (req, res) => {
    res.send('Hello World!');
});
 app.post('/data', (req, res) => {
    const userData = req.body;
    const name = userData.firstName+" "+userData.lastName;
    console.log(userData)
    fileCreation(name, userData)
    res.send(200,"Data received successfully!");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});