var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var female = document.getElementById("f");
var male = document.getElementById("m");


document.getElementById("submit").addEventListener("click", validadeForm)

function validadeForm(){
    if(age.value == '' || height.value == ''  || weight.value == '' || (male.checked == false && female.checked == false)){
        alert("Todos os cantos devem ser preenchidos!");
        document.getElementById("submit").removeEventListener("click", calculateIMC);
    } else {
        calculateIMC();
    }
}

function calculateIMC(){
    var arrayPerson = [age.value, height.value, weight.value];
    if(male.checked){
        arrayPerson.push("male");
    } else if(female.checked){
        arrayPerson.push("female");
    }

    var imc = Number(arrayPerson[2]) / (Number(arrayPerson[1]) / 100 * Number( arrayPerson[1]) / 100 );

    var result = '';

    if(imc < 18.5){
        result = 'Magreza';  
    } else if(18.5 <= imc >= 24.9){  //Podendo alterar para 18.5 <= imc && imc <= 24.9
        result = 'Normal';
    } else if(24.9 <= imc >= 30){//Podendo alterar para 24.9 <= imc && imc <= 30
        result = 'Obeso';
    } else if(imc > 30){//Podendo alterar para 24.9 <= imc && imc <= 30
        result = 'Obesidade extrema';
    }

    var h1 = document.getElementById('h1');
    var h2 = document.getElementById('h2');
}