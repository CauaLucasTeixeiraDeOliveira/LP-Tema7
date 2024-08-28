function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;

    this.precoFinal = function() {
        return this.preco - (this.preco * (this.desconto / 100));
    };
}

let meuProduto = new Produto("Smartphone", 1200, 15);
console.log(meuProduto.precoFinal()); // Saída: 1020