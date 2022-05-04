user={
    username: "Daniela",
    email: "danielavento@gmail.com",
    age:18,
    lastName: "Vento",
    phone:"56593119",
    school: {
        name: "Cepero Bonilla",
        typeSchool: "Middle Technic",
        estypendy: 128.00,
        director: {
            username:"Hortencia",
            age: 60,
            phone:55635457,
         }
    },
   class: [5, 7, 30, 40]
}

console.log(user.age)
console.log(user.lastName)
console.log(user.phone)
console.log(user.school.name)
console.log(user.school.director)
console.log(user.class[1])