import * as responsavelModel from "../models/responsavelModel.js";

export async function cadastrarPais(req, res){
    try{
        const dados = req.body;

        const resultado = await responsavelModel.cadastrarPais(dados);

        res.status(201).json({message: "Responsavel cadastrado com sucesso!", id: resultado.insertId});
    } catch (error){
        res.status(500).json({message: "Erro ao cadastrar responsavel", error: error.message});
    }
}

export async function listarPais(req, res){
    try{
        const resultado = await responsavelModel.listarPais();
        res.status(200).json(resultado);
    } catch (error){
        res.status(500).json({message: "Erro ao listar responsaveis ! Tente novamente mais tarde.", error: error.message});
    }
}