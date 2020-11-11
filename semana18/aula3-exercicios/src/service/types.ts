
export enum USER_ROLE {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type AuthenticationData = {id: string, role: USER_ROLE}