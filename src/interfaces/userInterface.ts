import { User } from "@prisma/client";

export interface AccountRequest extends Omit<User , "id">{
    confirmPassword?: string
}

export interface Account extends Omit<User , "id">{}

export interface Login {
    email: string;
    password: string
}

export interface UserData {
    id: string;
    username: string;
    email: string;
    password?: string;
    image: string;
    githubUrl: string;
}

export interface Update {
    field: string;
    value: string;
}