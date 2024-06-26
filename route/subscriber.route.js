import express from "express"
import { addSubsciber, getSubscriber } from "../controller/newsLetter.controller.js"

const router= express.Router();

router.post('/user',addSubsciber);
router.get('/user',getSubscriber);

export default router