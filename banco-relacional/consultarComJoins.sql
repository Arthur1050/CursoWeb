SELECT * FROM prefeitos;
SELECT * FROM cidades;

-- Exibe somente os dados da interseção entre cidades e prefeitos
SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;

-- Exibe os dados da interseção mais os dados restantes da tabela cidades
SELECt * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;

-- Exibe os dados da interseção mais os dados restantes da tabela prefeitos
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

-- Simulando o "full join" (já que não é suportado aqui)
-- Esse exibe todos os dados das duas tabelas prefeitos e cidades
-- SELECT * FROM cidades c FULL JOIN prefeitos p ON c.id = p.cidade_id;
SELECt * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;