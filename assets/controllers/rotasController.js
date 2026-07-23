import * as rotasModel from '../models/rotasModel.js';

export async function cadastrarRotas(req, res){
    try{
        const dados = req.body;

        const resultado = await rotasModel.cadastrarRotas(dados);

        res.status(201).json({message: "Rota cadastrada com sucesso!", id: resultado.insertId});
    } catch (error){
        res.status(500).json({message: "Erro ao cadastrar rota ! Tente novamente mais tarde.", error: error.message});
    }
}

export async function listarRotas(req, res){
    try{
        const resultado = await rotasModel.listarRotas();
        res.status(200).json(resultado);
    } catch (error){
        res.status(500).json({message: "Erro ao listar rotas ! Tente novamente mais tarde.", error: error.message});
    }   
}


