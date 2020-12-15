import { BaseDataBase } from "./data/BaseDataBase";


class CreateTables extends BaseDataBase {
    public createUserTable = async():Promise<void> => {
        try {
            const tableName = 'users_s20a3'
            if(!await this.tableExists(tableName)) {
                console.log('SIM')
                await BaseDataBase.connection.raw(`
                    CREATE TABLE ${tableName}(
                        id VARCHAR(255) PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) UNIQUE NOT NULL,
                        password VARCHAR(255) NOT NULL
                    )
                `)
                console.log(`Table ${tableName} successfully created`)
            }
        } catch (error) {
            console.error(error)
        }
    }


    private tableExists = async(tableName: string): Promise<boolean> => {
        const queryResult = await BaseDataBase.connection.raw(`
            SHOW TABLES LIKE "${tableName}";
        `)
        return queryResult[0].length > 0
    }
}

new CreateTables().createUserTable()
