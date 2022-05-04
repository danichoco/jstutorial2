function oldest(p1, p2){
    if(p1.age > p2.age){
        console.log("The oldest person is:" + p1.name);
    }
    else{
        console.log("The oldest person is:" + p2.name);
    }
}

persona1={
    name: "Maria",
    age: 20, 

}
persona2={
    name: "Pedro",   
    age: 30, 

}

oldest(persona1, persona2);