import express from "express";
import { createEquipo, deleteEquipo, getEquipoByID, getEquipos, updateEquipo } from "../controllers/equipoControllers.js";

const router = express.Router();

router.get('/equipos',getEquipos);
router.get('/equipos/:id',getEquipoByID);
router.post('/equipos',createEquipo);
router.put('/equipos/:id',updateEquipo);
router.delete('/equipos/:id',deleteEquipo);


export default router;