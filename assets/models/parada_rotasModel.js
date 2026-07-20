// Precisa fazerr a conexão com o banco


export async function listarParadas_Rota(){
    const [rows] = await conexao.query('SELECT * FROM Paradas_Rota');
    return rows;
}

export async function cadastrarParadas_Rota(dados){
     const sql = `
        INSERT INTO Paradas_Rota (
            id_rota,
            id_filho,
            ordem_parada,
            horario_estimado
        ) VALUES (?, ?, ?, ?)`;

        const valores = [
            dados.id_rota,
            dados.id_filho,
            dados.ordem_parada,
            dados.horario_estimado
        ];      

        const [resultado] = await conexao.query(sql, valores);
        return resultado;
}

