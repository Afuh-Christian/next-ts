import { Guid } from "./Types";

// Message Entity
export interface IMessage {
    id: Guid;
    senderId: Guid;
    receiverId: Guid;
    content: string;
    timestamp: Date;
}


export class Message implements IMessage {
    constructor(
        public id: Guid,
        public senderId: Guid,
        public receiverId: Guid,
        public content: string,
        public timestamp: Date
    ) {}
}
