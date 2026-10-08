import express from "express";
import { filterDataParam } from "./utility/filterDataParam.js";
import { apiRouter } from "./routes/apiRoutes.js";

const PORT = 8000;

const app = express();

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(400).json({
    message: "Endpoint not found. Please check the API documentation.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
