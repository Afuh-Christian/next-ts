import { Guid } from "./Types";



// User Entity
export interface IUser {
    id: Guid;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}


// Implementations of the interfaces as classes

export class User implements IUser {
    constructor(
        public id: Guid,
        public name: string,
        public email: string,
        public phoneNumber: string,
        public password: string
    ) {}
}
