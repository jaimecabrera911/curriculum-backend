import {IPersonalDetailEntity, PersonalDetailEntity} from "../entity/PersonalDetailEntity";

export class PersonalDetailService {

    public savePersonalDetail(personalDetail: IPersonalDetailEntity) {
        let personalDetailEntity = new PersonalDetailEntity(personalDetail)
        personalDetailEntity.save().then(res => {
            console.log(res)
            return res
        }).catch(error => {
            console.error(error)
            throw error
        })
    }
}