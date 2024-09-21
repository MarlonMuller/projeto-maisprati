-- CRIAR O DB
-- Configuração inicial
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- Criar banco de dados
CREATE SCHEMA IF NOT EXISTS `atividade11` DEFAULT CHARACTER SET utf8;
USE `atividade11`;

-- Criação da tabela de Cardápio
CREATE TABLE IF NOT EXISTS Cardapio (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL
);

-- Criação da tabela de Comandas
CREATE TABLE IF NOT EXISTS Comanda (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    mesa INT NOT NULL,
    nome_cliente VARCHAR(255) NOT NULL
);

-- Criação da tabela de Itens da Comanda
CREATE TABLE IF NOT EXISTS ItensComanda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo_comanda INT,
    codigo_cardapio INT,
    quantidade INT NOT NULL,
    UNIQUE (codigo_comanda, codigo_cardapio),
    FOREIGN KEY (codigo_comanda) REFERENCES Comanda(codigo),
    FOREIGN KEY (codigo_cardapio) REFERENCES Cardapio(codigo)
);

-- Restaura SQL Mode e restrições
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- INSERIR DADOS
INSERT INTO Cardapio (nome, descricao, preco) VALUES
('Café Espresso', 'Café forte, feito com grãos de alta qualidade.', 5.00),
('Café Americano', 'Café diluído em água quente, suave e aromático.', 4.50),
('Cappuccino', 'Mistura de café, leite vaporizado e espuma de leite.', 6.00),
('Latte', 'Café com bastante leite vaporizado e um toque de espuma.', 6.50),
('Mocha', 'Café com chocolate e leite vaporizado.', 7.00);

INSERT INTO Comanda (data, mesa, nome_cliente) VALUES
('2024-09-01', 1, 'Maria'),
('2024-09-01', 2, 'João'),
('2024-09-02', 1, 'Ana'),
('2024-09-02', 3, 'Carlos'),
('2024-09-03', 2, 'Luiza');

INSERT INTO ItensComanda (codigo_comanda, codigo_cardapio, quantidade) VALUES
(1, 1, 2),  -- Maria: 2 Cafés Espresso
(1, 3, 1),  -- Maria: 1 Cappuccino
(2, 2, 1),  -- João: 1 Café Americano
(2, 4, 2),  -- João: 2 Lattes
(3, 5, 3),  -- Ana: 3 Mochas
(4, 1, 1),  -- Carlos: 1 Café Espresso
(4, 4, 1),  -- Carlos: 1 Latte
(5, 2, 1),  -- Luiza: 1 Café Americano
(5, 3, 1);  -- Luiza: 1 Cappuccino

-- CONSULTAS
-- 1) Faça uma listagem do cardápio ordenada por nome;
SELECT * FROM Cardapio ORDER BY nome;

-- 2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
SELECT 
    c.codigo AS codigo_comanda, 
    c.data, 
    c.mesa, 
    c.nome_cliente, 
    ic.codigo_cardapio, 
    cp.nome AS nome_cafe, 
    cp.descricao, 
    ic.quantidade, 
    cp.preco AS preco_unitario, 
    (ic.quantidade * cp.preco) AS preco_total
FROM Comanda c
JOIN ItensComanda ic ON c.codigo = ic.codigo_comanda
JOIN Cardapio cp ON ic.codigo_cardapio = cp.codigo
ORDER BY c.data, c.codigo, cp.nome;

-- 3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
SELECT 
    c.codigo, 
    c.data, 
    c.mesa, 
    c.nome_cliente, 
    SUM(ic.quantidade * cp.preco) AS valor_total
FROM Comanda c
JOIN ItensComanda ic ON c.codigo = ic.codigo_comanda
JOIN Cardapio cp ON ic.codigo_cardapio = cp.codigo
GROUP BY c.codigo
ORDER BY c.data;

-- 4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
SELECT 
    c.codigo, 
    c.data, 
    c.mesa, 
    c.nome_cliente, 
    SUM(ic.quantidade * cp.preco) AS valor_total
FROM Comanda c
JOIN ItensComanda ic ON c.codigo = ic.codigo_comanda
JOIN Cardapio cp ON ic.codigo_cardapio = cp.codigo
GROUP BY c.codigo
HAVING COUNT(DISTINCT ic.codigo_cardapio) > 1
ORDER BY c.data;

-- 5) Qual o total de faturamento por data? ordene por data esta consulta.
SELECT 
    c.data, 
    SUM(ic.quantidade * cp.preco) AS total_faturamento
FROM Comanda c
JOIN ItensComanda ic ON c.codigo = ic.codigo_comanda
JOIN Cardapio cp ON ic.codigo_cardapio = cp.codigo
GROUP BY c.data
ORDER BY c.data;
