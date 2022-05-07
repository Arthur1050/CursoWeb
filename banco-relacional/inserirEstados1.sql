-- Inserindo registros na tabela "estado"
INSERT INTO estados 
    (nome, sigla, regiao, populacao) -- Especifica as colunas que serão preenchidas
VALUES 
    ('Acre', 'AC', 'Norte', 0.83); -- Preenche as colunas especificadas respectivamente 

-- Inserindo multiplos registros na tabela "estados"
INSERT INTO estados
    (nome, sigla, regiao, populacao)
VALUES
    -- Adicionando e separando cada registro com ","
    ('Alagoas', 'AL', 'Nordeste', 3.38),
    ('Amapá', 'AP', 'Norte', 0.8),
    ('Amazonas', 'AM', 'Norte', 4.06);