import express from "express";
import {readMonsters, readMonster, addMonster, updateMonster, deleteMonster} from "../controllers/monsters.controller.js";

const router = express.Router();

router.get("/",readMonsters); // get all
router.get("/:id",readMonster); // get by id
router.post("/",addMonster); // creation
router.patch("/:id",updateMonster); // update by id
router.delete("/:id",deleteMonster); // deletion by id

export default router;