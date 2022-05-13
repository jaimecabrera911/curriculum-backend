import {model, Schema} from "mongoose";

export interface IEducationEntity {
    school: string;
    degree: string;
    startDate: Date;
    endDate: Date;
    city: string;
    description: string;
}

export const EducationSchema = new Schema<IEducationEntity>(
    {
        school: {type: String},
        degree: {type: String},
        startDate: {type: Date},
        endDate: {type: Date},
        city: {type: String},
        description: {type: String}

    }
)

export const EducationEntity = model("Education", EducationSchema)