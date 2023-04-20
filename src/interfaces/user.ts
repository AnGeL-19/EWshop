export interface IUser{
    id?: string;
    username: string;
    email: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    }
}

export interface ILogin{
    username: string;
    password: string;
}

export interface IRegister {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}


