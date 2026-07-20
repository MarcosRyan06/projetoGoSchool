//Precisa fazer o import do databse


export async function listarEscolas(){
    const [rows] = await conexao.query('SELECT * FROM Escolas');
    return rows;                        
}

export async function cadastrarEscolas(dados){
    const sql = `INSERT INTO Escolas(
    nome_escola,
    endereco_escola,
    telefone_escola) VALUES (?, ?, ?)`;

    const valores = [
        dados.nome_escola, 
        dados.endereco_escola,
        dados.telefone_escola];

        const [resultado] = await conexao.query(sql, valores);  
        return resultado;
    }