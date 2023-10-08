import express from "express";
import studentInfoController from "../controllers/studentInfoController.js";
import { underConstruction } from "../middlewares/UnderConstruct.js";

const router = express.Router();

router.get("/", studentInfoController.home);

router.get("/data", studentInfoController.getData);

router.get("/form", studentInfoController.form);
router.post("/form", studentInfoController.createDoc);

router.get("/edit/:id", studentInfoController.edit);
router.post("/update/:id", studentInfoController.update);
router.post("/delete/:id", studentInfoController.delete);

// Router-Level Middleware.
router.get("/info", underConstruction);
router.get("/about", underConstruction);
router.get("/contact", underConstruction);

export default router;
