import cors from "cors";
import type { Express } from "express";
import { PingRouter } from "@Routers/PingRouter";

export class Bootstrap {
  constructor(private app: Express) {}

  public addRouters(): void {
    this.app.use("/api/ping", PingRouter);
  };

  public addCors(): void {
    this.app.use(cors());
  };
};