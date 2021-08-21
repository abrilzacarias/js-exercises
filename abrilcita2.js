let free = false;

function validar(time) {
    let edad = parseInt(prompt("cual es tu edad"));
        if (edad >= 18) {
            if (time >= 2 && time < 7 && free == false) {
            alert("pasas gratis rey");
            free = true}
            
            else {
            alert(`son las ${time}, asi qpasas pero pagas`)
            }
                        }
        else {alert("a dormir pendejito");}
}

validar(23)
validar(1)
validar(2)