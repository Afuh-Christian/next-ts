import { Guid } from "./Types";



export class Handyman implements IHandyman {
    constructor(
        public id: Guid,
        public name: string,
        public profession: string,
        public email: string,
        public facebook: string,
        public whatsapp: string,
        public instagram: string,
        public password: string,
        public yearsOfExperience: string
    ) {}
}


// Handyman Entity
export interface IHandyman {
    id: Guid;
    name: string;
    profession: string;
    email: string;
    facebook: string;
    whatsapp: string;
    instagram: string;
    password: string;
    yearsOfExperience: string;
}
