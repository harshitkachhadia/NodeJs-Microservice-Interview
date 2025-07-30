import client from "../config/db";
import { Request,Response } from "express";
import { company } from "../models/company";

export const getCompany = async (req:Request,res:Response)=>{
    try{
        const result = await client.query('SELECT * from company');
        res.json(result.rows as company[]);
    }catch(err){
        res.status(500).send(err);
    }
}

export const getCompanyById = async (req:Request,res:Response)=>{
    const {id} = req.params;
    try{
        const result = await client.query('SELECT * from company WHERE id=$1',[id]);
        const company = result.rows[0];
        if(company){
            res.json(company as company);
        }else{
            res.status(404).json({
                error:"Company not found !"
            })
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const createCompany = async (req:Request,res:Response)=>{
    console.log(req.body);
    
    const {id,name,address} = req.body;
    try{
        await client.query('INSERT INTO company (id,name,address) VALUES ($1,$2,$3)',
            [id,name,address]);
        res.status(201).send("Company Created");
    }catch(err){
        res.status(500).send(err);
    }
}