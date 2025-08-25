import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { res.send('Welcome to the world of NodeJS...')});

app.listen(port, () => { console.log(`Server runnig on port ${port}...`) });
