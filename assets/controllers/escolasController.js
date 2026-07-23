export * as escolasModel from '../models/escolasModel.js';

export async function cadastrarEscolas(req, res){
    try{
        const dados = req.body;

        const resultado = await escolasModel.cadastrarEscolas(dados);
        res.status(201).json({message: "Escola cadastrada com sucesso!", id: resultado.insertId});
    } catch (error){
        res.status(500).json({message: "Erro ao cadastrar escola ! Tente novamente mais tarde.", error: error.message});        
    }
}