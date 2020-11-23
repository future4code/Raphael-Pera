import { BaseDataBase } from "./data/BaseDataBase"

class CreateTables extends BaseDataBase {
   public createTables = async () => {
      try {
         const labookUsers = 'labook_users'
         if (!await this.tableExists(labookUsers)) {
            await this.connection.raw(`
               CREATE TABLE ${labookUsers}(
                  id VARCHAR(255) PRIMARY KEY,
                  name VARCHAR(255) NOT NULL,
                  email VARCHAR(255) UNIQUE NOT NULL,
                  password VARCHAR(255) NOT NULL
               )
               ;
            `)
         }
   
         const labookPosts = 'labook_posts'
         if (!await this.tableExists(labookPosts)) {
            await this.connection.raw(`
               CREATE TABLE ${labookPosts}(
                  id VARCHAR(255) PRIMARY KEY,
                  photo VARCHAR(255) NOT NULL,
                  description VARCHAR(255) NOT NULL,
                  type ENUM("normal","event") DEFAULT "normal",
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  author_id VARCHAR(255),
                  FOREIGN KEY (author_id) REFERENCES labook_users (id)
               )
               ;
            `)
         }

         const labookFriendships = 'labook_friendships'
         if (!await this.tableExists(labookFriendships)) {
            await this.connection.raw(`
               CREATE TABLE ${labookFriendships}(
                  id VARCHAR(255) PRIMARY KEY,
                  user_id VARCHAR(255) NOT NULL,
                  friend_id VARCHAR(255) NOT NULL,
                  FOREIGN KEY (user_id) REFERENCES labook_users (id),
                  FOREIGN KEY (friend_id) REFERENCES labook_users (id)

               )
               ;
            `)
         }
   
         console.log("MySql setup completed!")
      } catch (error) {
         console.log(error)
      }
   }

   private tableExists = async(tableName: string): Promise<boolean> => {
      const queryResult = await this.connection.raw(`
         SHOW TABLES LIKE "${tableName}"; 
      `)
      console.log(`[CreateTables]: [tableExists]: tableName =`, tableName, queryResult[0].length)
      // if (queryResult[0].length < 1) {return false} else {return true}
      return queryResult[0].length > 0
   }
}

new CreateTables().createTables()