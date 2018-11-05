

// 01-tipos-variables.ts

let edad:number | string= 23;
edad = 23;
edad = 'Paul';

// duck typing
let nombre:string = 'Paul';
const casado:boolean = false;

const persona:{nombre:string,casado?:boolean} = {
    nombre: 'Paul',casado: true
};
const numeros:number[] = [1,2,3,4];

console.log(persona);

//Interface definir tipo json
//const persona:{nombre: "Juan" | "Pedro"}

let fechaNacimiento:Date = new Date()


function  saludar(nombre:string, //requeridos
                  apellido?:string, //opcionales
                  ...otrosNombres: string[] ): any{ //infinitos

    return "";

}
let respuesta =<number> saludar("1","");
console.log(typeof respuesta)

respuesta = 1;

const saludo = (nombre:string ):number=>{
    return 1;
};

class Usuario{
    edad
}
const paulIntancia = new Usuario();




