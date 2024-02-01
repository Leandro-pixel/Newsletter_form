import { User } from "../types/User";

type Error = {
    [key: string]: string
};

export const validate = (data: User) => {
    const errors: Error = {};

    if(!data.name) {
        errors['name'] = "Your name is mandatory" //quando não vier um data do name do User da o error de nome 'name'
    }
    if(!data.email) {
        errors['email'] = "Your E-mail is mandatory" 
    }
    if(!data.agree) {
        errors['agree'] = "You need to agree" 
    }

    return errors;
};