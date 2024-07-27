let totalGeral;
limpar ();

function adicionar() {
    let nomeProduto = document.getElementById('produto').value;
    let produto = nomeProduto.split('-')[0].trim();
    let valorUnitario = parseFloat(nomeProduto.split('R$')[1].trim());
    let quant = parseInt(document.getElementById('quantidade').value);
    
    // Verifique se os valores são válidos
    if (isNaN(valorUnitario) || isNaN(quant) || quant <= 0) {
        alert('Por favor, insira um valor de produto e quantidade válidos.');
        return;
    }

    let preco = quant * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quant}x</span> ${produto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
  </section>`;
    
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 0 
}

function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ''; 
    document.getElementById('valor-total').textContent = 'R$ 0';
}       