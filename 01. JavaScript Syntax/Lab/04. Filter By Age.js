function filter(minAge, personAName, personAAge, personBName, personBAge) {
   let personA = {name:personAName, age:personAAge}
   let personB = {name:personBName, age:personBAge}


    if(personA.age>=minAge){
        console.log(personA)
    }
    if(personB.age>=minAge){
        console.log(personB)
    }
}

filter(12, 'Ivan', 15, 'Asen', 9)