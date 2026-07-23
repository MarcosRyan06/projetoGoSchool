import * as parada_rotasModel from '../models/parada_rotasModel.js';

export async function cadastrarParadas_Rota(req, res){
    try{
        const dados = req.body;

        const resultado = await cadastrarParadas_Rota(dados);

        res.status(201).json({message: "Parada cadastrada com sucesso!", id: resultado.insertId});
    } catch (error){
        res.status(500).json({message: "Erro ao cadastrar parada ! Tente novamente mais tarde.", error: error.message});
    }
}


