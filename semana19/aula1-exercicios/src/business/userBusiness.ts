import { response } from "express";
import { userData } from "../data/userData";
import { generateToken, USER_ROLES } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";


export const userBusiness = {
    createUser: async function (user: any) {
        try {
            if (!user.name) {throw new Error(`User name required`)}

            if (!user.email) {throw new Error(`User email required`)}
            if (!user.email.includes('@')) {throw new Error(`Invalid email`)}

            if (!user.password) {throw new Error(`User password required`)}
            if (user.password.lenght < 6) {throw new Error(`Password must have at least 6 characters`)}

            if (!user.role) {throw new Error(`User role required`)}
            if (user.role !== USER_ROLES.NORMAL && user.role !== USER_ROLES.ADMIN) {throw new Error(`Invalid role`)}
            
            const id = generateId()
            const hashPassword = await hash(user.password)
            const data = {id, name: user.name, email: user.email, hashPassword, role: user.role }
            await userData.createUser(data)
            const token = generateToken({id, role:user.role})

            return token
        } catch(error) {
            throw new Error(error.message || `Error creating user`)
        }
    }
}
