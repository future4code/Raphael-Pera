// Função para inserir um novo usuário na tabela "COKNU_USERS" do banco de dados

import { connection } from "../index"

export async function insertUser (data: any) {
    const {id, name, email, password, role} = data

    const sqlRaw = `
        INSERT INTO COKNU_USER (id, name, email, password, role)
        VALUES (
            "${id}",
            "${name}",
            "${email}",
            "${password}",
            "${role}"
        )
        ;
    `

    const result = await connection.raw(sqlRaw)
}
