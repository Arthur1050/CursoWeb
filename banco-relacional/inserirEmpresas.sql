
-- Alterando uma tabela (ALTER TABLE) modificando (MODIFY) um de seus dados (cnpj)
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 10750908000176),
    ('Vale', 12386474000100),
    ('Cielo', 80156402000119);

SELECT * FROM empresas

-- Descreve as propriedades de uma tabela
DESC empresas;

SELECT * FROM empresas;
SELECT * FROM cidades;

-- Inserindo registros na terceira tabela que faz a relação muitos para muitos de cidades e empresas
INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 4, 1), -- Bradesco, Campinas, é a sede
    (1, 1, 0), -- Bradesco, Niterói, não é sede
    (2, 4, 0), -- Vale, Campinas, não é sede
    (2, 1, 1); -- Vale, Niteroi, é a sede

SELECT * FROM empresas_unidades;
