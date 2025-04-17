import express from "express";
import { ExpressConfig } from "@Configs/ExpressConfig";

const app = express();

app.listen(ExpressConfig.EXPRESS_PORT, () => {
  console.log(`Server is listening at http://localhost:${ExpressConfig.EXPRESS_PORT}`);
});