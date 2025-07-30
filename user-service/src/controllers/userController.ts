import client from "../config/db";
import { Request,Response } from "express";
import { user } from "../models/user";
import communicator from "../communicator"
export const getUsers = async (req:Request,res:Response)=>{
    try{
        const result = await client.query('SELECT * from users');
        res.json(result.rows as user[]);
    }catch(err){
        res.status(500).send(err);
    }
}

export const getUserById = async (req:Request,res:Response)=>{
    const {id} = req.params;
    try{
        const result = await client.query('SELECT * from users WHERE id=$1',[id]);
        const user = result.rows[0];
        if(user){
            const companyId = user.companyId;
            const company = await communicator.getCompanyById(companyId);
            if(company){
            const userWithCompany = {
                ...user,
                company
            }
            res.send(userWithCompany)
            }else{
                res.json({
                    error:"User Company not found"
                });
            }

        }else{
            res.status(404).json({
                error:"User not found !"
            })
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const createUser = async (req:Request,res:Response)=>{
    const {id,name,email,companyId} = req.body;
    try{
        await client.query('INSERT INTO users (id,name,email,"companyId") VALUES ($1,$2,$3,$4)',
            [id,name,email,companyId]);
        res.status(201).send("User Created");
    }catch(err){
        res.status(500).send(err);
    }
}