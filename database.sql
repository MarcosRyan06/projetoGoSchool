CREATE DATABASE IF NOT EXISTS transporte_escolar;

USE transporte_escolar;

CREATE TABLE Escolas (
    id_escola INT AUTO_INCREMENT PRIMARY KEY,
    nome_escola VARCHAR(150) NOT NULL,
    endereco_escola TEXT NOT NULL,
    telefone_escola VARCHAR(20)
);

CREATE TABLE Pais (
    id_pai INT AUTO_INCREMENT PRIMARY KEY,
    nome_pai VARCHAR(150) NOT NULL,
    cpf_pai VARCHAR(14) UNIQUE NOT NULL,
    senha_pai VARCHAR(255) NOT NULL,
    telefone_pai VARCHAR(20) NOT NULL,
    endereco_pai TEXT NOT NULL,
    foto_perfil_pai VARCHAR(255)
);

CREATE TABLE Filhos (
    id_filho INT AUTO_INCREMENT PRIMARY KEY,
    id_pai INT NOT NULL,
    id_escola INT NOT NULL,
    nome_filho VARCHAR(150) NOT NULL,
    data_nascimento DATE NOT NULL,
    foto_filho VARCHAR(255),
    possui_deficiencia BOOLEAN DEFAULT FALSE,
    descricao_deficiencia VARCHAR(255),
    FOREIGN KEY (id_pai) REFERENCES Pais(id_pai) ON DELETE CASCADE,
    FOREIGN KEY (id_escola) REFERENCES Escolas(id_escola)
);

CREATE TABLE Motoristas (
    id_motorista INT AUTO_INCREMENT PRIMARY KEY,
    nome_motorista VARCHAR(150) NOT NULL,
    cpf_motorista VARCHAR(14) UNIQUE NOT NULL,
    senha_motorista VARCHAR(255) NOT NULL,
    telefone_motorista VARCHAR(20) NOT NULL,
    cnh_motorista VARCHAR(20) UNIQUE NOT NULL,
    numero_licenca VARCHAR(50) UNIQUE NOT NULL,
    modelo_veiculo VARCHAR(100) NOT NULL,
    placa_veiculo VARCHAR(10) UNIQUE NOT NULL,
    foto_perfil_motorista VARCHAR(255) NOT NULL
);

CREATE TABLE Rotas (
    id_rota INT AUTO_INCREMENT PRIMARY KEY,
    id_motorista INT NOT NULL,
    id_escola INT NOT NULL,
    periodo VARCHAR(20) NOT NULL,
    nome_rota VARCHAR(100),
    FOREIGN KEY (id_motorista) REFERENCES Motoristas(id_motorista),
    FOREIGN KEY (id_escola) REFERENCES Escolas(id_escola)
);

CREATE TABLE Paradas_Rota (
    id_parada INT AUTO_INCREMENT PRIMARY KEY,
    id_rota INT NOT NULL,
    id_filho INT NOT NULL,
    ordem_parada INT NOT NULL,
    horario_estimado TIME,
    FOREIGN KEY (id_rota) REFERENCES Rotas(id_rota) ON DELETE CASCADE,
    FOREIGN KEY (id_filho) REFERENCES Filhos(id_filho)
);
INSERT INTO Escolas (nome_escola, endereco_escola, telefone_escola) VALUES
('Colégio Alpha', 'Rua das Flores, 123, Centro', '11999999999'),
('Escola Beta', 'Av. Paulista, 1000, Bela Vista', '11888888888');

INSERT INTO Pais (nome_pai, cpf_pai, senha_pai, telefone_pai, endereco_pai, foto_perfil_pai) VALUES
('João Silva', '111.111.111-11', 'hash_senha_1', '11911111111', 'Rua A, 10', 'link_foto_1'),
('Maria Oliveira', '222.222.222-22', 'hash_senha_2', '11922222222', 'Rua B, 20', 'link_foto_2'),
('Carlos Santos', '333.333.333-33', 'hash_senha_3', '11933333333', 'Rua C, 30', 'link_foto_3'),
('Ana Costa', '444.444.444-44', 'hash_senha_4', '11944444444', 'Rua D, 40', 'link_foto_4'),
('Pedro Alves', '555.555.555-55', 'hash_senha_5', '11955555555', 'Rua E, 50', 'link_foto_5');

INSERT INTO Filhos (id_pai, id_escola, nome_filho, data_nascimento, foto_filho, possui_deficiencia, descricao_deficiencia) VALUES
(1, 1, 'Lucas Silva', '2015-05-10', 'link_foto_f1', FALSE, NULL),
(2, 2, 'Julia Oliveira', '2016-08-22', 'link_foto_f2', TRUE, 'Cadeirante - Necessita de veículo com plataforma elevatória'),
(3, 1, 'Marcos Santos', '2014-11-03', 'link_foto_f3', FALSE, NULL),
(4, 2, 'Beatriz Costa', '2017-02-15', 'link_foto_f4', TRUE, 'Transtorno do Espectro Autista (TEA) - Sensível a ruídos altos'),
(5, 1, 'Felipe Alves', '2015-12-30', 'link_foto_f5', FALSE, NULL);

INSERT INTO Motoristas (nome_motorista, cpf_motorista, senha_motorista, telefone_motorista, cnh_motorista, numero_licenca, modelo_veiculo, placa_veiculo, foto_perfil_motorista) VALUES
('Roberto Carlos', '666.666.666-66', 'hash_senha_m1', '11966666666', '12345678900', 'LIC-001', 'Fiat Ducato', 'ABC-1234', 'link_foto_m1'),
('Fernanda Lima', '777.777.777-77', 'hash_senha_m2', '11977777777', '09876543211', 'LIC-002', 'Renault Master', 'XYZ-9876', 'link_foto_m2'),
('Ricardo Gomes', '888.888.888-88', 'hash_senha_m3', '11988888888', '11223344556', 'LIC-003', 'Mercedes Sprinter', 'DEF-5678', 'link_foto_m3');

--  teste do select

-- select * from Escolas;
