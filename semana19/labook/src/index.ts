/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import Knex from "knex"
import { userController } from "./controller/userController"
import { postController } from "./controller/postController"
import { userRouter } from "./routes/userRoutes"
import { postRouter } from "./routes/postRoutes"

/**************************** CONFIG ******************************/

dotenv.config()

export const connection: Knex = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: 3306,
      database: process.env.DB_NAME,
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** TYPES ******************************/


/**************************** SERVICES ******************************/


/**************************** ENDPOINTS ******************************/

app.use('/users', userRouter)
// app.post('/users/signup', userController.createUser)
// app.post('/users/login', userController.login)

app.use('/posts', postRouter)
// app.post('/posts/create', postController.createPost)
// app.get('/posts/:id', postController.getPost)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})