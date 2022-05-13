import mongoose, {Schema} from "mongoose";

export interface IEmploymentHistoryEntity {
    jobTitle: string;
    employer: string;
    startDate: string;
    endDate?: string;
    city: string;
    description: string;
}

export const EmploymentHistorySchema = new Schema<IEmploymentHistoryEntity>(
    {
        jobTitle: {type: String, required: true},
        employer: {type: String, required: true},
        startDate: {type: String, required: true},
        endDate: {type: String},
        city: {type: String, required: true},
        description: {type: String, required: true}
    }
)

export const EmploymentHistoryEntity = mongoose.model('EmploymentHistory', EmploymentHistorySchema)