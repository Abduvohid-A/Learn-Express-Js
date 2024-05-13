import { Router } from "express";
import { forRegister, forLogin } from "../controllers/auth.controllers.js";
const router = new Router();

router.post("/register", forRegister);
router.post("/login", forLogin);


export default router;