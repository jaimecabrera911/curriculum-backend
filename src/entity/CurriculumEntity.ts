import {model, Schema, Types} from 'mongoose';
import {IPersonalDetailEntity, PersonalDetailSchema} from "./PersonalDetailEntity";
import {IAwardEntity} from "./AwardEntity";
import {EducationSchema, IEducationEntity} from "./EducationEntity";
import {EmploymentHistorySchema, IEmploymentHistoryEntity} from "./EmploymentHistoryEntity";

export interface ICurriculumEntity {
    _id: any
    personalDetail: IPersonalDetailEntity
    awards?: IAwardEntity[]
    educations?: IEducationEntity[]
    employmentHistories?: IEmploymentHistoryEntity[]
    timestamps?: { createdAt: 'created_at', updatedAt: 'updated_at' }
}

const curriculumSchema = new Schema<ICurriculumEntity>(
    {
        _id:Types.ObjectId,
        personalDetail: {type: PersonalDetailSchema},
        educations: [{type: EducationSchema}],
        employmentHistories: [{type: EmploymentHistorySchema}]
    },
    {timestamps: true}
)

export const CurriculumEntity = model<ICurriculumEntity>('Curriculum', curriculumSchema);