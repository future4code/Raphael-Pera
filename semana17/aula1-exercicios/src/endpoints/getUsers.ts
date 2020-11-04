import { Request, Response } from "express";
import { filterUsers } from "../data/filterUsers";
import { inputData } from "../types/types";



export const getUsers = async(req: Request, res: Response): Promise<void> => {
    try {

        const data: inputData = {
            name: req.query.name as string,
            email: req.query.email as string,
            type: req.params.type,
            orderBy: req.query.orderBy as string,
            orderType: req.query.orderType as string,
            limit: Number(req.query.limit),
            page: Number(req.query.page),
        }
        // console.log(`[getUsers]: data= `, data)

        const users = await filterUsers(data)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)
        // res.status(200).send(data)
    } catch (error) {
        console.log(`[getUsers]: catch`, error)
        res.send(error.message || error.sqlMessage)
    }
} 

