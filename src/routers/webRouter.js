import { Router } from "express";

export const webRouter = Router();
webRouter.get("/productos", (req, res) => { res.send("hola"); });
webRouter.get("/ventas", (req, res) => { res.send(); });
