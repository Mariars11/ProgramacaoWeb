const prompt = require("prompt-sync")(); //possibilita o uso do prompt

function criarItens(nomeItem, precoItem, desconto) 
{
    const Item = {
        nome: String(nomeItem),
        preco: Number(precoItem),
        desconto: Number(desconto),
        printaAtributos: function() 
        {
            return `${this.nome} ${this.preco}`;
        },
        calculaPrecoComDesconto: function() 
        {
            return this.preco * (1 - (this.desconto / 100));
        },
        calculaPreco: function() 
        {
            return this.preco;
        }
    };

    return Item;
}

let opcao = Number();
let count = Number(0);
let arrayItens = Array();

while(opcao != 3)
{
    console.log("-> Escolha uma opção: ", "\n\n1 - Cadastrar um produto", "\n2 - Visualizar valor total da compra", "\n3 - Sair do sistema")
    opcao = Number(prompt("\nEscolha: "));
    switch (opcao) 
    {
        case 1:
        {
            let nomeProduto = prompt("Informe o nome do produto: ");
            let preco = Number(prompt("Informe o preco do produto: "));
            let desconto = Number(prompt("Informe o valor de desconto do produto (em porcentagem): "));
            
            let item = new criarItens(nomeProduto, preco, desconto);
            arrayItens[count] = item;
        
            break;
        }
        case 2:
        {
            let soma = Number(0)
            arrayItens.forEach(item => {
                soma += item.calculaPrecoComDesconto()
            });

            console.log(`Valor total da compra: ${soma}`);
            break
        }
        default:
            break;
    }
    count++;
}