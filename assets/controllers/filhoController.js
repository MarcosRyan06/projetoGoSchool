import * as filhoModel from '../models/filhoModel.js';

export async function cadastrarFilhos(req, res){
    try{
        const dados = req.body;

        const resultado = await filhoModel.cadastrarFilhos(dados);

        res.status(201).json({message:" Filho cadastrado com sucesso!", id: resultado.insertId});
    } catch (error){
        res.status(500).json({message: "Erro ao cadastrar filho ! Tente novamente mais tarde.", error: error.message});
    }
}


