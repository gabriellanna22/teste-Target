function countLetterA(str) {
    // Inicializa um contador para contar as ocorrências de 'a' e 'A'
    let count = 0;
    
    // Converte a string para minúsculas para simplificar a contagem
    let lowerCaseStr = str.toLowerCase();
    
    // Itera por cada caractere na string
    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (lowerCaseStr[i] === 'a') {
        count++;
      }
    }
    
    return count;
  }
  
  // Defina a string que deseja verificar
  let inputString = "Abracadabra";
  
  // Verifica a existência da letra 'a' e conta as ocorrências
  let count = countLetterA(inputString);
  
  if (count > 0) {
    console.log(`A letra 'a' ocorre ${count} vezes na string.`);
  } else {
    console.log("A letra 'a' não ocorre na string.");
  }
  