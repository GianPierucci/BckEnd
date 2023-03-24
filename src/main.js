import express from "express";
import { apiRouter } from "./routers/apiRouter.js";
import { webRouter } from "./routers/webRouter.js";

const app = express()

app.use("/", webRouter)
app.use("/api", apiRouter)

const PORT = 8080
const server = app.listen(PORT, () => { console.log( `escuchando en el puerto ${PORT}` )})



