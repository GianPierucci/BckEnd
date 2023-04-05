import express from "express";
import { apiRouter } from "./routers/apiRouter.js";
import { webRouter } from "./routers/webRouter.js";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import { Server as socketIOServer } from "socket.io";


const app = express()

const PORT = 8080
const httpServer = app.listen(PORT, () => { console.log( `escuchando en el puerto ${PORT}` )})
const io = new socketIOServer(httpServer) 



app.engine("handlebars", engine())
app.set("views", __dirname+ "/views")
app.set("view engine", "handlebars")
app.use("/", webRouter)
app.use("/api", apiRouter)
app.use(express.static(__dirname+"/public"))

io.on("connection", clientSocket => {
    console.log(`nuevo cliente Socket ID ${clientSocket.id}`)
    clientSocket.on("mensaje", data => {
        alert(data)
    })
})

app



