const person = {
    firstName: "edwin",
    lastName : "escorcia",
    id       : 18,
    fullName : function() {
    return this.firstName +" "+ this.lastName+ " "+this.id;
    }
};
function nombrecompleto(){
    document.getElementById('example').innerHTML = person.fullName ();
}
const silla = {
    numero: 1,
    color : "",
    altura    : "1 metro",
    fullName : function() {
    return this.numero + " " + this.color+ " " +this.altura;
    }
};
function todosilla(){
    document.getElementById('example').innerHTML = silla.fullName ();
}
const obj = {
    nombre:"edwin",
    edad: 18,
    cars:{
        car1:"ford",
        car2:"bmw",
        car3:"fiat"
    }
}
function modelocar(){
  //document.getElementById("example3").innerHTML = obj.cars.car1 + " " + obj.cars.car2 ;
  for(let i in obj) {
    if(i == "cars"){
        for(let j in obj[i]){
            alert("marca del carro es: "+obj[i][j])
        }
    }
}
}const obj2={
    mombre:"papo",
    edad: 18,
    cars:[
        {url:'', nombre:"ford", modelo:["fiesta","focus","mustang"]},
        {url:'', nombre:"bmw", modelo:["320","x3","X5"]},
        {url:'', nombre:"fiat", modelo:["500","panda"]},
    ]
}
