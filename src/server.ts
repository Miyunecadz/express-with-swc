import express, { Request, Response } from "express";
import appConfig from "@/config/app";
import loader from "@/loaders";


const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.send("Hello, World!");
});

(async () : Promise<void> => {
  try {

    loader(app)

    app.listen(appConfig.port, () => {
      console.log(`
      ===================================
          Server started on port ${appConfig.port}
      ===================================
      `);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})()