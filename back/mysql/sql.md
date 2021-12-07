### Exercício 1

a) Comandos que estão nessa query.
VARCHAR: Quando vai ser uma string
DATE NOT NULL: Representa data, não pode ser nulo;

b) Show DATABASE e SHOW TABLES:

c) DESCRIBE Actor

### Exercício 2

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' : Erro por repetir chave de outra query;

c) Error Code: 1136. Column count doesn't match value count at row 1: Tem informações a mais no Value;

d)Error Code: 1364. Está inserindo uma linha sem um valor para uma coluna particular definida como NOT NULL. Indica que o valor de um campo específico deve ser diferente de NULL;

e) Error Code: 1292. Data incorreta a forma que está sendo passada;

### Exercício 3

a)
'002','Glória Pires','1200000','1963-08-23'
'003','Fernanda Montenegro','300000','1929-10-19'
'005','Juliana Paes','719333','1979-03-26'

b) '001', '400000';

c) Null, todas as queries tem gênero definido;

d)
'003','Fernanda Montenegro','300000',
'004', 'Antônio Fagundes, '400000';

e) Error Code: 1054. Sintaxe errada está com "nome" e não "name"

### Exercício 4

a) Está selecionando os atores da tabela que começam com a Letra A e J com salários superiores a R$300.000;

b) SELECT \* FROM Actor
WHERE (name LIKE "A%") AND salary > 350000
'004', 'Antônio Fagundes, '400000';

c) SELECT \* FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

'002','Glória Pires','1200000',
'003','Fernanda Montenegro','300000',
'004', 'Antônio Fagundes, '400000';

d) SELECT \* FROM Actor
WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

'004', 'Antônio Fagundes, '400000';
'005','Juliana Paes','719333';

### Exercício 5

"001", "Se eu fosse você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "2006-01-06", 7

"002", "Doce de Mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.", "2012-12-27", 10

"003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8

"004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9

### Exercício 6

a) SELECT id, title, rating FROM Movie WHERE id = "004";
"004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9

b) SELECT \* FROM Movie WHERE name = "Deus é Brasileiro";
"004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;

"002", "Doce de Mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.", "2012-12-27", 10

"003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8

"004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9

### Exercício 7

a) SELECT \* FROM Movie
WHERE title LIKE "%vida%";
Null

b) SELECT \* FROM Movie
WHERE title LIKE "%A vida dela%" OR
synopsis LIKE "%A vida dela%";
"002", "Doce de Mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.", "2012-12-27", 10

c) SELECT \* FROM MOVIE
WHERE release_date < "2021-11-22";
Todos

d) SELECT \* FROM MOVIE
WHERE release_date < "2021-11-22" AND
(title LIKE "%SDeus é Brasileiro%" OR
synopsis LIKE "%SDeus é Brasileiro%") AND rating > 7;
"004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9
