
export enum USER_ROLE {
    NORMAL = "normal",
    ADMIN = "admin"
}

export type AuthenticationData = {id: string, role: USER_ROLE}

export type dataBaseUser = {
    id: string,
    email: string,
    name: string,
    password: string,
    role: USER_ROLE
}

export type inputRecipe = {
    id: string,
    title: string,
    description: string
    createdAt: string
}
