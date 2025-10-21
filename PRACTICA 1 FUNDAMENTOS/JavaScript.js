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
    this.Total = 0;
    this.TotalElectricas = 0;
    this.TotalMecanicas = 0;
    }
//Generador de numeros para las odds random (y los codigos y todo lo que tenga que ver con math vaya)

//Aquí nos elije el subtipo de pieza, usando los arrays creados en el constructor
subtipoPieza(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    }
//Los dígitos del código los generamos de una forma similar, usando el bucle for para ir escribiendo los numeros
digitoCodigo(n){
    let s = '';
    for (let i = 0; i<n; i++){ 
    s += Math.floor(Math.random() * 10);
    }
    return s;
}
serialCompleto(isElectrica){
    return this.digitoCodigo(10) +  (isElectrica ? 'E' : 'M');
}
//Fabricación de las piezas
generarPieza(Nombre = ' '){
    const isElectrica = Math.random() < 0.3; //Así nos aseguramos de que haya un 30% de probabilidadaes de que salga electrica, luego pondremos con un else las mecanicas y ya
    const fechaFabricación = new Date();
    if (isElectrica){
        const nombre = this.subtipoPieza(this.nombreElectricas);
        const codigoPieza = this.serialCompleto(true);
        const potencia = this.potencias[Math.floor(Math.random() * this.potencias.length)];
        const voltaje = this.voltajes[Math.floor(Math.random() * this.voltajes.length)];
        const pieza = new PiezaElectrica(nombre, codigoPieza, fechaFabricación, potencia, voltaje);
        
        this.Total++;
        this.TotalElectricas++;
        return pieza;
    } else {
        const nombre = this.subtipoPieza(this.nombreMecanicas);
        const codigoPieza = this.serialCompleto(false);
        const materialFabricación = this.materiales[Math.floor(Math.random() * this.materiales.length)];
        const pieza = new PiezaMecanica(nombre, codigoPieza, fechaFabricación, materialFabricación);
        
        this.Total++;
        this.TotalMecanicas++;
        return pieza;
    }
}
}

//Estación de tratamiento
class EstacionTratamiento {
  constructor() {
      this.barnizNormal=0,
      this.barnizEspecial= 0,
      this.galvanizado=0,
      this.pulido=0,
      this.pintado=0
    }

//Procesador de piezas y actualizador de contadores
    procesarPieza(pieza){
        if (!pieza) return null;

        //Para las eléctricas
        if (pieza instanceof PiezaElectrica) {
            const potencia = pieza.potencia;
            if (potencia <= 5) {
                pieza.procesamiento = "Barnizada normal";
                this.barnizNormal++;
            }else {
                pieza.procesamiento = "Barnizada especial";
                this.barnizEspecial++;
            }
            return pieza;
        }
        //Para las mecánicas
        if (pieza instanceof PiezaMecanica) {
            const material = pieza.materialFabricación;
            if (material === "Acero") {
                pieza.procesamiento = "Galvanizado";
                this.galvanizado++;
            } else if (material === "Titanio") {
                pieza.procesamiento = "Pulido";
                this.pulido++;
            } else if (material === "Carbono") {
                pieza.procesamiento = "Pintado";
                this.pintado++;
            }
            return pieza;
        }
    }
    devolverContadores(){
        return {
            barnizNormal: this.barnizNormal,
            barnizEspecial: this.barnizEspecial,
            galvanizado: this.galvanizado,
            pulido: this.pulido,
            pintado: this.pintado
        }
    }
}