import {model, Model, Schema} from "mongoose";

export interface IAwardEntity {
    title: string;
    date: Date;
    awarder: string;
    summary: string;
}

export const AwardSchema = new Schema<IAwardEntity>(
    {
        title: {type: String},
        awarder: {type: String},
        date: {type: Date},
        summary: {type: String, max: 200}
    }
)

export const AwardEntity = model<IAwardEntity>('Award', AwardSchema);