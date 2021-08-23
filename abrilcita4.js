class Apps {
    constructor(descargas, peso, puntuacion, abierto, instalar) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        // this.abierto =  abierto;
        // this.instalar = instalar;
    }
    AbrirCerrar() {
        let abierto = parseInt(prompt(`1 para abrir la app | 2 para cerrar la app`))
        if (abierto == 1) {
			alert("app abierta");
                abierto = false;
		} 
		else {
			alert("app cerrada");
            abierto = false;
		}
    }
    InstalarDesinstalar() {
        let instalar = parseInt(prompt(`1 para instalar | 2 para desinstalar`));
        if (instalar == 1) {
            alert("app instalada");
            instalar = false;
        } 
        else {
            alert ("app desinstalada")
            instalar = false;
        }
    }
    AppInfo() {document.write(`Descargas: ${this.descargas} <br>
    Peso: ${this.peso} <br>
    Puntuacion de los usuarios: ${this.puntuacion} <br><br>`)}
}

app1 = new Apps("2 millones", "65mb", "4.7 estrellas");
app2 = new Apps("146.000", "100mb", "3.7 estrellas");
app3 = new Apps("809.098", "76mb", "4.8 estrellas");
app4 = new Apps("50.888", "1gb", "2.9 estrellas");
app5 = new Apps("22.000", "900mb", "3.5 estrellas");

var aplicaciones = [app1.AppInfo(), app2.AppInfo(), app3.AppInfo(), app4.AppInfo(), app5.AppInfo()];

for (aplicacion of aplicaciones) {
    document.write(aplicaciones);
}

// app1.InstalarDesinstalar();
// app1.AbrirCerrar();
// app1.AppInfo();
// app1.AbrirCerrar();
// app1.InstalarDesinstalar();