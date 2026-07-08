DROP DATABASE IF EXISTS GS;

CREATE DATABASE GS;

USE GS;
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