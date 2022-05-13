import {model, Schema} from 'mongoose';
import {ICurriculumEntity} from "./CurriculumEntity";

export interface IPersonalDetailEntity {
    _id: any,
    jobTitle: string
    firstName: string
    secondName: string
    firstSurname: string
    secondSurname: string
    email: string;
    phone: string;
    photo?: string;
    professionalSummary?: string
    curriculum: ICurriculumEntity
}

export const PersonalDetailSchema = new Schema<IPersonalDetailEntity>({
    _id: Schema.Types.ObjectId,
    jobTitle: {type: String, required: true},
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    firstSurname: {type: String, required: true},
    secondSurname: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    photo: {type: String, required: true},
    professionalSummary: {type: String, required: true, max: 300},
    curriculum: {type: Schema.Types.ObjectId, ref: "Curriculum"}
})

export const PersonalDetailEntity = model<IPersonalDetailEntity>('PersonalDetail', PersonalDetailSchema);