import { Request, Response } from "express";
import Users from "../models/userSchema";

export function getUsers(req:Request, res:Response):void{
    const users = Users.find({});
    if(!users){
        res.status(200).json({message:"No users"})
    }else{
        res.status(200).json({users})
    }
}

interface IUser{
    _id?: string;
    name: string;
    email: string;
    phoneNumber: number;
    password: string;
}

export function postUser(req:Request, res:Response){
    const {name, email, phoneNumber, password} = req.body;
    try{
        const userParams: IUser = {
            name,
            email,
            phoneNumber,
            password
        }
        const newUser = new Users({userParams})
        newUser.save()
        res.status(200).json({message:"User Create Successfully"})
    }catch(err){
        res.status(400).json({message:"Something wrong"})
    }
}
