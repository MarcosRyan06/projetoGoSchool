import * as motoristaModel from '../models/motoristaModel.js';

export async function cadastrarMotoristas(req, res){

    try{
        const dados = req.body;

        const resultado = await motoristaModel.cadastrarMotoristas(dados);

        res.status(201).json({message: "Motorista cadastrado com sucesso!", id: resultado.insertId});
    } catch (error){
        res.status(500).json({message: "Erro ao cadastrar motorista ! Tente novamente mais tarde.", error: error.message});
    
    }
}

