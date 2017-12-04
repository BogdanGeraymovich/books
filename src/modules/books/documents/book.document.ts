import { Document } from 'mongoose';

export interface BookDocument extends Document {
    readonly _id: string;
    readonly title: string;
    readonly rate: number;
}