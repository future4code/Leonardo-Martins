<!-- Exercício 1 -->

<!-- a) acredito que sendo uma string fica mais fácil de gravar um id -->

<!-- b) import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }
 -->

 <!-- Exercício 2 -->

<!-- a) É um código criando um login, onde pede email e senha -->

<!-- b) CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
); -->
<!--
c)import knex from "knex";


  const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  });

	const userTableName = "User";

	 const createUser = async (
		id: string,
		email: string,
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	}; -->


 <!-- Exercício 3 -->
