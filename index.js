const prompt = require('prompt-sync')({sigint: true}); // biblioteca para capturar inputs de texto do usuario do console 

//Receber o pedido
function recebePedido(){
    let pedido = {
        sabor: null,
        confeitos:null
    }

    //QUAL SABOR DO BOLO
    pedido.sabor = prompt("Qual o sabor do bolo: ");
  
    //QUAIS CONFEITOS DESEJA
    pedido.confeitos = prompt("Quais confeitos deseja no bolo: ");

    return pedido;
}
//PREPARA PEDIDO
function preparaPedido(pedido){
    //SEPARAR INGREDIENTES
    let ingredientes_base = sepraraIngredientes(pedido);
    //MISTURAR BOLO
    let tabuleiro = misturaBolo(pedido, ingredientes_base);
    //COLOCAR NO FORNO
    let bolo = colocaForno(tabuleiro);
    //CONFEITAR 
    bolo = confeitar(pedido, bolo);

    return bolo;
}

function sepraraIngredientes(pedido){
    let ingredientes_base = 'ovos, leite , farinha, fermento';

    return ingredientes_base
};

function  misturaBolo(pedido, ingredientes_base){
    return pedido.sabor + ", " + ingredientes_base;
};

function colocaForno(tabuleiro){
    return 'bolo de ' + tabuleiro;
}

function confeitar(pedido, bolo){
    return bolo + ' confeitado com ' + pedido.confeitos;
}


//CALCULAR O PRECO
function calculaPreco(){

    //VALOR DOS INGREDIENTES
    let preco_final = calculaIngrediente();
    //VALOR Da confeiteira
    preco_final = calculaConfeiteira(preco_final);
    //VALOR DAS DESPESAS DE PRODUÇAO
    preco_final = calculaDespesas(preco_final);
    //VALOR DE GASTO FIXOS
    preco_final = calculaFixo(preco_final);
    //VALOR DE LUCRO
    preco_final = calculaLucro(preco_final);
    //REOTNAR PREÇO FINAL

    return preco_final;

}

function calculaIngrediente(){
    return 10.00
}

function calculaConfeiteira(preco_calc){
    return preco_calc += preco_calc * 0.30;
}

function calculaDespesas(preco_calc){
    return preco_calc += 5.00;

}

function calculaFixo(preco_calc){
    return preco_calc += 15.00;

}


function calculaLucro(preco_calc){
    return preco_calc += preco_calc * 0.25;
}


//ENTREGAR PEDIDO
function entergaPedido(bolo, preco){

    //EXIBOR/ENTREGARO BOLO PARAR CLIENTE
    console.log("pedido esta pronto");
    console.log("Aproveite seu " + bolo );
    //EXIBIR PREÇO PARA CLIENTE
    prompt("seu pedido ficou em R$ " + preco + ". Quando terminar de comer clique ENTER para pagar...");

}
   

//RECEBER DINHEIRO
function receberDinheiro(preco){
    //RECBER DINHEIRO DO CLIENTE
    let valor_pago = prompt("Digite o valor pra pagar: ");
    for(; valor_pago != preco;){
        valor_pago = prompt("Valor incorreto, digite o valor correto: ");
    }
    //FECHAR O PEDIDO
    prompt("Agradecemos, volte sempre!!!");
}
    


let pedido = recebePedido();
let bolo = preparaPedido(pedido);
let preco = calculaPreco();
entergaPedido(bolo, preco);
receberDinheiro(preco);

