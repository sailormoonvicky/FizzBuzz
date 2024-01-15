function fizzBuzz () {
    console.log('Welcome to FizzBuzz!');
    const result = new Array(10)

    for (let i=0; i<result.length; i++) {
        let number = i+1;

        if (number % 3 === 0) {
            number = 'Fizz';
        }
        result[i] = number;
    }

    console.log(result);
};
fizzBuzz();
