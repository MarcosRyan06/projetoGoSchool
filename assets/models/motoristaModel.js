//Precisa fazer o import do databse


export async function listarMotoristas(){
    const [rows] = await conexao.query('SELECT * FROM motoristas');
    return rows;
}
 
export async function cadastrarMotoristas(dados){
    const sql = `INSERT INTO Motoristas(
         nome_motorista,
         cpf_motorista,
         senha_motorista,
         telefone_motorista,
         cnh_motorista,
         numero_licenca,
         modelo_veiculo,
         placa_veiculo,
         foto_perfil_motorista)
         VALUES(?,?,?,?,?,?,?,?,?)`
         ;
         
         const valores = [
             dados.nome_motorista,
             dados.cpf_motorista,
             dados.senha_motorista,
             dados.telefone_motorista,
             dados.cnh_motorista,
             dados.numero_licenca,
             dados.modelo_veiculo,
             dados.placa_veiculo,
             dados.foto_perfil_motorista
         ];
         const [resultado] = await conexao.query(sql, valores);
         return resultado;
     }