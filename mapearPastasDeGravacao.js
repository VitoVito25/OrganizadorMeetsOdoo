/**
 * Mapeia as pastas de gravações dentro de uma pasta raiz.
 * Estrutura: Raiz > Pasta Específica > 2 - Gravações
 * Caso a estrutura nao siga o padrão acima, nao fará o mapeamento das pastas
 */
function mapearPastasDeGravacao() {
  // 1. Substitua pelo ID da sua pasta principal (aquela que contém as "Pastas específicas")
  const pastaRaizId = '1o_v7Mf-pkwkiSiAnFeAJ6eyrSzc9GOj2'; 
  const pastaRaiz = DriveApp.getFolderById(pastaRaizId);
  const pastasEspecificas = pastaRaiz.getFolders();
  
  const dicionarioGravacoes = {};
  while (pastasEspecificas.hasNext()) {
    const pastaEspecifica = pastasEspecificas.next();
    const nomePastaEspecifica = pastaEspecifica.getName();
    
    // Procura pela pasta "2 - Gravações" dentro da pasta específica
    const subPastas = pastaEspecifica.getFoldersByName('2 - Gravações');
    
    if (subPastas.hasNext()) {
      const pastaGravacao = subPastas.next();
      // Alimenta o dicionário: { "Nome da Pasta": "ID da Pasta de Gravações" }
      dicionarioGravacoes[nomePastaEspecifica] = pastaGravacao.getId();
    }
  }
  console.log(JSON.stringify(dicionarioGravacoes, null, 2));
  
  return dicionarioGravacoes;
}
