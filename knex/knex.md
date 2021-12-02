# Atividade da tarde - Aula 47

## Knex

## Exercício 1-a

- O raw permite que enviemos uma
  query para o banco usando a linguagem SQL diretamente;
- Os resultados vem através de stings

## Exercício 1-b

const searchActor = async (name: string): Promise<any> => {
const result = await connection.raw(` SELECT * FROM Actor WHERE name = "${name}" `)
return result
}

## Exercício 1-c

const countActors = async (gender: string): Promise<any> => {
const result = await connection.raw(` SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" `);
// Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
// o valor no resultado!
const count = result[0][0].count;
return count;
};

## Exercício 2-a

const updateActor = async (id: string, salary: number): Promise<any> => {
await connection("Actor")
.update({
salary: salary,
})
.where("id", id);
};

## Exercício 2-b

const deleteActor = async (id: string): Promise<void> => {
await connection("Actor")
.delete()
.where("id", id);
};

## Exercício 2-c

const avgSalary = async (gender: string): Promise<any> => {
const result = await connection("Actor")
.avg("salary as average")
.where({ gender });

return result[0].average;
};

## Exercício 3-a/b

app.get("/actor", async (req: Request, res: Response) => {
try {
const count = await countActors(req.query.gender as string);
res.status(200).send({
quantity: count,
});
} catch (err) {
res.status(400).send({
message: err.message,
});
}
});

## Exercício 4-a

app.put("/actor", async (req: Request, res: Response) => {
try {
await updateSalary(req.body.id, req.body.salary);
res.status(200).send({
message: "Success",
});
} catch (err) {
res.status(400).send({
message: err.message,
});
}
});

## Exercício 4-b

app.delete("/actor/:id", async (req: Request, res: Response) => {
try {
await deleteActor(req.params.id);
} catch (err) {
res.status(400).send({
message: err.message,
});
}
});
