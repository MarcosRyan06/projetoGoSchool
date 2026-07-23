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

