import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config({ path: './.env.local' })


const ops = process.env.VITE_OPS;
const port = process.env.VITE_PORT;
const corsOptions = {
    origin: process.env.VITE_LOCALHOST,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.get("/api/hello", (req, res) => {
    res.json({ hello: "world" });
    console.log("Hello")
});

app.post("/api/hello", (req, res) => {
    const data = req.body;
    console.log(data.name);
    res.send();
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(ops)
});
