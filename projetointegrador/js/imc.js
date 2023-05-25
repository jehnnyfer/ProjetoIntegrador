function calcula_imc () {
    var peso = Number(window.document.getElementById("pesocorporal").value);
    var altura = Number(window.document.getElementById("alturacorporal").value);
    if (altura > 3) {
        var altura = altura/100
    }
    if (peso == ""){
        alert("Informe o peso");
        document.getElementById("pesocorporal").focus();
        return false;
    }
    else if (peso > 200 || peso < 20) {
        alert("Peso Inválido");
        document.getElementById("pesocorporal").focus();
        return false;
    }
    if (altura == "") {
        alert("Informe a altura");
        document.getElementById("alturacorporal").focus();
        return false;
    }
    else if (altura > 3 || altura < 1) {
        alert("Altura Inválida");
        document.getElementById("alturacorporal").focus();
        return false;
    }
    var imc = peso/(altura**2);
    var result = imc.toFixed(1);
    if (result < 18.5) {
        flexboximc.style.borderLeft = "2vh solid lightblue";
        flexboximc.style.borderRight = "2vh solid lightblue";
        mudarcor.style.color = "lightblue";
        botao.style.background = "lightblue";
        resultado.innerHTML = `<h1 class = lightblue>Seu IMC: ${result} (Abaixo do Peso)</h1>`
    }
    else if (result >= 18.5 && result < 25) {
        flexboximc.style.borderLeft = "2vh solid #49f551";
        flexboximc.style.borderRight = "2vh solid #49f551";
        mudarcor.style.color = "#49f551";
        botao.style.background = "#49f551";
        resultado.innerHTML = `<h1 class = green>Seu IMC: ${result} (Peso Normal)</h1>`
    }
    else if (result >= 25 && result < 30) {
        flexboximc.style.borderLeft = "2vh solid yellow";
        flexboximc.style.borderRight = "2vh solid yellow";
        mudarcor.style.color = "yellow";
        botao.style.background = "yellow";
        resultado.innerHTML = `<h1 class = yellow>Seu IMC: ${result} (Sobrepeso)</h1>`
    }
    else if (result >= 30 && result < 35) {
        flexboximc.style.borderLeft = "2vh solid orange";
        flexboximc.style.borderRight = "2vh solid orange";
        mudarcor.style.color = "orange";
        botao.style.background = "orange";
        resultado.innerHTML = `<h1 class = orange>Seu IMC: ${result} (Obesidade Grau I)</h1>`
    }
    else if (result >= 35 && result < 40) {
        flexboximc.style.borderLeft = "2vh solid red";
        flexboximc.style.borderRight = "2vh solid red";
        mudarcor.style.color = "red";
        botao.style.background = "red";
        resultado.innerHTML = `<h1 class = red>Seu IMC: ${result} (Obesidade Grau II)</h1>`
    }
    else {
        flexboximc.style.borderLeft = "2vh solid brown";
        flexboximc.style.borderRight = "2vh solid brown";
        mudarcor.style.color = "brown";
        botao.style.background = "brown";
        resultado.innerHTML = `<h1 class = brown>Seu IMC: ${result} (Obesidade Grau III)</h1>`
    }
}