import * as dotenv from "dotenv";
import config from "./config";
dotenv.config();

import app from './server'

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
});