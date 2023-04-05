import { Router } from "express";

export const webRouter = Router();

webRouter.get("/productos", (req, res) => { res.send("hola") })
webRouter.get("/", (req, res) => { res.send("hola") })

webRouter.get("/ventas", (req, res) => { res.send() })

/* webRouter.get("/handlebars", (req, res) => {
    res.render("index.handlebars",
        { nombre: "gian", apellido: "pierucci", correo: "gianpieru@", edad: 19, telefono: "2135493" })
}) */
