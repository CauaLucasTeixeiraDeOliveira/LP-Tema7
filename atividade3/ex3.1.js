function Livro(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;

    this.exibirInfo = function() {
        return `${this.titulo} de ${this.autor}, publicado em ${this.anoPublicacao}`;
    };
}

let meuLivro = new Livro("1984", "George Orwell", 1949);
console.log(meuLivro.exibirInfo()); // Saída: 1984 de George Orwell, publicado em 1949
