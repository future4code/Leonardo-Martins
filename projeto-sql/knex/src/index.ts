import express from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


app.post("/user", async (req, res) => {
  try {
    await connection("User").insert({
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    });

    res.status(201).send("O usuário foi criado!");
  } catch (error) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    await connection("User").insert({
      id: req.body.id,
      nickname: req.body.nickname,
    });

    res.status(201).send("O id do usuário confirmado");
  } catch (error) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});
