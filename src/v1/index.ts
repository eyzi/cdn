import express from "express";
import cors from "cors";

export default async (port: number, directory: string) => {
  const app = express();
  const corsOptions = {
    origin: true,
    credentials: true,
  };
  app.use(cors(corsOptions));
  app.use("/", express.static(directory));

  app.get("/health", (_, res) => {
    res.status(200).json({ status: "UP" });
  });

  app.all("*", (_req, res) => {
    res.status(404).json({
      fault: "four hundred and four",
      inscription: "The document thee art finding not hath found",
    });
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(
      `CDN server running at port ${port} using directory ${directory}`
    );
  });
};
