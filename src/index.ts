import express from "express";
import diariesRouter from "./routes/diaries"

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
