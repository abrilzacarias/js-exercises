
function saludo(nombre) {
    
    let frase = `Hola ${nombre}, que onda?`;
    alert(frase);

    let estado = prompt(`como estas ${nombre}?`)
        if(estado == "cheto"){
            document.write("bien ahi loco")}
        else {
            document.write("q cagada :/")
        };
            


}
let nom = prompt("como pingo te llamas");
saludo(nom);