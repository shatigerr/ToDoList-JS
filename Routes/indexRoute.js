import express, { Router } from "express";
const router = Router()
const app = express()
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import Tasks from "../models/TASK.js";
import mongoose from "mongoose";

const tasks = []

app.use(express.static(__dirname + './public/css'))

router.get("/", (req,res) => {
    Tasks.find({}, (err, foundItems) => {
        
        res.render("home", {foundItems: foundItems})
    }).lean()
    
})

router.post("/", (req,res) => {
    const data = req.body.tasks
    const task = new Tasks({
        name: data
    })
    task.save()
    res.redirect("/")
})

router.get("/delete/:id", (req,res)=> {
    const params = req.params.id
    Tasks.findByIdAndRemove(params, (err, docs) => {
        // res.send("message delete" + docs)
    })
    res.redirect('/')
})



router.get("/about", (req, res) => {
    res.render("html")
})

export default router
