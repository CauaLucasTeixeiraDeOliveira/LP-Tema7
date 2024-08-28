let calculaFatorial = function (n){
    if (n === 0) return 1;
    return n * calculaFatorial(n - 1);
}
console.log(calculaFatorial(5));