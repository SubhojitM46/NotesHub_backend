import express from "express"
import { addContact, getContact } from "../controller/contact.controller.js";

const router= express.Router();

router.post('/contactDetails',addContact)
router.get('/contactDetails',getContact)

export default router