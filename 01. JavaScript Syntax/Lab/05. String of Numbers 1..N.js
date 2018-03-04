function string(input){
    let concat = ''

    for (let i = 1; i <= Number(input); i++) {
       concat+=i
    }

    console.log(concat)
}

string('11')