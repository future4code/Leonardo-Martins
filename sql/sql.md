# Atividade da tarde - Aula 48

## Relações SQL

### Exercício 1-a

- Chave estrangeira é usado para criar relaçõesatravés das Primary Key

### Exercício 1-b

INSERT INTO Avaliacao (id, titulo, comentario, nota, movie_id)
VALUES (
"001",
"Se Eu Fosse Você",
"Um filme muito bom e engraçado!",
10,
"001"
);

INSERT INTO Avaliacao (id, titulo, comentario, nota, movie_id)
VALUES (
"002",
"Doce de Mãe",
"Um filme muito divertido!",
9,
"002"
);

INSERT INTO Avaliacao (id, titulo, comentario, nota, movie_id)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Bom filme!",
7,
"003"
);

INSERT INTO Avaliacao (id, titulo, comentario, nota, movie_id)
VALUES (
"004",
"Deus é Brasileiro",
"Um ótimo filme!",
8,
"004"
);

### Exercício 1-c

INSERT INTO Avaliacao (id, titulo, comentario, nota, movie_id)
VALUES (
"005",
"teste",
"Filme teste!",
1,
"008"
);

- Aceita a avaliação, mas quando pede pra retornar a avaliação o campo fica null

### Exercício 1-d

ALTER TABLE Movie DROP COLUMN rating;

### Exercício 1-e

DELETE FROM Movie WHERE id = "004";

### Exercício 2-a

- Está criando uma tabela comid do filme e atores, relacionando com a tabela de filmes e atores;

### Exercício 2-b

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"001"
);

-

### Exercício 2-c

### Exercício 2-d

### Exercício 4-a

quer saber a avaliação dos filmes na table Movie. O on indica de onde vai vir a informação.

### Exercício 4-b

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
