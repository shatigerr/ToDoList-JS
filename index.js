import express from "express";
import exphbs from "express-handlebars"
import indexRouter from "./Routes/indexRoute.js";
import bodyParser from "body-parser";
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import path from "path";
import db from "./db.js"


const app = express()
app.use(bodyParser.urlencoded({extended: false}));

const PORT = 3000

app.use(express.static(__dirname + '/public'))

app.use("/public", express.static(path.join(__dirname, "/public")))


app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

app.use("/", indexRouter)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server on port ${PORT}`);
})

