function fizzBuzz () {
    console.log('Welcome to FizzBuzz!');
    const result = new Array(100)

    for (let i=0; i<result.length; i++) {
        let number = i+1;

        if (number % 3 ===0 && number % 5 ===0) {
            number = 'FizzBuzz';
        }
        
        else if (number % 3 === 0) {
            number = 'Fizz';
        }

        else if (number % 5 === 0){
            number = 'Buzz';
        }

        result[i] = number;
    }

    console.log(result);
};
fizzBuzz();
