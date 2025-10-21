//Clase pieza
class Pieza{

//Costructor objetos pieza
constructor(nombre, codigoPieza, fechaFabricación) {
 this.nombre= nombre;
 this.fechaFabricación=fechaFabricación;
 this.codigoPieza= codigoPieza;
    }
}
//Piezas electricas
class PiezaElectrica extends Pieza{
    constructor(nombre, codigoPieza, fechaFabricación, potencia, voltaje){
        super(nombre, codigoPieza, fechaFabricación);
        this.potencia= potencia;
        this.voltaje= voltaje;
    }
}
//Piezas mecanicas
class PiezaMecanica extends Pieza{
    constructor(nombre, codigoPieza, fechaFabricación, materialFabricación){
        super(nombre, codigoPieza, fechaFabricación);
        this.materialFabricación= materialFabricación;
    }
}


//Factoría de piezas
class Factoria{
    constructor(){
        this.nombreElectricas = [
            "Placa ABS", "Centralita encendido", "Bornes cableado", "Alternador", "Encendido"
        ];
        this.nombreMecanicas = [
            "Larguero inferior", "Guardabarros", "Larguero superior", "Subchasis", "Puerta"
        ];
    
    this.potencias = [1, 5, 10, 20];
    this.voltajes = [3.3, 5, 12, 240];
    this.materiales = ["Titanio", "Acero", "Carbono"];
    }
//Generador de numeros para las odds random (y los codigos y todo lo que tenga que ver con math vaya)

//Aquí nos elije el subtipo de pieza, usando los arrays creados en el constructor
subtipoPieza(){
    return arr[Math.floor(Math.random() * arr.length)];
    }
//Los dígitos del código los generamos de una forma similar, usando el bucle for para ir escribiendo los numeros
digitoCodigo(){
    let s = ' ';
    for (let i = 0; i<n; i++){ 
    s += Math.floor(Math.random() * 10);
    }
    return s;
}
serialCompleto(isElecrtrica){
    return this.digitoCodigo(10) +  (isElectrica ? 'E' : 'M');
}
//Fabricación de las piezas
fabricacionPieza(Nombre = ' '){
    const isElectrica = Math.random() < 0.3; //Así nos aseguramos de que haya un 30% de probabilidadaes de que salga electrica, luego pondremos con un else las mecanicas y ya
    const fechaFabricación = new Date();
    if (isElectrica){
        const nombre = this.subtipoPieza(this.nombreElectricas);
        const codigoPieza = this.serialCompleto(true);
        const potencia = this.potencias[Math.floor(Math.random() * this.potencias.length)];
        const voltaje = this.voltajes[Math.floor(Math.random() * this.voltajes.length)];
        return new PiezaElectrica(nombre, codigoPieza, fechaFabricación, potencia, voltaje);
    } else {
        const nombre = this.subtipoPieza(this.nombreMecanicas);
        const codigoPieza = this.serialCompleto(false);
        const materialFabricación = this.materiales[Math.floor(Math.random() * this.materiales.length)];
        return new PiezaMecanica(nombre, codigoPieza, fechaFabricación, materialFabricación);
    }
}
}