class Celulares {
	constructor(celular, color, peso, resolucion, camara, ram, encendido) {
		this.celular = celular;
		this.color = color;
		this.peso = peso;
		this.resolucion = resolucion;
		this.camara = camara;
		this.ram = ram;
		this.encendido = encendido;
	}
	verInfo() {
		document.write(`<br><b>Celular: </b>${this.celular} <br>
		color: ${this.color} <br>
		peso: ${this.peso} <br>
		resolucion: ${this.resolucion} <br>
		camara: ${this.camara} <br>
		ram: ${this.ram} <br>
		_________________________________________<br>`)
	}
	PrenderApagar() {
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} 
		else {
			alert("celular apagado");
			this.encendido = false;
		}
	}
	Reiniciar() {
		if (this.encendido == true) {
			alert("reiniciando celular");
		} 
		else {
			alert("el celular está apagado");
		}
	}

	tomarFoto() {
		alert("foto tomada");

	}
	Grabar() {
		alert("Grabando");
	}
}

class CelularesAltaGama extends Celulares {
	constructor(celular, color, peso, resolucion, camara, ram, camaraextra)
	{super(celular, color, peso, resolucion, camara, ram)
		this.camaraextra = camaraextra;
		}
	GrabarCamaraLenta() {
		alert("estas grabando en camara super lenta")
	}
	reconocimientofacial() {
		alert("estas utilizando el reconocimento facial")
	}
	mostrarInfo() {
		this.verInfo() + document.write(`camara extra: ${this.camaraextra}<br><br>`);
	}
}
// motoG8 = new Celulares("motoG8", "negro", "200g", "1200mp", "64px", "6gb");
// samsungS8 = new Celulares("samsungS8", "blanco", "180g", "1020mp", "64gb", "4gb");
iphone7 = new CelularesAltaGama("iphone 7", "gris", "150g", "4k", "32px", "4gb", "12px")
samsungs20 = new CelularesAltaGama("samsung S20", "violeta", "220g", "full hd", "64px", "6gb", "32px" )

// motoG8.verInfo()
// samsungS8.verInfo()
// iphone7.verInfo()

iphone7.mostrarInfo()
samsungs20.mostrarInfo()
