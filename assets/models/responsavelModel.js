//Precisa fazer o import do databse

export async function listarPais(){
    const [rows] = await conexao.query('SELECT * FROM pais');
    return rows;
}

export async function cadastrarPai(dados){
    const sql = `INSERT INTO Pais(
    nome_pai,cpf_pai,telefone_pai,senha_pai) VALUES(?,?,?,?)`;

    const valores = [
        dados.nome_pai,
        dados.cpf_pai,
        dados.telefone_pai,
        dados.senha_pai
    ];
    const [resultado] = await conexao.query(sql, valores);
    return resultado;
}
