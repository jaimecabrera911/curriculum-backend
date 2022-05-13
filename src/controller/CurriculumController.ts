import {CurriculumEntity, ICurriculumEntity} from "../entity/CurriculumEntity";
import {CurriculumService} from "../service/CurriculumService";


const curriculumService = new CurriculumService()

export class CurriculumController {


    public saveCurriculum(req: any, res: any) {

        console.log("Inicio saveCurriculum")
        const curriculumEntity: ICurriculumEntity = req.body

        curriculumService.saveCurriculum(curriculumEntity)
            .then(response => {
                console.log("OK")
                res.json(response)
            })
            .catch(error => {
                console.log(error);
                res.json(error)
            })
    }

    public getCurriculums(req: any, res: any) {

        return curriculumService.getCurriculums()
            .then(response => {
                console.log("OK")
                res.json(response)
            })
            .catch(error => {
                console.log(error);
                res.json(error)
            })
    }

    public getCurriculumById(req: any, res: any) {

        const id: string = req.params

        return curriculumService.getCurriculumById(id)
            .then(response => {
                console.log("OK")
                res.json(response)
            })
            .catch(error => {
                console.log(error);
                res.json(error)
            })

    }

    public updateCurriculum(req: any, res: any) {

        console.log("Inicio updateCurriculum")
        const curriculumEntity: ICurriculumEntity = req.body
        const {_id} = req.params

        curriculumService.updateCurriculumById(_id, curriculumEntity)
            .then(response => {
                console.log("OK")
                res.json(response)
            })
            .catch(error => {
                console.log(error);
                res.json(error)
            })
    }
}

