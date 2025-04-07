let valorCompra = prompt("Digite o valor da compra"); // Variável que armazena o valor da compra digitada pelo usuário.

let valorDesconto = valorCompra * 0.1 // Atribuição do valor do desconto na compra.
let valorFinal = valorCompra - valorDesconto // Atribuição do valor final da compra.

if(isNaN(valorCompra)) {
    alert("Número inválido!");
  } // Indica a invalidez de uma entrada de informação que não seja um número.

  if (valorCompra < 100) {
    alert("Não ganhou o desconto de 10%");
    
} // Condição que indica que o usuário não ganhou o desconto, pois o número é menor que 100.
else {
    alert ("Ganhou o desconto de 10%");
    alert("O valor do desconto é :" + valorDesconto && "O valor da compra final é:" + valorFinal)

    } // Condição que indica o desconto e o valor final da compra para o usuário, pois o valor da compra é maior que 100.

   

 



