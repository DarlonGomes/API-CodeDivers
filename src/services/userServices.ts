
import {  Account, UserData } from "../interfaces/userInterface";
import { ErrorInfo } from "../middlewares/error";
import { userRepository}  from "../repositories";
import { encryptUtils } from "../utils";
import jwt from "jsonwebtoken";

export async function ensureFieldIsValid(field: string, value:string, method: string){
    const response  = await userRepository.search(field, value)
    
    if(field === "email"){
        if(response && method === "sign-up") throw new ErrorInfo("error_conflict", "This email already have been used");
        if(!response && method === "sign-in") throw new ErrorInfo("error_not_found", "This email doesn't exist" );
    }else{
        if(!response) throw new ErrorInfo("error_not_found", `This ${field} doesn't exist` );
    }
    return response
}

export async function encryptUserPassword(request: Account){
    const account = request;
    const hashPassword = encryptUtils.hashDataBcrypt(account.password);
    account.password = hashPassword;
    return account;
}

export async function insertRequest(account: Account){
    await userRepository.create(account)
}

export async function ensurePasswordIsValid(password: string, hashedPassword: string){
    const response = encryptUtils.validateBcryptData(password, hashedPassword);
    if(!response) throw new ErrorInfo("error_conflict", "This password doesn't match");
}

export async function generateAccessToken(id: string){
    const token : string = jwt.sign({userId: id}, process.env.TOKEN_SECRET!, {expiresIn: process.env.TOKEN_EXPIRES_IN})
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }
    return config
}

export async function updateField(field: string, value: string, id:string){
    const account = await userRepository.update(field, value, id);
    return account
}
