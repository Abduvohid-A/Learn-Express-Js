import { Router } from "express";
import { postPhotos, getPhotos } from "../controllers/photos.controllers.js";
const router = new Router();

router.post("/photos", postPhotos);
router.get("/photos", getPhotos);

export default router;