-- Criando a tabela estado!
create table estados (
    -- Criando colunas na tabela estado
    -- Coluna "id" de valor inteiro (INT), sem sinal, não aceira valores NULL, é auto incrementado
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    -- Coluna "nome". Aceita no maximo 45 caracteres, não aceita valores NULL
    nome VARCHAR(45) NOT NULL,
    -- Coluna "sigla".
    sigla VARCHAR(2) NOT NULL,
    -- Coluna "regiao". O valor tem que ser obrigatoriamente um dos valores listados na enumeração (ENUM)
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    -- Coluna "população". Tera como valor um numero com 5 casas inteiras e 2 decimais (IIIII.DD)
    populacao DECIMAL(5, 2) NOT NULL,
    -- Definindo a coluna (id) como chave primaria da tabela
    PRIMARY KEY (id),
    -- Declarando que não deve haver dados repetidos na coluna "nome" e "sigla"
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);