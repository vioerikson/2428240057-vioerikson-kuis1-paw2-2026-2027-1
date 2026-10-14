import express from "express";

import upload from "../config/upload.js";
import UploadController from "../controllers/upload.controller.js";
import UserController from "../controllers/user.controller.js";
import WelcomeController from "../controllers/welcome.controller.js";
import RuangKelasController from "../controllers/ruangan.controller.js";

const router = express.Router();

router.get("/welcome", WelcomeController.welcome);
router.post("/users", UserController.store);
router.post("/upload", upload.single("file"), UploadController.store);
router.get("/ruangkelas", RuangKelasController.index);
router.post("/ruangkelas", RuangKelasController.store);
router.get("/ruangkelas/:id", RuangKelasController.show);
router.put("/ruangkelas/:id", RuangKelasController.update);
router.delete("/ruangkelas/:id", RuangKelasController.delete);

export default router;
