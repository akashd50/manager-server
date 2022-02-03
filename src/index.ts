import express from "express";
import { Request, Response } from "express";

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World!</h1>')
})

const newPort = process.env.PORT || port;
app.listen(newPort, () => {
  // tslint:disable-next-line:no-console
  console.log(`Express Server listening on port ${newPort}`)
})