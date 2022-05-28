SELECT * FROM estados WHERE id = 29

-- Inserindo um registro na tabela (INSERT INTO) cidades preenchendo as colunas nome, area e estado_id
INSERT INTO cidades (nome, area, estado_id)
-- Cidade: Campinas; area: 795km; estado_id: 29 (São Paulo)
VALUES ('Campinas', 795, 25)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 23) /* estado_id: 23 = Rio de janeiro */

INSERT INTO cidades (nome, area, estado_id)
-- Preenchendo a coluna "estado_id" na tabela cidades usando um SELECT entre parentese
VALUES ('Caruaru', 920.6, (SELECT id FROM estados WHERE sigla = 'PE') )

INSERT INTO cidades
    (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
)

SELECT * FROM cidades