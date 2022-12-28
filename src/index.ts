import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 80;

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World!</h1>')
})

const newPort = port;
app.listen(newPort, () => {
  console.log(`Express Server listening on port ${newPort}`)
})