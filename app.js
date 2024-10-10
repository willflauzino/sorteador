function sortear() {

    let qtd = parseInt(document.getElementById("quantidade").value);
    let min = Math.ceil(parseInt(document.getElementById("de").value));
    let max = Math.floor(parseInt(document.getElementById("ate").value));
    console.log(qtd);
    console.log(min);
    console.log(max);

    if (qtd > (max - min + 1)) {
        alert('A quantidade de números a sortear é maior que o intervalo disponível.');
        return;
    }

    if (!qtd || !min || !max){
        alert('Obrigatório preenchimento de todos os campos!');
        return;
    }


    let result = [];
    for (let i = 0; i < qtd; i++) {
        let valor = obter_random(min, max);
        while (result.includes(valor)) {
            valor = obter_random(min, max);
        }
        result.push(valor);
    }

    let container = document.getElementById("resultado");
    container.innerHTML = `<label  class="texto__paragrafo">Números sorteados: ${result}</label>`;

}

function obter_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciar() {

    ["quantidade", "de", "ate"].forEach(id => document.getElementById(id).value = null);

    document.getElementById("resultado").innerHTML = `<label  class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;;
}