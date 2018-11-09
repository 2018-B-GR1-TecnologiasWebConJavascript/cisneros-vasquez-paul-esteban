// 02-observables.ts
declare var require: any;
const rxjs = require("rxjs");
const inquirer = require('inquirer');
const map = require("rxjs/operators").map;
const distinct = require("rxjs/operators").distinct;
const concat = require("rxjs/operators").concat;

const numeros$ = rxjs.of(1,1,true,[1,2],new Date(),{nombre: "Adrian"});

console.log(numeros$);
const  promesita = (correcto)=>{
    return new Promise(
        (resolve, reject)=>{
            if (correcto){
                resolve(":)");
            }
            else{
                reject(":(")}
        }
    );
};
const promesita$ = rxjs.from(promesita(true))

numeros$.pipe(concat(promesita$)).pipe(distinct()).pipe(

    map((value)=>{
        return {data:value};
}
)
).subscribe(
    (ok)=>{
        console.log("En ok",ok);
    },
    (error)=>{
        console.log("Error",error);
    },(complete)=>{console.log("complete",complete);
    }
);

/*

const promesita$ = rxjs.from(promesita(false)).subscribe(
    (ok)=>{
        console.log("En ok",ok);
    },
    (error)=>{
        console.log("Error",error);
    },(complete)=>{console.log("complete",complete);
    }
);*/

const pregunta = inquirer.prompt()