// precisa fazer a conexão com o banco

export async function listarRotas(){
    const [rows] = await conexao.query('SELECT * FROM Rotas');
    return rows;
}   

export async function cadastrarRotas(dados){
    const sql = `INSERT INTO Rotas(
    id_motorista,
    id_escola,
    periodo,
    nome_rota,) VALUES(?,?,?,?)`;

    const valores = [
        dados.id_motorista,
        dados.id_escola,
        dados.periodo,
        dados.nome_rota
    ];
    const [resultado] = await conexao.query(sql, valores);
    return resultado;   
    
}