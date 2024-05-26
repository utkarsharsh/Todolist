
import express from "express"
const router=express.Router();
import {sendalltask,addtask,sendonetask,updatetask,deletetask,statusupdate} from "../controllers/main.js";

router.get('/tasks',sendalltask);
router.get('/tasks/:id',sendonetask);
router.post('/tasks',addtask);
router.put('/tasks/:id',updatetask);
router.delete('/tasks/:id',deletetask);
router.put('/tasks/status/:id',statusupdate);
export default router;