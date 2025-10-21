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
//Los dígitos del código los generamos de una forma similar, usando el bucle for para 
digitoCodigo(){
    let s = ' ';
    for (let i = 0; i<n; i++){ 
    s += Math.floor(Math.random() * 10);
    }
    return s;
}
}


class EstacionTratamiento {
  constructor() {
      this.barnizNormal=0,
      thisbarnizEspecial= 0,
      this.galvanizado=0,
      this.pulido=0,
      this.pintado=0
    };
  }

