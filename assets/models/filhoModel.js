//Precisa fazer o import do databse


export async function listarFilhos(){
    const [rows] = await conexao.query('SELECT * FROM filhos');
    return rows;
}

export async function cadastrarFilho(dados){
    const sql = `INSERT INTO Filhos(
    id_pai,
    id_escola,
    nome_filho,
    data_nascimento,
    foto_filho,
    possui_deficiencia,
    descricao_deficiencia,) VALUES(?,?,?,?,?,?,?)`;
    
    const valores = [
        dados.id_pai,
        dados.id_escola,
        dados.nome_filho,
        dados.data_nascimento,
        dados.foto_filho,
        dados.possui_deficiencia,
        dados.descricao_deficiencia
    ];
    const [resultado] = await conexao.query(sql, valores);
    return resultado;
}