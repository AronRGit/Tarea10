/* Crear una clase Alumno con los atributos: código, nombre, nota1, nota2 nota 3y nota4; y las operaciones: promedio (), condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”. */

class Alumno{
    constructor(codigo,nombre){
        this.codigo= codigo;
        this.nombre= nombre;
        this.nota1 = 0;
        this.nota2 = 0;
        this.nota3 = 0;
        this.nota4 = 0;
    }
    set setNota1(nota){this.nota1=nota;}
    get getNota1(){return this.nota1;}
    set setNota2(nota){this.nota2=nota;}
    get getNota2(){return this.nota2;}
    set setNota3(nota){this.nota3=nota;}
    get getNota3(){return this.nota3;}
    set setNota4(nota){this.nota4=nota;}
    get getNota4(){return this.nota4;}

    promedio (){
        let promedio = 0;
       return promedio= ((this.nota1*0.15)+(this.nota2*0.2)+(this.nota3*0.25)+(this.nota4*0.4)).toFixed(1);
    }
    condicion (){
        let condicion= "Desaprobado";
        if(this.promedio()>=12){condicion="Aprobado"; }
        return condicion;
    }
    obsequio (){
        let obsequio = "No tiene obsequio";
        if(this.promedio()>17){obsequio="Tiene una mochila de obsequio"; }
        return obsequio;
    }
    }
const txtnombre = document.getElementById("txtnombre");    
const txtcodigo = document.getElementById("txtcodigo");
const nota1 = document.getElementById("nota1");   
const nota2 = document.getElementById("nota2");   
const nota3 = document.getElementById("nota3");   
const nota4 = document.getElementById("nota4");        
const btnCalcular = document.getElementById("btnCalcular");
const tabla = document.getElementById("tabla");    

btnCalcular.onclick = function(){

    let alumno = new Alumno(txtcodigo.value,txtnombre.value);
    alumno.setNota1= nota1.value;
    alumno.setNota2= nota2.value;
    alumno.setNota3= nota3.value;
    alumno.setNota4= nota4.value;

    let row = tabla.insertRow(0); //crea una fila
    // inserta las celdas
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = alumno.codigo;
    cell2.innerHTML = alumno.nombre;
    cell3.innerHTML = alumno.promedio();
    cell4.innerHTML = alumno.condicion();
    cell5.innerHTML = alumno.obsequio();

txtcodigo.value++;
txtnombre.value="";
nota1.value="";
nota2.value="";
nota3.value="";
nota4.value="";

}