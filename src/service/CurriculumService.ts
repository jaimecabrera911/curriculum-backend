import {CurriculumEntity, ICurriculumEntity} from "../entity/CurriculumEntity";


export class CurriculumService {


    public async saveCurriculum(curriculumEntity: ICurriculumEntity): Promise<ICurriculumEntity | void> {

        console.log("Inicio saveCurriculum service")

        console.log("CurriculumEntity" + curriculumEntity)

        let curriculum = new CurriculumEntity(curriculumEntity)
        console.log(curriculum)

        return curriculum.save().then(response => {
            return response
        }).catch(error => {
            console.error(error)
            throw error
        });

    }

    public async getCurriculums(): Promise<any[]> {
        return CurriculumEntity.find().then(response => {
            return response
        }).catch(error => {
            console.error(error)
            throw error
        });
    }

    public async getCurriculumById(id: any): Promise<any> {

        return CurriculumEntity.findById(id).then(response => {
            return response
        }).catch(error => {
            console.error(error)
            throw error
        });
    }

    public async updateCurriculumById(id: any, curriculumEntity: ICurriculumEntity): Promise<any> {

        console.log(curriculumEntity.employmentHistories)

        return CurriculumEntity.updateMany({_id: id}, {
            $set:{
                personalDetail:curriculumEntity.personalDetail,
                employmentHistories:curriculumEntity.employmentHistories,
                educations:curriculumEntity.educations
            }
        })
            .then(response => {
                console.log(response)
                return response
            }).catch(error => {
                console.error(error)
                throw error
            });
    }
}
