let valorCompra = prompt("Digite o valor da compra");

let valorDesconto = valorCompra * 0.1
let valorFinal = valorCompra - valorDesconto

if(isNaN(valorCompra)) {
    alert("Número inválido!");
  }

  if (valorCompra < 100) {
    alert("Não ganhou o desconto de 10%");
    

}    
else {
    alert ("Ganhou o desconto de 10%");
    alert("O valor do desconto é :" + valorDesconto && "O valor da compra final é:" + valorFinal)

    }

   

 



