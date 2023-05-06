import express from "express";
import Router from "express";
import { adduser } from "../controller/user-controller.js";

const router = express.Router();

// //for routing an post API
router.post('/add', adduser)

export default router;