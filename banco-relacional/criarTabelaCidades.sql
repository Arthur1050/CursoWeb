-- Cria uma nova tabela (CREAT TABLE) -que nem feito na tabela de estados-
-- caso ela já não existir (IF NOT EXISTS)
CREATE TABLE IF NOT EXISTS cidades (
    -- Chave primaria da tabela de auto incremento
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    -- Coluna que recebera uma chave estrangeira de outra tabela (no caso da tabela estados)
    estado_id INT UNSIGNED NOT NULL,
    -- Area em km quadrados
    area DECIMAL(10,2),
    -- Definindo a coluna "id" como chave primaria
    PRIMARY KEY (id),
    -- Definindo a chave estrangeira (FOREIGN KEY) que referencia (REFERENCES) a coluna "id" da tabela "estados"
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);


-- Criando tabela de teste
CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

-- Apaga uma tabela (DROP TABLE) caso ela exista (IF EXISTS)
DROP TABLE IF EXISTS testes;