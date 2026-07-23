import * as parada_rotasModel from '../models/parada_rotasModel.js';

export async function cadastrarParadas_Rota(req, res){
    try{
        const dados = req.body;

        const resultado = await parada_rotasModel.cadastrarParadas_Rota(dados);

        res.status(201).json({message: "Parada cadastrada com sucesso!", id: resultado.insertId});
    } catch (error){
        res.status(500).json({message: "Erro ao cadastrar parada ! Tente novamente mais tarde.", error: error.message});
    }
}

export async function listarParadas_Rota(req, res){
    try{
        const resultado = await parada_rotasModel.listarParadas_Rota();     
        res.status(200).json(resultado);
    } catch (error){
        res.status(500).json({message: "Erro ao listar paradas da rota ! Tente novamente mais tarde.", error: error.message});
    }
}
