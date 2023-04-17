import { createContext } from 'react';
import { ILogin, IUser } from '../../interfaces/user';

interface ContextProps{
    isLogged: boolean;
    user?: ILogin;

    loginUser: ({username,password}:ILogin) => Promise<{hasError:boolean, message:string}>;
    registerUser: ({email,username,name,password}:IUser) => Promise<{ hasError: boolean; message: string; }>;
    logout: () => void;
}

export const AuthContext = createContext({} as ContextProps);