import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/book/:db_title",(req,res) => {
    console.log(`Conectado a ${req.params.db_title}`); 
    res.json({ message: `Libro solicitado: ${req.params.db_title}` });
}); 

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

