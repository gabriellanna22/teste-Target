function isFibonacci(num) {
    if (num < 0) {
      return false; // Números negativos não pertencem à sequência de Fibonacci
    }
    
    let a = 0;
    let b = 1;
  
    if (num === a || num === b) {
      return true; // 0 e 1 são os primeiros números da sequência de Fibonacci
    }
  
    let c = a + b;
    while (c <= num) {
      if (c === num) {
        return true;
      }
      a = b;
      b = c;
      c = a + b;
    }
  
    return false;
  }
  
  // Defina o número que deseja verificar
  let numero = 21;
  
  // Verifica se o número pertence à sequência de Fibonacci
  if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }
  