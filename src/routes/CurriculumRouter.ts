import express from 'express';
import {CurriculumController} from "../controller/CurriculumController";
import bodyParser from "body-parser";

export const curriculumRouter = express.Router();

const curriculumController = new CurriculumController()

const jsonParser = bodyParser.json()

const {saveCurriculum, getCurriculums, getCurriculumById, updateCurriculum} = curriculumController;

curriculumRouter.get('/', getCurriculums);

curriculumRouter.get('/:_id', getCurriculumById);

curriculumRouter.post("/", jsonParser, saveCurriculum)

curriculumRouter.put("/:_id", jsonParser, updateCurriculum)

