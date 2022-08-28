let numbers = [2,6,3]

class Operacion {
    constructor(numeros,operador){
        this.numeros = numeros
        this.operador = operador  
    }

    get operar(){
        return this.calcOperation
    }

    calcOperation(){
            var suma = 0;        
            var Producto = 1;
            var Resta = 0;
            var division = 0;
            this.numeros.forEach(element => {
                switch (this.operador){
                    case "suma": 
                        suma += element;
                        break;
                    case "Resta":
                        Resta -= element;
                        break;
                    case "Producto":
                        Producto *= element;
                        break;    
                    case "division":
                        division /= element;
                        break;
                    default: 
                        console.log("Operacion indefinida. Seleccione suma, Producto, Resta o division")
                        break;
                }
            });
            return suma || Resta || Producto || division;
    }
}

var operationProducto = new Operacion(numbers,"Producto");
var operationSuma = new Operacion(numbers,"suma");
var operationResta = new Operacion(numbers, "Resta")
var operationDivision = new Operacion(numbers, "division")
console.log("Producto Resultado: ",operationProducto.operar())
console.log("Suma Resultado: ",operationSuma.operar())
console.log("Resultado de la Resta: ", operationResta.operar())
console.log("Resultado de la division: ", operationDivision.operar())