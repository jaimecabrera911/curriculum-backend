import express from 'express'
import mongoose from "mongoose";
import morgan from "morgan";
import {config} from "dotenv";
import {curriculumRouter} from './routes/CurriculumRouter.js'
import bodyParser from "body-parser";
const cors = require('cors')

config()

const app = express()


app.use(morgan('tiny'))

app.use(cors())

app.use('/curriculum', curriculumRouter)

app.use(bodyParser.json({ type: 'application/*+json' }))

const DB_URL = process.env.MONGO_DB_URL || undefined

const APP_PORT = process.env.APP_PORT || 4000

if (DB_URL != null) {
    mongoose.connect(DB_URL)
        .then(() => console.log(`Conectado a mongoose `))
        .catch(error => console.error(error))
} else {
    throw Error("Error: Database not found")
}

app.listen(APP_PORT, () => console.log(`App listen on port ${APP_PORT}`))