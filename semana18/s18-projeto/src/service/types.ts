
export enum USER_ROLE {
    NORMAL = "normal",
    ADMIN = "admin"
}

export type AuthenticationData = {id: string, role: USER_ROLE}