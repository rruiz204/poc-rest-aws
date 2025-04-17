import express from "express";

import { Bootstrap } from "bootstrap";
import { ExpressConfig } from "@Configs/ExpressConfig";

const app = express();

const bootstrap = new Bootstrap(app);

bootstrap.addCors();
bootstrap.addRouters();

app.listen(ExpressConfig.EXPRESS_PORT, () => {
  console.log(`Server is listening at http://localhost:${ExpressConfig.EXPRESS_PORT}`);
});