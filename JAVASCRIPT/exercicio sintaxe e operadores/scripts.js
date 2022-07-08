function conferir(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase (num1,num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2){
    let igualdade = '';
    (num1===num2) ? igualdade = '' : igualdade = 'não';

    return `Os números ${num1} e ${num2} ${igualdade} são iguais.`;
}

function criaSegundaFrase (num1, num2){
    let comparacao10 = 'maior que';
    let comparacao20 = 'maior que';
    const soma = num1 + num2;
    
    if (soma < 10){
        comparacao10 = 'menor que';
    }
    if (soma === 10){
        comparacao10 = 'igual a';
    }
    if (soma < 20){
        comparacao20 = 'menor que';
    }
    if (soma === 20){
        comparacao20 = 'igual a';
    }
    return `Sua soma é ${soma}, que é ${comparacao10} 10 e ${comparacao20} 20.`;
}
console.log (conferir(10,10));