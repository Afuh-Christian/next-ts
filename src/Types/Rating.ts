import { Guid } from "./Types";

// Rating Entity
export interface IRating {
    id: Guid;
    userId: Guid;
    comment: string;
    score: number;
}



export class Rating implements IRating {
    constructor(
        public id: Guid,
        public userId: Guid,
        public comment: string,
        public score: number
    ) {}
}