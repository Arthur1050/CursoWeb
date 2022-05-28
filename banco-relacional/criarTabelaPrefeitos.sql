CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED,
    -- Definindo a coluna "id" como chave primaria
    PRIMARY KEY (id),
    -- Declarando que não poderá haver repetiçoes nessa coluna (UNIQUE KEY)
    UNIQUE KEY (cidade_id),
    -- Definindo a coluna "cidade_id" como chave estrangeira
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);