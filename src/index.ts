import "dotenv/config";
import express, { Request, Response, Express } from "express";

// utils
import { PORT } from "utils/constants";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Home Page" });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
