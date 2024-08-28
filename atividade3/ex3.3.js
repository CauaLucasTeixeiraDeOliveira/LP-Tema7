function Estudante(nome, notas) {
    this.nome = nome;
    this.notas = notas;

    this.calcularMedia = function() {
        let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        let media = soma / this.notas.length;
        return Math.round(media * 100) / 100; // Arredonda para duas casas decimais
    };
}

let meuEstudante = new Estudante("Ana", [7.5, 8.0, 9.0]);
console.log(meuEstudante.calcularMedia()); // Saída: 8.17